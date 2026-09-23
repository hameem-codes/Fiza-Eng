"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LEADERSHIP, MILESTONES, Leader } from "@/lib/constants";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { Tag } from "@/components/ui/Tag";

const WHAT_SETS_US_APART = [
  {
    metric: "450+",
    label: "Heavy Equipment Units",
    title: "100% Owned Fleet",
    desc: "We own, maintain, and mobilize our excavators, haulers, and track equipment directly, eliminating third-party rental bottlenecks."
  },
  {
    metric: "14",
    label: "Industrial Facilities",
    title: "Proprietary EPC Engineering",
    desc: "From mechanical civil works to automated electrical control centers, our turnkey teams design and assemble processing plants in-house."
  },
  {
    metric: "1,140 km",
    label: "Corridors Maintained",
    title: "Heavy-Haul Rail Competency",
    desc: "We rehabilitate and operate specialized 32-tonne axle-load railway tracks to ensure extraction volumes reach coastal ports without delay."
  },
  {
    metric: "0.12",
    label: "LTIFR Safety Rating",
    title: "Strict Safety Governance",
    desc: "Every pit, maintenance bay, and construction site operates under certified ISO 45001 standards with daily supervisor briefings."
  },
  {
    metric: "35,000 m²",
    label: "Rebuild Workshops",
    title: "Regional Machine Rebuild Bases",
    desc: "Centralized powertrain overhaul workshops in Bamako and Kolwezi keep fleet availability consistently above 94%."
  },
  {
    metric: "12",
    label: "Sovereign Jurisdictions",
    title: "Pan-African Relationships",
    desc: "Deep partnerships with national resource ministries, port authorities, and local community leadership built over 25 years."
  }
];

const PROCESS_STEPS = [
  {
    step: "01",
    name: "UNDERSTAND",
    desc: "Deep geotechnical analysis, geological assay verification, and transport route mapping before committing capital or heavy plant."
  },
  {
    step: "02",
    name: "CONNECT",
    desc: "Securing sovereign concessions, establishing off-take partnerships, and engineering dedicated rail or barge access corridors."
  },
  {
    step: "03",
    name: "STRUCTURE",
    desc: "Mobilizing heavy fleets, pouring industrial concrete foundations, and erecting modular crushing circuits on tight timelines."
  },
  {
    step: "04",
    name: "PROGRESS",
    desc: "Continuous round-the-clock extraction, preventive fleet maintenance, and steady bulk commodity transit to global ports."
  }
];

