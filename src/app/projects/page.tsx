"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS, Project } from "@/lib/constants";
import { Tag } from "@/components/ui/Tag";

const FILTER_OPTIONS = ["ALL", "ACTIVE", "IN DEVELOPMENT", "COMPLETED"];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("ALL");

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === "ALL") return true;
    return p.status === filter;
  });

  return (
    <div className="w-full pt-[72px]">
      {/* Editorial Header */}
      <section className="bg-iron-white py-20 md:py-24 border-b border-slab-grey">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <span className="text-label text-oxide-red font-mono uppercase tracking-[0.2em] block mb-3">
            Continental Operations
          </span>
          <h1 className="text-display-lg sm:text-[3.5rem] md:text-display-xl font-medium text-earth-black leading-[0.95] mb-6">
            Major Projects
          </h1>
          <p className="text-body-lg text-quarry-grey max-w-2xl leading-relaxed">
            Turnkey open-pit extraction, heavy-haul railway track rehabilitation, and specialized processing plants delivered under sovereign contracts.
          </p>

          {/* Horizontal Tag Bar Filter */}
          <div className="flex flex-wrap items-center gap-3 mt-10 pt-6 border-t border-slab-grey">
            <span className="text-label font-mono text-earth-black uppercase tracking-wider mr-2">
              Filter Status:
            </span>
            {FILTER_OPTIONS.map((opt) => (
              <button
                key={opt}
                onClick={() => setFilter(opt)}
                className={`tag cursor-pointer ${
                  filter === opt ? "tag--active" : "hover:bg-earth-black hover:text-iron-white"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="w-full bg-[#EBE8E0] py-20 md:py-28">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.slug}`}
                className="group bg-iron-white border border-slab-grey p-6 flex flex-col justify-between hover:border-earth-black transition-colors"
              >
                <div>
                  {/* Aspect 16:10 Project Image */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slab-grey mb-4">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="img-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>

                  {/* Overline with Status Dot */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs text-quarry-grey uppercase tracking-wider">
                      {project.country.toUpperCase()} · {project.category.toUpperCase()}
                    </span>
                    <Tag status={project.status}>{project.status}</Tag>
                  </div>

                  <h2 className="text-heading-3 font-medium text-earth-black mb-3 group-hover:text-oxide-red transition-colors leading-snug">
                    {project.title}
                  </h2>

                  <p className="text-body-sm text-quarry-grey leading-relaxed line-clamp-3 mb-6">
                    {project.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slab-grey flex items-center justify-between">
                  <span className="text-xs font-mono text-quarry-grey">
                    {project.timeline}
                  </span>
                  <span className="text-label font-bold text-oxide-red uppercase tracking-wider font-mono inline-flex items-center gap-1">
                    Read Case Study <span>→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
