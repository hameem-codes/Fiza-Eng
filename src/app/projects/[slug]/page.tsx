import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PROJECTS } from "@/lib/constants";
import { SectionDivider } from "@/components/ui/SectionDivider";

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

export function generateMetadata({ params }: Props): Metadata {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) {
    return {
      title: "Project Overview | Fiza Engineering",
    };
  }

  const fullTitle = `${project.title} | Fiza Engineering`;
  const title = fullTitle.length <= 60 ? fullTitle : `${project.title.slice(0, 38)} | Fiza Engineering`;

  const rawDesc = `${project.excerpt} Operated across ${project.location}, ${project.country}.`;
  const description = rawDesc.length >= 120 && rawDesc.length <= 155
    ? rawDesc
    : rawDesc.length > 155
    ? `${rawDesc.slice(0, 151)}...`
    : `${rawDesc} Multidisciplinary engineering and infrastructure execution.`.slice(0, 150);

  return {
    title,
    description,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://fiza-one.vercel.app/projects/${project.slug}`,
      siteName: "Fiza Engineering Corporation",
      type: "website",
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="w-full pt-[72px]">
      {/* 55vh Project Hero Banner */}
      <section className="relative w-full h-[55vh] min-h-[420px] flex items-end overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          className="img-cover object-center"
        />
        <div className="dark-overlay-heavy" />
        <div className="relative z-10 max-w-content mx-auto w-full px-6 md:px-12 pb-14">
          <Link
            href="/projects"
            className="text-label text-dust-tan font-mono uppercase tracking-[0.2em] inline-flex items-center gap-2 mb-3 hover:text-iron-white transition-colors"
          >
            ← All Projects
          </Link>
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-earth-black text-iron-white font-mono text-[11px] uppercase tracking-wider px-2 py-0.5">
              {project.country}
            </span>
            <span className="text-oxide-red font-mono text-xs uppercase tracking-wider font-semibold">
              {project.category}
            </span>
          </div>
          <h1 className="text-display-lg sm:text-[3.5rem] font-medium text-iron-white leading-[0.95]">
            {project.title}
          </h1>
        </div>
      </section>

      {/* Case Study Section (3-Column Narrative + Sidebar) */}
      <section className="w-full bg-iron-white py-20 border-b border-slab-grey">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Narrative Block (7 Columns) */}
            <div className="lg:col-span-7 space-y-12">
              <div>
                <span className="text-label text-oxide-red font-mono uppercase tracking-widest block mb-2">
                  Executive Brief
                </span>
                <p className="text-body-lg text-earth-black leading-relaxed font-medium">
                  {project.excerpt}
                </p>
              </div>

              {/* Challenge */}
              <div className="border-t border-slab-grey pt-8">
                <span className="text-label text-earth-black font-mono uppercase tracking-wider block mb-2">
                  01. The Operational Challenge
                </span>
                <p className="text-body text-quarry-grey leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="border-t border-slab-grey pt-8">
                <span className="text-label text-earth-black font-mono uppercase tracking-wider block mb-2">
                  02. Engineered Solution & Fleet Deployment
                </span>
                <p className="text-body text-quarry-grey leading-relaxed">
                  {project.solution}
                </p>
              </div>

              {/* Outcome */}
              <div className="border-t border-slab-grey pt-8">
                <span className="text-label text-earth-black font-mono uppercase tracking-wider block mb-2">
                  03. Quantifiable Operational Impact
                </span>
                <p className="text-body text-quarry-grey leading-relaxed">
                  {project.outcome}
                </p>
              </div>
            </div>

            {/* Right Project Data Sidebar (5 Columns) */}
            <div className="lg:col-span-5 flex flex-col space-y-8">
              {/* Technical Specifications Card */}
              <div className="bg-[#EBE8E0] border border-slab-grey p-8 font-mono">
                <span className="text-label text-earth-black uppercase tracking-wider block mb-4 pb-2 border-b border-slab-grey font-bold">
                  Project Specifications
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
                  <span className="text-label text-earth-black uppercase tracking-wider block mb-4 font-bold">
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
                  Our engineering teams prepare feasibility models and fleet mobilization plans for governmental and corporate extraction tenders.
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

      {/* Field Photography Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="w-full bg-[#E8E5DD] py-20 border-b border-slab-grey">
          <div className="max-w-content mx-auto px-6 md:px-12">
            <span className="text-label text-oxide-red font-mono uppercase tracking-widest block mb-2">
              Visual Documentation
            </span>
            <h2 className="text-display-lg font-medium text-earth-black leading-[0.95] mb-12">
              Field Photographic Records
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.gallery.map((imgUrl, idx) => (
                <div key={idx} className="relative aspect-[16/11] w-full overflow-hidden bg-slab-grey border border-slab-grey">
                  <Image
                    src={imgUrl}
                    alt={`${project.title} field documentation - Plate ${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="img-cover hover:scale-[1.02] transition-transform duration-300"
                  />
                  <div className="absolute bottom-2 left-2 bg-earth-black/80 text-iron-white font-mono text-[10px] px-2 py-0.5">
                    PLATE 0{idx + 1}
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
