import { SITE_FACTS } from "./siteFacts";
import { SITE_IMAGES } from "./images";

export interface Capability {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  scope: string[];
  keyMetrics: { label: string; value: string }[];
  image: string;
  bigStat: { value: string; label: string };
}

export type { Project, ProjectStatus } from "./projects";
export { PROJECTS, hiddenProjects } from "./projects";

export type { ProductItem, KeySpec } from "./products";
export { PRODUCTS, TRADED_MINERALS, ALL_CATALOG_ITEMS, SHOW_PRODUCT_SPECS } from "./products";

export interface MineralResource {
  id: string;
  name: string;
  chemicalSymbol: string;
  grade: string;
  hubs: string[];
  annualVolume: string;
  description: string;
  specifications: { label: string; value: string }[];
}

export interface NewsArticle {
  id: string;
  slug: string;
  date: string;
  category: string;
  headline: string;
  leadParagraph: string;
  bodyParagraphs: string[];
  pullQuote?: {
    quote: string;
    author: string;
  };
  image: string;
}

export interface Leader {
  name: string;
  title: string;
  image: string;
  bio: string;
  focus: string;
  quote?: string;
}

export interface Partner {
  id: string;
  name: string;
  country: string;
  domain: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  summary: string;
  detail: string;
}


export interface OfficeLocation {
  city: string;
  country: string;
  type: string;
  address: string;
  phone: string;
  email: string;
  coordinates: { x: number; y: number };
}

export const COMPANY_STATS = [
  { value: SITE_FACTS.fleetSize, label: "Heavy Machines", highlight: false },
  { value: String(SITE_FACTS.countries), label: "Countries", highlight: false },
  { value: String(SITE_FACTS.continents), label: "Active Continents", highlight: false },
  { value: SITE_FACTS.yearsInBusinessExcellence, label: "Experience", highlight: true },
];

