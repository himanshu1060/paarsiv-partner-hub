import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageHero } from "@/components/paarsiv/sections/PageHero";
import { SectionHeader } from "@/components/paarsiv/SectionHeader";
import { ScrollReveal } from "@/components/paarsiv/ScrollReveal";
import { CAPABILITIES, PROCESS_STEPS } from "@/data/capabilities";
import { TEAL, NAVY } from "@/components/paarsiv/theme";

export const Route = createFileRoute("/solutions")({
  component: SolutionsPage,
  head: () => ({
    meta: [
      { title: "Solutions — Paarsiv" },
      {
        name: "description",
        content:
          "Salesforce practice areas: SFMC, Sales Cloud, Data Cloud, MCP, Tableau, Integrations. Six clouds. One team. End-to-end delivery.",
      },
    ],
  }),
});

function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Salesforce Practice Areas"
        title="Everything We Build."
        subtitle="Six clouds. One team. End-to-end delivery."
      />

      <section className="py-24 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Capabilities"
              title="Our Salesforce Practice Areas"
            />
          </ScrollReveal>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map((c, i) => {
              const Icon = c.icon;
              return (
                <ScrollReveal key={c.name} delay={(i % 3) * 90}>
                  <div
                    className="group relative h-full rounded-2xl border border-[#E5E7EB] bg-white p-7 transition-all duration-300"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = TEAL;
                      e.currentTarget.style.transform = "scale(1.02)";
                      e.currentTarget.style.boxShadow = "0 8px 40px rgba(27,202,155,0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "#E5E7EB";
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span
                        className="inline-flex items-center rounded-lg px-2.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white"
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
                    <ul className="mt-5 space-y-2.5 min-h-[160px]">
                      {c.capabilities.map((cap, j) => (
                        <li
                          key={j}
                          className="flex gap-2.5 text-sm text-[#0D1B2A]/85"
                        >
                          <span
                            className="mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0"
                            style={{ background: TEAL }}
                          />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 pt-4 border-t border-[#E5E7EB] flex justify-end">
                      <span
                        className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-[11px] font-semibold"
                        style={{
                          background: "rgba(27,202,155,0.1)",
                          color: "#0D7A5C",
                        }}
                      >
                        <Check className="h-3 w-3" />
                        {c.tag}
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process timeline */}
      <section className="py-24 lg:py-28" style={{ background: "#F8F9FA" }}>
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Delivery"
              title="How We Deliver"
              subtitle="Predictable, sprint-based execution with full AE visibility."
            />
          </ScrollReveal>

          <div className="mt-14">
            {/* Desktop horizontal timeline */}
            <div className="hidden lg:grid grid-cols-5 gap-5 relative">
              <div
                className="absolute top-6 left-[10%] right-[10%] h-0.5"
                style={{
                  background: `linear-gradient(to right, ${TEAL}, ${TEAL})`,
                  opacity: 0.3,
                }}
              />
              {PROCESS_STEPS.map((s, i) => (
                <ScrollReveal key={i} delay={i * 120}>
                  <div className="relative text-center">
                    <div
                      className="relative z-10 mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full font-bold text-white"
                      style={{ background: TEAL, boxShadow: "0 0 0 6px #F8F9FA" }}
                    >
                      {i + 1}
                    </div>
                    <div className="mt-5 font-semibold text-[#0D1B2A]">
                      {s.title}
                    </div>
                    <div className="mt-2 text-sm text-[#6B7280] leading-relaxed">
                      {s.detail}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Mobile vertical */}
            <div className="lg:hidden space-y-6">
              {PROCESS_STEPS.map((s, i) => (
                <ScrollReveal key={i} delay={i * 80}>
                  <div className="flex gap-4">
                    <div
                      className="flex-shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-full font-bold text-white"
                      style={{ background: TEAL }}
                    >
                      {i + 1}
                    </div>
                    <div>
                      <div className="font-semibold text-[#0D1B2A]">{s.title}</div>
                      <div className="mt-1 text-sm text-[#6B7280]">{s.detail}</div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
