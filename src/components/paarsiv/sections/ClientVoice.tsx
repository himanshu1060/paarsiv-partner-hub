import { Link } from "@tanstack/react-router";
import { Linkedin, ArrowRight } from "lucide-react";
import { TESTIMONIALS } from "@/data/testimonials";
import { TEAL, NAVY } from "../theme";
import { ScrollReveal } from "../ScrollReveal";

const AVATAR_COLORS: Record<string, string> = {
  MD: "#1A5276",
  CTO: "#117A65",
  HD: "#6D214F",
};

export function ClientVoice() {
  return (
    <section className="py-20 lg:py-28" style={{ background: "#F8F9FA" }}>
      <div className="mx-auto max-w-7xl px-6">

        {/* Section label */}
        <ScrollReveal>
          <div className="mb-12 text-center">
            <div
              className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] mb-4"
              style={{ color: TEAL }}
            >
              <span className="h-px w-8" style={{ background: TEAL }} />
              Client Voice
              <span className="h-px w-8" style={{ background: TEAL }} />
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#0D1B2A] tracking-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              In Their Own Words
            </h2>
            <p className="mt-3 text-[#6B7280] text-base max-w-lg mx-auto">
              Shared directly with us — not a LinkedIn post. We attach their profiles so you can reach out and verify.
            </p>
          </div>
        </ScrollReveal>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <ScrollReveal key={t.initials} delay={i * 90}>
              <div
                className="flex flex-col h-full rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  background: "#fff",
                  border: "1px solid #E5E7EB",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.1)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.06)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {/* Card header */}
                <div className="flex items-center gap-3 px-5 pt-5 pb-4" style={{ borderBottom: "1px solid #F1F5F9" }}>
                  {t.photoUrl ? (
                    <img
                      src={t.photoUrl}
                      alt={t.name}
                      className="rounded-xl object-cover flex-shrink-0"
                      style={{ width: 52, height: 52 }}
                    />
                  ) : (
                    <div
                      className="flex items-center justify-center rounded-xl flex-shrink-0 text-white font-bold text-sm"
                      style={{
                        width: 52,
                        height: 52,
                        background: AVATAR_COLORS[t.initials] ?? NAVY,
                      }}
                    >
                      {t.initials}
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span
                        className="font-bold text-[#0D1B2A] text-sm truncate"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        {t.name}
                      </span>
                      <a
                        href={t.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${t.name} on LinkedIn`}
                        className="flex-shrink-0 transition-opacity hover:opacity-70"
                      >
                        <Linkedin className="h-4 w-4" style={{ color: "#0A66C2" }} fill="#0A66C2" />
                      </a>
                    </div>
                    <p className="text-xs text-[#64748B] mt-0.5 truncate">{t.role}</p>
                    <p className="text-xs font-semibold mt-0.5 truncate" style={{ color: TEAL }}>
                      {t.company}
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <div className="flex-1 px-5 py-5" style={{ background: "#F8FAFC" }}>
                  <p className="text-sm text-[#374151] leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                {/* Tags */}
                <div className="px-5 py-4 flex flex-wrap gap-1.5" style={{ borderTop: "1px solid #F1F5F9" }}>
                  {t.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide"
                      style={{ background: "rgba(27,202,155,0.08)", color: TEAL }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Verification note + CTA */}
        <div className="mt-10 flex flex-col items-center gap-5">
          <p className="text-xs text-[#9CA3AF] text-center max-w-md italic">
            * These testimonials were shared directly with Paarsiv. LinkedIn profiles are linked so you can reach out and verify independently.
          </p>
          <Link
            to="/testimonials"
            className="inline-flex items-center gap-2 rounded-[10px] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:opacity-90 hover:-translate-y-0.5"
            style={{ background: TEAL }}
          >
            Check All Testimonials <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