export const CAPABILITIES: Capability[] = [
  {
    id: "mining-services",
    slug: "mining-services",
    title: "Mining Services",
    tagline: "High-tonnage extraction, fleet mobilization, and deposit feasibility.",
    description: "We provide turnkey pit-to-port mining operations using our fleet of 450+ heavy earthmoving machines across West and Central Africa. Our work spans geological validation, round-the-clock overburden stripping, and site restoration.",
    scope: [
      "Open-Pit Overburden Stripping & Haulage",
      "Exploratory Core Drilling & Assay Coordination",
      "Tailings Management & Remediation Infrastructure"
    ],
    keyMetrics: [
      { label: "Annual Material Moved", value: `${SITE_FACTS.annualTonnesNumber} tonnes` },
      { label: "Fleet Availability Rate", value: SITE_FACTS.fleetAvailability },
      { label: "Safety Lost-Time Frequency", value: SITE_FACTS.ltifrRate }
    ],
    bigStat: {
      value: `${SITE_FACTS.annualTonnesNumber} tonnes`,
      label: "Annual Material Moved"
    },
    image: SITE_IMAGES.capabilities.miningServices.src
  },
  {
    id: "mineral-trading",
    slug: "mineral-trading",
    title: "Mineral Trading",
    tagline: "Direct physical commodity flows from African concessions to global smelters.",
    description: "We connect African extraction operations directly to industrial end-users across Asia, Europe, and the Middle East. We supply bulk bauxite, iron ore (hematite and magnetite), and copper (cathode and blister) to international refineries through long-term agreements.",
    scope: [
      "Bauxite (Metallurgical & Chemical Grade)",
      "High-Grade Iron Ore (Hematite & Magnetite)",
      "Cathode Copper & Blister Ingots"
    ],
    keyMetrics: [
      { label: "Annual Traded Volume", value: SITE_FACTS.annualTradedMineralTonnes },
      { label: "Active Off-Take Port Hubs", value: "5 Deep-Water Terminals" },
      { label: "Assay Purity Average", value: "99.2% Standard Grade" }
    ],
    bigStat: {
      value: SITE_FACTS.annualTradedMineralTonnes,
      label: "Annual Traded Volume"
    },
    image: SITE_IMAGES.capabilities.mineralTrading.src
  },
  {
    id: "railway-solutions",
    slug: "railway-solutions",
    title: "Railway Solutions",
    tagline: "Heavy-haul rail corridors connecting isolated deposits to deep-water ports.",
    description: "We build and maintain heavy-haul railway corridors connecting inland mineral deposits to ocean ports. Our services include track laying, ballast tamping, rolling stock maintenance, and corridor operation rated for 32-tonne axle loads.",
    scope: [
      "Heavy-Haul Track Laying & Ballast Tamping",
      "Locomotive & Rolling Stock Fleet Maintenance",
      "Signaling Systems & Sub-Grade Stabilization"
    ],
    keyMetrics: [
      { label: "Track Network Maintained", value: SITE_FACTS.railTrackKm },
      { label: "Axle Load Rating", value: "32.5 Tonnes" },
      { label: "Rolling Stock Units Managed", value: "620 Railcars" }
    ],
    bigStat: {
      value: SITE_FACTS.railTrackKm,
      label: "Track Maintained"
    },
    image: SITE_IMAGES.capabilities.railwaySolutions.src
  },
  {
    id: "infrastructure",
    slug: "infrastructure",
    title: "Heavy Infrastructure",
    tagline: "Arterial haul roads, bridges, water reticulation, and industrial civil works.",
    description: "We engineer and construct heavy civil works for industrial sites. Our capabilities include 90-tonne class haul roads, reinforced concrete river bridges, mass foundations, and bulk water management structures.",
    scope: [
      "90-tonne class haul roads",
      "High-Capacity Reinforced Concrete Bridges",
      "Bulk Earthworks, Foundations & Drainage"
    ],
    keyMetrics: [
      { label: "All-Weather Haul Roads Built", value: SITE_FACTS.haulRoadsBuiltKm },
      { label: "Structural Concrete Poured", value: "420,000 m³" },
      { label: "Bridge Spans Completed", value: "18 River Crossings" }
    ],
    bigStat: {
      value: SITE_FACTS.haulRoadsBuiltKm,
      label: "Haul Roads Built"
    },
    image: SITE_IMAGES.capabilities.heavyCivil.src
  },
  {
    id: "turnkey-plants",
    slug: "turnkey-plants",
    title: "Turnkey Industrial Plants",
    tagline: "Integrated mineral processing, crushing circuits, and smelting facilities.",
    description: "We design, fabricate, and assemble modular mineral processing facilities from greenfield sites to full commissioning. Plants include multi-stage crushing circuits, magnetic separation, flotation units, and automated control centers.",
    scope: [
      "Primary & Secondary Crushing Stations",
      "Dense Media & Magnetic Separation Circuits",
      "Structural Steel Fabrication & SCADA Automation"
    ],
    keyMetrics: [
      { label: "Commissioned Plants", value: `${SITE_FACTS.commissionedFacilities} facilities` },
      { label: "Peak Processing Capacity", value: "1,500 TPH" },
      { label: "Commissioning Runway", value: "Average 11 Months" }
    ],
    bigStat: {
      value: `${SITE_FACTS.commissionedFacilities} facilities`,
      label: "Commissioned Facilities"
    },
    image: SITE_IMAGES.capabilities.turnkeyPlants.src
  },
  {
    id: "agriculture",
    slug: "agriculture",
    title: "Commercial Agriculture",
    tagline: "Large-scale land clearing, center-pivot irrigation, and agro-processing hubs.",
    description: "We develop large-scale agricultural projects across arable land. Our work includes bush clearing, land leveling, center-pivot irrigation systems, grain storage silos, and agro-processing facilities.",
    scope: [
      "Precision Land Clearing & Soil Preparation",
      "Center-Pivot Irrigation & Intake Stations",
      "Grain Storage Silos & Milling Facilities"
    ],
    keyMetrics: [
      { label: "Arable Land Developed", value: SITE_FACTS.arableLandHectares },
      { label: "Irrigation Systems Active", value: "78 Pivot Units" },
      { label: "Grain Storage Capacity", value: "120,000 Metric Tonnes" }
    ],
    bigStat: {
      value: SITE_FACTS.arableLandHectares,
      label: "Arable Land Developed"
    },
    image: SITE_IMAGES.capabilities.commercialAgriculture.src
  },
  {
    id: "equipment-procurement",
    slug: "equipment-procurement",
    title: "Equipment Procurement & Rebuild",
    tagline: "Global sourcing, refurbishment, and rapid deployment of heavy machinery.",
    description: "We source, inspect, and deliver heavy mining machinery from global channels. Our technical teams rebuild powertrains, supply replacement components, and manage transport directly to remote project sites.",
    scope: [
      "Excavators 50T-200T, tier-1 OEM brands",
      "Powertrain Rebuild & Component Exchange",
      "Heavy Equipment Logistics & Operator Training"
    ],
    keyMetrics: [
      { label: "Machines Delivered to Africa", value: SITE_FACTS.procuredEquipmentMachines },
      { label: "Critical Parts Stockpile", value: "$18.5M Inventory" },
      { label: "Transit Lead Time Average", value: "32 Days Port to Site" }
    ],
    bigStat: {
      value: SITE_FACTS.procuredEquipmentMachines,
      label: "Delivered Machinery"
    },
    image: SITE_IMAGES.capabilities.equipmentRemanufacturing.src
  },
  {
    id: "industrial-power",
    slug: "industrial-power",
    title: "Industrial Microgrids",
    tagline: "Off-grid hybrid solar, heavy fuel oil (HFO), and substation engineering.",
    description: "We build and operate dedicated power generation systems for remote industrial sites. Our installations combine utility-scale solar arrays, heavy fuel oil or diesel generators, and battery storage to ensure continuous power.",
    scope: [
      "Base-Load Generator Stations",
      "Industrial Solar PV Arrays & Battery Storage",
      "High-Voltage Transmission Lines & Substations"
    ],
    keyMetrics: [
      { label: "Installed Generation Capacity", value: SITE_FACTS.installedPower },
      { label: "Microgrid Uptime", value: "99.94%" },
      { label: "Fuel Displacement via Solar", value: "32% Annual" }
    ],
    bigStat: {
      value: SITE_FACTS.installedPower,
      label: "Generation Capacity"
    },
    image: SITE_IMAGES.capabilities.energyMicrogrids.src
  }
];



