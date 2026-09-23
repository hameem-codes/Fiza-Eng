"use client";

import React from "react";
import Link from "next/link";
import { CAPABILITIES } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

// Images for the 3 primary divisions
const DIVISION_BG: Record<string, string> = {
  "mining-services": "https://images.unsplash.com/photo-1580983218765-f663bec07b37?q=80&w=1600&auto=format&fit=crop",
  "mineral-trading": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1600&auto=format&fit=crop",
  "railway-solutions": "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?q=80&w=1600&auto=format&fit=crop",
};

const DIVISION_PLACEHOLDER: Record<string, string> = {
  "mining-services": "[MINING OPERATIONS PHOTO]",
  "mineral-trading": "[MINERAL TRADING / PORT PHOTO]",
  "railway-solutions": "[RAIL CORRIDOR PHOTO]",
};

const DIVISION_BUTTON_LABELS: Record<string, string> = {
  "mining-services": "Explore mining →",
  "mineral-trading": "Explore trading →",
  "railway-solutions": "Explore rail →",
};

export function CapabilitiesGrid() {
  const primaryDivisions = CAPABILITIES.slice(0, 3);

  return (
    <section className="w-full bg-[#0F0F0E] py-16 md:py-24 border-b border-slab-grey/10 overflow-hidden">
      {/* Section header */}
      <div className="max-w-content mx-auto px-6 md:px-12 mb-10">
        <ScrollReveal delay={0}>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 bg-safety-amber inline-block" />
                <span className="text-label text-safety-amber font-mono tracking-widest font-semibold uppercase">
                  Operational Scope
                </span>
              </div>
              <h2
                className="text-iron-white leading-[0.97]"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  fontWeight: 400,
                }}
              >
                Three Primary Divisions
              </h2>
            </div>
            <Link
              href="/capabilities"
              className="font-mono text-xs uppercase tracking-widest text-quarry-grey hover:text-safety-amber transition-colors border-b border-quarry-grey/40 hover:border-safety-amber pb-0.5 whitespace-nowrap"
            >
              See all services →
            </Link>
          </div>
        </ScrollReveal>
      </div>

      {/* Horizontal cinematic scroll */}
      <div
        className="flex gap-5 overflow-x-auto no-scrollbar px-6 md:px-12 pb-4"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {primaryDivisions.map((division, i) => (
          <div
            key={division.id}
            className="relative flex-shrink-0 overflow-hidden group"
            style={{
              width: "clamp(300px, 60vw, 820px)",
              height: "clamp(400px, 52vw, 600px)",
              scrollSnapAlign: "start",
              scrollSnapStop: "always",
            }}
          >
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              style={{
                backgroundImage: `url("${DIVISION_BG[division.id]}")`,
                filter: "saturate(0.7) brightness(0.6)",
              }}
            />

            {/* Dark gradient overlay — text area */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0C] via-[#0D0D0C]/55 to-transparent" />

            {/* Ghost title text — enormous, low opacity, behind content */}
            <div
              className="absolute bottom-[-0.15em] left-4 select-none pointer-events-none leading-none"
              aria-hidden="true"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(100px, 14vw, 200px)",
                fontWeight: 400,
                color: "rgba(242,240,235,0.04)",
                letterSpacing: "-0.04em",
                whiteSpace: "nowrap",
              }}
            >
              {division.title.split(" ")[0]}
            </div>

            {/* Card content — anchored to bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-7 md:p-10">
              {/* Category label */}
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-safety-amber block mb-3">
                {`0${i + 1} / Primary Division`}
              </span>

              {/* Division title */}
              <h3
                className="text-iron-white mb-2 leading-tight"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)",
                  fontWeight: 400,
                }}
              >
                {division.title}
              </h3>

              {/* Tagline */}
              <p className="font-mono text-xs text-dust-tan/80 mb-5 max-w-xs leading-relaxed">
                {division.tagline}
              </p>

              {/* Scope bullets */}
              <div className="flex flex-col gap-1.5 mb-6">
                {division.scope.slice(0, 3).map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-[11px] font-mono text-quarry-grey">
                    <span className="w-1 h-1 bg-safety-amber inline-block flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href={`/capabilities/${division.slug}`}
                className="inline-flex items-center gap-2 border border-iron-white/25 hover:border-safety-amber text-iron-white/80 hover:text-safety-amber font-mono text-xs uppercase tracking-wider px-5 py-2.5 transition-all duration-200"
              >
                {DIVISION_BUTTON_LABELS[division.id] || "Explore →"}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll hint */}
      <div className="max-w-content mx-auto px-6 md:px-12 mt-5">
        <span className="font-mono text-[10px] uppercase tracking-widest text-quarry-grey/50">
          ← Scroll to explore →
        </span>
      </div>
    </section>
  );
}
