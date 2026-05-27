export type Brand = {
  name: string;
  initials: string;
  color: string;
  logoUrl: string | null;
};

// Order: primacy (first 3) + recency (last 3) get most attention in a marquee.
// Most recognisable / prestigious brands anchor those positions.
export const BRANDS: Brand[] = [
  // ── Primacy anchors — seen first, remembered most ──
  { name: "Mount Sinai", initials: "MS",  color: "#1A5276", logoUrl: "https://logo.clearbit.com/mountsinai.org" },
  { name: "FnP",         initials: "FnP", color: "#E85D04", logoUrl: "https://play-lh.googleusercontent.com/5AobDqCU-TbarD6OtDTDf5TVf-sY1ApObTxn_KB8EK6d3Ye-_pXPnwFAX52OWH-fjVqI=w480-h960-rw" },
  { name: "Monte Carlo", initials: "MC",  color: "#922B21", logoUrl: "https://www.montecarlo.in/cdn/shop/files/MC_Logo.svg?v=1742448146" },
  // ── Mid-strip — supporting depth ──
  { name: "Ramraj",      initials: "RR",  color: "#2E4057", logoUrl: "https://logo.clearbit.com/ramrajcotton.in" },
  { name: "Cobb Italy",  initials: "CI",  color: "#6D214F", logoUrl: "https://logo.clearbit.com/cobbitaly.com" },
  { name: "Goel Power",  initials: "GP",  color: "#117A65", logoUrl: null },
  { name: "KLM",         initials: "KLM", color: "#7D3C98", logoUrl: "https://logo.clearbit.com/klmjewellers.com" },
  { name: "Fabel",       initials: "FAB", color: "#1B4F72", logoUrl: null },
  { name: "BIBA",        initials: "BIBA", color: "#C0392B", logoUrl: "https://logo.clearbit.com/biba.in" },
  { name: "Income",      initials: "INC",  color: "#1A5276", logoUrl: "https://logo.clearbit.com/income.com.sg" },
  // ── Recency anchors — seen last, remembered second-most ──
  { name: "D'Decor",     initials: "DD",   color: "#B7410E", logoUrl: "https://logo.clearbit.com/ddecor.com" },
  { name: "Axtria",      initials: "AXT",  color: "#1F618D", logoUrl: "https://logo.clearbit.com/axtria.com" },
  { name: "IMDA",        initials: "IMDA", color: "#117A65", logoUrl: "https://logo.clearbit.com/imda.gov.sg" },
  { name: "Asian Footwear", initials: "AF", color: "#0E6655", logoUrl: null },
];
