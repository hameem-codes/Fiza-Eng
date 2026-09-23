"use client";

import React, { useState } from "react";
import { ACHIEVEMENTS } from "@/lib/constants";
import { Tag } from "@/components/ui/Tag";
import { SITE_FACTS } from "@/lib/siteFacts";

const CATEGORIES = ["ALL", "Certifications", "Awards", "Milestones", "Partnerships"];

export default function AchievementsPage() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const filteredAchievements = ACHIEVEMENTS.filter((item) => {
    if (selectedCategory === "ALL") return true;
    return item.category === selectedCategory;
  });

  return (
    <div className="w-full pt-[72px]">
      {/* Editorial Header */}
      <section className="bg-iron-white py-20 md:py-24 border-b border-slab-grey">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <span className="text-label text-oxide-red font-mono uppercase tracking-[0.2em] block mb-3">
            Standards & Certifications
          </span>
          <h1 className="text-display-lg sm:text-[3.5rem] md:text-display-xl font-medium text-earth-black leading-[0.95] mb-6">
            Corporate Achievements
          </h1>
          <p className="text-body-lg text-quarry-grey max-w-2xl leading-relaxed">
            International ISO safety accreditations, continental infrastructure awards, and high-tonnage mining milestones earned through {SITE_FACTS.yearsInBusinessLower} of field discipline.
          </p>

          {/* Filter Categories */}
          <div className="flex flex-wrap items-center gap-3 mt-10 pt-6 border-t border-slab-grey">
            <span className="text-label font-mono text-earth-black uppercase tracking-wider mr-2">
              Category:
            </span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`tag cursor-pointer ${
                  selectedCategory === cat ? "tag--active" : "hover:bg-earth-black hover:text-iron-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline View of Achievements */}
      <section className="w-full bg-[#EBE8E0] py-20 md:py-28">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="relative border-l-2 border-earth-black ml-4 md:ml-10 pl-8 md:pl-16 space-y-12">
            {filteredAchievements.map((item) => (
              <div key={item.id} className="relative group">
                {/* Square pin */}
                <div className="absolute -left-[41px] md:-left-[73px] top-1.5 w-4 h-4 bg-earth-black group-hover:bg-oxide-red transition-colors" />

                <div className="bg-iron-white border border-slab-grey p-8 max-w-3xl group-hover:border-earth-black transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-xs text-oxide-red uppercase tracking-wider font-semibold">
                      {item.category}
                    </span>
                    <span className="font-mono text-xs text-quarry-grey font-bold">
                      {item.year}
                    </span>
                  </div>

                  <h2 className="text-heading-2 font-medium text-earth-black mb-2">
                    {item.title}
                  </h2>

                  <span className="text-label text-quarry-grey font-mono uppercase tracking-wider block mb-4">
                    Audited by: {item.organization}
                  </span>

                  <p className="text-body-sm text-quarry-grey leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
