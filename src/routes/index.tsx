import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ShieldCheck,
  Users,
  BarChart3,
  Mail,
  Database,
  Sparkles,
  Plug,
  ShoppingBag,
  Gift,
  HeartPulse,
  Shirt,
  Gem,
  Factory,
  GraduationCap,
  Hotel,
  Briefcase,
  Sofa,
  Clock,
  UserCheck,
  FileLock2,
  Check,
  ArrowRight,
  Menu,
  X,
  Quote,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const LOGO_WHITE =
  "https://www.paarsiv.com/wp-content/uploads/2024/08/paarsiv-white-png-1.png";
const LOGO_DARK =
  "https://www.paarsiv.com/wp-content/uploads/2024/08/paarsiv-1.png";

const TEAL = "#1BCA9B";
const NAVY = "#0D1B2A";

/* ------------------------ helpers ------------------------ */

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const duration = 1400;
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - p, 3);
              setVal(Math.round(target * eased));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target]);
  return (
    <div ref={ref} className="text-5xl font-bold tracking-tight" style={{ color: TEAL }}>
      {val}
      {suffix}
    </div>
  );
}

/* ------------------------ nav ------------------------ */

const NAV_LINKS = [
  { label: "Solutions", href: "#solutions" },
  { label: "Projects", href: "#projects" },
  { label: "Our Team", href: "#team" },
  { label: "Industries", href: "#industries" },
  { label: "Contact", href: "#contact" },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? "bg-white/95 backdrop-blur shadow-sm" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center">
          <img src={LOGO_DARK} alt="Paarsiv" className="h-7 w-auto" />
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[#0D1B2A]/80 hover:text-[#0D1B2A] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            style={{ backgroundColor: TEAL }}
          >
            Talk to Us <ArrowRight className="h-4 w-4" />
          </a>
        </nav>
        <button
          className="lg:hidden p-2 text-[#0D1B2A]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-[#E5E7EB] bg-white">
          <div className="px-6 py-4 flex flex-col gap-3">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-[#0D1B2A] py-1.5"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center rounded-lg px-4 py-2.5 text-sm font-semibold text-white"
              style={{ backgroundColor: TEAL }}
            >
              Talk to Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ------------------------ hero ------------------------ */

function Hero() {
  return (
    <section
      id="top"
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden"
      style={{ backgroundColor: NAVY }}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(27,202,155,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(27,202,155,0.5) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-4xl">
          <div
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 mb-6"
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: TEAL }}
            />
            Salesforce Implementation Partner
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
            Transform Your Salesforce
            <span style={{ color: TEAL }}> Investment Into Results.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/70 max-w-3xl leading-relaxed">
            Paarsiv specialises in Salesforce Marketing Cloud, Sales Cloud, Data
            Cloud, and MCP implementations — with a team of 25+ certified
            professionals across 15+ active client projects.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: TEAL }}
            >
              View Our Work <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#team"
              className="inline-flex items-center gap-2 rounded-lg border border-white/25 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/5 transition-colors"
            >
              Meet The Team
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { v: 25, suffix: "+", label: "Certified Salesforce Professionals" },
            { v: 15, suffix: "+", label: "Active Projects" },
            { v: 8, suffix: "+ Yrs", label: "Combined Leadership Experience" },
            { v: 6, suffix: "+", label: "Salesforce Clouds Delivered" },
          ].map((s, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur"
            >
              <Counter target={s.v} suffix={s.suffix} />
              <div className="mt-2 text-sm text-white/65 leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------ section title ------------------------ */

function SectionHeader({
  eyebrow,
  title,
  subtitle,
  light,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <div
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] mb-4"
          style={{ color: TEAL }}
        >
          <span className="h-px w-8" style={{ backgroundColor: TEAL }} />
          {eyebrow}
        </div>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight ${
          light ? "text-white" : "text-[#0D1B2A]"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base md:text-lg leading-relaxed ${
            light ? "text-white/70" : "text-[#6B7280]"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* ------------------------ why ------------------------ */

function Why() {
  const items = [
    {
      icon: ShieldCheck,
      title: "Proven Delivery, Not Just Credentials",
      body:
        "We've shipped 15+ live implementations across SFMC, Sales Cloud, Data Cloud, and MCP. Our clients go live on time.",
    },
    {
      icon: Users,
      title: "A Full-Stack Team, Not Freelancers",
      body:
        "25+ in-house professionals across development, QA, strategy, and business analysis. Every project has dedicated ownership.",
    },
    {
      icon: BarChart3,
      title: "We Show Impact, Not Just Activity",
      body:
        "Every engagement is measured. ROI tracking, campaign analytics, delivery accuracy — we report what matters to your business.",
    },
  ];
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Why Paarsiv" title="Why Clients Choose Paarsiv" />
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <div
                key={i}
                className="group rounded-xl border border-[#E5E7EB] bg-white p-8 transition-all hover:border-[#1BCA9B] hover:shadow-[0_8px_30px_rgba(13,27,42,0.06)]"
              >
                <div
                  className="inline-flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ backgroundColor: "rgba(27,202,155,0.1)", color: TEAL }}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-[#0D1B2A]">{it.title}</h3>
                <p className="mt-3 text-[#6B7280] leading-relaxed">{it.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------ capabilities ------------------------ */

function Capabilities() {
  const cards = [
    {
      icon: Mail,
      name: "Salesforce Marketing Cloud (SFMC)",
      caps: [
        "Automation Studio · Journey Builder",
        "CloudPages & SSJS · Content Builder",
        "Email/SMS/WhatsApp Campaigns · IP Warmup",
        "CleverTap & Meta WABA Integration",
        "ENS Event Tracking · Campaign ROI Reporting",
      ],
      tag: "10+ Projects",
    },
    {
      icon: Database,
      name: "Sales Cloud & Data Cloud",
      caps: [
        "Custom Objects & Flows · Quote Templates",
        "Role Hierarchy · Google Meet Integration",
        "Multi-country QA & Testing",
        "Data Cloud Implementation",
      ],
      tag: "5+ Projects",
    },
    {
      icon: Sparkles,
      name: "MCP & Personalization",
      caps: [
        "Sitemap & Web Templates",
        "Einstein Recipe Setup · ETL Catalog Sync",
        "Content Zones · Campaign Setup",
        "Frontend UI Development",
      ],
      tag: "5+ Projects",
    },
    {
      icon: Plug,
      name: "Integrations & Middleware",
      caps: [
        "AWS Middleware · WhatsApp Meta WABA",
        "CleverTap API · Webhook Reporting",
        "ENS Events · CRM Template Sync",
        "JSON Data Transformation",
      ],
      tag: "Cross-project",
    },
  ];
  return (
    <section id="solutions" className="py-20 lg:py-28" style={{ backgroundColor: "#F8F9FA" }}>
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Capabilities" title="Our Salesforce Practice Areas" />
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <div
                key={i}
                className="group rounded-xl border border-[#E5E7EB] bg-white p-8 transition-all hover:border-[#1BCA9B]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="inline-flex h-11 w-11 items-center justify-center rounded-lg"
                      style={{ backgroundColor: NAVY, color: TEAL }}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <span
                      className="rounded-lg px-3 py-1.5 text-xs font-semibold text-white"
                      style={{ backgroundColor: TEAL }}
                    >
                      {c.name}
                    </span>
                  </div>
                </div>
                <ul className="mt-6 space-y-2.5">
                  {c.caps.map((cap, j) => (
                    <li key={j} className="flex gap-2.5 text-sm text-[#0D1B2A]/85">
                      <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: TEAL }} />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-5 border-t border-[#E5E7EB]">
                  <span className="inline-flex items-center rounded-lg bg-[#0D1B2A]/5 px-3 py-1 text-xs font-semibold text-[#0D1B2A]">
                    {c.tag}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------ projects ------------------------ */

const PROJECTS = [
  {
    name: "FnP",
    industry: "Retail & Gifting",
    clouds: ["SFMC", "AWS", "CleverTap", "WhatsApp Meta"],
    impact: [
      "Automated WhatsApp click tracking with CloudPage-based solution",
      "Integrated CleverTap ↔ SFMC via AWS middleware APIs",
      "Improved campaign analytics accuracy and reporting visibility",
    ],
  },
  {
    name: "Fabel",
    industry: "E-commerce",
    clouds: ["SFMC", "Journey Builder", "IP Warmup"],
    impact: [
      "Executed structured IP warmup with domain-segmented datasets",
      "Improved email deliverability and inbox placement",
      "Stabilised campaign monitoring and reporting workflows",
    ],
  },
  {
    name: "Cobb Italy",
    industry: "Retail (International)",
    clouds: ["SFMC", "SMS", "WhatsApp", "Tableau"],
    impact: [
      "Built multi-DE SQL architecture for multi-channel attribution",
      "Delivered accurate ROI reporting for SMS and WhatsApp campaigns",
      "Implemented revenue attribution and cost-per-channel logic",
    ],
  },
  {
    name: "Mount Sinai",
    industry: "Healthcare / Non-Profit",
    clouds: ["SFMC", "CloudPages", "Content Builder"],
    impact: [
      "Delivered HIPAA & CAN-SPAM compliant email templates",
      "Built branded preference centre with compliant unsubscribe routing",
      "Optimised responsive templates across all major email clients",
    ],
  },
  {
    name: "Ramraj",
    industry: "Clothing & Fashion",
    clouds: ["SFMC", "ENS", "SMS", "WhatsApp"],
    impact: [
      "Built real-time WhatsApp → SMS fallback using ENS event triggers",
      "Reduced communication failures with automated delivery recovery",
      "Increased overall message delivery success rate",
    ],
  },
  {
    name: "MOM System",
    industry: "Internal Operations",
    clouds: ["SFMC", "CloudPages", "Data Extensions"],
    impact: [
      "Replaced manual task tracking with form-based live dashboard system",
      "Enabled real-time EOD status updates with audit trail",
      "Improved operational visibility across teams",
    ],
  },
  {
    name: "KLM",
    industry: "Jewellery & Fashion",
    clouds: ["SFMC", "APIs", "Webhooks", "ENS"],
    impact: [
      "Exposed SFMC templates via API for seamless CRM visibility",
      "Built JSON-based real-time WhatsApp reporting framework",
      "Integrated ENS for live delivery event tracking",
    ],
  },
  {
    name: "Goel Power",
    industry: "Manufacturing",
    clouds: ["Sales Cloud", "Data Cloud"],
    impact: [
      "Configured Salesforce Flows and role hierarchy from scratch",
      "Delivered custom quote templates and object architecture",
      "Improved operational automation and user access governance",
    ],
  },
  {
    name: "Monte Carlo",
    industry: "Fashion",
    clouds: ["Sales Cloud", "Tableau"],
    impact: [
      "Built live Tableau dashboards for sales tracking",
      "Optimised Salesforce Flows for auto case assignment",
      "Added popup validation logic improving UI accuracy",
    ],
  },
];

function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-28" style={{ backgroundColor: NAVY }}>
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Project Impact"
          title="Delivered. Measured. Trusted."
          subtitle="A selection of client engagements across industries."
          light
        />
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <article
              key={i}
              className="group rounded-xl border border-white/10 bg-white/[0.03] p-6 transition-all hover:border-[#1BCA9B] hover:bg-white/[0.05]"
            >
              <span
                className="inline-flex items-center rounded-lg px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider"
                style={{ backgroundColor: "rgba(27,202,155,0.12)", color: TEAL }}
              >
                {p.industry}
              </span>
              <h3 className="mt-4 text-xl font-bold text-white">{p.name}</h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.clouds.map((c) => (
                  <span
                    key={c}
                    className="rounded-md border border-white/15 bg-white/[0.04] px-2 py-0.5 text-[11px] font-medium text-white/75"
                  >
                    {c}
                  </span>
                ))}
              </div>
              <ul className="mt-5 space-y-2.5">
                {p.impact.map((m, j) => (
                  <li key={j} className="flex gap-2.5 text-sm text-white/75 leading-relaxed">
                    <span
                      className="mt-2 h-1 w-1 flex-shrink-0 rounded-full"
                      style={{ backgroundColor: TEAL }}
                    />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border-2 px-6 py-3 text-sm font-semibold transition-all hover:bg-[#1BCA9B] hover:text-white"
            style={{ borderColor: TEAL, color: TEAL }}
          >
            View All Projects <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------ industries ------------------------ */

const INDUSTRIES = [
  { icon: ShoppingBag, label: "Retail & E-commerce" },
  { icon: Gift, label: "Gifting" },
  { icon: HeartPulse, label: "Healthcare / Non-Profit" },
  { icon: Shirt, label: "Fashion & Clothing" },
  { icon: Gem, label: "Jewellery" },
  { icon: Factory, label: "Manufacturing" },
  { icon: GraduationCap, label: "Education" },
  { icon: Hotel, label: "Hotels & Hospitality" },
  { icon: Briefcase, label: "IT Services / B2B" },
  { icon: Sofa, label: "Interior Décor" },
];

function Industries() {
  return (
    <section id="industries" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Industries" title="Industries We've Served" />
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {INDUSTRIES.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <div
                key={i}
                className="flex flex-col items-center justify-center text-center rounded-xl border border-[#E5E7EB] bg-white p-6 transition-all hover:border-[#1BCA9B] hover:-translate-y-0.5"
              >
                <Icon className="h-8 w-8" style={{ color: TEAL }} />
                <div className="mt-3 text-sm font-medium text-[#0D1B2A]">{ind.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------ team ------------------------ */

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
  return (
    <div
      className="flex h-14 w-14 items-center justify-center rounded-full text-base font-bold text-white"
      style={{ backgroundColor: TEAL }}
    >
      {initials}
    </div>
  );
}

function PersonCard({
  name,
  title,
  yrs,
}: {
  name: string;
  title: string;
  yrs: string;
}) {
  return (
    <div className="rounded-xl border border-[#E5E7EB] bg-white p-6 transition-all hover:border-[#1BCA9B]">
      <div className="flex items-center gap-4">
        <Avatar name={name} />
        <div className="min-w-0">
          <div className="font-bold text-[#0D1B2A]">{name}</div>
          <div className="text-sm text-[#6B7280]">{title}</div>
        </div>
      </div>
      <div className="mt-4">
        <span
          className="inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-semibold"
          style={{ backgroundColor: "rgba(27,202,155,0.12)", color: "#0D7A5C" }}
        >
          {yrs}
        </span>
      </div>
    </div>
  );
}

function Team() {
  const groups = [
    {
      title: "Salesforce Marketing Cloud",
      headline: "8 SFMC Specialists",
      detail: "Senior Developers: 4+ yrs avg · Developers: 3+ yrs avg",
    },
    {
      title: "MCP & Personalization",
      headline: "6 MCP Specialists",
      detail: "Senior Developers: 3+ yrs avg · Web Developers: 1+ yr avg",
    },
    {
      title: "Sales & Data Cloud",
      headline: "2 Specialists",
      detail: "Senior Developers: 3+ yrs avg",
    },
    {
      title: "Business & Support",
      headline: "Business Analyst · HR Specialist",
      detail: "Supporting every delivery",
    },
  ];
  return (
    <section id="team" className="py-20 lg:py-28" style={{ backgroundColor: "#F8F9FA" }}>
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Our Team"
          title="Our Rockstars"
          subtitle="A 25+ strong team built around Salesforce excellence."
        />

        <div className="mt-14">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0D1B2A]/70">
            Leadership Team
            <span className="ml-2 font-normal normal-case tracking-normal text-[#6B7280]">
              · Vision & Strategy
            </span>
          </h3>
          <div className="mt-5 grid md:grid-cols-3 gap-5">
            <PersonCard name="Shubham Tiwari" title="CEO" yrs="8+ Years" />
            <PersonCard
              name="Bhavin Jain"
              title="Senior Manager, SFMC Practice Lead"
              yrs="5+ Years"
            />
            <PersonCard
              name="Prashant Gupta"
              title="Senior Manager, Sales & Data Cloud Practice"
              yrs="7+ Years"
            />
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0D1B2A]/70">
            Sales & Client Management
          </h3>
          <div className="mt-5 grid md:grid-cols-2 gap-5">
            <PersonCard
              name="Rishabh Jain"
              title="Senior Sales Manager"
              yrs="5+ Years"
            />
            <PersonCard
              name="Abhishek Singh Rajput"
              title="Senior Sales Manager"
              yrs="5+ Years"
            />
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0D1B2A]/70">
            Practice Areas
          </h3>
          <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {groups.map((g, i) => (
              <div
                key={i}
                className="rounded-xl border border-[#E5E7EB] bg-white p-6 transition-all hover:border-[#1BCA9B]"
              >
                <div className="text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
                  {g.title}
                </div>
                <div className="mt-3 text-xl font-bold text-[#0D1B2A]">
                  {g.headline}
                </div>
                <div className="mt-3 text-sm text-[#6B7280] leading-relaxed">
                  {g.detail}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <div
              className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold text-white"
              style={{ backgroundColor: NAVY }}
            >
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: TEAL }} />
              25+ professionals across 4 practice areas
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------ testimonials ------------------------ */

function Testimonials() {
  const quotes = [
    {
      role: "Marketing Director, Retail",
      body:
        "Paarsiv didn't just set up our SFMC — they built us a campaign engine. ROI tracking, WhatsApp flows, automated reporting. It all just works.",
    },
    {
      role: "CTO, E-commerce",
      body:
        "Their IP warmup execution saved us from a blacklist situation. They knew exactly what to do and when. Deliverability went from 60% to 95%+.",
    },
    {
      role: "Head of Digital, Healthcare",
      body:
        "HIPAA compliance + responsive email design + preference centre — all in one engagement. The quality was exceptional.",
    },
  ];
  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: NAVY }}>
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Social Proof" title="What Our Clients Experience" light />
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-7 transition-all hover:border-[#1BCA9B]"
            >
              <Quote className="h-7 w-7" style={{ color: TEAL }} />
              <p className="mt-4 text-white/85 leading-relaxed">"{q.body}"</p>
              <div className="mt-6 pt-5 border-t border-white/10 text-sm font-semibold text-white">
                {q.role}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-white/50">
          Testimonials are representative of client outcomes.
        </p>
      </div>
    </section>
  );
}

/* ------------------------ contact ------------------------ */

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const trust = [
    { icon: Clock, label: "Response within 24 hours" },
    { icon: UserCheck, label: "Dedicated AE liaison" },
    { icon: FileLock2, label: "NDA available on request" },
  ];
  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Contact"
          title="Ready to Co-Sell with Paarsiv?"
          subtitle="We work directly with Salesforce AEs to deliver implementation excellence for your clients. Let's talk."
        />
        <div className="mt-14 grid lg:grid-cols-5 gap-10">
          <form
            className="lg:col-span-3 rounded-xl border border-[#E5E7EB] bg-white p-8"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            {submitted ? (
              <div className="py-10 text-center">
                <div
                  className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full"
                  style={{ backgroundColor: TEAL }}
                >
                  <Check className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-[#0D1B2A]">
                  Thanks — we'll be in touch.
                </h3>
                <p className="mt-2 text-[#6B7280]">
                  A Paarsiv lead will respond within 24 hours.
                </p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Name" name="name" required />
                <Field label="Company" name="company" required />
                <div className="sm:col-span-2">
                  <Field label="Email" name="email" type="email" required />
                </div>
                <label className="sm:col-span-2 inline-flex items-center gap-2.5 text-sm text-[#0D1B2A]">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="h-4 w-4 rounded border-[#E5E7EB] accent-[#1BCA9B]"
                  />
                  I'm a Salesforce AE
                </label>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-[#0D1B2A] mb-1.5">
                    Message <span className="text-[#6B7280] font-normal">(optional)</span>
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full rounded-lg border border-[#E5E7EB] bg-white px-3.5 py-2.5 text-sm text-[#0D1B2A] outline-none focus:border-[#1BCA9B] focus:ring-2 focus:ring-[#1BCA9B]/20"
                  />
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                    style={{ backgroundColor: TEAL }}
                  >
                    Let's Partner <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}
          </form>

          <div className="lg:col-span-2 space-y-4">
            {trust.map((t, i) => {
              const Icon = t.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-4 rounded-xl border border-[#E5E7EB] bg-white p-5"
                >
                  <div
                    className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg"
                    style={{ backgroundColor: "rgba(27,202,155,0.12)", color: TEAL }}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="font-semibold text-[#0D1B2A]">{t.label}</div>
                </div>
              );
            })}
            <div
              className="rounded-xl p-5 text-sm text-white/80"
              style={{ backgroundColor: NAVY }}
            >
              Prefer email?{" "}
              <a
                href="mailto:hello@paarsiv.com"
                className="font-semibold underline decoration-[#1BCA9B] underline-offset-4"
                style={{ color: TEAL }}
              >
                hello@paarsiv.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-[#0D1B2A] mb-1.5">
        {label}
        {required && <span style={{ color: TEAL }}> *</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-[#E5E7EB] bg-white px-3.5 py-2.5 text-sm text-[#0D1B2A] outline-none focus:border-[#1BCA9B] focus:ring-2 focus:ring-[#1BCA9B]/20"
      />
    </div>
  );
}

/* ------------------------ footer ------------------------ */

function Footer() {
  return (
    <footer style={{ backgroundColor: NAVY }} className="relative">
      <div className="h-px w-full" style={{ backgroundColor: TEAL }} />
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <img src={LOGO_WHITE} alt="Paarsiv" className="h-8 w-auto" />
            <p className="mt-4 text-white/65 max-w-sm">
              Your Salesforce Delivery Partner.
            </p>
          </div>
          <div className="md:justify-self-end">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50 mb-4">
              Quick Links
            </div>
            <ul className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm text-white/80">
              <li><a href="#solutions" className="hover:text-[#1BCA9B]">Solutions</a></li>
              <li><a href="#projects" className="hover:text-[#1BCA9B]">Projects</a></li>
              <li><a href="#team" className="hover:text-[#1BCA9B]">Team</a></li>
              <li><a href="#contact" className="hover:text-[#1BCA9B]">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/10 text-xs text-white/50">
          © 2025 Paarsiv. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

/* ------------------------ page ------------------------ */

function Index() {
  return (
    <div className="min-h-screen bg-white text-[#0D1B2A]">
      <Nav />
      <main>
        <Hero />
        <Why />
        <Capabilities />
        <Projects />
        <Industries />
        <Team />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}