export type Testimonial = {
  name: string;
  initials: string;
  role: string;
  company: string;
  quote: string;
  tags: string[];
  linkedin: string;
  photoUrl?: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Arjun Mehta",
    initials: "MD",
    role: "Marketing Director",
    company: "Retail & Gifting Industry",
    quote:
      "Paarsiv didn't just set up our SFMC — they built us a campaign engine. ROI tracking, WhatsApp flows, automated reporting. It all just works.",
    tags: ["SFMC", "WhatsApp", "AWS"],
    linkedin: "https://linkedin.com/in/placeholder-md",
  },
  {
    name: "Rahul Sinha",
    initials: "CTO",
    role: "CTO",
    company: "E-commerce",
    quote:
      "Their IP warmup execution saved us from a blacklist situation. They knew exactly what to do and when. Deliverability went from 60% to 95%+.",
    tags: ["SFMC", "IP Warmup", "Journey Builder"],
    linkedin: "https://linkedin.com/in/placeholder-cto",
  },
  {
    name: "Priya Nair",
    initials: "HD",
    role: "Head of Digital",
    company: "Healthcare",
    quote:
      "HIPAA compliance + responsive email design + preference centre — all in one engagement. The quality and attention to detail was exceptional from start to finish.",
    tags: ["SFMC", "CloudPages", "Content Builder"],
    linkedin: "https://linkedin.com/in/placeholder-hd",
  },
];
