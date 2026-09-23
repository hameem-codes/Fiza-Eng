import React from "react";
import type { Metadata } from "next";
import { HomeHero } from "@/components/sections/HomeHero";
import { StatsWall } from "@/components/sections/StatsWall";
import { CompanyEditorial } from "@/components/sections/CompanyEditorial";
import { CapabilitiesGrid } from "@/components/sections/CapabilitiesGrid";
import { ActiveProjectsSection } from "@/components/sections/ActiveProjectsSection";
import { FounderSection } from "@/components/sections/FounderSection";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Heavy Engineering, Mining & Rail | Fiza Engineering",
  description:
    "Founded in 1994, Fiza Engineering operates heavy open-pit mining concessions, industrial rail corridors, and turnkey processing facilities across Africa.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Heavy Engineering, Mining & Rail | Fiza Engineering",
    description:
      "Founded in 1994, Fiza Engineering operates heavy open-pit mining concessions, industrial rail corridors, and turnkey processing facilities across Africa.",
    url: "https://fiza-one.vercel.app",
    siteName: "Fiza Engineering Corporation",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Heavy Engineering, Mining & Rail | Fiza Engineering",
    description:
      "Founded in 1994, Fiza Engineering operates heavy open-pit mining concessions, industrial rail corridors, and turnkey processing facilities across Africa.",
  },
};

export default function HomePage() {
  return (
    <div className="w-full">
      {/* 1. Hero (video placeholder, marquee ticker, serif headline, stats bar) */}
      <HomeHero />

      {/* 2. Stats Wall — 5 massive animated numbers on dark charcoal */}
      <StatsWall />

      {/* 3. About — 65/35 asymmetric, founder portrait, pull-quote */}
      <CompanyEditorial />

      {/* 3. Three primary divisions */}
      <CapabilitiesGrid />

      {/* 4. Featured projects (3 active projects matching /projects) */}
      <ActiveProjectsSection />

      {/* 5. Leadership strip (Founder profile, placeholder portrait, quote, partners row) */}
      <FounderSection />

      {/* 6. Contact call to action */}
      <ContactCTA />
    </div>
  );
}
