import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/paarsiv/sections/PageHero";
import { ScrollReveal } from "@/components/paarsiv/ScrollReveal";
import { INDUSTRIES } from "@/data/industries";
import { TEAL } from "@/components/paarsiv/theme";

export const Route = createFileRoute("/industries")({
  component: IndustriesPage,
  head: () => ({
    meta: [
      { title: "Industries — Paarsiv" },
      {
        name: "description",
        content:
          "Salesforce delivery across 10+ verticals: retail, healthcare, manufacturing, fashion, education, hospitality, IT services, and more.",
      },
    ],
  }),
});

function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Domain Expertise"
        title="Industries We've Served"
        subtitle="Deep domain understanding across 10+ verticals."
        variant="light"
      />

      <section className="py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {INDUSTRIES.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <ScrollReveal key={ind.label} delay={(i % 4) * 90}>
                  <div
                    className="group h-full rounded-2xl border border-[#E5E7EB] bg-white p-7 transition-all duration-300 hover:-translate-y-1"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = TEAL;
                      e.currentTarget.style.boxShadow = "0 8px 40px rgba(27,202,155,0.12)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "#E5E7EB";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <div
                      className="inline-flex h-16 w-16 items-center justify-center rounded-2xl transition-transform group-hover:scale-110"
                      style={{ background: "rgba(27,202,155,0.1)", color: TEAL }}
                    >
                      <Icon className="h-8 w-8" strokeWidth={1.8} />
                    </div>
                    <h3
                      className="mt-5 text-lg font-bold text-[#0D1B2A]"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {ind.label}
                    </h3>
                    <p className="mt-2 text-sm text-[#6B7280] leading-relaxed">
                      {ind.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
