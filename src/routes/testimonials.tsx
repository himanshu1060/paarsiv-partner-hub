import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, ArrowRight, Linkedin } from "lucide-react";
import { PageHero } from "@/components/paarsiv/sections/PageHero";
import { ScrollReveal } from "@/components/paarsiv/ScrollReveal";
import { AvatarPlaceholder } from "@/components/paarsiv/AvatarPlaceholder";
import { TESTIMONIALS } from "@/data/testimonials";
import { TEAL, NAVY } from "@/components/paarsiv/theme";

export const Route = createFileRoute("/testimonials")({
  component: TestimonialsPage,
  head: () => ({
    meta: [
      { title: "Client Stories — Paarsiv" },
      {
        name: "description",
        content:
          "Real outcomes, real feedback. Hear from clients across retail, healthcare, e-commerce, and more.",
      },
    ],
  }),
});

function TestimonialCard({ t, i }: { t: (typeof TESTIMONIALS)[number]; i: number }) {
  return (
    <ScrollReveal delay={(i % 3) * 100}>
      <article
        className="relative h-full rounded-2xl p-8 flex flex-col transition-all duration-300"
        style={{
          background: "#112236",
          border: "1px solid rgba(255,255,255,0.07)",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.borderColor = TEAL)
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")
        }
      >
        {/* LinkedIn badge */}
        <a
          href={t.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 inline-flex h-8 w-8 items-center justify-center rounded-lg transition-opacity hover:opacity-80"
          style={{ background: "#0A66C2" }}
          aria-label="View LinkedIn profile"
        >
          <Linkedin className="h-4 w-4 text-white" fill="currentColor" />
        </a>

        {/* Stars */}
        <div className="flex gap-0.5 mb-5">
          {Array.from({ length: 5 }).map((_, j) => (
            <Star
              key={j}
              style={{ width: 16, height: 16, fill: "#F5C518", stroke: "#F5C518" }}
            />
          ))}
        </div>

        {/* Quote */}
        <blockquote className="flex-1 text-white/85 italic leading-[1.7] text-[15px]">
          &ldquo;{t.quote}&rdquo;
        </blockquote>

        {/* Divider */}
        <div
          className="my-6 h-px"
          style={{ background: "rgba(255,255,255,0.08)" }}
        />

        {/* Attribution */}
        <div className="flex items-center gap-3">
          <AvatarPlaceholder initials={t.initials} size={48} />
          <div>
            <div className="font-semibold text-white text-sm">{t.role}</div>
            <div className="text-xs text-white/45 mt-0.5">{t.company}</div>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {t.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
              style={{ borderColor: TEAL, color: TEAL }}
            >
              {tag}
            </span>
          ))}
        </div>
      </article>
    </ScrollReveal>
  );
}

function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Client Stories"
        title="What Our Clients Say"
        subtitle="Real outcomes, real feedback from clients across retail, healthcare, e-commerce, and more."
      />

      {/* Testimonials grid */}
      <section className="py-20 lg:py-24" style={{ background: NAVY }}>
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <TestimonialCard key={i} t={t} i={i} />
            ))}
          </div>

          <p className="mt-10 text-xs text-white/30 italic text-center">
            *Testimonials are representative of client outcomes. LinkedIn profiles
            are placeholders pending client approval.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] mb-4"
            style={{ color: TEAL }}
          >
            <span className="h-px w-8" style={{ background: TEAL }} />
            Work With Us
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold text-[#0D1B2A] tracking-tight"
          >
            Ready to become our next success story?
          </h2>
          <p className="mt-4 text-[#6B7280] max-w-xl mx-auto leading-relaxed">
            Let's discuss how Paarsiv can deliver for your clients.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white transition-all hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: TEAL }}
            >
              Get In Touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
