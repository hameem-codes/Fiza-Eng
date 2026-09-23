"use client";

import React from "react";
import Link from "next/link";
import { SITE_FACTS } from "@/lib/siteFacts";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

// Marquee ticker text — doubled so it loops seamlessly
const TICKER_ITEMS =
  "WEST AFRICA\u00A0\u00A0·\u00A0\u00A0RAIL CORRIDORS\u00A0\u00A0·\u00A0\u00A0450+ MACHINES DEPLOYED\u00A0\u00A0·\u00A0\u00A030 YEARS DIRECT EXECUTION\u00A0\u00A0·\u00A0\u00A0MINERAL SUPPLY CHAINS\u00A0\u00A0·\u00A0\u00A0OPEN-PIT MINING\u00A0\u00A0·\u00A0\u00A0TURNKEY INDUSTRIAL PLANTS\u00A0\u00A0·\u00A0\u00A0";

export function HomeHero() {
  return (
    <div className="w-full">
      {/* 1. Hero Main Frame */}
      <section className="relative w-full min-h-screen lg:min-h-[100vh] flex flex-col justify-end overflow-hidden bg-[#0D0D0C]">

        {/* ── VIDEO BACKGROUND PLACEHOLDER ── */}
        {/* TODO: Replace this placeholder with <video> when real site footage is supplied */}
        <div className="absolute inset-0 z-0 select-none">
          {/* Real footage placeholder */}
          <div className="absolute inset-0 bg-[#0D0D0C] flex items-center justify-center">
            <div
              className="border border-slab-grey/20 px-8 py-5 text-center max-w-lg mx-auto"
              style={{ opacity: 0.18 }}
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-dust-tan block mb-2">
                Video placeholder
              </span>
              <span className="font-mono text-xs text-quarry-grey block">
                [REAL SITE FOOTAGE — Excavators, haul trucks, dust, African terrain]
              </span>
            </div>
          </div>

          {/* Fallback: dark textured background simulating heavy industrial ambience */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 30% 60%, rgba(60,35,20,0.55) 0%, rgba(13,13,12,0) 70%), radial-gradient(ellipse at 70% 20%, rgba(30,25,15,0.4) 0%, rgba(13,13,12,0) 60%)",
            }}
          />

          {/* Subtle dot mesh texture */}
          <div
            className="absolute inset-0 opacity-[0.07] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(rgba(242, 240, 235, 0.4) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          {/* Cinematic gradient — strong at bottom, fades toward top */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0C] via-[#0D0D0C]/80 to-[#0D0D0C]/30" />
        </div>

        {/* ── AMBER MARQUEE TICKER ── */}
        <div className="absolute top-[72px] left-0 right-0 z-20 overflow-hidden border-y border-safety-amber/15 py-2.5 bg-[#0D0D0C]/40 backdrop-blur-sm">
          <div className="marquee-track">
            {/* Render twice so the loop is seamless */}
            {[0, 1].map((pass) => (
              <span
                key={pass}
                className="font-mono text-[10px] uppercase tracking-[0.25em] text-safety-amber whitespace-nowrap pr-0"
                aria-hidden={pass === 1}
              >
                {TICKER_ITEMS.repeat(4)}
              </span>
            ))}
          </div>
        </div>

        {/* ── HERO COPY & ACTIONS ── */}
        <div className="relative z-10 max-w-content mx-auto w-full px-6 md:px-12 pb-16 md:pb-24 pt-40">
          <div className="max-w-4xl">

            {/* Overline */}
            <ScrollReveal delay={0}>
              <div className="flex items-center gap-2.5 mb-7">
                <span className="w-2.5 h-2.5 bg-oxide-red inline-block" />
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-dust-tan font-medium">
                  Est. {SITE_FACTS.foundedYear} · {SITE_FACTS.yearsInBusinessLabel} Direct Execution · Dubai, UAE
                </span>
              </div>
            </ScrollReveal>

            {/* Main headline — DM Serif Display */}
            <ScrollReveal delay={80}>
              <h1
                className="text-iron-white leading-[0.95] mb-6"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(3rem, 7vw, 6.5rem)",
                  fontWeight: 400,
                  letterSpacing: "-0.02em",
                }}
              >
                We don&apos;t advise.
                <br />
                <span className="text-safety-amber">We extract.</span>
              </h1>
            </ScrollReveal>

            {/* Subheading — Inter */}
            <ScrollReveal delay={160}>
              <p className="text-body-lg text-dust-tan/90 max-w-2xl mb-10 leading-relaxed font-normal">
                Open-pit mining. Heavy-haul rail. Turnkey plants.{" "}
                <span className="text-iron-white/70">
                  Across {SITE_FACTS.countries} African jurisdictions — with our own fleet.
                </span>
              </p>
            </ScrollReveal>

            {/* CTA Buttons */}
            <ScrollReveal delay={240}>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/projects"
                  className="btn-pulse inline-flex items-center gap-2 bg-oxide-red text-iron-white text-xs py-3.5 px-8 font-mono uppercase tracking-wider font-semibold transition-colors hover:bg-[#8a2e1c]"
                  style={{ transitionDuration: "200ms" }}
                >
                  View active projects
                </Link>
                <Link
                  href="/capabilities"
                  className="inline-flex items-center gap-2 border border-iron-white/40 text-iron-white/90 hover:border-safety-amber hover:text-safety-amber text-xs py-3.5 px-8 font-mono uppercase tracking-wider font-semibold transition-all duration-200"
                  style={{
                    boxShadow: "0 0 0 0 rgba(212,148,26,0)",
                    transitionProperty: "color, border-color, box-shadow",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                      "0 0 18px 2px rgba(212,148,26,0.18)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                      "0 0 0 0 rgba(212,148,26,0)";
                  }}
                >
                  See our services
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Thin amber accent line at very bottom of hero */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-safety-amber/60 via-safety-amber/20 to-transparent z-20" />
      </section>

      {/* 2. Compact Stats Row (unchanged data, slightly refreshed styling) */}
      <section className="w-full bg-[#111110] border-b border-slab-grey/10 text-iron-white py-5 md:py-6">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-slab-grey/10">
            <div className="pt-4 md:pt-0 md:px-8 first:pl-0">
              <span className="font-mono text-[10px] uppercase tracking-wider text-quarry-grey block mb-1">
                Fleet Capacity
              </span>
              <div className="flex items-baseline gap-1.5">
                <span className="font-display text-3xl sm:text-4xl text-safety-amber" style={{ fontFamily: "var(--font-display)" }}>
                  {SITE_FACTS.fleetSize}
                </span>
                <span className="text-xs font-mono text-dust-tan/70">Machines</span>
              </div>
            </div>

            <div className="pt-4 md:pt-0 md:px-8">
              <span className="font-mono text-[10px] uppercase tracking-wider text-quarry-grey block mb-1">
                Jurisdictions
              </span>
              <div className="flex items-baseline gap-1.5">
                <span className="font-display text-3xl sm:text-4xl text-iron-white" style={{ fontFamily: "var(--font-display)" }}>
                  {SITE_FACTS.countries}
                </span>
                <span className="text-xs font-mono text-dust-tan/70">Countries</span>
              </div>
            </div>

            <div className="pt-4 md:pt-0 md:px-8">
              <span className="font-mono text-[10px] uppercase tracking-wider text-quarry-grey block mb-1">
                Annual Volume
              </span>
              <div className="flex items-baseline gap-1.5">
                <span className="font-display text-3xl sm:text-4xl text-iron-white" style={{ fontFamily: "var(--font-display)" }}>
                  {SITE_FACTS.annualTonnesNumber}
                </span>
                <span className="text-xs font-mono text-dust-tan/70">Tonnes</span>
              </div>
            </div>

            <div className="pt-4 md:pt-0 md:px-8">
              <span className="font-mono text-[10px] uppercase tracking-wider text-quarry-grey block mb-1">
                Track Record
              </span>
              <div className="flex items-baseline gap-1.5">
                <span className="font-display text-3xl sm:text-4xl text-safety-amber" style={{ fontFamily: "var(--font-display)" }}>
                  {SITE_FACTS.yearsInBusinessLabel}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
