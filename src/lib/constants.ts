export interface Capability {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  scope: string[];
  keyMetrics: { label: string; value: string }[];
  image: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  location: string;
  country: string;
  status: "ACTIVE" | "IN DEVELOPMENT" | "COMPLETED";
  excerpt: string;
  challenge: string;
  solution: string;
  outcome: string;
  image: string;
  gallery: string[];
  stats: { label: string; value: string }[];
  timeline: string;
  client: string;
}

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

export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  category: string;
  modelNumber: string;
  heroImage: string;
  specs: { [key: string]: string };
  applications: string[];
  overview: string;
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

export interface ActivePortfolioProject {
  id: string;
  country: string;
  title: string;
  status: "Active" | "In Development";
  tag: string;
  description: string;
  keyDetails: string[];
  image: string;
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
  { value: "450+", label: "Heavy Machines", highlight: false },
  { value: "12", label: "Countries", highlight: false },
  { value: "4", label: "Active Continents", highlight: false },
  { value: "40+", label: "Years of Excellence", highlight: true },
];

export const CAPABILITIES: Capability[] = [
  {
    id: "mining-services",
    slug: "mining-services",
    title: "Mining Services",
    tagline: "High-tonnage extraction, fleet mobilization, and deposit feasibility.",
    description: "Fiza operates turnkey pit-to-port mining concessions with over 450 heavy earthmoving units across West and Central Africa. From geological core validation to 24/7 overburden stripping, we deliver industrial output under extreme field conditions.",
    scope: [
      "Open-Pit Overburden Stripping & Haulage",
      "Exploratory Core Drilling & Assay Coordination",
      "Tailings Management & Remediation Infrastructure",
      "Pit Dewatering & In-Situ Slurry Pumping Systems",
      "Continuous Heavy Fleet Maintenance & On-Site Machine Shops"
    ],
    keyMetrics: [
      { label: "Annual Material Moved", value: "38M Tonnes" },
      { label: "Fleet Availability Rate", value: "94.8%" },
      { label: "Safety Lost-Time Frequency", value: "0.12" }
    ],
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: "mineral-trading",
    slug: "mineral-trading",
    title: "Mineral Trading",
    tagline: "Direct physical commodity flows from African concessions to global smelters.",
    description: "We bridge African extraction corridors directly to industrial end-users in Asia, Europe, and the Middle East. Through locked off-take agreements and bonded port warehouses, Fiza eliminates intermediate friction in bulk commodities.",
    scope: [
      "Bauxite (Metallurgical & Chemical Grade)",
      "High-Grade Hematite & Magnetite Iron Ore (Fe 62-65%)",
      "Cathode Copper & Blister Ingots",
      "Industrial Manganese & High-Assay Lithium Concentrates",
      "Port Stockpiling, Assay Certification & Letter of Credit Execution"
    ],
    keyMetrics: [
      { label: "Annual Traded Volume", value: "4.2M Metric Tonnes" },
      { label: "Active Off-Take Port Hubs", value: "5 Deep-Water Terminals" },
      { label: "Assay Purity Average", value: "99.2% Standard Grade" }
    ],
    image: "https://images.unsplash.com/photo-1615680022647-99c397cbcaea?w=1600&q=80"
  },
  {
    id: "railway-solutions",
    slug: "railway-solutions",
    title: "Railway Solutions",
    tagline: "Heavy-haul rail corridors connecting isolated deposits to deep-water ports.",
    description: "Mining volume cannot scale without dedicated heavy rail. Fiza engineers, tracks, ballasts, and maintains standard and narrow gauge industrial corridors built to withstand 32-tonne axle loads in adverse soils.",
    scope: [
      "Heavy-Haul Track Laying & Ballast Tamping",
      "Locomotive & Rolling Stock Overhaul and Fleet Leasing",
      "Turnkey Siding Infrastructure at Pitheads & Processing Plants",
      "Automated Signaling & Centralized Dispatch Control Systems",
      "Track Alignment Rehabilitation & Sub-Grade Stabilization"
    ],
    keyMetrics: [
      { label: "Track Network Maintained", value: "1,140 Kilometers" },
      { label: "Axle Load Rating", value: "32.5 Tonnes" },
      { label: "Rolling Stock Units Managed", value: "620 Railcars" }
    ],
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=1600&q=80"
  },
  {
    id: "infrastructure",
    slug: "infrastructure",
    title: "Heavy Infrastructure",
    tagline: "Arterial haul roads, bridges, water reticulation, and industrial civil works.",
    description: "Remote operations require uncompromising civil foundations. We erect arterial haulage bridges spanning major rivers, carve all-weather lateral roads through rainforest terrain, and construct industrial concrete foundations that outlast project cycles.",
    scope: [
      "Heavy Mining Haul Roads (Cat 777 Class Ready)",
      "High-Capacity Pre-Stressed Concrete Bridges",
      "Industrial Bulk Earthworks & Soil Stabilization",
      "Bulk Water Pipelines & High-Capacity Drainage Reservoirs",
      "Port Terminal Slabs & Heavy Stacking Yards"
    ],
    keyMetrics: [
      { label: "All-Weather Haul Roads Built", value: "850+ km" },
      { label: "Structural Concrete Poured", value: "420,000 m³" },
      { label: "Bridge Spans Completed", value: "18 River Crossings" }
    ],
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: "turnkey-plants",
    slug: "turnkey-plants",
    title: "Turnkey Industrial Plants",
    tagline: "Integrated mineral processing, crushing circuits, and smelting facilities.",
    description: "From greenfield pad to commercial commissioning, Fiza delivers modular processing facilities: crushing circuits, magnetic separation plants, froth flotation units, and cement grinding stations engineered for remote reliability.",
    scope: [
      "Multi-Stage Jaw & Cone Crushing Stations (up to 1,500 TPH)",
      "Dense Media Separation (DMS) Circuits",
      "Ball Mill & SAG Mill Erection and Dynamic Balancing",
      "Structural Steel Fabrication & Erection",
      "SCADA Automation, Motor Control Centers & Power Synchronization"
    ],
    keyMetrics: [
      { label: "Commissioned Plants", value: "14 Facilities" },
      { label: "Peak Processing Capacity", value: "1,500 TPH" },
      { label: "Commissioning Runway", value: "Average 11 Months" }
    ],
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: "agriculture",
    slug: "agriculture",
    title: "Commercial Agriculture",
    tagline: "Large-scale land clearing, center-pivot irrigation, and agro-processing hubs.",
    description: "Deploying heavy earthmoving discipline to food security, Fiza clears arable savannah, installs multi-thousand-hectare automated pivot irrigation schemes, and constructs grain silos and palm processing mills.",
    scope: [
      "Precision Land Clearing & Root Ripping",
      "Center-Pivot Installation & River Intake Stations",
      "Grain Storage Silos & Automated Aeration Elevators",
      "Agro-Industrial Transport Networks",
      "Soil Mineralization & Topsoil Conservation Engineering"
    ],
    keyMetrics: [
      { label: "Arable Land Developed", value: "45,000 Hectares" },
      { label: "Irrigation Systems Active", value: "78 Pivot Units" },
      { label: "Grain Storage Capacity", value: "120,000 Metric Tonnes" }
    ],
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: "equipment-procurement",
    slug: "equipment-procurement",
    title: "Equipment Procurement",
    tagline: "Global sourcing, refurbishment, and rapid deployment of heavy machinery.",
    description: "Capital equipment shortages freeze project schedules. We maintain global sourcing channels across Europe, North America, and Japan, securing tier-1 machinery, rebuilding powertrains, and executing bonded transit into African interiors.",
    scope: [
      "Heavy Mining Fleet Sourcing (Excavators 50T-200T, Cat/Komatsu)",
      "Powertrain Rebuild & Component Exchange Programs",
      "OEM Consumable Warehousing (Ground Engaging Tools, Undercarriage)",
      "Oversized Multimodal Transport Logistics (Roll-on/Roll-off & Lowbed)",
      "Operator Certification & Maintenance Crew Training"
    ],
    keyMetrics: [
      { label: "Machines Delivered to Africa", value: "850+ Heavy Units" },
      { label: "Critical Parts Stockpile", value: "$18.5M Inventory" },
      { label: "Transit Lead Time Average", value: "32 Days Port to Site" }
    ],
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: "industrial-power",
    slug: "industrial-power",
    title: "Industrial Microgrids",
    tagline: "Off-grid hybrid solar, heavy fuel oil (HFO), and substation engineering.",
    description: "Remote mining requires uninterruptible megawatts. Fiza designs, installs, and operates base-load hybrid plants combining solar PV arrays with high-efficiency diesel/HFO gensets and battery energy storage systems (BESS).",
    scope: [
      "Base-Load HFO & Gas Generator Station Commissioning",
      "Industrial Utility-Scale Solar PV Arrays (10MW - 50MW)",
      "BESS Integration for Peak Shaving & Frequency Response",
      "33kV / 66kV / 132kV Overhead Transmission Corridors",
      "Switchgear Engineering & Power Factor Compensation"
    ],
    keyMetrics: [
      { label: "Installed Generation Capacity", value: "185 Megawatts" },
      { label: "Microgrid Uptime", value: "99.94%" },
      { label: "Fuel Displacement via Solar", value: "32% Annual" }
    ],
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1600&auto=format&fit=crop"
  }
];

