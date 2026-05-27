import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  Clock,
  UserCheck,
  FileLock2,
  Check,
  Linkedin,
} from "lucide-react";
import { TEAL, NAVY } from "@/components/paarsiv/theme";
import { ScrollReveal } from "@/components/paarsiv/ScrollReveal";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Paarsiv" },
      {
        name: "description",
        content:
          "Co-sell with Paarsiv. We work directly with Salesforce AEs to deliver implementation excellence for your clients.",
      },
    ],
  }),
});

const CLOUD_OPTIONS = [
  "SFMC",
  "Sales Cloud",
  "Data Cloud",
  "MCP",
  "Tableau",
  "Integrations",
];

const TRUST_ITEMS = [
  {
    icon: Clock,
    label: "Response within 24 hours",
    sub: "We respect your time and your client's timeline.",
  },
  {
    icon: UserCheck,
    label: "Dedicated AE Liaison",
    sub: "One point of contact. Always.",
  },
  {
    icon: FileLock2,
    label: "NDA Available on Request",
    sub: "Client confidentiality is our default.",
  },
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);

  const toggleCloud = (c: string) => {
    setSelected((s) =>
      s.includes(c) ? s.filter((x) => x !== c) : [...s, c],
    );
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <section
      className="relative pt-36 pb-24 lg:pt-44 lg:pb-32 overflow-hidden"
      style={{ backgroundColor: NAVY }}
    >
      {/* Background grid */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(27,202,155,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(27,202,155,0.3) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          opacity: 0.05,
        }}
      />
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: 700,
          height: 320,
          background:
            "radial-gradient(ellipse at top, rgba(27,202,155,0.1) 0%, transparent 70%)",
          filter: "blur(2px)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left column — info on navy */}
          <ScrollReveal className="lg:col-span-2">
            <div
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] mb-4"
              style={{ color: TEAL }}
            >
              <span className="h-px w-8" style={{ background: TEAL }} />
              Partner With Us
            </div>
            <h1
              className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.08]"
              style={{ fontFamily: "'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif" }}
            >
              Ready to Co-Sell with Paarsiv?
            </h1>
            <p className="mt-5 text-white/65 text-lg leading-relaxed">
              We work directly with Salesforce AEs to deliver implementation
              excellence for your clients. Let's talk.
            </p>

            <div className="mt-10 space-y-3">
              {TRUST_ITEMS.map((t) => {
                const Icon = t.icon;
                return (
                  <div
                    key={t.label}
                    className="flex items-start gap-4 rounded-xl p-4"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <div
                      className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg"
                      style={{
                        background: "rgba(27,202,155,0.14)",
                        color: TEAL,
                      }}
                    >
                      <Icon className="h-4.5 w-4.5" style={{ width: 18, height: 18 }} />
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm">
                        {t.label}
                      </div>
                      <div className="text-xs text-white/50 mt-0.5 leading-relaxed">
                        {t.sub}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8">
              <a
                href="https://linkedin.com/company/paarsiv"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-white transition-all hover:opacity-90"
                style={{ background: "#0A66C2" }}
              >
                <Linkedin className="h-4 w-4" fill="currentColor" />
                Follow us on LinkedIn
              </a>
            </div>
          </ScrollReveal>

          {/* Right column — floating white form card */}
          <ScrollReveal className="lg:col-span-3" delay={120}>
            <form
              onSubmit={onSubmit}
              className="rounded-2xl bg-white p-8 md:p-10"
              style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.35)" }}
            >
              {submitted ? (
                <div className="py-10 text-center">
                  <div
                    className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full"
                    style={{ background: TEAL }}
                  >
                    <Check className="h-7 w-7 text-white" />
                  </div>
                  <h3
                    className="mt-5 text-2xl font-bold text-[#0D1B2A]"
                    style={{ fontFamily: "'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif" }}
                  >
                    We'll be in touch within 24 hours.
                  </h3>
                  <p className="mt-3 text-[#6B7280]">
                    A Paarsiv lead will respond directly with next steps.
                  </p>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Name" name="name" required />
                  <Field label="Company" name="company" required />
                  <div className="sm:col-span-2">
                    <Field label="Email" name="email" type="email" required />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-[#0D1B2A] mb-2">
                      Salesforce Cloud(s) of Interest
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {CLOUD_OPTIONS.map((c) => {
                        const active = selected.includes(c);
                        return (
                          <button
                            key={c}
                            type="button"
                            onClick={() => toggleCloud(c)}
                            className="rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all border"
                            style={{
                              background: active ? TEAL : "white",
                              color: active ? "white" : "#0D1B2A",
                              borderColor: active ? TEAL : "#E5E7EB",
                            }}
                          >
                            {c}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-[#0D1B2A] mb-1.5">
                      Message{" "}
                      <span className="text-[#6B7280] font-normal">
                        (optional)
                      </span>
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      className="w-full rounded-lg border border-[#E5E7EB] bg-white px-3.5 py-2.5 text-sm text-[#0D1B2A] outline-none focus:border-[#1BCA9B] focus:ring-2 focus:ring-[#1BCA9B]/20"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-[10px] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:opacity-90 disabled:opacity-70"
                      style={{ background: TEAL }}
                    >
                      {loading ? (
                        <span className="inline-block h-4 w-4 rounded-full border-2 border-white/40 border-t-white animate-spin" />
                      ) : (
                        <>
                          Let's Partner <ArrowRight className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="sm:col-span-2 text-xs text-[#6B7280]">
                    Prefer email?{" "}
                    <a
                      href="mailto:hello@paarsiv.com"
                      className="font-semibold underline decoration-[#1BCA9B] underline-offset-2"
                      style={{ color: NAVY }}
                    >
                      hello@paarsiv.com
                    </a>
                  </p>
                </div>
              )}
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-[#0D1B2A] mb-1.5">
        {label}
        {required && <span style={{ color: TEAL }}> *</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-[#E5E7EB] bg-white px-3.5 py-2.5 text-sm text-[#0D1B2A] outline-none focus:border-[#1BCA9B] focus:ring-2 focus:ring-[#1BCA9B]/20"
      />
    </div>
  );
}
