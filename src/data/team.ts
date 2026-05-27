export type TeamMember = {
  name: string;
  title: string;
  years: string;
  initials: string;
  linkedin: string;
  photoUrl?: string | null;
};

export const LEADERSHIP: TeamMember[] = [
  {
    name: "Shubham Tiwari",
    title: "CEO",
    years: "8+ Years",
    initials: "ST",
    linkedin: "https://linkedin.com/in/placeholder-shubham",
  },
  {
    name: "Bhavin Jain",
    title: "Senior Manager, SFMC Practice Lead",
    years: "5+ Years",
    initials: "BJ",
    linkedin: "https://linkedin.com/in/placeholder-bhavin",
  },
  {
    name: "Prashant Gupta",
    title: "Senior Manager, Sales & Data Cloud",
    years: "7+ Years",
    initials: "PG",
    linkedin: "https://linkedin.com/in/placeholder-prashant",
  },
];

export const SALES_TEAM: TeamMember[] = [
  {
    name: "Rishabh Jain",
    title: "Senior Sales Manager",
    years: "5+ Years",
    initials: "RJ",
    linkedin: "https://linkedin.com/in/placeholder-rishabh",
  },
  {
    name: "Abhishek Singh Rajput",
    title: "Senior Sales Manager",
    years: "5+ Years",
    initials: "ASR",
    linkedin: "https://linkedin.com/in/placeholder-abhishek",
  },
];

export type PracticeGroup = {
  name: string;
  count: string;
  detail: string;
};

export const PRACTICE_GROUPS: PracticeGroup[] = [
  {
    name: "SFMC Specialists",
    count: "8",
    detail: "Senior Devs: 4+ yrs avg · Developers: 3+ yrs avg",
  },
  {
    name: "MCP & Personalisation",
    count: "6",
    detail: "Senior Devs: 3+ yrs avg · Web Devs: 1+ yr avg",
  },
  {
    name: "Sales & Data Cloud",
    count: "2",
    detail: "Senior Devs: 3+ yrs avg",
  },
  {
    name: "Business & Support",
    count: "4",
    detail: "BA · HR · Project Coordination",
  },
];
