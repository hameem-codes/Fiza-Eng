import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ACTIVE_PORTFOLIO_PROJECTS } from "@/lib/constants";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function ActiveProjectsSection() {
  return (
    <section className="w-full bg-iron-white py-20 md:py-28 border-b border-slab-grey">
      <div className="max-w-content mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 bg-oxide-red inline-block" />
              <span className="text-label text-earth-black font-mono tracking-widest font-semibold">
                Active Projects
              </span>
            </div>
            <h2 className="text-display-lg sm:text-[3rem] font-medium text-earth-black leading-[0.95]">
              Active Projects & Operations
            </h2>
          </div>
          <p className="text-body-sm text-quarry-grey max-w-md">
            Direct operational investments combining sovereign concessions, heavy machinery ownership, and dedicated transport infrastructure.
          </p>
        </div>

        {/* 4 Real Active Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {ACTIVE_PORTFOLIO_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="bg-iron-white border border-slab-grey flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-earth-black group"
            >
              <div>
                {/* Project Image Banner */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slab-grey/40 border-b border-slab-grey">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="img-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="bg-earth-black text-iron-white font-mono text-[10px] uppercase font-bold tracking-wider px-2.5 py-1">
                      {project.country}
                    </span>
                    <span className="bg-oxide-red text-iron-white font-mono text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-earth-black/85 text-dust-tan font-mono text-[10px] px-2 py-0.5">
                    {project.tag}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <span className="font-mono text-xs uppercase tracking-wider text-oxide-red font-semibold block mb-1">
                    {project.country}
                  </span>
                  <h3 className="text-heading-2 font-medium text-earth-black mb-3 group-hover:text-oxide-red transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-body-sm text-quarry-grey leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Key Operational Highlights */}
                  <div className="bg-[#EBE8DF] border border-slab-grey/60 p-4 space-y-2 mb-2 font-mono text-xs text-earth-black">
                    {project.keyDetails.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 size={14} className="text-oxide-red flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="px-6 md:px-8 pb-6 pt-2 border-t border-slab-grey/40 flex items-center justify-between">
                <Link
                  href="/projects"
                  className="text-label font-mono font-bold text-earth-black uppercase tracking-wider group-hover:text-oxide-red transition-colors inline-flex items-center gap-1.5"
                >
                  Portfolio Details <ArrowRight size={14} />
                </Link>
                <span className="text-[11px] font-mono text-quarry-grey">
                  Fiza Concessions
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
