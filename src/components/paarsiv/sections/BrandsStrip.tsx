import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { BRANDS, type Brand } from "@/data/brands";
import { TEAL } from "../theme";

/* ── Brand logo with real image + initials fallback ─────────────────── */
function BrandLogo({ brand }: { brand: Brand }) {
  const [imgFailed, setImgFailed] = useState(false);
  const showImg = brand.logoUrl && !imgFailed;

  return (
    <div
      className="flex items-center justify-center rounded-full flex-shrink-0 overflow-hidden"
      style={{
        width: 80,
        height: 80,
        background: showImg ? "white" : brand.color,
        border: showImg ? "2px solid rgba(0,0,0,0.06)" : "none",
        boxShadow: showImg
          ? "0 4px 20px rgba(0,0,0,0.14)"
          : `0 6px 24px ${brand.color}66`,
      }}
    >
      {showImg ? (
        <img
          src={brand.logoUrl!}
          alt={brand.name}
          onError={() => setImgFailed(true)}
          style={{ width: 52, height: 52, objectFit: "contain" }}
        />
      ) : (
        <span
          style={{
            color: "white",
            fontWeight: 700,
            fontSize: brand.initials.length > 2 ? 15 : 20,
            letterSpacing: "0.03em",
          }}
        >
          {brand.initials}
        </span>
      )}
    </div>
  );
}

function BrandCard({ brand }: { brand: Brand }) {
  return (
    <div
      className="flex flex-col items-center text-center rounded-2xl shrink-0"
      style={{
        background: "rgba(255,255,255,0.97)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
        width: 178,
        padding: "24px 20px 20px",
      }}
    >
      <BrandLogo brand={brand} />
      <div
        className="mt-3 font-bold text-[#0D1B2A] text-sm leading-snug"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        {brand.name}
      </div>
    </div>
  );
}

/* ── Stats ───────────────────────────────────────────────────────────── */
const STATS = [
  { value: "11+", label: "Brand Clients" },
  { value: "8", label: "Industries" },
  { value: "15+", label: "Live Projects" },
];

/* ── Main section ────────────────────────────────────────────────────── */
export function BrandsStrip() {
  const row1 = [...BRANDS, ...BRANDS];
  const row2 = [[...BRANDS].reverse(), [...BRANDS].reverse()].flat();

  return (
    <section
      className="overflow-hidden"
      style={{
        background: "#0A1929",
        borderTop: "1px solid rgba(27,202,155,0.14)",
      }}
    >
      {/* ── Header ─────────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-6 pt-20 lg:pt-28 pb-14 text-center">
        <div
          className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] mb-4"
          style={{ color: TEAL }}
        >
          <span className="h-px w-8" style={{ background: TEAL }} />
          Our Clients
          <span className="h-px w-8" style={{ background: TEAL }} />
        </div>

        <h2
          className="text-3xl md:text-4xl lg:text-[52px] font-bold text-white tracking-tight leading-[1.08]"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          Brands That Trust Paarsiv
        </h2>

        <p className="mt-4 text-white/50 text-base max-w-md mx-auto leading-relaxed">
          Real projects across retail, healthcare, fashion, manufacturing, and more.
        </p>

        {/* Stats row — numbers carry more authority than pills */}
        <div className="mt-10 inline-flex items-center divide-x divide-white/10 rounded-2xl overflow-hidden"
          style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)" }}
        >
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col items-center px-8 py-4">
              <span
                className="text-2xl font-bold leading-none"
                style={{ color: TEAL, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {s.value}
              </span>
              <span className="mt-1 text-[11px] uppercase tracking-wider text-white/40 font-semibold">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Dual marquee with centre glow ──────────────────────────────── */}
      <div className="relative">
        {/* Ambient glow behind the marquee rows */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 120% at 50% 50%, rgba(27,202,155,0.06) 0%, transparent 70%)",
          }}
        />

        <div
          className="relative space-y-5"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          }}
        >
          {/* Row 1 — scrolls left */}
          <div className="flex gap-5 prs-marquee w-max">
            {row1.map((brand, i) => (
              <BrandCard key={i} brand={brand} />
            ))}
          </div>

          {/* Row 2 — scrolls right, reversed order */}
          <div className="flex gap-5 prs-marquee-rev w-max">
            {row2.map((brand, i) => (
              <BrandCard key={i} brand={brand} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Conversion CTA ────────────────────────────────────────────── */}
      <div className="mx-auto max-w-lg px-6 pt-14 pb-20 lg:pb-28">
        <div
          className="rounded-2xl px-8 py-8 text-center"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {/* Stacked avatars — real people, not icons */}
          <div className="flex justify-center mb-5">
            <div className="flex items-center -space-x-2.5">
              {(
                [
                  { initials: "MD", bg: "#1A5276" },
                  { initials: "CTO", bg: "#117A65" },
                  { initials: "HD", bg: "#6D214F" },
                ] as const
              ).map(({ initials, bg }, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center rounded-full border-2 text-white font-bold text-[11px]"
                  style={{
                    width: 44,
                    height: 44,
                    background: bg,
                    borderColor: "#0A1929",
                    zIndex: 3 - i,
                  }}
                >
                  {initials}
                </div>
              ))}
            </div>
          </div>

          {/* Hook — curiosity gap, not a spoiler */}
          <p
            className="text-white font-bold text-[22px] leading-snug"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            What happened when they<br />partnered with Paarsiv?
          </p>
          <p className="mt-2 text-white/45 text-sm">
            3 clients. Real outcomes. No fluff.
          </p>

          {/* Outcome chips — hint at results, withhold details */}
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {[
              "60% → 95% Deliverability",
              "HIPAA-Compliant Build",
              "Full Campaign Engine",
            ].map((outcome) => (
              <span
                key={outcome}
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold"
                style={{
                  background: "rgba(27,202,155,0.1)",
                  border: "1px solid rgba(27,202,155,0.22)",
                  color: TEAL,
                }}
              >
                ✓ {outcome}
              </span>
            ))}
          </div>

          {/* Full-width dominant CTA */}
          <Link
            to="/testimonials"
            className="mt-7 flex items-center justify-center gap-2 rounded-xl w-full py-4 text-base font-bold text-white transition-all hover:opacity-90 hover:-translate-y-0.5"
            style={{ background: TEAL }}
          >
            Read Their Stories <ArrowRight className="h-4.5 w-4.5" style={{ width: 18, height: 18 }} />
          </Link>
        </div>
      </div>
    </section>
  );
}
