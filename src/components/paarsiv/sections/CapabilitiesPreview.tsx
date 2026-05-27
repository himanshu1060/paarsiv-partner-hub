import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { TEAL, NAVY } from "../theme";
import { SectionHeader } from "../SectionHeader";
import { ScrollReveal } from "../ScrollReveal";
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
        <div className="mt-12 flex justify-center">
          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 rounded-[10px] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:opacity-90"
            style={{ backgroundColor: TEAL }}
          >
            Explore All Solutions <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
