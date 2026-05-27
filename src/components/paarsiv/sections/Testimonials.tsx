import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Star, Linkedin } from "lucide-react";
import { NAVY, TEAL } from "../theme";
import { SectionHeader } from "../SectionHeader";
import { ScrollReveal } from "../ScrollReveal";
import { AvatarPlaceholder } from "../AvatarPlaceholder";
import { TESTIMONIALS } from "@/data/testimonials";

const INTERVAL = 2800;

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const count = TESTIMONIALS.length;

  const goTo = useCallback(
    (idx: number) => {
      if (animating) return;
      setAnimating(true);
      setActive(idx);
      setTimeout(() => setAnimating(false), 550);
    },
    [animating],
  );

  const next = useCallback(() => goTo((active + 1) % count), [goTo, active, count]);
  const prev = useCallback(() => goTo((active - 1 + count) % count), [goTo, active, count]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, INTERVAL);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, next]);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const t = TESTIMONIALS[active];

  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: NAVY }}>
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Client Voice"
            title="What Our Clients Experience"
            light
          />
        </ScrollReveal>

        {/* Slider area */}
        <div
          className="mt-14 relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Previous arrow */}
          <button
            onClick={() => { resetTimer(); prev(); }}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex h-11 w-11 items-center justify-center rounded-full transition-all duration-200"
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.65)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(27,202,155,0.2)";
              e.currentTarget.style.borderColor = TEAL;
              e.currentTarget.style.color = TEAL;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.07)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
              e.currentTarget.style.color = "rgba(255,255,255,0.65)";
            }}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Card */}
          <div className="md:px-20">
            <div
              key={active}
              className="prs-slide-in relative max-w-2xl mx-auto rounded-2xl p-8 md:p-10 text-center"
              style={{
                background: "#112236",
                border: "1px solid rgba(255,255,255,0.07)",
                boxShadow: "0 24px 60px rgba(0,0,0,0.35)",
              }}
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
              <div className="flex justify-center gap-1 mb-7">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4.5 w-4.5" style={{ width: 18, height: 18, fill: "#F5C518", stroke: "#F5C518" }} />
                ))}
              </div>

              {/* Quote */}
              <blockquote
                className="text-xl md:text-2xl font-medium text-white leading-[1.55]"
                style={{ fontFamily: "'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif" }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Divider */}
              <div
                className="my-8 mx-auto h-px w-16"
                style={{ background: `linear-gradient(to right, transparent, ${TEAL}, transparent)` }}
              />

              {/* Attribution */}
              <div className="flex flex-col items-center gap-3">
                <AvatarPlaceholder initials={t.initials} size={60} />
                <div>
                  <div className="font-semibold text-white text-base leading-snug">
                    {t.role}
                  </div>
                  <div className="text-sm text-white/45 mt-0.5">{t.company}</div>
                </div>
              </div>

              {/* Tags */}
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {t.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-md border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider"
                    style={{ borderColor: TEAL, color: TEAL }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Next arrow */}
          <button
            onClick={() => { resetTimer(); next(); }}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex h-11 w-11 items-center justify-center rounded-full transition-all duration-200"
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.65)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(27,202,155,0.2)";
              e.currentTarget.style.borderColor = TEAL;
              e.currentTarget.style.color = TEAL;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.07)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
              e.currentTarget.style.color = "rgba(255,255,255,0.65)";
            }}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Dots + mobile arrows */}
        <div className="mt-8 flex items-center justify-center gap-4">
          {/* Mobile prev */}
          <button
            onClick={() => { resetTimer(); prev(); }}
            aria-label="Previous testimonial"
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full"
            style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.6)" }}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {/* Progress dots */}
          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => { resetTimer(); goTo(i); }}
                aria-label={`Go to testimonial ${i + 1}`}
                className="transition-all duration-400 rounded-full"
                style={{
                  width: i === active ? 28 : 8,
                  height: 8,
                  background: i === active ? TEAL : "rgba(255,255,255,0.2)",
                  transitionProperty: "width, background-color",
                  transitionDuration: "350ms",
                }}
              />
            ))}
          </div>

          {/* Mobile next */}
          <button
            onClick={() => { resetTimer(); next(); }}
            aria-label="Next testimonial"
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full"
            style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.6)" }}
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* Auto-play progress bar */}
        {!paused && (
          <div
            key={`${active}-bar`}
            className="mt-5 mx-auto max-w-2xl h-[2px] rounded-full overflow-hidden"
            style={{ background: "rgba(255,255,255,0.08)" }}
          >
            <div
              className="h-full rounded-full prs-progress-bar"
              style={{
                background: TEAL,
                animationDuration: `${INTERVAL}ms`,
              }}
            />
          </div>
        )}

        <p className="mt-8 text-xs text-white/30 italic text-center">
          *Testimonials are representative of client outcomes. LinkedIn profiles
          are placeholders pending client approval.
        </p>
      </div>
    </section>
  );
}