export const ACTIVE_PORTFOLIO_PROJECTS: ActivePortfolioProject[] = [
  {
    id: "mali-bauxite",
    country: "Mali",
    title: "Bauxite Mining Concession & Corridor",
    status: "Active",
    tag: "Commercial Extraction",
    description: "Full-scale open-pit bauxite extraction and haulage infrastructure backed by an 85-unit heavy fleet, a dedicated 94-kilometer crushed-basalt logistics corridor, and high-throughput barge loading.",
    keyDetails: [
      "8.5 MTPA annual material moved",
      "94 km all-weather haul road",
      "Direct river barge loading terminal",
      "Commercial export to international alumina refineries"
    ],
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "drc-gold",
    country: "Democratic Republic of Congo",
    title: "Gold Mining & Extraction Operations",
    status: "Active",
    tag: "Backed by Equipment & Technical Fleet",
    description: "Active gold extraction concession supported by direct heavy machinery mobilization, in-pit crushing circuits, on-site metallurgical assaying, and rigorous environmental containment.",
    keyDetails: [
      "100% owned heavy excavator & hauler deployment",
      "On-site assay validation & core analysis",
      "Advanced slurry containment & water recycling",
      "24/7 continuous extraction operations"
    ],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "madagascar-ilmenite",
    country: "Madagascar",
    title: "Ilmenite Mineral Sand Operations",
    status: "Active",
    tag: "52.4% TiO₂ Certified Assay",
    description: "High-grade heavy mineral sand concession with certified 52.4% Titanium Dioxide (TiO₂) assay concentrations, supported by specialized spiral separation circuits and dedicated rail transfer.",
    keyDetails: [
      "52.4% TiO₂ certified assay grade",
      "Low trace radionuclide profile",
      "Dedicated narrow-gauge rail spur to ocean port",
      "Multi-year off-take supply agreements"
    ],
    image: "https://images.unsplash.com/photo-1578319439584-104c94d37305?w=800&q=80"
  },
  {
    id: "ethiopia-railway",
    country: "Ethiopia",
    title: "Railway Localization Programme",
    status: "Active",
    tag: "Heavy Rail Modernization",
    description: "National railway capability development initiative focused on domestic track component fabrication, sleeper plant localization, ballast rehabilitation, and technical skills transfer.",
    keyDetails: [
      "Track rehabilitation & ballast tamping",
      "Domestic railway maintenance capacity building",
      "Rolling stock engineering with partner syndicates",
      "Strategic logistics corridor expansion"
    ],
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&q=80"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "falea-bauxite-corridor",
    slug: "falea-bauxite-corridor",
    title: "Falea Bauxite & Mineral Corridor",
    category: "Mining Services & Rail",
    location: "Kayes Region",
    country: "Mali",
    status: "ACTIVE",
    excerpt: "Turnkey development of an 8.5 MTPA bauxite deposit including a 94-kilometer dedicated heavy haul access road and river barge loading terminal.",
    challenge: "The plateau deposit sat 120 km from the nearest paved arterial road with seasonal monsoons rendering standard unpaved laterite tracks impassable for 90-tonne triple-trailer road trains.",
    solution: "Fiza mobilized 85 heavy machines to stabilize a 94-kilometer crushed-basalt corridor, erected two double-lane reinforced concrete river crossings, and installed an automated 1,200 TPH barge conveyor system.",
    outcome: "Haulage cycle time dropped from 14 hours to 3.2 hours. First ore shipped 45 days ahead of contracted deadline.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop"
    ],
    stats: [
      { label: "Annual Ore Moved", value: "8.5M Tonnes" },
      { label: "Haul Road Length", value: "94 Kilometers" },
      { label: "Fleet Deployed", value: "85 Heavy Units" },
      { label: "Local Workforce Trained", value: "480 Engineers" }
    ],
    timeline: "2023 - Present",
    client: "National Mineral Resources Directorate & Syndicate Partners"
  },
  {
    id: "katanga-copper-processing",
    slug: "katanga-copper-processing",
    title: "Katanga Copper-Cobalt Plant",
    category: "Turnkey Plants",
    location: "Kolwezi District",
    country: "Democratic Republic of Congo",
    status: "ACTIVE",
    excerpt: "Engineering, procurement, and construction of a modular 1,500 TPH primary crushing station and dense media separation circuit.",
    challenge: "Integrating high-throughput crushing machinery inside an active extraction concession without disrupting existing open-cast haulage flow.",
    solution: "Designed a pre-fabricated structural steel framework anchored to mass-pour raft foundations, assembled using twin 250-tonne all-terrain crawler cranes.",
    outcome: "Attained target 1,500 TPH nameplate capacity within 72 hours of cold commissioning. Zero lost-time incidents across 620,000 man-hours.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1615680022647-99c397cbcaea?w=1200&q=80"
    ],
    stats: [
      { label: "Circuit Throughput", value: "1,500 TPH" },
      { label: "Structural Steel Erection", value: "3,200 Tonnes" },
      { label: "Lost Time Incidents", value: "Zero" },
      { label: "Construction Runway", value: "10 Months" }
    ],
    timeline: "2022 - 2024",
    client: "Katanga Mineral Consortium"
  },
  {
    id: "toamasina-bulk-rail-terminal",
    slug: "toamasina-bulk-rail-terminal",
    title: "Toamasina Bulk Mineral Rail Terminal",
    category: "Railway Solutions",
    location: "Atsinanana Region",
    country: "Madagascar",
    status: "COMPLETED",
    excerpt: "Complete rehabilitation of a 42-kilometer heavy-haul narrow-gauge rail spur connecting inland nickel-cobalt tailings to the ocean port.",
    challenge: "Steep grades, tropical cyclone erosion, and deteriorated legacy ballast from the 1970s limiting axle loads to under 14 tonnes.",
    solution: "Complete subgrade re-engineering with geotextile reinforcement, automated mechanized ballast tampers, and 50 kg/m continuous welded rail installation.",
    outcome: "Permitted 25-tonne axle loads and doubled daily train throughput from 3 to 9 return mineral consists.",
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=1200&q=80",
      "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?q=80&w=1200&auto=format&fit=crop"
    ],
    stats: [
      { label: "Rehabilitated Track", value: "42 Kilometers" },
      { label: "Axle Load Increase", value: "+78% Capacity" },
      { label: "Turnaround Time", value: "-45% Reduction" }
    ],
    timeline: "2021 - 2023",
    client: "Madagascar Port & Rail Infrastructure Authority"
  },
  {
    id: "bamako-industrial-logistics-hub",
    slug: "bamako-industrial-logistics-hub",
    title: "Bamako Heavy Equipment Base & Hub",
    category: "Infrastructure",
    location: "Bamako Industrial Zone",
    country: "Mali",
    status: "ACTIVE",
    excerpt: "A 35,000 m² central depot featuring 6-bay heavy equipment rebuild workshops, bonded mineral storage, and central logistics dispatch.",
    challenge: "Lack of domestic component rebuild facilities forced mining operators in Mali to air-freight diesel engines to South Africa or Europe.",
    solution: "Constructed a certified tier-1 remanufacturing workshop with 50-tonne overhead gantry cranes, dynamometer engine test cells, and parts automated inventory.",
    outcome: "Turnaround for hydraulic excavator rebuilds reduced from 12 weeks to 14 days, saving regional operators millions in fleet downtime.",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=1200&auto=format&fit=crop"
    ],
    stats: [
      { label: "Depot Footprint", value: "35,000 m²" },
      { label: "Overhead Crane Capacity", value: "50 Tonnes" },
      { label: "Annual Rebuild Capacity", value: "120 Powertrains" }
    ],
    timeline: "2020 - Continuous",
    client: "Fiza Engineering Corporation"
  },
  {
    id: "manono-lithium-infrastructure",
    slug: "manono-lithium-infrastructure",
    title: "Manono Critical Minerals Access Route",
    category: "Infrastructure & Mining",
    location: "Tanganyika Province",
    country: "Democratic Republic of Congo",
    status: "IN DEVELOPMENT",
    excerpt: "Engineering a 180 km heavy-duty logistics artery connecting prospective hard-rock lithium deposits to the national rail head.",
    challenge: "Traversing difficult floodplains with seasonal river swell requiring extensive elevated causeways and high-capacity drainage structures.",
    solution: "Pioneering cellular embankment engineering using geo-cells packed with river gravel and armored with crushed granite rip-rap.",
    outcome: "Construction phase 1 completed on schedule; test convoys carrying drill rigs deployed successfully.",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?q=80&w=1200&auto=format&fit=crop"
    ],
    stats: [
      { label: "Planned Roadway", value: "180 Kilometers" },
      { label: "Elevated Causeways", value: "14 Sections" },
      { label: "Projected Haul Capacity", value: "2.4M TPA" }
    ],
    timeline: "2024 - 2027",
    client: "Central African Energy Metals Consortium"
  },
  {
    id: "sikasso-agro-processing",
    slug: "sikasso-agro-processing",
    title: "Sikasso Grain & Oilseed Industrial Plant",
    category: "Commercial Agriculture",
    location: "Sikasso Region",
    country: "Mali",
    status: "COMPLETED",
    excerpt: "Turnkey development of a 60,000-tonne automated silo grain terminal and continuous cottonseed oil solvent extraction plant.",
    challenge: "Extreme ambient dust and heat fluctuations requiring specialized pneumatic conveyance and explosion-proof electrical substations.",
    solution: "Integrated Italian-manufactured steel silos with automated thermocouple monitoring systems and a 4MW synchronized diesel-solar power station.",
    outcome: "Decreased post-harvest grain losses in the Sikasso agrarian basin by over 30% in its initial harvest cycle.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop"
    ],
    stats: [
      { label: "Storage Volume", value: "60,000 Tonnes" },
      { label: "Processing Throughput", value: "450 Tonnes/Day" },
      { label: "Farmers Supported", value: "14,000 Growers" }
    ],
    timeline: "2022 - 2024",
    client: "Malian Agro-Industrial Development Board"
  }
];

