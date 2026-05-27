import type { ReactNode } from "react";
import { NAVY, TEAL } from "../theme";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  variant?: "dark" | "light";
};

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
  variant = "dark",
}: Props) {
  const isDark = variant === "dark";
  return (
    <section
      className="relative pt-36 pb-20 lg:pt-44 lg:pb-24 overflow-hidden"
      style={{
        backgroundColor: isDark ? NAVY : "#F8F9FA",
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage: isDark
            ? "linear-gradient(rgba(27,202,155,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(27,202,155,0.4) 1px, transparent 1px)"
            : "radial-gradient(circle, rgba(27,202,155,0.18) 1px, transparent 1px)",
          backgroundSize: isDark ? "64px 64px" : "28px 28px",
          opacity: isDark ? 0.06 : 0.5,
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 text-center">
        {eyebrow && (
          <div
            className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] mb-6"
            style={{
              borderColor: isDark
                ? "rgba(27,202,155,0.35)"
                : "rgba(27,202,155,0.4)",
              color: TEAL,
              background: isDark
                ? "rgba(27,202,155,0.06)"
                : "rgba(27,202,155,0.08)",
            }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: TEAL }}
            />
            {eyebrow}
          </div>
        )}
        <h1
          className={`text-4xl md:text-5xl lg:text-[52px] font-bold leading-[1.08] tracking-tight ${
            isDark ? "text-white" : "text-[#0D1B2A]"
          }`}
          style={{ fontFamily: "'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif" }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className={`mt-5 max-w-2xl mx-auto text-base md:text-lg leading-relaxed ${
              isDark ? "text-white/70" : "text-[#6B7280]"
            }`}
          >
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
