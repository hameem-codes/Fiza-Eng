/**
 * SINGLE SOURCE OF TRUTH: Fiza Engineering Corporation
 * Centralizes all verified company facts, statistics, operational figures, and contact details.
 * Any unverified values are noted with // TODO: VERIFY.
 */

export const FOUNDED_YEAR = 1994;

const now = new Date();
export const currentYear = now.getFullYear();
export const yearsInBusiness = currentYear - FOUNDED_YEAR; // e.g. 32
export const yearsInBusinessDecade = Math.floor(yearsInBusiness / 10) * 10; // e.g. 30
export const yearsInBusinessLabel = `${yearsInBusinessDecade}+ Years`; // "30+ Years"
export const yearsInBusinessStory = `Our ${yearsInBusinessDecade}+ Year Story`; // "Our 30+ Year Story"
export const yearsInBusinessExcellence = `${yearsInBusinessDecade}+ Years of Excellence`; // "30+ Years of Excellence"
export const yearsInBusinessLower = `${yearsInBusinessDecade}+ years`; // "30+ years"

export interface OfficeData {
  city: string;
  country: string;
  type: string;
  address: string;
  phone: string; // TODO: VERIFY
  email: string;
  coordinates: { x: number; y: number };
}

export const SITE_FACTS = {
  companyName: "Fiza Engineering Corporation",
  shortName: "FIZA",
  tagline: "Heavy Engineering, Mining & Infrastructure",
  foundedYear: FOUNDED_YEAR,
  yearsInBusiness,
  yearsInBusinessLabel,
  yearsInBusinessStory,
  yearsInBusinessExcellence,
  yearsInBusinessLower,

  // Operational Scale & Capacity
  fleetSize: "450+", // TODO: VERIFY
  fleetSizeNumber: 450, // TODO: VERIFY
  countries: 12, // TODO: VERIFY
  continents: 4, // Middle East, Africa, Asia, plus global trade // TODO: VERIFY
  kilometresOfTrack: "42 km", // TODO: VERIFY - completed Falea & Madagascar corridors
  kilometresOfTrackNumber: 42, // TODO: VERIFY
  mwInstalled: "25MW", // TODO: VERIFY - industrial hybrid microgrid
  mwInstalledNumber: 25, // TODO: VERIFY

  // Tonnage: Consistent unified figures
  // ONE annual figure plus clearly dated record figure
  annualTonnesMoved: "38M Tonnes",
  annualTonnesNumber: "38M",
  recordTonnesYear: "2023",
  recordTonnesMoved: "38 Million Tonnes in 2023",
  recordTonnesDescription: "Achieved record annual earthmoving of 38 million tonnes across open-pit contracts in 2023 with fleet availability above 94%.",

  // Safety & Operational Standards
  ltifrRate: "0.12", // Lost-Time Injury Frequency Rate // TODO: VERIFY
  fleetAvailability: "94.8%", // TODO: VERIFY

  // Contact Information - Unified contact set
  contact: {
    primaryEmail: "info@fizaengineering.com",
    projectsEmail: "projects@fizaengineering.com",
    supportEmail: "support@fizaengineering.com",
    primaryPhone: "+971 4 362 8800", // TODO: VERIFY
    hqCity: "Dubai, United Arab Emirates",
    hqAddress: "DIFC Gate Precinct, Building 4, Level 7, Dubai",
  },

  // Regional Footprint: Real operations hubs (no unverified SE Asia / Latin America offices)
  footprintRegions: "Middle East (Headquarters) · West Africa · Central Africa · Southern Africa",

  offices: [
    {
      city: "Dubai",
      country: "United Arab Emirates",
      type: "Corporate Headquarters & International Mineral Trading Hub",
      address: "DIFC Gate Precinct, Building 4, Level 7, Dubai",
      phone: "+971 4 362 8800", // TODO: VERIFY
      email: "info@fizaengineering.com",
      coordinates: { x: 74, y: 35 }
    },
    {
      city: "Bamako",
      country: "Mali",
      type: "West Africa Regional Operations & Fleet Depot",
      address: "Zone Industrielle de Sotuba, Route de Koulikoro, Bamako",
      phone: "+223 20 28 44 00", // TODO: VERIFY
      email: "info@fizaengineering.com",
      coordinates: { x: 38, y: 44 }
    },
    {
      city: "Kinshasa & Kolwezi",
      country: "Democratic Republic of Congo",
      type: "Central Africa Operations & Mineral Logistics",
      address: "Boulevard du 30 Juin, Gombe, Kinshasa / Kolwezi Mining Hub",
      phone: "+243 81 55 92 100", // TODO: VERIFY
      email: "info@fizaengineering.com",
      coordinates: { x: 54, y: 56 }
    },
    {
      city: "Johannesburg",
      country: "South Africa",
      type: "Engineering Design & Supply Chain Center",
      address: "Sandton City Office Towers, 5th Street, Sandton, 2196",
      phone: "+27 11 884 9200", // TODO: VERIFY
      email: "info@fizaengineering.com",
      coordinates: { x: 56, y: 78 }
    }
  ] as OfficeData[]
};
