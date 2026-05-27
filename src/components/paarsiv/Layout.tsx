import { useEffect, useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, Menu, X, Linkedin, Mail } from "lucide-react";
import { LOGO_DARK, LOGO_WHITE, TEAL, NAVY } from "./theme";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Our Team", to: "/team" },
  { label: "Industries", to: "/industries" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Contact", to: "/contact" },
] as const;

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();
  const pathname = location.pathname;
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isDarkBg = isHome || scrolled;
  const logo = isDarkBg ? LOGO_WHITE : LOGO_DARK;
  const navTextClass = isDarkBg
    ? "text-white/85 hover:text-white"
    : "text-[#0D1B2A]/80 hover:text-[#0D1B2A]";

  return (
    <>
      <header
        className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
        style={{
          height: 72,
          background: scrolled
            ? "rgba(13, 27, 42, 0.92)"
            : isHome
              ? "rgba(13, 27, 42, 0.0)"
              : "rgba(255, 255, 255, 0.98)",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(27, 202, 155, 0.2)"
            : isHome
              ? "1px solid transparent"
              : "1px solid #E5E7EB",
          boxShadow: scrolled ? "0 4px 24px rgba(0, 0, 0, 0.3)" : "none",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 h-full flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Paarsiv" className="h-7 w-auto" />
          </Link>
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((l) => {
              const active =
                pathname === l.to || pathname.startsWith(l.to + "/");
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`relative text-sm font-medium transition-colors ${
                    active ? "" : navTextClass
                  }`}
                  style={active ? { color: TEAL } : undefined}
                >
                  {l.label}
                  {active && (
                    <span
                      className="absolute -bottom-2 left-0 right-0 h-0.5 rounded-full"
                      style={{ background: TEAL }}
                    />
                  )}
                </Link>
              );
            })}
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 rounded-[10px] px-4 py-2.5 text-sm font-semibold text-white transition-all hover:opacity-90 hover:-translate-y-px"
              style={{ backgroundColor: TEAL }}
            >
              Talk to Us <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </nav>
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isDarkBg
                ? "text-white hover:bg-white/10"
                : "text-[#0D1B2A] hover:bg-black/5"
            }`}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile: backdrop */}
      {open && (
        <div
          className="prs-overlay-in fixed inset-0 z-40 lg:hidden"
          style={{
            background: "rgba(0, 0, 0, 0.55)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
          }}
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile: slide-in drawer */}
      {open && (
        <div
          className="prs-menu-in fixed top-0 right-0 z-50 h-full w-[300px] lg:hidden flex flex-col"
          style={{
            background: NAVY,
            borderLeft: "1px solid rgba(27,202,155,0.15)",
            boxShadow: "-12px 0 48px rgba(0,0,0,0.45)",
          }}
        >
          {/* Drawer header */}
          <div
            className="flex items-center justify-between px-6 flex-shrink-0"
            style={{ height: 72, borderBottom: "1px solid rgba(255,255,255,0.08)" }}
          >
            <img src={LOGO_WHITE} alt="Paarsiv" className="h-6 w-auto" />
            <button
              onClick={() => setOpen(false)}
              className="p-1.5 rounded-lg text-white/60 hover:text-white hover:bg-white/8 transition-colors"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex-1 overflow-y-auto px-6 py-6 flex flex-col">
            {NAV_LINKS.map((l, idx) => {
              const active =
                pathname === l.to || pathname.startsWith(l.to + "/");
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className="prs-nav-stagger flex items-center justify-between py-4 text-[15px] font-medium transition-colors"
                  style={{
                    color: active ? TEAL : "rgba(255,255,255,0.85)",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                    animationDelay: `${60 + idx * 55}ms`,
                  }}
                >
                  {l.label}
                  {active && (
                    <span
                      className="h-1.5 w-1.5 rounded-full flex-shrink-0"
                      style={{ background: TEAL }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA + tagline */}
          <div className="px-6 pb-8 flex-shrink-0">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="flex justify-center items-center gap-2 rounded-[10px] px-4 py-3.5 text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: TEAL }}
            >
              Talk to Us <ArrowRight className="h-4 w-4" />
            </Link>
            <p className="mt-4 text-center text-[11px] text-white/25 tracking-wider uppercase">
              Salesforce Implementation Partner
            </p>
          </div>
        </div>
      )}
    </>
  );
}

function Footer() {
  return (
    <footer style={{ backgroundColor: NAVY }} className="relative">
      <div className="h-[3px] w-full" style={{ backgroundColor: TEAL }} />
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div>
            <img src={LOGO_WHITE} alt="Paarsiv" className="h-8 w-auto" />
            <p className="mt-5 text-white/60 max-w-sm text-sm leading-relaxed">
              Your Salesforce Delivery Partner. Trusted by teams across 10+
              industries.
            </p>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40 mb-4">
              Quick Links
            </div>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm text-white/70">
              <li>
                <Link
                  to="/solutions"
                  className="hover:text-[#1BCA9B] transition-colors"
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="hover:text-[#1BCA9B] transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="hover:text-[#1BCA9B] transition-colors"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  to="/industries"
                  className="hover:text-[#1BCA9B] transition-colors"
                >
                  Industries
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#1BCA9B] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40 mb-4">
              Contact
            </div>
            <a
              href="mailto:hello@paarsiv.com"
              className="inline-flex items-center gap-2 text-sm text-white/75 hover:text-[#1BCA9B] transition-colors"
            >
              <Mail className="h-4 w-4" />
              hello@paarsiv.com
            </a>
            <div className="mt-4">
              <a
                href="https://linkedin.com/company/paarsiv"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold text-white transition-all hover:opacity-90"
                style={{ background: "#0A66C2" }}
              >
                <Linkedin className="h-3.5 w-3.5" fill="currentColor" />
                Follow on LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/8 text-xs text-white/35 flex flex-wrap justify-between gap-3">
          <span>© 2026 Paarsiv. All rights reserved.</span>
          <span>Salesforce Implementation Partner</span>
        </div>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  const { location } = useRouterState();
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }
  }, [location.pathname]);

  return (
    <div
      className="min-h-screen bg-white text-[#0D1B2A] flex flex-col"
      style={{
        fontFamily: "'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif",
      }}
    >
      <Navbar />
      <main className="flex-1">
        <div key={location.pathname} className="prs-page-enter">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
