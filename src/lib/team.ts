/**
 * Team Directory (Internal / Verification Pending)
 * 
 * NOTE: As per corporate verification guidelines, only confirmed leadership
 * is rendered on the public website. The following individuals are recorded here
 * for administrative validation and must not be rendered publicly until verified: true.
 */

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  focus: string;
  verified: boolean;
}

// TODO: OWNER TO VERIFY - Confirm credentials and public presentation approval
export const PENDING_TEAM_MEMBERS: TeamMember[] = [
  {
    id: "amara-diallo",
    name: "Dr. Amara Diallo",
    title: "Chief Operating Officer — Mining & Civil",
    bio: "Doctorate in Geological Engineering from Nancy (France). Former senior operations head across West African bauxite and gold belts. Manages site personnel and machine operators.",
    focus: "Open-pit execution, mine planning, occupational safety governance.",
    verified: false // TODO: OWNER TO VERIFY
  },
  {
    id: "elena-rostova",
    name: "Elena Rostova",
    title: "VP of Engineering & Turnkey Systems",
    bio: "Heavy structural engineer with 22 years experience designing crushing circuits, rail loops, and processing plants in extreme environments across Central Asia and Africa.",
    focus: "Plant EPC, mechanical erection, automation and structural integrity.",
    verified: false // TODO: OWNER TO VERIFY
  },
  {
    id: "jean-paul-kasongo",
    name: "Jean-Paul Kasongo",
    title: "Director of Mineral Logistics & Rail",
    bio: "Railway operations specialist who modernized mining lines across Southern and Central Africa. Directs rail rehabilitation, rolling stock leasing, and deep-water port terminal contracts.",
    focus: "Heavy-haul rail, port stockpiling, multimodal shipping corridors.",
    verified: false // TODO: OWNER TO VERIFY
  }
];