export const MINERALS: MineralResource[] = [
  {
    id: "bauxite",
    name: "Bauxite (Metallurgical Grade)",
    chemicalSymbol: "Al₂O₃",
    grade: "Al₂O₃ 45-52% · Reactive Silica < 2.5%",
    hubs: ["Falea Concession, Mali", "Boké Basin Corridor"],
    annualVolume: "2.5M Metric Tonnes",
    description: "Direct-shipping ore (DSO) bauxite extracted from rich West African lateritic plateaus. Low monohydrate content permits low-temperature Bayer process refining at consuming alumina plants.",
    specifications: [
      { label: "Total Alumina (Al₂O₃)", value: "48.5% Minimum" },
      { label: "Reactive Silica (SiO₂)", value: "2.2% Maximum" },
      { label: "Moisture Content", value: "8 - 10% Typical" },
      { label: "Grain Sizing", value: "0 - 100mm Screened" }
    ]
  },
  {
    id: "iron-ore",
    name: "Hematite Iron Ore",
    chemicalSymbol: "Fe₂O₃",
    grade: "Fe 62.5% - 64.5% Standard Lumps & Fines",
    hubs: ["Western Mali Deposits", "Northern Rail Line"],
    annualVolume: "1.8M Metric Tonnes",
    description: "High-grade specularite and hematite direct from African iron formations. Low phosphorus and alumina contents make it an ideal blend for direct blast furnace feed.",
    specifications: [
      { label: "Iron Content (Fe)", value: "63.5% Basis" },
      { label: "Phosphorus (P)", value: "0.045% Max" },
      { label: "Silica (SiO₂)", value: "3.8% Max" },
      { label: "Lump / Fines Ratio", value: "60 / 40 Split" }
    ]
  },
  {
    id: "copper-cathodes",
    name: "Grade-A Copper Cathodes",
    chemicalSymbol: "Cu",
    grade: "Purity 99.9935% (LME Grade A Equivalent)",
    hubs: ["Katanga Copperbelt, DRC", "Kolwezi Terminal"],
    annualVolume: "45,000 Metric Tonnes",
    description: "Electro-won copper cathodes produced from high-grade oxidized ores through solvent extraction and electro-winning (SX-EW) circuits managed under strict quality governance.",
    specifications: [
      { label: "Copper Purity (Cu)", value: "99.99% Minimum" },
      { label: "Sulfur (S)", value: "< 15 ppm" },
      { label: "Dimensions", value: "914mm x 914mm x 12mm" },
      { label: "Bundle Weight", value: "2.5 MT Steel Strapped" }
    ]
  },
  {
    id: "lithium-spodumene",
    name: "Spodumene Concentrate",
    chemicalSymbol: "Li₂O",
    grade: "Li₂O 5.5% - 6.0% (SC6)",
    hubs: ["Tanganyika Concession, DRC"],
    annualVolume: "80,000 Metric Tonnes",
    description: "Concentrated lithium aluminosilicate extracted from pegmatite dykes, processed via flotation and magnetic separation for the global electric battery precursor supply chain.",
    specifications: [
      { label: "Lithium Oxide (Li₂O)", value: "6.0% Basis" },
      { label: "Iron Oxide (Fe₂O₃)", value: "< 1.2%" },
      { label: "Mica Content", value: "< 2.0%" },
      { label: "Packaging", value: "1 MT Big Bags / Bulk Vessel" }
    ]
  }
];