export const MINERALS: MineralResource[] = [
  {
    id: "bauxite",
    name: "Bauxite (Alumina Ore)",
    chemicalSymbol: "Al₂O₃ · 2H₂O",
    grade: "48% - 54% Al₂O₃",
    hubs: ["Mali", "Guinea Corridor"],
    annualVolume: "8.5M MT",
    description: "High-grade trihydrate bauxite extracted from plateau deposits, featuring ultra-low reactive silica (<2.1%) suitable for low-temperature Bayer process refining.",
    specifications: [
      { label: "Total Alumina (Al₂O₃)", value: "52.4% Typical" },
      { label: "Reactive Silica (SiO₂)", value: "1.8% Maximum" },
      { label: "Moisture Content", value: "6.5% Seasonal" },
      { label: "Sizing", value: "0 - 100 mm Run of Mine" }
    ]
  },
  {
    id: "iron-ore",
    name: "Hematite / Magnetite Iron Ore",
    chemicalSymbol: "Fe₂O₃ / Fe₃O₄",
    grade: "62.5% - 64.8% Fe",
    hubs: ["Central Africa", "West Africa"],
    annualVolume: "4.2M MT",
    description: "Premium coarse and fine direct shipping ore (DSO) with minimal phosphorus and alumina penalties, traded through long-term off-take agreements to international mills.",
    specifications: [
      { label: "Iron Content (Fe)", value: "63.5% Basis" },
      { label: "Silica (SiO₂)", value: "3.2% Typical" },
      { label: "Phosphorus (P)", value: "0.04% Max" },
      { label: "Moisture", value: "4.0% Max" }
    ]
  },
  {
    id: "copper-cathode",
    name: "Copper Cathode (Grade A)",
    chemicalSymbol: "Cu",
    grade: "99.9935% Cu Minimum",
    hubs: ["DRC Copperbelt", "Zambia Corridor"],
    annualVolume: "140,000 MT",
    description: "LME Grade A electro-refined copper cathodes originating from solvent extraction-electrowinning (SX-EW) circuits in the Kolwezi mining district.",
    specifications: [
      { label: "Purity", value: "99.99% Cu" },
      { label: "Standard", value: "BS EN 1978:1998 (Cu-ETP-2)" },
      { label: "Dimensions", value: "914 mm x 914 mm approx" },
      { label: "Bundle Weight", value: "2.5 Metric Tonnes" }
    ]
  },
  {
    id: "ilmenite",
    name: "Ilmenite Heavy Mineral Sands",
    chemicalSymbol: "FeTiO₃",
    grade: "52.0% - 54.5% TiO₂",
    hubs: ["Madagascar Maritime Coast"],
    annualVolume: "650,000 MT",
    description: "Beach placer mineral sand concentrate separated through multi-stage spiral concentrators, serving the sulfate-route titanium pigment manufacturing sector.",
    specifications: [
      { label: "Titanium Dioxide (TiO₂)", value: "52.8% Guaranteed" },
      { label: "Total Iron (FeO + Fe₂O₃)", value: "38.2% Typical" },
      { label: "U + Th (Radionuclides)", value: "< 120 ppm Low Trace" },
      { label: "Bulk Density", value: "2.65 t/m³" }
    ]
  }
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: "falea-terminal-phase-one-complete",
    slug: "falea-terminal-phase-one-complete",
    date: "2026-08-14",
    category: "INFRASTRUCTURE & MINING",
    headline: "Phase One of the Falea Mineral Corridor Completed Ahead of Schedule",
    leadParagraph: "Fiza Engineering Corporation has officially commissioned the first 94 kilometers of the Falea heavy-haul logistics artery in southwestern Mali, clearing the corridor for commercial mineral transit.",
    bodyParagraphs: [
      "Following 14 months of sustained earthmoving across challenging lateritic terrain, the specialized civil infrastructure division of Fiza has completed all bridges, culverts, and crushed-basalt pavement courses. The roadway links remote extraction plateaus directly to the river barge loading facility.",
      "The engineering team deployed 85 heavy units including rigid frame haulers, motorized graders, and vibrating compactors working double shifts. Reinforced concrete bridge piers were anchored directly into deep bedrocks to prevent seasonal monsoon scour.",
      "With initial load testing demonstrating that 90-tonne triple road trains can safely sustain speeds of 65 km/h, the corridor will slash transit times by over 70%, lowering per-tonne export logistics costs for partner mining entities."
    ],
    pullQuote: {
      quote: "We do not wait for ideal conditions. We build roads that withstand torrential rains and carry forty-tonne axles day after day.",
      author: "Dr. Amara Diallo, Chief Operating Officer"
    },
    image: SITE_IMAGES.news.faleaHaulRoad.src
  },
  {
    id: "expanding-heavy-fleet-central-africa",
    slug: "expanding-heavy-fleet-central-africa",
    date: "2026-06-28",
    category: "FLEET LOGISTICS",
    headline: "Fiza Mobilizes 45 Additional Heavy Units to Katanga Operations",
    leadParagraph: "In response to expanding multi-year overburden stripping agreements, Fiza has completed the offloading and transit of 45 tier-1 heavy mining machines through the Port of Dar es Salaam into the DRC.",
    bodyParagraphs: [
      "The shipment includes twelve 100-tonne rigid haul trucks, eight hydraulic excavators, and five tracked dozer units, bringing Fiza's active fleet in Central Africa to over 220 mechanized pieces.",
      "All units were customized at Fiza's regional depot with high-ambient cooling packs, specialized rock protection guards, and GPS-enabled satellite fleet telemetry to allow real-time dispatch monitoring from the regional office in Kinshasa."
    ],
    image: SITE_IMAGES.news.solarMicrogrid.src
  },
  {
    id: "sustainable-hybrid-microgrid-commissioned",
    slug: "sustainable-hybrid-microgrid-commissioned",
    date: "2026-04-12",
    category: "ENERGY SYSTEMS",
    headline: "25MW Industrial Solar-Diesel Hybrid Microgrid Energized",
    leadParagraph: "Fiza's industrial power division has synchronized a 25MW hybrid power station at an isolated mine site, cutting fossil fuel consumption by 34% annually.",
    bodyParagraphs: [
      "Operating off-grid requires continuous reliability. By pairing a 16MW photovoltaic solar field with high-capacity lithium iron phosphate (LFP) energy storage and rapid-response diesel gensets, the facility delivers stable voltage to critical ball mills and flotation circuits.",
      "The control system was designed in-house to automatically modulate generator load based on real-time solar irradiance, setting a new benchmark for mining sustainability across West Africa."
    ],
    pullQuote: {
      quote: "Heavy industry requires guaranteed power. Our hybrid systems provide that certainty without burning diesel unnecessarily.",
      author: "Elena Rostova, VP of Engineering"
    },
    image: SITE_IMAGES.news.railModernization.src
  }
];

