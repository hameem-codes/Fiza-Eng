export interface Author {
  name: string;
  role: string;
}

export interface NewsSection {
  heading: string;
  content: string[];
}

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  headline: string; // backwards compatibility
  category: "INFRASTRUCTURE & MINING" | "FLEET LOGISTICS" | "ENERGY SYSTEMS";
  date: string; // ISO format e.g. "2026-08-14"
  author: Author;
  readingTime: string;
  summary: string;
  leadParagraph: string; // backwards compatibility
  body: string[];
  bodyParagraphs: string[]; // backwards compatibility
  sections: NewsSection[];
  image: string;
  imageAlt: string;
  relatedProjectSlug?: string;
  verified: boolean;
  pullQuote?: {
    quote: string;
    author: string;
  };
}

// TODO: OWNER TO CONFIRM
// Config flag: Set to true to hide unverified articles in production.
// Set to false until owner reviews and confirms news articles.
export const HIDE_UNVERIFIED_NEWS = false;

export const NEWS_CATEGORIES = [
  "ALL",
  "INFRASTRUCTURE & MINING",
  "FLEET LOGISTICS",
  "ENERGY SYSTEMS",
] as const;

export type NewsCategory = (typeof NEWS_CATEGORIES)[number];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: "falea-terminal-phase-one-complete",
    slug: "falea-terminal-phase-one-complete",
    title: "Commissioning of the 94-Kilometer Falea Mineral Transport Corridor",
    headline: "Commissioning of the 94-Kilometer Falea Mineral Transport Corridor",
    category: "INFRASTRUCTURE & MINING",
    date: "2026-08-14",
    author: {
      name: "Dr. Amara Diallo",
      role: "Chief Operating Officer",
    },
    readingTime: "4 min read",
    summary:
      "Fiza Engineering Corporation has completed construction and operational commissioning of the 94-kilometer dedicated heavy-haul mineral corridor connecting the 8.5 MTPA Falea bauxite plateau to the river barge loading facility in southwestern Mali.",
    leadParagraph:
      "Fiza Engineering Corporation has completed construction and operational commissioning of the 94-kilometer dedicated heavy-haul mineral corridor connecting the 8.5 MTPA Falea bauxite plateau to the river barge loading facility in southwestern Mali.",
    body: [
      "Initiated in 2023 as part of turnkey mine infrastructure running 2023 to Present, the 94-kilometer crushed-basalt haul road and river terminal infrastructure now provides continuous transport for 8.5 MTPA bauxite operations.",
      "Following 14 months of sustained earthmoving across challenging lateritic terrain, the specialized civil infrastructure division of Fiza has completed all bridges, culverts, and crushed-basalt pavement courses.",
      "The engineering team deployed 85 heavy units including rigid frame haulers, motorized graders, and vibrating compactors working double shifts. Reinforced concrete bridge piers were anchored directly into deep bedrocks to prevent seasonal monsoon scour.",
      "With initial load testing demonstrating that 90-tonne triple road trains can safely sustain speeds of 65 km/h, the corridor will slash transit times by over 70%, lowering per-tonne export logistics costs for partner mining entities.",
    ],
    bodyParagraphs: [
      "Initiated in 2023 as part of turnkey mine infrastructure running 2023 to Present, the 94-kilometer crushed-basalt haul road and river terminal infrastructure now provides continuous transport for 8.5 MTPA bauxite operations.",
      "Following 14 months of sustained earthmoving across challenging lateritic terrain, the specialized civil infrastructure division of Fiza has completed all bridges, culverts, and crushed-basalt pavement courses.",
      "The engineering team deployed 85 heavy units including rigid frame haulers, motorized graders, and vibrating compactors working double shifts. Reinforced concrete bridge piers were anchored directly into deep bedrocks to prevent seasonal monsoon scour.",
      "With initial load testing demonstrating that 90-tonne triple road trains can safely sustain speeds of 65 km/h, the corridor will slash transit times by over 70%, lowering per-tonne export logistics costs for partner mining entities.",
    ],
    sections: [
      {
        heading: "Corridor Construction and River Terminal Integration",
        content: [
          "Initiated in 2023 as part of turnkey mine infrastructure running 2023 to Present, the 94-kilometer crushed-basalt haul road and river terminal infrastructure now provides continuous transport for 8.5 MTPA bauxite operations.",
          "Following 14 months of sustained earthmoving across challenging lateritic terrain, the specialized civil infrastructure division of Fiza has completed all bridges, culverts, and crushed-basalt pavement courses. The roadway links remote extraction plateaus directly to the river barge loading terminal.",
        ],
      },
      {
        heading: "Fleet Mobilization and Heavy Civil Works",
        content: [
          "The engineering team deployed 85 heavy units including rigid frame haulers, motorized graders, and vibrating compactors working double shifts. Reinforced concrete bridge piers were anchored directly into deep bedrocks to prevent seasonal monsoon scour.",
        ],
      },
      {
        heading: "Heavy-Haul Load Testing and Transit Impact",
        content: [
          "With initial load testing demonstrating that 90-tonne triple road trains can safely sustain speeds of 65 km/h, the corridor will slash transit times by over 70%, lowering per-tonne export logistics costs for partner mining entities.",
        ],
      },
    ],
    pullQuote: {
      quote:
        "We build roads that withstand torrential rains and carry forty-tonne axles day after day.",
      author: "Dr. Amara Diallo, Chief Operating Officer",
    },
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1600&auto=format&fit=crop",
    imageAlt:
      "Heavy haul transport corridor and earthmoving machinery in southwestern Mali",
    relatedProjectSlug: "falea-bauxite-corridor",
    // TODO: OWNER TO CONFIRM
    verified: false,
  },
  {
    id: "expanding-heavy-fleet-central-africa",
    slug: "expanding-heavy-fleet-central-africa",
    title: "Fiza Mobilizes 45 Additional Heavy Units to Katanga Operations",
    headline: "Fiza Mobilizes 45 Additional Heavy Units to Katanga Operations",
    category: "FLEET LOGISTICS",
    date: "2026-06-28",
    author: {
      name: "Jean-Claude Mwamba",
      role: "Director of Fleet & Heavy Logistics",
    },
    readingTime: "3 min read",
    summary:
      "In response to expanding multi-year overburden stripping agreements, Fiza has completed the offloading and transit of 45 tier-1 heavy mining machines through the Port of Dar es Salaam into the DRC.",
    leadParagraph:
      "In response to expanding multi-year overburden stripping agreements, Fiza has completed the offloading and transit of 45 tier-1 heavy mining machines through the Port of Dar es Salaam into the DRC.",
    body: [
      "The shipment includes twelve 100-tonne rigid haul trucks, eight hydraulic excavators, and five tracked dozer units, bringing Fiza's active fleet in Central Africa to over 220 mechanized pieces.",
      "All units were customized at Fiza's regional depot with high-ambient cooling packs, specialized rock protection guards, and GPS-enabled satellite fleet telemetry to allow real-time dispatch monitoring from the regional office in Kinshasa.",
      "The mobilized fleet reinforces ongoing contract operations across the Haut-Katanga mining district, pairing with existing crushing and processing infrastructure to sustain targeted monthly overburden stripping volumes.",
    ],
    bodyParagraphs: [
      "The shipment includes twelve 100-tonne rigid haul trucks, eight hydraulic excavators, and five tracked dozer units, bringing Fiza's active fleet in Central Africa to over 220 mechanized pieces.",
      "All units were customized at Fiza's regional depot with high-ambient cooling packs, specialized rock protection guards, and GPS-enabled satellite fleet telemetry to allow real-time dispatch monitoring from the regional office in Kinshasa.",
      "The mobilized fleet reinforces ongoing contract operations across the Haut-Katanga mining district, pairing with existing crushing and processing infrastructure to sustain targeted monthly overburden stripping volumes.",
    ],
    sections: [
      {
        heading: "Strategic Equipment Offloading and Customs Transit",
        content: [
          "The shipment includes twelve 100-tonne rigid haul trucks, eight hydraulic excavators, and five tracked dozer units, bringing Fiza's active fleet in Central Africa to over 220 mechanized pieces.",
        ],
      },
      {
        heading: "Depot Customization and Telemetry Integration",
        content: [
          "All units were customized at Fiza's regional depot with high-ambient cooling packs, specialized rock protection guards, and GPS-enabled satellite fleet telemetry to allow real-time dispatch monitoring from the regional office in Kinshasa.",
        ],
      },
      {
        heading: "Mine Site Commissioning and Operational Deployment",
        content: [
          "The mobilized fleet reinforces ongoing contract operations across the Haut-Katanga mining district, pairing with existing crushing and processing infrastructure to sustain targeted monthly overburden stripping volumes.",
        ],
      },
    ],
    pullQuote: {
      quote:
        "Standard off-the-shelf machinery fails under sustained African pit duty. Every unit in this convoy was customized before entering the haul roads.",
      author: "Jean-Claude Mwamba, Director of Fleet & Heavy Logistics",
    },
    image:
      "https://images.unsplash.com/photo-1578885136359-16c8bd4d3a8e?w=1600&q=80",
    imageAlt:
      "Heavy mining machinery and haulage units mobilized to Katanga operations",
    relatedProjectSlug: "katanga-copper-processing",
    // TODO: OWNER TO CONFIRM
    verified: false,
  },
  {
    id: "sustainable-hybrid-microgrid-commissioned",
    slug: "sustainable-hybrid-microgrid-commissioned",
    title: "25MW Industrial Solar-Diesel Hybrid Microgrid Energized",
    headline: "25MW Industrial Solar-Diesel Hybrid Microgrid Energized",
    category: "ENERGY SYSTEMS",
    date: "2026-04-12",
    author: {
      name: "Kofi Mensah",
      role: "Lead Energy Systems Engineer",
    },
    readingTime: "3 min read",
    summary:
      "Fiza's industrial power division has synchronized a 25MW hybrid power station at an isolated mine site, cutting fossil fuel consumption by 34% annually.",
    leadParagraph:
      "Fiza's industrial power division has synchronized a 25MW hybrid power station at an isolated mine site, cutting fossil fuel consumption by 34% annually.",
    body: [
      "Operating off-grid requires continuous reliability. By pairing a 16MW photovoltaic solar field with high-capacity lithium iron phosphate (LFP) energy storage and rapid-response diesel gensets, the facility delivers stable voltage to critical ball mills and flotation circuits.",
      "The control system was designed in-house to automatically modulate generator load based on real-time solar irradiance, setting a new benchmark for mining sustainability across West Africa.",
      "The hybrid microgrid reduces diesel consumption by an estimated 34% annually, preventing carbon emissions while guaranteeing uncompromised 99.8% plant uptime for isolated heavy mineral processing.",
    ],
    bodyParagraphs: [
      "Operating off-grid requires continuous reliability. By pairing a 16MW photovoltaic solar field with high-capacity lithium iron phosphate (LFP) energy storage and rapid-response diesel gensets, the facility delivers stable voltage to critical ball mills and flotation circuits.",
      "The control system was designed in-house to automatically modulate generator load based on real-time solar irradiance, setting a new benchmark for mining sustainability across West Africa.",
      "The hybrid microgrid reduces diesel consumption by an estimated 34% annually, preventing carbon emissions while guaranteeing uncompromised 99.8% plant uptime for isolated heavy mineral processing.",
    ],
    sections: [
      {
        heading: "Off-Grid Generation and Photovoltaic Architecture",
        content: [
          "Operating off-grid requires continuous reliability. By pairing a 16MW photovoltaic solar field with high-capacity lithium iron phosphate (LFP) energy storage and rapid-response diesel gensets, the facility delivers stable voltage to critical ball mills and flotation circuits.",
        ],
      },
      {
        heading: "Automated Load Shedding and Irradiance Modulation",
        content: [
          "The control system was designed in-house to automatically modulate generator load based on real-time solar irradiance, setting a new benchmark for mining sustainability across West Africa.",
        ],
      },
      {
        heading: "Environmental Impact and Fuel Reduction Metrics",
        content: [
          "The hybrid microgrid reduces diesel consumption by an estimated 34% annually, preventing carbon emissions while guaranteeing uncompromised 99.8% plant uptime for isolated heavy mineral processing.",
        ],
      },
    ],
    pullQuote: {
      quote:
        "Heavy industry requires guaranteed power. Our hybrid systems provide that certainty without burning diesel unnecessarily.",
      author: "Kofi Mensah, Lead Energy Systems Engineer",
    },
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop",
    imageAlt:
      "Industrial solar photovoltaic field and diesel generator microgrid installation",
    // TODO: OWNER TO CONFIRM
    verified: false,
  },
];

export function getVisibleArticles(): NewsArticle[] {
  if (HIDE_UNVERIFIED_NEWS) {
    return NEWS_ARTICLES.filter((a) => a.verified);
  }
  return NEWS_ARTICLES;
}