export const PRODUCTS: ProductItem[] = [
  {
    id: "fiza-980-excavator",
    slug: "fiza-980-excavator",
    name: "FIZA-980 Ultra-Heavy Hydraulic Mining Excavator",
    category: "Heavy Mining Fleet",
    modelNumber: "FX-980-HD",
    heroImage: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1600&auto=format&fit=crop",
    specs: {
      "Operating Weight": "98,500 kg (108 US Tons)",
      "Engine Power": "567 kW (760 HP) Cummins QSK19 Diesel",
      "Standard Bucket Capacity": "6.5 m³ Heavy Rock Armored",
      "Maximum Digging Depth": "9.24 meters",
      "Breakout Force": "480 kN ISO",
      "Fuel Tank Capacity": "1,220 Liters"
    },
    applications: [
      "Open-pit overburden removal",
      "Direct truck loading into 60T-100T haulers",
      "Hard-rock quarry extraction without continuous blasting",
      "Bulk material reclamation"
    ],
    overview: "Built for continuous 24-hour operation in sub-Saharan heat. Features an oversized heavy-duty cooling radiator pack, reinforced forged boom linkages, and an air-filtered operator cab insulated for desert environments."
  },
  {
    id: "jaw-crusher-station-1200",
    slug: "jaw-crusher-station-1200",
    name: "Stationary Modular Primary Jaw Crusher Station",
    category: "Turnkey Plant Modules",
    modelNumber: "JC-1200-MOD",
    heroImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop",
    specs: {
      "Feed Opening Size": "1,200 mm x 950 mm",
      "Maximum Feed Chunk": "820 mm Solid Basalt / Quartz",
      "Throughput Capacity": "350 - 680 TPH (variable CSS)",
      "Drive Electric Motor": "200 kW 400V 50Hz ABB",
      "Discharge Conveyor": "1,200 mm Heavy Belt with Magnet",
      "Structural Foundation": "Pre-cast skid modular mount"
    },
    applications: [
      "Primary run-of-mine reduction",
      "Pre-crushing circuit for ball mill feeds",
      "Railway ballast production from granite quarries",
      "Concrete aggregate processing"
    ],
    overview: "Engineered for rapid field erection within 14 working days. All electrical switchgear, variable frequency drives, and grease lubrication pumps are pre-wired into a standardized containerized control module."
  },
  {
    id: "heavy-haul-locomotive-4400",
    slug: "heavy-haul-locomotive-4400",
    name: "FIZA-4400 Heavy-Haul Diesel-Electric Freight Locomotive",
    category: "Railway Solutions",
    modelNumber: "FL-4400-AC",
    heroImage: "https://images.unsplash.com/photo-1527259105003-ea855b58ba05?w=1600&q=80",
    specs: {
      "Power Output": "4,400 BHP (3,280 kW) AC Traction",
      "Axle Configuration": "Co-Co (6 Axles Powered)",
      "Starting Tractive Effort": "640 kN",
      "Continuous Tractive Effort": "534 kN",
      "Track Gauge": "1,067 mm (Cape Gauge) or 1,435 mm (Standard)",
      "Maximum Operating Speed": "105 km/h Loaded"
    },
    applications: [
      "Heavy bulk mineral consist haulage (6,000+ tonnes)",
      "Long-distance cross-border mineral logistics",
      "Steep grade ascent on mountain corridor routes"
    ],
    overview: "High-adhesion micro-processor wheel-slip management combined with rugged AC traction motors delivers superior haulage on poorly aligned tracks with dust-resistant central engine ventilation."
  },
  {
    id: "off-highway-rigid-truck-777",
    slug: "off-highway-rigid-truck-777",
    name: "FIZA-RT100 Rigid Mining Haul Truck",
    category: "Heavy Mining Fleet",
    modelNumber: "RT-100-MINER",
    heroImage: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=1600&auto=format&fit=crop",
    specs: {
      "Nominal Payload": "95,000 kg (105 US Tons)",
      "Gross Machine Weight": "165,000 kg",
      "Engine Rating": "783 kW (1,050 HP) Heavy V12 Turbo",
      "Heaped Capacity (SAE 2:1)": "60.4 m³",
      "Top Speed (Loaded)": "64 km/h",
      "Tire Size": "27.00R49 E-4 Deep Tread"
    },
    applications: [
      "Large-scale open-pit iron ore and bauxite haulage",
      "High-gradient pit ramp ascents up to 12%",
      "Continuous fleet operations pairing with 80T-120T excavators"
    ],
    overview: "Features an oil-cooled multiple-disc brake retarder that prevents fade on downhill loaded descents. The structural box-section chassis resists severe torsional twisting under uneven loading."
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
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop"
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
      "All units were customized at Fiza's regional depot with high-ambient cooling packs, specialized rock protection guards, and GPS-enabled satellite fleet telemetry to allow real-time dispatch monitoring from the regional headquarters in Kinshasa."
    ],
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: "sustainable-hybrid-microgrid-commissioned",
    slug: "sustainable-hybrid-microgrid-commissioned",
    date: "2026-04-12",
    category: "ENERGY SYSTEMS",
    headline: "25MW Industrial Solar-Diesel Hybrid Microgrid Energized",
    leadParagraph: "Fiza's industrial power division has synchronized a 25MW hybrid power station at an isolated mine site, cutting fossil fuel consumption by 34% annually.",
    bodyParagraphs: [
      "Operating off-grid requires continuous reliability. By pairing a 16MW photovoltaic solar field with high-capacity lithium iron phosphate (LFP) energy storage and rapid-response diesel gensets, the facility delivers 100% stable voltage to critical ball mills and flotation circuits.",
      "The control system was designed in-house to automatically modulate generator load based on real-time solar irradiance, setting a new benchmark for mining sustainability across West Africa."
    ],
    pullQuote: {
      quote: "Heavy industry requires guaranteed power. Our hybrid systems provide that certainty without burning diesel unnecessarily.",
      author: "Elena Rostova, VP of Engineering"
    },
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1600&auto=format&fit=crop"
  }
];

