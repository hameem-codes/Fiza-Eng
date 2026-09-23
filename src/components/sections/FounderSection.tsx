import React from "react";
import Link from "next/link";
import { SITE_FACTS } from "@/lib/siteFacts";

export function FounderSection() {
  return (
    <section className="w-full bg-[#EAE7DF] py-20 md:py-28 border-t border-b border-slab-grey">
      <div className="max-w-content mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Block (7 columns) */}
          <div className="lg:col-span-7">
            <span className="text-label text-earth-black font-mono uppercase tracking-widest font-semibold block mb-3">
              Leadership
            </span>

            <h2 className="text-display-lg sm:text-[2.75rem] font-medium text-earth-black leading-[1.05] mb-4">
              Muhammed Farooghuddin
            </h2>
            <span className="font-mono text-xs uppercase tracking-wider text-oxide-red font-semibold block mb-6">
              Founder & CEO
            </span>

            <p className="text-earth-black text-body-lg leading-relaxed mb-6 font-normal">
              India-born and Dubai-based, with more than four decades in international business, mineral trading and industrial development. Under his leadership, Fiza has expanded from a construction equipment trading business into a multidisciplinary enterprise operating across Africa, Asia, the CIS and the Middle East.
            </p>

            {/* Quote Block */}
            <blockquote className="border-l-4 border-oxide-red pl-6 py-2 my-6 bg-iron-white/70 p-5 border border-slab-grey/40">
              <p className="font-heading text-lg md:text-xl italic text-earth-black leading-snug font-normal">
                &ldquo;Our purpose is to build partnerships that strengthen local capability, create lasting value and help ambitious projects move forward.&rdquo;
              </p>
              <cite className="block text-xs font-mono text-quarry-grey uppercase tracking-wider mt-3 not-italic">
                — Muhammed Farooghuddin, Founder & CEO
              </cite>
            </blockquote>

            <div className="mt-8 pt-6 border-t border-slab-grey/60 flex items-center gap-6">
              <Link
                href="/company#leadership"
                className="btn-primary text-xs py-3 px-6"
              >
                Leadership Profile →
              </Link>
              <Link
                href="/contact"
                className="btn-secondary text-xs py-3 px-6"
              >
                Executive Inquiries
              </Link>
            </div>
          </div>

          {/* Right Solid Pattern Block (5 columns) - NO random stock photo */}
          <div className="lg:col-span-5 h-[340px] sm:h-[400px] w-full bg-coal-dark border border-slab-grey p-8 flex flex-col justify-between relative overflow-hidden shadow-sm">
            {/* Subtle Industrial Pattern */}
            <div
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(#F2F0EB 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="relative z-10">
              <span className="text-label text-dust-tan font-mono uppercase tracking-widest block mb-2">
                Executive Governance
              </span>
              <h3 className="text-heading-3 text-iron-white font-medium">
                Four Decades of Direct Execution
              </h3>
            </div>

            <div className="relative z-10 pt-6 border-t border-slab-grey/20 space-y-4 font-mono text-xs text-dust-tan">
              <div className="flex justify-between items-center">
                <span className="text-quarry-grey">Established</span>
                <span className="text-iron-white font-semibold">{SITE_FACTS.foundedYear}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-quarry-grey">Executive Base</span>
                <span className="text-iron-white font-semibold">Dubai (DIFC)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-quarry-grey">Operational Scope</span>
                <span className="text-iron-white font-semibold">Africa · Asia · CIS · Middle East</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-quarry-grey">Operating Model</span>
                <span className="text-oxide-red font-semibold">Vertically Integrated</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
