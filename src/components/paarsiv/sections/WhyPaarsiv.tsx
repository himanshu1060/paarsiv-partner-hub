import { ShieldCheck, Users, BarChart3 } from "lucide-react";
import { TEAL } from "../theme";
import { SectionHeader } from "../SectionHeader";
import { ScrollReveal } from "../ScrollReveal";

const ITEMS = [
  {
    icon: ShieldCheck,
    title: "Proven Delivery, Not Just Credentials",
    body: "We've shipped 15+ live implementations across SFMC, Sales Cloud, Data Cloud, and MCP. Our clients go live on time.",
  },
  {
    icon: Users,
    title: "A Full-Stack Team, Not Freelancers",
    body: "25+ in-house professionals across development, QA, strategy, and business analysis. Every project has dedicated ownership.",
  },
  {
    icon: BarChart3,
    title: "We Show Impact, Not Just Activity",
    body: "Every engagement is measured. ROI tracking, campaign analytics, delivery accuracy — we report what matters to your clients.",
  },
];

export function WhyPaarsiv() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Trust Signals"
            title="Why Clients Trust Paarsiv"
          />
        </ScrollReveal>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {ITEMS.map((it, i) => {
            const Icon = it.icon;
            return (
              <ScrollReveal key={i} delay={i * 110}>
                <div
                  className="group h-full rounded-2xl border border-[#E5E7EB] bg-white p-8 transition-all duration-300 hover:-translate-y-1"
                  style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = TEAL;
                    e.currentTarget.style.boxShadow =
                      "0 12px 40px rgba(27,202,155,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#E5E7EB";
                    e.currentTarget.style.boxShadow =
                      "0 2px 16px rgba(0,0,0,0.04)";
                  }}
                >
                  {/* Icon container */}
                  <div
                    className="inline-flex h-14 w-14 items-center justify-center rounded-2xl"
                    style={{ background: "rgba(27,202,155,0.1)" }}
                  >
                    <Icon
                      className="h-6 w-6"
                      style={{ color: TEAL }}
                      strokeWidth={1.8}
                    />
                  </div>

                  <h3
                    className="mt-1.5 text-[20px] font-bold text-[#0D1B2A] leading-snug"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {it.title}
                  </h3>
                  <p className="mt-3 text-[#6B7280] leading-relaxed text-sm">
                    {it.body}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
