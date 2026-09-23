"use client";

import React from "react";
import { SITE_FACTS } from "@/lib/siteFacts";
import { CountUpStat } from "@/components/ui/CountUpStat";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const STATS = [
  {
    prefix: "",
    target: 450,
    suffix: "+",
    label: "Heavy Machines Deployed",
    sublabel: "Active fleet across 3 continents",
    amber: true,
  },
  {
    prefix: "",
    target: 38,
    suffix: "M",
    label: "Tonnes Moved Annually",
    sublabel: "Open-pit overburden & mineral haulage",
    amber: true,
  },
  {
    prefix: "",
    target: SITE_FACTS.countries,
    suffix: "",
    label: "Active Jurisdictions",
    sublabel: "Across West, Central & Southern Africa",
    amber: false,
  },
  {
    prefix: "",
    target: 30,
    suffix: "+",
    label: "Years Direct Execution",
    sublabel: "Founded 1994, Dubai headquarters",
    amber: false,
  },
  {
    prefix: "",
    target: 0,
    suffix: "",
    label: "Abandoned Projects",
    sublabel: "Every mandate committed is delivered",
    amber: true,
    isZero: true,
  },
];

export function StatsWall() {
  return (
    <section
      className="relative w-full bg-[#181816] overflow-hidden py-20 md:py-28"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
        backgroundRepeat: "repeat",
        backgroundSize: "256px 256px",
      }}
    >
      {/* Faint horizontal rule at top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-slab-grey/10" />
      {/* Faint horizontal rule at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-slab-grey/10" />

      <div className="max-w-content mx-auto px-6 md:px-12">
        {/* Section overline */}
        <ScrollReveal delay={0}>
          <div className="flex items-center gap-2.5 mb-14">
            <span className="w-2 h-2 bg-safety-amber inline-block" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-safety-amber font-semibold">
              Operational Scale — {SITE_FACTS.yearsInBusinessLabel} in the field
            </span>
          </div>
        </ScrollReveal>

        {/* Stats Grid — 5 stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0 divide-y md:divide-y-0 divide-slab-grey/10 border border-slab-grey/10">
          {STATS.map((stat, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div
                className={`flex flex-col justify-between p-8 md:p-10 border-b md:border-b-0 md:border-r border-slab-grey/10 last:border-r-0 min-h-[220px] group ${
                  i === 4
                    ? "col-span-2 md:col-span-1 border-r-0"
                    : ""
                }`}
              >
                {/* Giant number */}
                <div
                  className={`font-heading leading-none tracking-tight select-none ${
                    stat.amber ? "text-safety-amber" : "text-iron-white/90"
                  }`}
                  style={{ fontSize: "clamp(4rem, 7vw, 7.5rem)" }}
                >
                  {stat.isZero ? (
                    <span>0</span>
                  ) : (
                    <CountUpStat
                      target={stat.target}
                      suffix={stat.suffix}
                      prefix={stat.prefix}
                      duration={1600}
                    />
                  )}
                </div>

                {/* Label & sublabel */}
                <div className="mt-4">
                  <span className="block font-mono text-xs uppercase tracking-widest text-iron-white font-bold mb-1">
                    {stat.label}
                  </span>
                  <span className="block text-[11px] font-mono text-quarry-grey leading-snug">
                    {stat.sublabel}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom note */}
        <ScrollReveal delay={450}>
          <p className="mt-8 text-[11px] font-mono text-quarry-grey/60 text-right">
            Figures represent active operational data. All statistics subject to owner verification prior to publication.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
