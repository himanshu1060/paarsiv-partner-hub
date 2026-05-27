import { TEAL } from "./theme";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  light,
  align = "left",
}: Props) {
  const isCenter = align === "center";
  return (
    <div
      className={`${isCenter ? "mx-auto text-center" : ""} max-w-3xl`}
    >
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] mb-4`}
          style={{ color: TEAL }}
        >
          <span className="h-px w-8" style={{ backgroundColor: TEAL }} />
          {eyebrow}
        </div>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight ${
          light ? "text-white" : "text-[#0D1B2A]"
        }`}
        style={{ fontFamily: "'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base md:text-lg leading-relaxed ${
            light ? "text-white/70" : "text-[#6B7280]"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
