import React from "react";
import type { Metadata } from "next";
import { HomeHero } from "@/components/sections/HomeHero";
import { CompanyEditorial } from "@/components/sections/CompanyEditorial";
import { CapabilitiesGrid } from "@/components/sections/CapabilitiesGrid";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { DataWall } from "@/components/sections/DataWall";
import { ActiveProjectsSection } from "@/components/sections/ActiveProjectsSection";
import { FounderSection } from "@/components/sections/FounderSection";
import { PartnersMention } from "@/components/sections/PartnersMention";

export const metadata: Metadata = {
  title: "Heavy Engineering, Mining & Rail | Fiza Engineering",
  description:
    "Direct open-pit mining concessions, turnkey plant EPC, and heavy-haul railway corridors connecting African resource belts to global markets.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Heavy Engineering, Mining & Rail | Fiza Engineering",
    description:
      "Direct open-pit mining concessions, turnkey plant EPC, and heavy-haul railway corridors connecting African resource belts to global markets.",
    url: "https://fiza-one.vercel.app",
    siteName: "Fiza Engineering Corporation",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Heavy Engineering, Mining & Rail | Fiza Engineering",
    description:
      "Direct open-pit mining concessions, turnkey plant EPC, and heavy-haul railway corridors connecting African resource belts to global markets.",
  },
};

export default function HomePage() {
  return (
    <div className="w-full">
      {/* 1. Hero */}
      <HomeHero />

      {/* 2. About */}
      <CompanyEditorial />

      {/* 3. Services */}
      <CapabilitiesGrid />

      {/* 4. How We Work */}
      <ProcessSection />

      {/* 5. Projects & Operational Model */}
      <DataWall />
      <ActiveProjectsSection />

      {/* 6. Leadership */}
      <FounderSection />

      {/* 7. Partners Mention */}
      <PartnersMention />
    </div>
  );
}
