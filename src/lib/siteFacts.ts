/**
 * SINGLE SOURCE OF TRUTH: Fiza Engineering Corporation
 * Centralizes all verified company facts, statistics, operational figures, and contact details.
 * Values marked TODO are unverified and must be confirmed by the owner before launch.
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
  
  // Rail infrastructure
  railTrackKm: "1,140 km", // TODO: OWNER TO VERIFY
  railTrackKmNumber: 1140, // TODO: OWNER TO VERIFY
  spursCompletedKm: "42 km", // TODO: OWNER TO VERIFY - completed Falea & Madagascar mineral spurs
  spursCompletedKmNumber: 42, // TODO: OWNER TO VERIFY
  
  // Facilities & Operations
  commissionedFacilities: "14", // TODO: OWNER TO VERIFY - Turnkey industrial plants
  rebuildDepotArea: "35,000 m²", // TODO: OWNER TO VERIFY - Bamako central rebuild depot
  haulRoadsBuiltKm: "850+ km", // TODO: OWNER TO VERIFY - All-weather heavy civil haul roads
  arableLandHectares: "45,000 hectares", // TODO: OWNER TO VERIFY - Commercial agriculture land developed
  procuredEquipmentMachines: "850+ machines", // TODO: OWNER TO VERIFY - Sourced and rebuilt equipment units
  
  // Commodity Trading Volume
  annualTradedMineralTonnes: "4.2M tonnes", // TODO: OWNER TO VERIFY - Traded mineral volume

  // Power Generation
  installedPower: "185 MW", // TODO: OWNER TO VERIFY
  installedPowerNumber: 185, // TODO: OWNER TO VERIFY

  // Tonnage: Consistent annual figure (no record claims)
  annualTonnesMoved: "38M Tonnes",
  annualTonnesNumber: "38M",

  // Safety & Operational Standards
  ltifrRate: "0.12", // Lost-Time Injury Frequency Rate // TODO: VERIFY
  fleetAvailability: "94%+", // TODO: OWNER TO VERIFY

  // Contact Information - Unified contact set
  contact: {
    primaryEmail: "info@fizaengineering.com",
    projectsEmail: "projects@fizaengineering.com",
    supportEmail: "support@fizaengineering.com",
    primaryPhone: "+971 4 362 8800", // TODO: OWNER TO VERIFY
    hqCity: "Dubai, United Arab Emirates",
    hqAddress: "DIFC Gate Precinct, Building 4, Level 7, Dubai", // TODO: OWNER TO VERIFY
  },

  // Regional Footprint: Real operations hubs (no unverified SE Asia / Latin America offices)
  footprintRegions: "Middle East (Headquarters) · West Africa · Central Africa · Southern Africa",

  offices: [
    {
      city: "Dubai",
      country: "United Arab Emirates",
      type: "Corporate Headquarters & International Mineral Trading Hub",
      address: "DIFC Gate Precinct, Building 4, Level 7, Dubai", // TODO: OWNER TO VERIFY
      phone: "+971 4 362 8800", // TODO: OWNER TO VERIFY
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
