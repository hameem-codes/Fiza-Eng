/**
 * SINGLE SOURCE OF TRUTH: Certifications, Awards, and Operational Milestones
 * Legal and regulatory compliance claims for Fiza Engineering Corporation.
 * All items marked with TODO require official owner documentation before verification.
 */

import { SITE_FACTS } from "./siteFacts";

export type AchievementCategory = "Certifications" | "Awards" | "Milestones" | "Partnerships";

export interface Achievement {
  id: string;
  year: number;
  category: AchievementCategory;
  title: string;
  issuer: string;
  description: string;
  certificateNumber?: string;
  evidenceUrl?: string; // Path or link to certificate PDF
  verified: boolean; // Must be false until owner provides proof
  issuerLogoLicensed?: boolean; // Only display logos when officially licensed
  isInternalMilestone?: boolean;
}

// Config flag: Set to true to enforce only verified credentials in production.
// Set to false during owner review and documentation intake.
export const HIDE_UNVERIFIED_ACHIEVEMENTS = false;

export const ACHIEVEMENT_CATEGORIES: readonly ("ALL" | AchievementCategory)[] = [
  "ALL",
  "Certifications",
  "Awards",
  "Milestones",
  "Partnerships",
] as const;

export const ACHIEVEMENTS: Achievement[] = [
  {
    // TODO: OWNER TO PROVIDE CERTIFICATE: ISO 45001:2018 certificate copy and audit report
    id: "iso-45001",
    year: 2025,
    category: "Certifications",
    title: "ISO 45001:2018 Occupational Health & Safety",
    issuer: "Bureau Veritas International",
    certificateNumber: "PENDING OWNER CONFIRMATION",
    description: `Certified across all ${SITE_FACTS.activeProjectSites} active project sites, reflecting an industry-leading lost-time injury frequency rate (LTIFR) of ${SITE_FACTS.ltifrRate} per million hours.`,
    evidenceUrl: undefined, // e.g. "/certificates/iso-45001.pdf"
    verified: false,
    issuerLogoLicensed: false,
  },
  {
    // TODO: OWNER TO PROVIDE CERTIFICATE: African Development Engineering Forum award citation
    id: "african-infrastructure-award",
    year: 2024,
    category: "Awards",
    title: "Heavy Infrastructure Excellence Award",
    issuer: "African Development Engineering Forum",
    description: "Recognized for the rapid, flood-resistant construction of Phase One of the Falea Bauxite & Mineral Corridor in southwestern Mali (commenced 2023).",
    evidenceUrl: undefined,
    verified: false,
    issuerLogoLicensed: false,
  },
  {
    // TODO: OWNER TO PROVIDE CERTIFICATE: ISO 9001:2015 certificate copy
    id: "iso-9001",
    year: 2023,
    category: "Certifications",
    title: "ISO 9001:2015 Quality Management Systems",
    issuer: "SGS Global Services",
    certificateNumber: "PENDING OWNER CONFIRMATION",
    description: "Covers turnkey mineral processing plant fabrication, machine remanufacturing, and heavy-haul rail maintenance.",
    evidenceUrl: undefined,
    verified: false,
    issuerLogoLicensed: false,
  },
  {
    // TODO: OWNER TO PROVIDE CERTIFICATE: Internal earthmoving audit log
    // TODO: CONFLICT: User prompt mentioned 35M tonnes, but siteFacts.annualTonnesMoved was established as 38M Tonnes per previous instruction. Using SITE_FACTS.annualTonnesMoved.
    id: "annual-tonnage-milestone",
    year: 2023,
    category: "Milestones",
    title: `${SITE_FACTS.annualTonnesMoved} Moved Annually`,
    issuer: "Internal Operational Milestone",
    description: `Achieved annual earthmoving volume of ${SITE_FACTS.annualTonnesMoved} across open-pit concessions with heavy fleet availability maintained above ${SITE_FACTS.fleetAvailability}.`,
    evidenceUrl: undefined,
    verified: false,
    isInternalMilestone: true,
    issuerLogoLicensed: false,
  },
  {
    // TODO: OWNER TO PROVIDE CERTIFICATE: ISO 14001:2015 certificate copy
    id: "environmental-sustainability",
    year: 2022,
    category: "Certifications",
    title: "ISO 14001:2015 Environmental Stewardship",
    issuer: "DNV GL",
    certificateNumber: "PENDING OWNER CONFIRMATION",
    description: "Tailings dam structural monitoring protocols and comprehensive post-extraction land contouring and reforestation frameworks.",
    evidenceUrl: undefined,
    verified: false,
    issuerLogoLicensed: false,
  },
  {
    // TODO: OWNER TO PROVIDE CERTIFICATE: Pan-African Mineral Logistics Syndicate agreement
    id: "strategic-partnership",
    year: 2021,
    category: "Partnerships",
    title: "Pan-African Mineral Logistics Syndicate",
    issuer: "International Port Authorities",
    description: "Priority deep-water berth access and rail connection rights established at two West African and two East African commercial maritime hubs.",
    evidenceUrl: undefined,
    verified: false,
    issuerLogoLicensed: false,
  },
];

export function getVisibleAchievements(): Achievement[] {
  if (HIDE_UNVERIFIED_ACHIEVEMENTS) {
    return ACHIEVEMENTS.filter((item) => item.verified);
  }
  return ACHIEVEMENTS;
}
