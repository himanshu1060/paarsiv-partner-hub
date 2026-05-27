export type Brand = {
  name: string;
  initials: string;
  color: string;
  logoUrl: string | null;
};

export const BRANDS: Brand[] = [
  { name: "FnP",         initials: "FnP", color: "#E85D04", logoUrl: "https://play-lh.googleusercontent.com/5AobDqCU-TbarD6OtDTDf5TVf-sY1ApObTxn_KB8EK6d3Ye-_pXPnwFAX52OWH-fjVqI=w480-h960-rw" },
  { name: "Fabel",       initials: "FAB", color: "#1B4F72", logoUrl: null },
  { name: "Cobb Italy",  initials: "CI",  color: "#6D214F", logoUrl: "https://logo.clearbit.com/cobbitaly.com" },
  { name: "Mount Sinai", initials: "MS",  color: "#1A5276", logoUrl: "https://logo.clearbit.com/mountsinai.org" },
  { name: "Ramraj",      initials: "RR",  color: "#2E4057", logoUrl: "https://logo.clearbit.com/ramrajcotton.in" },
  { name: "KLM",         initials: "KLM", color: "#7D3C98", logoUrl: "https://logo.clearbit.com/klmjewellers.com" },
  { name: "Goel Power",  initials: "GP",  color: "#117A65", logoUrl: null },
  { name: "Monte Carlo", initials: "MC",  color: "#922B21", logoUrl: "https://www.montecarlo.in/cdn/shop/files/MC_Logo.svg?v=1742448146" },
  { name: "Axtria",      initials: "AXT", color: "#1F618D", logoUrl: "https://logo.clearbit.com/axtria.com" },
];
