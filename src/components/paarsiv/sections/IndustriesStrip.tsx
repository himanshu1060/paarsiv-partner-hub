import { INDUSTRIES } from "@/data/industries";
import { TEAL } from "../theme";

export function IndustriesStrip() {
  // Duplicate list for seamless marquee loop
  const items = [...INDUSTRIES, ...INDUSTRIES];
  return (
    <section className="py-20 bg-white border-y border-[#E5E7EB] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 mb-10">
        <div className="text-center">
          <div
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] mb-3"
            style={{ color: TEAL }}
          >
            Industries Served
          </div>
          <h3
            className="text-2xl md:text-3xl font-bold text-[#0D1B2A]"
            style={{ fontFamily: "'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif" }}
          >
            10+ verticals delivered
          </h3>
        </div>
      </div>
      <div
        className="relative"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="flex gap-3 prs-marquee w-max">
          {items.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-2.5 rounded-full border border-[#E5E7EB] bg-white px-5 py-2.5 text-sm font-medium text-[#0D1B2A] shrink-0"
              >
                <Icon className="h-4 w-4" style={{ color: TEAL }} />
                {ind.label}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