export const SOCIAL_POSTS = [
  {
    id: "post-1",
    platform: "DISPATCH: MALI",
    date: "2 DAYS AGO",
    content: "Night shift pit operations at the Falea project site. Continuous haulage operating at 96% mechanical availability despite midday temperatures exceeding 42°C. Ground crew and mechanical bays maintaining safety protocols without disruption.",
    image: SITE_IMAGES.social.sikassoDepot.src
  },
  {
    id: "post-2",
    platform: "FIELD LOG: DRC",
    date: "5 DAYS AGO",
    content: "Arrival of four FIZA-980 hydraulic excavators at the Kolwezi rail siding. Pre-delivery inspection underway before convoy transit to the open-pit cut. Rigorous checks on hydraulic pressures and structural weld lines.",
    image: SITE_IMAGES.social.kolweziFlotation.src
  },
  {
    id: "post-3",
    platform: "LOGISTICS: SIKASSO",
    date: "1 WEEK AGO",
    content: "Grain silo terminal testing: 450 TPH pneumatic bucket elevators clearing 10,000 metric tonnes of seasonal grain into sealed aerated storage. Engineering that secures food supply across the river basin.",
    image: SITE_IMAGES.social.grainTerminal.src
  }
];

export const FOUNDER_INFO = {
  name: "Muhammed Farooghuddin",
  title: "Founder & Chief Executive Officer",
  origin: "India-born and Dubai-based, with more than four decades in international business, mineral trading and industrial development.",
  bio: "India-born and Dubai-based, with more than four decades in international business, mineral trading and industrial development. Under his leadership, Fiza has expanded from an equipment trading business into a multidisciplinary industrial enterprise operating across Africa, Asia, and the Middle East.",
  quote: "Our purpose is to build partnerships that strengthen local capability, create lasting value and help ambitious projects move forward.",
  established: String(SITE_FACTS.foundedYear),
  experience: SITE_FACTS.yearsInBusinessExcellence,
  image: "" // No stock photo - rendered with official PersonPlaceholder
};

