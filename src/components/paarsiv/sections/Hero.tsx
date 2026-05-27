import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown } from "lucide-react";
import { NAVY, TEAL } from "../theme";
import { Counter } from "../Counter";
import { ScrollReveal } from "../ScrollReveal";

const STATS = [
  { v: 25, suffix: "+", label: "Certified Salesforce Professionals" },
  { v: 15, suffix: "+", label: "Active Projects" },
  { v: 8, suffix: "+", label: "Yrs Combined Leadership Experience" },
  { v: 6, suffix: "+", label: "Salesforce Clouds Delivered" },
];

function ParticleField() {
  const dots = Array.from({ length: 28 }, (_, i) => i);
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
      {dots.map((i) => {
        const top = (i * 37) % 100;
        const left = (i * 53) % 100;
        const dur = 8 + ((i * 7) % 14);
        const delay = (i % 7) * 0.6;
        const size = 2 + (i % 3);
        return (
          <span
            key={i}
            className="absolute rounded-full prs-float"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              width: size,
              height: size,
              background: TEAL,
              opacity: 0.18,
              animationDuration: `${dur}s`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(27,202,155,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(27,202,155,0.4) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          opacity: 0.05,
        }}
      />
      <div
        className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: 700,
          height: 480,
          background:
            "radial-gradient(ellipse at center, rgba(27,202,155,0.13) 0%, transparent 68%)",
          filter: "blur(1px)",
        }}
      />
    </div>
  );
}

export function Hero() {
  const handleScroll = () => {
    window.scrollBy({ top: window.innerHeight * 0.85, behavior: "smooth" });
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundColor: NAVY,
        minHeight: "100vh",
        paddingTop: "clamp(100px, 14vh, 160px)",
        paddingBottom: "clamp(32px, 4vh, 56px)",
      }}
    >
      <ParticleField />
      <div className="relative mx-auto max-w-7xl px-6 flex flex-col" style={{ minHeight: "inherit" }}>
        {/* Centered content */}
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <div
              className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] mb-6"
              style={{
                borderColor: "rgba(27,202,155,0.35)",
                color: TEAL,
                background: "rgba(27,202,155,0.06)",
              }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: TEAL }}
              />
              Salesforce Implementation Partner
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <h1
              className="text-4xl md:text-6xl lg:text-[68px] font-bold text-white leading-[1.05] tracking-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Your Clients Deserve a Salesforce Partner Who Delivers.
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <p className="mt-5 text-base md:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
              Paarsiv specialises in Salesforce Marketing Cloud, Sales Cloud,
              Data Cloud, and MCP implementations — with a team of 25+ certified
              professionals across 15+ active client projects.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={240}>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-[10px] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:opacity-90 hover:-translate-y-0.5"
                style={{ backgroundColor: TEAL }}
              >
                View Our Work <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/team"
                className="inline-flex items-center gap-2 rounded-[10px] border border-white/25 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/8 hover:border-white/40 transition-all"
              >
                Meet The Team
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Stats — premium top-border cards */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((s, i) => (
            <ScrollReveal key={i} delay={i * 90}>
              <div
                className="rounded-2xl px-6 py-6 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "linear-gradient(160deg, #162B3E 0%, #112236 100%)",
                  borderTop: `3px solid ${TEAL}`,
                  boxShadow: "0 4px 28px rgba(0,0,0,0.25)",
                }}
              >
                <Counter target={s.v} suffix={s.suffix} />
                <div className="mt-1.5 text-sm text-white/65 leading-snug">
                  {s.label}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Scroll invitation — prominent, animated, clickable */}
        <ScrollReveal delay={420}>
          <button
            onClick={handleScroll}
            aria-label="Scroll down"
            className="mt-10 mx-auto flex flex-col items-center gap-2 group cursor-pointer"
            style={{ background: "none", border: "none" }}
          >
            <span
              className="text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors group-hover:text-white"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              See who trusts us
            </span>
            {/* Animated chevrons — staggered bounce draws the eye down */}
            <span className="flex flex-col items-center" aria-hidden>
              <ChevronDown
                className="h-4 w-4 prs-chevron-1"
                style={{ color: TEAL, opacity: 0.9 }}
              />
              <ChevronDown
                className="h-4 w-4 -mt-2 prs-chevron-2"
                style={{ color: TEAL, opacity: 0.5 }}
              />
            </span>
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
}