export default function CompanyPage() {
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);

  return (
    <div className="w-full pt-[72px]">
      {/* 60vh Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[460px] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?q=80&w=2000&auto=format&fit=crop"
          alt="Fiza Engineering Corporation site works"
          fill
          priority
          className="img-cover object-center"
        />
        <div className="dark-overlay-heavy" />
        <div className="relative z-10 max-w-content mx-auto w-full px-6 md:px-12 pb-16">
          <span className="text-label text-dust-tan font-mono uppercase tracking-[0.2em] block mb-3">
            Company Profile & History
          </span>
          <h1 className="text-display-lg sm:text-[3.5rem] md:text-display-xl font-medium text-iron-white leading-[0.95]">
            Fiza Engineering Corporation.
          </h1>
          <p className="text-body-lg text-dust-tan max-w-2xl mt-4 font-normal">
            Moving earth, building heavy rail, and engineering mineral supply chains across Africa and beyond since 1994.
          </p>
        </div>
      </section>

      {/* "Who We Are" — Pattern A Layout */}
      <section className="w-full py-20 md:py-28 bg-iron-white">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="text-label text-oxide-red font-mono uppercase tracking-widest block mb-4">
                Who We Are
              </span>
              <h2 className="text-display-lg font-medium text-earth-black leading-[0.98] mb-8">
                An industrial operator rooted in heavy execution.
              </h2>
              <div className="space-y-6 text-quarry-grey text-body leading-relaxed max-w-editorial">
                <p>
                  Established in 1994 by Muhammed Farooghuddin, with over four decades of international business and mineral trading experience, Fiza Engineering Corporation has expanded into a multidisciplinary heavy engineering and mining conglomerate. We combine active concession operations, equipment manufacturing, engineering capability, and international trade.
                </p>
                <p>
                  Today, we coordinate multi-thousand-tonne mineral extraction operations across Mali and the DRC, rehabilitate heavy freight rail corridors in Madagascar, and trade industrial commodities to global smelters. By controlling every layer of equipment, maintenance, and logistics, we deliver certainty in volatile frontiers.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-[380px] sm:h-[460px] border border-slab-grey lg:-mr-16">
              <Image
                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1200&auto=format&fit=crop"
                alt="Open-pit operations and heavy fleet"
                fill
                className="img-cover object-center"
              />
              <div className="absolute bottom-3 left-3 bg-earth-black text-iron-white px-3 py-1 font-mono text-[10px] uppercase">
                FIG. 02 // PIT SITE 04 — WEST AFRICA
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values (2x2 Grid) */}
      <section className="w-full bg-iron-white">
        <SectionDivider />
        <div className="max-w-content mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="mb-14">
            <span className="text-label text-oxide-red font-mono uppercase tracking-widest block mb-2">
              Foundational Tenets
            </span>
            <h2 className="text-display-lg font-medium text-earth-black leading-[0.95]">
              Operating Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-slab-grey pt-10">
            <div className="p-8 bg-[#EBE8E0] border border-slab-grey">
              <span className="text-label font-mono text-oxide-red uppercase tracking-wider block mb-2">
                01 // Direct Control
              </span>
              <h3 className="text-heading-2 font-medium text-earth-black mb-3">Own The Iron</h3>
              <p className="text-quarry-grey text-body-sm leading-relaxed">
                We refuse reliance on outsourced equipment contractors. When an excavator breaks down, our in-house mechanics replace the hydraulic pump on site within hours, safeguarding client production schedules.
              </p>
            </div>

            <div className="p-8 bg-[#EBE8E0] border border-slab-grey">
              <span className="text-label font-mono text-oxide-red uppercase tracking-wider block mb-2">
                02 // Sovereign Partnership
              </span>
              <h3 className="text-heading-2 font-medium text-earth-black mb-3">Long-Term Respect</h3>
              <p className="text-quarry-grey text-body-sm leading-relaxed">
                We invest in permanent infrastructure. Over 90% of our on-site workforce and senior operational engineers are recruited and trained domestically within the host nations where we operate.
              </p>
            </div>

            <div className="p-8 bg-[#EBE8E0] border border-slab-grey">
              <span className="text-label font-mono text-oxide-red uppercase tracking-wider block mb-2">
                03 // Zero Ambiguity
              </span>
              <h3 className="text-heading-2 font-medium text-earth-black mb-3">Engineering Truth</h3>
              <p className="text-quarry-grey text-body-sm leading-relaxed">
                We measure progress in tonnes moved, kilometers ballasted, and hours logged without accidents. We provide clear, verifiable data to every investor, partner, and government regulator.
              </p>
            </div>

            <div className="p-8 bg-[#EBE8E0] border border-slab-grey">
              <span className="text-label font-mono text-oxide-red uppercase tracking-wider block mb-2">
                04 // Environmental Rigor
              </span>
              <h3 className="text-heading-2 font-medium text-earth-black mb-3">Contoured Restoration</h3>
              <p className="text-quarry-grey text-body-sm leading-relaxed">
                Mining must leave stable ground. We integrate continuous backfilling, topsoil preservation, and engineered water drainage into active pit planning to prevent erosion and acid runoff.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* "What Sets Us Apart" — 3x2 Grid */}
      <section className="w-full bg-[#E5E2D9] py-20 md:py-28 border-t border-b border-slab-grey">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="mb-14">
            <span className="text-label text-oxide-red font-mono uppercase tracking-widest block mb-2">
              Competitive Advantage
            </span>
            <h2 className="text-display-lg font-medium text-earth-black leading-[0.95]">
              What Sets Us Apart
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHAT_SETS_US_APART.map((item, idx) => (
              <div key={idx} className="bg-iron-white p-8 border border-slab-grey flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between mb-4 pb-3 border-b border-slab-grey">
                    <span className="text-display-lg font-medium text-earth-black leading-none">
                      {item.metric}
                    </span>
                    <span className="font-mono text-[10px] text-quarry-grey uppercase tracking-wider">
                      {item.label}
                    </span>
                  </div>
                  <h3 className="text-heading-3 font-medium text-earth-black mb-3">
                    {item.title}
                  </h3>
                  <p className="text-body-sm text-quarry-grey leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* "How We Work" — 4-Step Numbered Process */}
      <section className="w-full bg-iron-white py-20 md:py-28">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="mb-14">
            <span className="text-label text-oxide-red font-mono uppercase tracking-widest block mb-2">
              Execution Methodology
            </span>
            <h2 className="text-display-lg font-medium text-earth-black leading-[0.95]">
              How We Work
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step) => (
              <div key={step.step} className="border-t-2 border-earth-black pt-6 flex flex-col">
                <span className="text-display-lg font-medium text-oxide-red leading-none mb-4">
                  {step.step}
                </span>
                <h3 className="text-heading-3 font-medium text-earth-black mb-3">
                  {step.name}
                </h3>
                <p className="text-body-sm text-quarry-grey leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline: Large Year Numbers, Alternating Entries */}
      <section id="timeline" className="w-full bg-[#EBE8E0] py-20 md:py-28 border-t border-b border-slab-grey">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="mb-16">
            <span className="text-label text-oxide-red font-mono uppercase tracking-widest block mb-2">
              Quarter-Century Trajectory
            </span>
            <h2 className="text-display-lg font-medium text-earth-black leading-[0.95]">
              Corporate History
            </h2>
          </div>

          <div className="relative border-l-2 border-earth-black ml-4 md:ml-12 pl-8 md:pl-16 space-y-16">
            {MILESTONES.map((m) => (
              <div key={m.year} className="relative group">
                {/* Square marker on timeline */}
                <div className="absolute -left-[41px] md:-left-[73px] top-1 w-4 h-4 bg-earth-black group-hover:bg-oxide-red transition-colors" />

                <span className="text-display-lg md:text-[3.5rem] font-medium text-earth-black leading-none block mb-2">
                  {m.year}
                </span>

                <h3 className="text-heading-2 font-medium text-earth-black mb-3">
                  {m.title}
                </h3>

                <p className="text-body text-quarry-grey max-w-2xl leading-relaxed">
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership: Square Headshots, Name, Title, Clickable Bio Modal */}
      <section id="leadership" className="w-full bg-iron-white py-20 md:py-28">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-4">
            <div>
              <span className="text-label text-oxide-red font-mono uppercase tracking-widest block mb-2">
                Executive Governance
              </span>
              <h2 className="text-display-lg font-medium text-earth-black leading-[0.95]">
                Corporate Leadership
              </h2>
            </div>
            <p className="text-body-sm text-quarry-grey max-w-sm">
              Hands-on directors with decades of open-pit mining, structural civil engineering, and international commodity finance experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {LEADERSHIP.map((leader) => (
              <div
                key={leader.name}
                onClick={() => setSelectedLeader(leader)}
                className="group cursor-pointer flex flex-col border border-slab-grey p-4 bg-iron-white hover:border-earth-black transition-colors"
              >
                {/* Square aspect ratio 1:1 headshot */}
                <div className="relative aspect-square w-full overflow-hidden bg-slab-grey mb-4">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="img-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>

                <h3 className="text-heading-3 font-medium text-earth-black group-hover:text-oxide-red transition-colors mb-1">
                  {leader.name}
                </h3>

                <span className="text-label text-quarry-grey font-mono uppercase tracking-wider block mb-3">
                  {leader.title}
                </span>

                <span className="text-xs font-mono font-bold text-oxide-red uppercase tracking-wider mt-auto inline-flex items-center gap-1">
                  View Dossier →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leader Bio Modal */}
      {selectedLeader && (
        <div
          onClick={() => setSelectedLeader(null)}
          className="fixed inset-0 z-50 bg-earth-black/75 flex items-center justify-center p-4 backdrop-blur-none"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-iron-white border-2 border-earth-black max-w-xl w-full p-8 relative animate-fade-in"
          >
            <button
              onClick={() => setSelectedLeader(null)}
              className="absolute top-4 right-4 text-earth-black hover:text-oxide-red font-mono text-xl p-2"
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="flex items-center gap-6 mb-6">
              <div className="relative w-24 h-24 flex-shrink-0 bg-slab-grey border border-slab-grey">
                <Image
                  src={selectedLeader.image}
                  alt={selectedLeader.name}
                  fill
                  className="img-cover"
                />
              </div>
              <div>
                <h3 className="text-heading-2 font-medium text-earth-black">
                  {selectedLeader.name}
                </h3>
                <span className="text-label text-oxide-red font-mono uppercase tracking-wider block mt-1">
                  {selectedLeader.title}
                </span>
              </div>
            </div>

            <p className="text-body text-quarry-grey leading-relaxed mb-6">
              {selectedLeader.bio}
            </p>

            <div className="p-4 bg-[#E8E5DD] border border-slab-grey font-mono text-xs">
              <span className="text-quarry-grey uppercase block mb-1">Key Focus Area:</span>
              <span className="text-earth-black font-semibold">{selectedLeader.focus}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