export const PARTNERS: Partner[] = [
  {
    id: "aelmet",
    name: "AELMET",
    country: "USA",
    domain: "Heavy Mining Fleet & Technology",
    description: "Collaborative engineering in heavy earthmoving components, mining automation, and specialized ground engaging solutions."
  },
  {
    id: "eliixir-traintech",
    name: "Eliixir Traintech",
    country: "India",
    domain: "Railway Systems & Rolling Stock",
    description: "Strategic execution partner for heavy-haul track modernization, bogie remanufacturing, and railway localization programmes."
  },
  {
    id: "belarusian-agri",
    name: "Belarusian Agricultural Teams",
    country: "Belarus",
    domain: "Commercial Agricultural Machinery",
    description: "Specialized mechanical teams and industrial equipment for large-scale land development, harvesting, and grain silo conveyance."
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Understand",
    summary: "Define commercial need & technical specs",
    detail: "Define the commercial need, technical specification and market context with exhaustive ground feasibility and geotechnical validation."
  },
  {
    number: "02",
    title: "Connect",
    summary: "Identify manufacturers & specialists",
    detail: "Identify the right manufacturers, specialists, operators and stakeholders across governmental ministries, maritime ports, and equipment syndicates."
  },
  {
    number: "03",
    title: "Structure",
    summary: "Align scope & delivery expectations",
    detail: "Align scope, responsibilities, commercial terms and delivery expectations under bankable EPC frameworks and locked off-take structures."
  },
  {
    number: "04",
    title: "Progress",
    summary: "Coordinate execution & commissioning",
    detail: "Coordinate discussions and documentation towards execution, mobilizing heavy fleets, erecting modular circuits, and managing continuous output."
  }
];

