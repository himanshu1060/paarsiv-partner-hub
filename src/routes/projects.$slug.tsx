import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { TEAL, NAVY } from "@/components/paarsiv/theme";
import { ScrollReveal } from "@/components/paarsiv/ScrollReveal";

export const Route = createFileRoute("/projects/$slug")({
  component: ProjectDetailPage,
  loader: ({ params }) => {
    const project = PROJECTS.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.project.name} — Paarsiv Case Study` },
          { name: "description", content: loaderData.project.challenge },
        ]
      : [{ title: "Project — Paarsiv" }],
  }),
});

function ProjectDetailPage() {
  const { project } = Route.useLoaderData();

  return (
    <>
      {/* Dark hero */}
      <section
        className="relative pt-36 pb-20 lg:pt-44 lg:pb-24 overflow-hidden"
        style={{ background: NAVY }}
      >
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(27,202,155,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(27,202,155,0.4) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            opacity: 0.06,
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/70 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to All Projects
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span
              className="inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wider"
              style={{ borderColor: TEAL, color: TEAL }}
            >
              {project.industry}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.clouds.map((c) => (
                <span
                  key={c}
                  className="rounded-md bg-white/10 px-2 py-0.5 text-[11px] font-semibold text-white"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
          <h1
            className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif" }}
          >
            {project.name}
          </h1>
          <p className="mt-5 text-lg text-white/70 max-w-3xl">
            {project.challenge}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-5xl px-6">

          {/* Brand background — shown when brandSummary exists */}
          {project.brandSummary && (
            <ScrollReveal>
              <div
                className="mb-14 rounded-2xl p-8"
                style={{
                  background: "linear-gradient(135deg, #F0FDF8 0%, #F8FAFC 100%)",
                  border: `1px solid rgba(27,202,155,0.2)`,
                }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className="h-px flex-1"
                    style={{ background: `linear-gradient(to right, ${TEAL}, transparent)` }}
                  />
                  <span
                    className="text-[11px] font-bold uppercase tracking-[0.16em]"
                    style={{ color: TEAL }}
                  >
                    About {project.name}
                  </span>
                  <span
                    className="h-px flex-1"
                    style={{ background: `linear-gradient(to left, ${TEAL}, transparent)` }}
                  />
                </div>
                <p className="text-[#374151] leading-relaxed text-[15px]">
                  {project.brandSummary}
                </p>
                {project.brandFacts && project.brandFacts.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.brandFacts.map((fact) => (
                      <span
                        key={fact}
                        className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold"
                        style={{
                          background: "rgba(27,202,155,0.08)",
                          border: "1px solid rgba(27,202,155,0.2)",
                          color: "#0D1B2A",
                        }}
                      >
                        <span style={{ color: TEAL }}>◆</span> {fact}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </ScrollReveal>
          )}

          {/* Challenge */}
          <ScrollReveal>
            <div className="mb-14">
              <h2
                className="text-3xl font-bold text-[#0D1B2A] tracking-tight"
                style={{ fontFamily: "'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif" }}
              >
                The Challenge
              </h2>
              <p className="mt-4 text-[#6B7280] leading-relaxed text-lg">
                {project.challenge}
              </p>
            </div>
          </ScrollReveal>

          {/* Approach */}
          <ScrollReveal>
            <div className="mb-14">
              <h2
                className="text-3xl font-bold text-[#0D1B2A] tracking-tight"
                style={{ fontFamily: "'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif" }}
              >
                Our Approach
              </h2>
              <ul className="mt-6 space-y-3">
                {project.approach.map((a, i) => (
                  <li key={i} className="flex gap-3 text-[#0D1B2A]/85">
                    <div
                      className="flex-shrink-0 mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full"
                      style={{ background: "rgba(27,202,155,0.12)", color: TEAL }}
                    >
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span className="leading-relaxed">{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Clouds & Tools */}
          <ScrollReveal>
            <div className="mb-14">
              <h2
                className="text-3xl font-bold text-[#0D1B2A] tracking-tight"
                style={{ fontFamily: "'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif" }}
              >
                Clouds & Tools Used
              </h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {project.clouds.map((c) => (
                  <div
                    key={c}
                    className="rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm font-semibold text-[#0D1B2A]"
                  >
                    {c}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Outcomes */}
          <ScrollReveal>
            <div>
              <h2
                className="text-3xl font-bold text-[#0D1B2A] tracking-tight"
                style={{ fontFamily: "'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif" }}
              >
                Key Outcomes
              </h2>
              <div className="mt-6 grid sm:grid-cols-3 gap-4">
                {project.outcomes.map((o, i) => (
                  <div
                    key={i}
                    className="rounded-2xl p-6 text-center"
                    style={{
                      background: NAVY,
                      borderTop: `4px solid ${TEAL}`,
                    }}
                  >
                    <div
                      className="text-3xl font-bold"
                      style={{
                        color: TEAL,
                        fontFamily: "'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif",
                      }}
                    >
                      {o.metric}
                    </div>
                    <div className="mt-2 text-sm text-white/70">{o.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* CTA */}
          <div className="mt-16 flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-[#E5E7EB]">
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#6B7280] hover:text-[#0D1B2A]"
            >
              <ArrowLeft className="h-4 w-4" /> Back to All Projects
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-[10px] px-5 py-3 text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ background: TEAL }}
            >
              Discuss a Similar Engagement <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
