import React from "react";
import { HomeHero } from "@/components/sections/HomeHero";
import { CompanyEditorial } from "@/components/sections/CompanyEditorial";
import { CapabilitiesGrid } from "@/components/sections/CapabilitiesGrid";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { DataWall } from "@/components/sections/DataWall";
import { ActiveProjectsSection } from "@/components/sections/ActiveProjectsSection";
import { FounderSection } from "@/components/sections/FounderSection";
import { PartnersMention } from "@/components/sections/PartnersMention";

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