export const LEADERSHIP: Leader[] = [
  {
    name: "Muhammed Farooghuddin",
    title: "Founder & Chief Executive Officer",
    image: "",
    bio: "India-born and Dubai-based, with more than four decades in international business, mineral trading and industrial development. Directs Fiza's multidisciplinary mining concessions, turnkey plant EPC, and international commodity supply chains.",
    focus: "Strategic concessions, cross-border partnerships, and industrial infrastructure.",
    quote: "Our purpose is to build partnerships that strengthen local capability, create lasting value and help ambitious projects move forward."
  },
  {
    name: "Dr. Amara Diallo",
    title: "Chief Operating Officer — Mining & Civil",
    image: "",
    bio: "Doctorate in Geological Engineering from Nancy (France). Former senior operations head across West African bauxite and gold belts. Manages over 1,200 site personnel and 450 machine operators.",
    focus: "Open-pit execution, mine planning, occupational safety governance."
  },
  {
    name: "Elena Rostova",
    title: "VP of Engineering & Turnkey Systems",
    image: "",
    bio: "Heavy structural engineer with 22 years experience designing crushing circuits, rail loops, and processing plants in extreme environments across Central Asia and Africa.",
    focus: "Plant EPC, mechanical erection, automation and structural integrity."
  },
  {
    name: "Jean-Paul Kasongo",
    title: "Director of Mineral Logistics & Rail",
    image: "",
    bio: "Railway operations specialist who modernized mining lines across Southern and Central Africa. Directs rail rehabilitation, rolling stock leasing, and deep-water port terminal contracts.",
    focus: "Heavy-haul rail, port stockpiling, multimodal shipping corridors."
  }
];

export const MILESTONES = [
  {
    year: "1994",
    title: "Establishment & International Commodity Trade",
    description: "Founded by Muhammed Farooghuddin, developing international mineral trading and heavy industrial equipment supply channels across the Middle East, Asia, and Africa."
  },
  {
    year: "2001",
    title: "Heavy Fleet Equipment Services",
    description: "Expanded direct operations with heavy earthmoving fleet deployment supporting industrial civil foundations and mining logistics."
  },
  {
    year: "2007",
    title: "Open-Pit Mining Concessions",
    description: "Awarded multi-year overburden stripping concessions in Mali, establishing on-site rebuild machine workshops."
  },
  {
    year: "2013",
    title: "Turnkey Industrial Plants Division",
    description: "Commissioned automated primary crushing circuits and expanded into Central Africa and the DRC copperbelt."
  },
  {
    year: "2018",
    title: "Direct Mineral Trading Corridors",
    description: "Structured direct off-take agreements for bauxite, high-grade hematite iron ore, and cathode copper to global markets."
  },
  {
    year: "2022",
    title: "Heavy-Haul Rail Infrastructure",
    description: "Executed railway track renewal and heavy-haul rolling stock operations across specialized mineral corridors."
  },
  {
    year: "2026",
    title: `${SITE_FACTS.yearsInBusinessLabel} Across 4 Continents`,
    description: `Operating integrated mining, civil, rail, and agro-industrial infrastructure projects across ${SITE_FACTS.countries} countries on ${SITE_FACTS.continents} continents.`
  }
];

export const ACHIEVEMENTS = [
  {
    id: "iso-45001",
    category: "Certifications",
    year: "2025",
    title: "ISO 45001:2018 Occupational Health & Safety",
    organization: "Bureau Veritas International",
    description: `Certified across all 14 active project sites, reflecting an industry-leading lost-time injury frequency rate (LTIFR) of ${SITE_FACTS.ltifrRate} per million hours.`
  },
  {
    id: "african-infrastructure-award",
    category: "Awards",
    year: "2024",
    title: "Heavy Infrastructure Excellence Award",
    organization: "African Development Engineering Forum",
    description: "Recognized for the rapid, flood-resistant construction of the Falea Mineral Corridor in southwestern Mali."
  },
  {
    id: "iso-9001",
    category: "Certifications",
    year: "2023",
    title: "ISO 9001:2015 Quality Management Systems",
    organization: "SGS Global Services",
    description: "Covers turnkey mineral processing plant fabrication, machine remanufacturing, and heavy-haul rail maintenance."
  },
  {
    id: "mineral-corridor-milestone",
    category: "Milestones",
    year: "2023",
    title: "38 Million Tonnes Moved Annually",
    organization: "Internal Operations Milestone",
    description: "Achieved annual earthmoving of 38 million tonnes across open-pit concessions with fleet availability above 94%."
  },
  {
    id: "environmental-sustainability",
    category: "Certifications",
    year: "2022",
    title: "ISO 14001:2015 Environmental Stewardship",
    organization: "DNV GL",
    description: "Tailings dam structural monitoring and comprehensive post-extraction land contouring and reforestation protocols."
  },
  {
    id: "strategic-partnership",
    category: "Partnerships",
    year: "2021",
    title: "Pan-African Mineral Logistics Syndicate",
    organization: "International Port Authorities",
    description: "Secured priority deep-water berth access and rail connection rights at two West African and two East African commercial maritime hubs."
  }
];

export const OFFICES: OfficeLocation[] = SITE_FACTS.offices;
