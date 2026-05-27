import { createFileRoute } from "@tanstack/react-router";
import {
  Mail as MailIcon,
  Briefcase,
  Database,
  Sparkles,
  Users,
  Linkedin,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "@/components/paarsiv/sections/PageHero";
import { SectionHeader } from "@/components/paarsiv/SectionHeader";
import { ScrollReveal } from "@/components/paarsiv/ScrollReveal";
import { AvatarPlaceholder } from "@/components/paarsiv/AvatarPlaceholder";
import { LEADERSHIP, SALES_TEAM, PRACTICE_GROUPS, type TeamMember } from "@/data/team";
import { TEAL, NAVY } from "@/components/paarsiv/theme";

export const Route = createFileRoute("/team")({
  component: TeamPage,
  head: () => ({
    meta: [
      { title: "Team — Paarsiv" },
      {
        name: "description",
        content:
          "Meet the 25+ certified Salesforce professionals delivering across SFMC, Sales Cloud, Data Cloud, and MCP.",
      },
    ],
  }),
});

function PersonCard({
  member,
  size = 96,
  compact = false,
}: {
  member: TeamMember;
  size?: number;
  compact?: boolean;
}) {
  return (
    <div
      className="relative h-full rounded-2xl border border-[#E5E7EB] bg-white p-7 transition-all duration-300"
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
      {/* LinkedIn icon badge — top right */}
      <a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 inline-flex h-8 w-8 items-center justify-center rounded-lg transition-opacity hover:opacity-80"
        style={{ background: "#0A66C2" }}
        aria-label={`${member.name} on LinkedIn`}
      >
        <Linkedin className="h-4 w-4 text-white" fill="currentColor" />
      </a>

      <div className="flex flex-col items-center text-center">
        <AvatarPlaceholder
          initials={member.initials}
          size={size}
          photoUrl={member.photoUrl}
        />
        <h3
          className={`mt-5 font-bold text-[#0D1B2A] ${compact ? "text-lg" : "text-xl"}`}
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          {member.name}
        </h3>
        <div className="mt-1 text-sm text-[#6B7280]">{member.title}</div>
        <span
          className="mt-3 inline-flex items-center rounded-md px-2.5 py-1 text-[11px] font-semibold"
          style={{ background: "rgba(27,202,155,0.12)", color: "#0D7A5C" }}
        >
          {member.years}
        </span>
      </div>
    </div>
  );
}

const GROUP_ICONS: Record<string, LucideIcon> = {
  "SFMC Specialists": MailIcon,
  "MCP & Personalisation": Sparkles,
  "Sales & Data Cloud": Database,
  "Business & Support": Users,
};

function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="Our Rockstars"
        subtitle="A 25+ strong team built around Salesforce excellence."
        variant="light"
      />

      {/* Leadership */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <SectionHeader eyebrow="Leadership Team" title="Vision & Strategy" />
          </ScrollReveal>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {LEADERSHIP.map((m, i) => (
              <ScrollReveal key={m.name} delay={i * 100}>
                <PersonCard member={m} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sales & Client Management */}
      <section className="py-20 lg:py-24" style={{ background: "#F8F9FA" }}>
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Sales & Client Management"
              title="Your Direct Line"
            />
          </ScrollReveal>
          <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-4xl">
            {SALES_TEAM.map((m, i) => (
              <ScrollReveal key={m.name} delay={i * 100}>
                <PersonCard member={m} size={88} compact />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Practice Teams"
              title="Inside Our Delivery Engine"
            />
          </ScrollReveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PRACTICE_GROUPS.map((g, i) => {
              const Icon = GROUP_ICONS[g.name] ?? Briefcase;
              return (
                <ScrollReveal key={g.name} delay={i * 90}>
                  <div
                    className="h-full rounded-2xl border border-[#E5E7EB] bg-white p-6 transition-all duration-300 hover:-translate-y-1"
                    style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.04)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = TEAL;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "#E5E7EB";
                    }}
                  >
                    <div
                      className="inline-flex h-12 w-12 items-center justify-center rounded-xl"
                      style={{ background: "rgba(27,202,155,0.1)", color: TEAL }}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <div
                      className="mt-5 text-5xl font-bold tracking-tight"
                      style={{
                        color: TEAL,
                        fontFamily: "'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif",
                      }}
                    >
                      {g.count}
                    </div>
                    <div className="mt-1 font-bold text-[#0D1B2A]">
                      {g.name}
                    </div>
                    <div className="mt-3 text-sm text-[#6B7280] leading-relaxed">
                      {g.detail}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
          <div className="mt-10 flex justify-center">
            <div
              className="inline-flex items-center gap-2.5 rounded-full px-6 py-2.5 text-sm font-semibold text-white"
              style={{ background: NAVY }}
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{ background: TEAL }}
              />
              25+ professionals across 4 practice areas
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
