import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/paarsiv/sections/Hero";
import { BrandsStrip } from "@/components/paarsiv/sections/BrandsStrip";
import { ClientVoice } from "@/components/paarsiv/sections/ClientVoice";
import { WhyPaarsiv } from "@/components/paarsiv/sections/WhyPaarsiv";
import { CapabilitiesPreview } from "@/components/paarsiv/sections/CapabilitiesPreview";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Paarsiv — Salesforce Implementation Partner" },
      {
        name: "description",
        content:
          "Salesforce delivery partner specialising in Marketing Cloud, Sales Cloud, Data Cloud, and MCP. 25+ certified professionals, 15+ active projects.",
      },
    ],
  }),
});

function HomePage() {
  return (
    <>
      <Hero />
      <BrandsStrip />
      <ClientVoice />
      <WhyPaarsiv />
      <CapabilitiesPreview />
    </>
  );
}
