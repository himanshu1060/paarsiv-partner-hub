import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/paarsiv/sections/PageHero";
import { ScrollReveal } from "@/components/paarsiv/ScrollReveal";
import { PROJECTS, PROJECT_CATEGORIES } from "@/data/projects";
import { TEAL } from "@/components/paarsiv/theme";

export const Route = createFileRoute("/projects/")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: "Projects — Paarsiv" },
      {
        name: "description",
        content:
          "Delivered, measured, trusted. Salesforce client engagements across retail, healthcare, manufacturing, fashion, and more.",
      },
    ],
  }),
});

function ProjectsPage() {
  const [filter, setFilter] = useState<(typeof PROJECT_CATEGORIES)[number]>("All");
  const projects = useMemo(
    () => (filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <>
      <PageHero
        eyebrow="Project Impact"
        title="Delivered. Measured. Trusted."
        subtitle="A selection of client engagements across industries."
      >
        <div className="flex flex-wrap justify-center gap-2">
          {PROJECT_CATEGORIES.map((c) => {
            const active = filter === c;
            return (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className="rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all"
                style={{
                  background: active ? TEAL : "rgba(255,255,255,0.06)",
                  color: active ? "white" : "rgba(255,255,255,0.8)",
                  border: active ? `1px solid ${TEAL}` : "1px solid rgba(255,255,255,0.15)",
                }}
              >
                {c}
              </button>
            );
          })}
        </div>
      </PageHero>

      <section className="py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <ScrollReveal key={p.slug} delay={(i % 3) * 90}>
                <Link
                  to="/projects/$slug"
                  params={{ slug: p.slug }}
                  className="group h-full block rounded-2xl border border-[#E5E7EB] bg-white p-7 transition-all duration-300"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = TEAL;
                    e.currentTarget.style.boxShadow = "0 8px 40px rgba(27,202,155,0.12)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#E5E7EB";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span
                      className="inline-flex items-center rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider"
                      style={{ borderColor: TEAL, color: TEAL }}
                    >
                      {p.industry}
                    </span>
                    <div className="flex flex-wrap justify-end gap-1">
                      {p.clouds.slice(0, 2).map((c) => (
                        <span
                          key={c}
                          className="rounded-md bg-[#0D1B2A] px-2 py-0.5 text-[10px] font-semibold text-white"
                        >
                          {c}
                        </span>
                      ))}
                      {p.clouds.length > 2 && (
                        <span className="rounded-md bg-[#0D1B2A]/70 px-2 py-0.5 text-[10px] font-semibold text-white">
                          +{p.clouds.length - 2}
                        </span>
                      )}
                    </div>
                  </div>
                  <h3
                    className="mt-5 text-xl font-bold text-[#0D1B2A]"
                    style={{ fontFamily: "'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif" }}
                  >
                    {p.name}
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {p.impact.map((line, j) => (
                      <li
                        key={j}
                        className="flex gap-2 text-sm text-[#0D1B2A]/80 leading-relaxed"
                      >
                        <span style={{ color: TEAL }}>→</span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                  <div
                    className="mt-6 pt-4 border-t border-[#E5E7EB] inline-flex items-center gap-1.5 text-sm font-semibold transition-colors group-hover:gap-2.5"
                    style={{ color: TEAL }}
                  >
                    View Details <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {projects.length === 0 && (
            <div className="text-center py-20 text-[#6B7280]">
              No projects match this filter yet.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
