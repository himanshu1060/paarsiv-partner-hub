import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { TEAL, NAVY } from "../theme";
import { SectionHeader } from "../SectionHeader";
import { ScrollReveal } from "../ScrollReveal";

const OUTCOME_CHIPS = [
  "60% → 95% Deliverability",
  "HIPAA-Compliant Build",
  "Full Campaign Engine",
];

const AVATARS = [
  { initials: "MD", bg: "#1A5276" },
  { initials: "CTO", bg: "#117A65" },
  { initials: "HD", bg: "#6D214F" },
] as const;
import { CAPABILITIES } from "@/data/capabilities";

export function CapabilitiesPreview() {
  const preview = CAPABILITIES.slice(0, 4);
  return (
    <section className="py-24 lg:py-32" style={{ background: "#F8F9FA" }}>
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Practice Areas"
            title="Our Salesforce Practice Areas"
            subtitle="Explore what we build across 6+ Salesforce clouds."
          />
        </ScrollReveal>
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {preview.map((c, i) => {
            const Icon = c.icon;
            return (
              <ScrollReveal key={i} delay={i * 90}>
                <div
                  className="group h-full rounded-2xl border border-[#E5E7EB] bg-white p-7 transition-all duration-300"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = TEAL;
                    e.currentTarget.style.transform = "scale(1.01)";
                    e.currentTarget.style.boxShadow = "0 8px 40px rgba(27,202,155,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#E5E7EB";
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span
                      className="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white"
                      style={{ background: TEAL }}
                    >
                      {c.name}
                    </span>
                    <div
                      className="inline-flex h-11 w-11 items-center justify-center rounded-xl"
                      style={{ background: NAVY, color: TEAL }}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <ul className="mt-5 space-y-2.5">
                    {c.capabilities.slice(0, 4).map((cap, j) => (
                      <li
                        key={j}
                        className="flex gap-2.5 text-sm text-[#0D1B2A]/85"
                      >
                        <Check
                          className="h-4 w-4 mt-0.5 flex-shrink-0"
                          style={{ color: TEAL }}
                        />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 pt-4 border-t border-[#E5E7EB] flex justify-end">
                    <span
                      className="inline-flex items-center rounded-lg bg-[#0D1B2A]/5 px-2.5 py-1 text-[11px] font-semibold text-[#0D1B2A]"
                    >
                      {c.tag}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
        {/* Testimonial CTA — replaces plain nav button; social proof drives higher click-through */}
        <div className="mt-14 flex justify-center">
          <div
            className="w-full max-w-md rounded-2xl px-8 py-8 text-center"
            style={{
              background: NAVY,
              border: "1px solid rgba(27,202,155,0.18)",
              boxShadow: "0 20px 60px rgba(13,27,42,0.18)",
            }}
          >
            {/* Stacked avatars */}
            <div className="flex justify-center mb-5">
              <div className="flex items-center -space-x-2.5">
                {AVATARS.map(({ initials, bg }, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center rounded-full border-2 text-white font-bold text-[11px]"
                    style={{
                      width: 44,
                      height: 44,
                      background: bg,
                      borderColor: NAVY,
                      zIndex: 3 - i,
                    }}
                  >
                    {initials}
                  </div>
                ))}
              </div>
            </div>

            <p
              className="text-white font-bold text-[22px] leading-snug"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              What happened when they<br />partnered with Paarsiv?
            </p>
            <p className="mt-2 text-white/45 text-sm">
              3 clients. Real outcomes. No fluff.
            </p>

            {/* Outcome chips */}
            <div className="mt-5 flex flex-wrap justify-center gap-2">
              {OUTCOME_CHIPS.map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold"
                  style={{
                    background: "rgba(27,202,155,0.1)",
                    border: "1px solid rgba(27,202,155,0.22)",
                    color: TEAL,
                  }}
                >
                  ✓ {chip}
                </span>
              ))}
            </div>

            <Link
              to="/testimonials"
              className="mt-7 flex items-center justify-center gap-2 rounded-xl w-full py-4 text-base font-bold text-white transition-all hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: TEAL }}
            >
              Read Their Stories <ArrowRight style={{ width: 18, height: 18 }} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