export const SOCIAL_POSTS = [
  {
    id: "post-1",
    platform: "DISPATCH // MALI",
    date: "2 DAYS AGO",
    content: "Night shift pit operations at the Falea project site. Continuous haulage operating at 96% mechanical availability despite midday temperatures exceeding 42°C. Ground crew and mechanical bays maintaining safety protocols without disruption.",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "post-2",
    platform: "FIELD LOG // DRC",
    date: "5 DAYS AGO",
    content: "Arrival of four FIZA-980 hydraulic excavators at the Kolwezi rail siding. Pre-delivery inspection underway before convoy transit to the open-pit cut. Rigorous checks on hydraulic pressures and structural weld lines.",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "post-3",
    platform: "LOGISTICS // SIKASSO",
    date: "1 WEEK AGO",
    content: "Grain silo terminal testing: 450 TPH pneumatic bucket elevators clearing 10,000 metric tonnes of seasonal grain into sealed aerated storage. Engineering that secures food supply across the river basin.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop"
  }
];

export const FOUNDER_INFO = {
  name: "Muhammed Farooghuddin",
  title: "Founder & CEO",
  origin: "India-born and Dubai-based, with more than four decades in international business, mineral trading and industrial development.",
  quote: "Our purpose is to build partnerships that strengthen local capability, create lasting value and help ambitious projects move forward.",
  established: "1994",
  experience: "40+ Years of Excellence",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
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
    detail: "Identify the right manufacturers, specialists, operators and stakeholders across sovereign ministries, maritime ports, and equipment syndicates."
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
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    bio: "India-born and Dubai-based, with more than four decades in international business, mineral trading and industrial development. Directs Fiza's multidisciplinary mining concessions, turnkey plant EPC, and international commodity supply chains.",
    focus: "Sovereign concessions, cross-border partnerships, and strategic industrial development.",
    quote: "Our purpose is to build partnerships that strengthen local capability, create lasting value and help ambitious projects move forward."
  },
  {
    name: "Dr. Amara Diallo",
    title: "Chief Operating Officer — Mining & Civil",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    bio: "Doctorate in Geological Engineering from Nancy (France). Former senior operations head across West African bauxite and gold belts. Manages over 1,200 site personnel and 450 machine operators.",
    focus: "Open-pit execution, mine planning, occupational safety governance."
  },
  {
    name: "Elena Rostova",
    title: "VP of Engineering & Turnkey Systems",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    bio: "Heavy structural engineer with 22 years experience designing crushing circuits, rail loops, and processing plants in extreme environments across Central Asia and Africa.",
    focus: "Plant EPC, mechanical erection, automation and structural integrity."
  },
  {
    name: "Jean-Paul Kasongo",
    title: "Director of Mineral Logistics & Rail",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
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
    title: "40+ Years of Excellence Across 4 Continents",
    description: "Operating integrated mining, civil, rail, and agro-industrial infrastructure projects across 12 countries on 4 continents."
  }
];

