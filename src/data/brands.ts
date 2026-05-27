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
  { name: "Mount Sinai",    initials: "MS",   color: "#1A5276", logoUrl: "/logos/mount-sinai.jpg" },
  { name: "FnP",            initials: "FnP",  color: "#E85D04", logoUrl: "https://logo.clearbit.com/fnp.com" },
  { name: "Monte Carlo",    initials: "MC",   color: "#922B21", logoUrl: "/logos/monte-carlo.jpg" },
  // ── Mid-strip — supporting depth ──
  { name: "Ramraj",         initials: "RR",   color: "#2E4057", logoUrl: "/logos/ramraj.jpg" },
  { name: "Cobb Italy",     initials: "CI",   color: "#6D214F", logoUrl: "/logos/cobb-italy.png" },
  { name: "Goel Power",     initials: "GP",   color: "#117A65", logoUrl: "/logos/goel-power.jpg" },
  { name: "Kalamandir",     initials: "KLM",  color: "#C0392B", logoUrl: "/logos/kalamandir.webp" },
  { name: "Fabel",          initials: "FAB",  color: "#1B4F72", logoUrl: null },
  { name: "BIBA",           initials: "BIBA", color: "#C0392B", logoUrl: "/logos/biba.png" },
  { name: "Income",         initials: "INC",  color: "#1A5276", logoUrl: "/logos/income.png" },
  // ── Recency anchors — seen last, remembered second-most ──
  { name: "D'Decor",        initials: "DD",   color: "#B7410E", logoUrl: "https://cdn.ddecor.com/static/version1779678778/frontend/Ddecor/nextgen/en_US/images/logo.svg" },
  { name: "Axtria",         initials: "AXT",  color: "#1F618D", logoUrl: "/logos/axtria.jpg" },
  { name: "IMDA",           initials: "IMDA", color: "#117A65", logoUrl: "/logos/imda.webp" },
  { name: "Asian Footwear", initials: "AF",   color: "#0E6655", logoUrl: "/logos/asian-footwear.jpg" },
];
