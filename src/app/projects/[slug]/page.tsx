import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/lib/constants";
import { Tag } from "@/components/ui/Tag";

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return PROJECTS.map((p) => ({
    slug: p.slug,
  }));
}

export default function ProjectDetailPage({ params }: Props) {
  const project = PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="w-full pt-[72px]">
      {/* Editorial Hero Header */}
      <section className="relative w-full h-[65vh] min-h-[480px] flex items-end overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          className="img-cover object-center"
        />
        <div className="dark-overlay-heavy" />
        <div className="relative z-10 max-w-content mx-auto w-full px-6 md:px-12 pb-16">
          <Link
            href="/projects"
            className="text-label text-dust-tan font-mono uppercase tracking-[0.2em] inline-flex items-center gap-2 mb-4 hover:text-iron-white transition-colors"
          >
            ← All Projects
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <Tag status={project.status}>{project.status}</Tag>
            <span className="text-iron-white font-mono text-xs uppercase tracking-wider">
              {project.location}, {project.country}
            </span>
          </div>
          <h1 className="text-display-lg sm:text-[3.5rem] md:text-display-xl font-medium text-iron-white leading-[0.95] max-w-3xl">
            {project.title}
          </h1>
        </div>
      </section>

      {/* Main Content Area: Editorial Body (Left) + Technical Data Sidebar (Right) */}
      <section className="w-full bg-iron-white py-20 md:py-28 border-b border-slab-grey">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Editorial Narrative (7 Columns) */}
            <div className="lg:col-span-7">
              <span className="text-label text-oxide-red font-mono uppercase tracking-widest block mb-4">
                Executive Case Study
              </span>

              <p className="text-body-lg text-earth-black font-medium leading-relaxed mb-10 pb-8 border-b border-slab-grey">
                {project.excerpt}
              </p>

              {/* Challenge */}
              <div className="mb-12">
                <h2 className="text-heading-2 font-medium text-earth-black mb-4">
                  The Engineering Challenge
                </h2>
                <p className="text-body text-quarry-grey leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="mb-12">
                <h2 className="text-heading-2 font-medium text-earth-black mb-4">
                  Fiza Solution & Fleet Deployment
                </h2>
                <p className="text-body text-quarry-grey leading-relaxed">
                  {project.solution}
                </p>
              </div>

              {/* Outcome */}
              <div className="p-8 bg-[#EBE8E0] border-l-4 border-oxide-red mb-12">
                <h3 className="text-heading-3 font-medium text-earth-black mb-3">
                  Operational Outcome
                </h3>
                <p className="text-body text-earth-black leading-relaxed">
                  {project.outcome}
                </p>
              </div>
            </div>

            {/* Right Project Data Sidebar (5 Columns) */}
            <div className="lg:col-span-5 flex flex-col space-y-8">
              {/* Technical Specifications Card */}
              <div className="bg-[#EBE8E0] border border-slab-grey p-8 font-mono">
                <span className="text-label text-earth-black uppercase tracking-wider block mb-4 pb-2 border-b border-slab-grey">
                  Project Dossier
                </span>

                <div className="space-y-4 text-xs">
                  <div>
                    <span className="block text-quarry-grey uppercase mb-1">Contracting Client</span>
                    <span className="font-semibold text-earth-black text-sm">{project.client}</span>
                  </div>
                  <div>
                    <span className="block text-quarry-grey uppercase mb-1">Location & Territory</span>
                    <span className="font-semibold text-earth-black text-sm">{project.location}, {project.country}</span>
                  </div>
                  <div>
                    <span className="block text-quarry-grey uppercase mb-1">Operational Status</span>
                    <span className="font-semibold text-earth-black text-sm">{project.status}</span>
                  </div>
                  <div>
                    <span className="block text-quarry-grey uppercase mb-1">Timeline & Execution</span>
                    <span className="font-semibold text-earth-black text-sm">{project.timeline}</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slab-grey">
                  <span className="text-label text-earth-black uppercase tracking-wider block mb-4">
                    Key Performance Metrics
                  </span>
                  <div className="grid grid-cols-2 gap-4">
                    {project.stats.map((stat, i) => (
                      <div key={i}>
                        <span className="block text-[10px] text-quarry-grey uppercase">{stat.label}</span>
                        <span className="text-base font-bold text-earth-black">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Inquiry Callout */}
              <div className="bg-coal-dark text-iron-white p-8 border border-slab-grey">
                <h4 className="text-heading-3 text-iron-white mb-2">Discuss Similar Tenders</h4>
                <p className="text-quarry-grey text-xs mb-6 leading-relaxed">
                  Our engineering teams prepare feasibility models and fleet mobilization plans for sovereign and corporate extraction tenders.
                </p>
                <Link
                  href="/contact"
                  className="btn-primary !bg-iron-white !text-earth-black hover:!bg-oxide-red hover:!text-iron-white w-full text-center text-xs py-3"
                >
                  Contact Project Engineers →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* High-Resolution Project Gallery Grid */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="w-full bg-[#E5E2D9] py-20 border-b border-slab-grey">
          <div className="max-w-content mx-auto px-6 md:px-12">
            <div className="mb-10">
              <span className="text-label text-oxide-red font-mono uppercase tracking-widest block mb-2">
                Field Evidence
              </span>
              <h2 className="text-heading-1 font-medium text-earth-black">
                On-Site Photographic Log
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.gallery.map((imgUrl, idx) => (
                <div key={idx} className="relative aspect-[16/10] bg-slab-grey border border-slab-grey overflow-hidden">
                  <Image
                    src={imgUrl}
                    alt={`${project.title} site image ${idx + 1}`}
                    fill
                    className="img-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-earth-black/90 text-iron-white font-mono text-[9px] px-2 py-0.5 uppercase">
                    LOG REF 0{idx + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