export const ACHIEVEMENTS = [
  {
    id: "iso-45001",
    category: "Certifications",
    year: "2025",
    title: "ISO 45001:2018 Occupational Health & Safety",
    organization: "Bureau Veritas International",
    description: "Certified across all 14 active project sites, reflecting an industry-leading lost-time injury frequency rate (LTIFR) of 0.12 per million hours."
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
    title: "35 Million Tonnes Material Moved",
    organization: "Internal Operations Record",
    description: "Achieved record annual earthmoving across all open-pit contracts with a fleet availability rating above 94%."
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

export const OFFICES: OfficeLocation[] = [
  {
    city: "Bamako",
    country: "Mali",
    type: "West Africa Regional Operations & Fleet Depot",
    address: "Zone Industrielle de Sotuba, Route de Koulikoro, Bamako",
    phone: "+223 20 28 44 00",
    email: "mali.operations@fizaengineering.com",
    coordinates: { x: 38, y: 44 }
  },
  {
    city: "Kinshasa & Kolwezi",
    country: "Democratic Republic of Congo",
    type: "Central Africa Operations & Mineral Logistics",
    address: "Boulevard du 30 Juin, Gombe, Kinshasa / Kolwezi Mining Hub",
    phone: "+243 81 55 92 100",
    email: "drc.operations@fizaengineering.com",
    coordinates: { x: 54, y: 56 }
  },
  {
    city: "Johannesburg",
    country: "South Africa",
    type: "Engineering Design & Supply Chain Center",
    address: "Sandton City Office Towers, 5th Street, Sandton, 2196",
    phone: "+27 11 884 9200",
    email: "sa.office@fizaengineering.com",
    coordinates: { x: 56, y: 78 }
  },
  {
    city: "Dubai",
    country: "United Arab Emirates",
    type: "International Trading & Capital Procurement Hub",
    address: "DIFC Gate Precinct, Building 4, Level 7, Dubai",
    phone: "+971 4 362 8800",
    email: "dubai.trading@fizaengineering.com",
    coordinates: { x: 74, y: 35 }
  }
];
