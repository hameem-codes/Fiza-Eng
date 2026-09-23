"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { PROJECTS, Project } from "@/lib/constants";
import { Tag } from "@/components/ui/Tag";

const FILTER_OPTIONS = ["ALL", "ACTIVE", "IN DEVELOPMENT", "COMPLETED"];

function ProjectsContent() {
  const searchParams = useSearchParams();
  const initialFilter = searchParams.get("filter")?.toUpperCase() || "ALL";
  const [filter, setFilter] = useState("ALL");

  useEffect(() => {
    if (initialFilter && FILTER_OPTIONS.includes(initialFilter)) {
      setFilter(initialFilter);
    }
  }, [initialFilter]);

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
            Turnkey open-pit extraction, heavy-haul railway track rehabilitation, and specialized processing plants delivered under direct concession agreements.
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
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slab-grey mb-6">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="img-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                    <div className="absolute top-3 left-3 bg-earth-black text-iron-white font-mono text-[10px] uppercase tracking-wider px-2 py-0.5">
                      {project.country}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-oxide-red uppercase tracking-wider font-semibold">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-mono text-quarry-grey uppercase">
                      {project.status}
                    </span>
                  </div>

                  <h2 className="text-heading-2 font-medium text-earth-black group-hover:text-oxide-red transition-colors mb-3 leading-snug">
                    {project.title}
                  </h2>

                  <p className="text-body-sm text-quarry-grey leading-relaxed mb-6">
                    {project.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slab-grey flex items-center justify-between">
                  <span className="font-mono text-xs text-earth-black font-semibold">
                    {project.stats[0]?.label}: {project.stats[0]?.value}
                  </span>
                  <span className="text-label font-bold text-oxide-red uppercase tracking-wider font-mono inline-flex items-center gap-1">
                    Details →
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

export default function ProjectsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-[100px] text-center font-mono">Loading project catalog...</div>}>
      <ProjectsContent />
    </Suspense>
  );
}
