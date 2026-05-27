import { Linkedin } from "lucide-react";

type Props = {
  href?: string;
  label?: string;
};

export function LinkedInButton({
  href = "https://linkedin.com/in/placeholder",
  label = "Connect on LinkedIn",
}: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-semibold text-white transition-all hover:opacity-90"
      style={{ background: "#0A66C2" }}
    >
      <Linkedin className="h-3.5 w-3.5" fill="currentColor" />
      {label}
    </a>
  );
}
