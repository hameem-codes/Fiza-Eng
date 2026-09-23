"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SITE_FACTS } from "@/lib/siteFacts";
import { SITE_IMAGES } from "@/lib/images";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function CompanyEditorial() {
  return (
    <section className="w-full py-14 md:py-20 bg-iron-white border-b border-slab-grey">
      <div className="max-w-content mx-auto px-6 md:px-12">
        {/* Asymmetric 65 / 35 grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[13fr_7fr] gap-12 lg:gap-16 items-start">

          {/* LEFT — Text block (65%) */}
          <ScrollReveal delay={0}>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 bg-oxide-red inline-block" />
                <span className="text-label text-earth-black font-mono tracking-widest font-semibold uppercase">
                  About Fiza Engineering
                </span>
              </div>

              {/* DM Serif Display heading */}
              <h2
                className="text-earth-black leading-[1.05] mb-7"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 3.5vw, 3rem)",
                  fontWeight: 400,
                  letterSpacing: "-0.01em",
                }}
              >
                Engineering heavy infrastructure and direct mineral supply chains across Africa.
              </h2>

              <p className="text-body-lg text-earth-black/80 leading-relaxed mb-5 font-normal max-w-2xl">
                Founded in {SITE_FACTS.foundedYear} by Muhammed Farooghuddin, Fiza Engineering Corporation is an integrated industrial company headquartered in Dubai with principal operations across Africa. We develop mineral concessions, engineer heavy-haul railway corridors, build turnkey processing plants, and supply bulk commodities to global markets with direct operational control and our own heavy machinery fleet.
              </p>

              {/* Key fact list */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border border-slab-grey mb-8">
                {[
                  { label: "Founded", value: String(SITE_FACTS.foundedYear) },
                  { label: "Headquarters", value: "Dubai, UAE" },
                  { label: "Active Countries", value: String(SITE_FACTS.countries) },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`px-5 py-4 ${i < 2 ? "border-b sm:border-b-0 sm:border-r border-slab-grey" : ""}`}
                  >
                    <span className="block font-mono text-[10px] uppercase tracking-widest text-quarry-grey mb-1">
                      {item.label}
                    </span>
                    <span className="block font-heading text-lg font-semibold text-earth-black">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slab-grey/60">
                <Link
                  href="/company"
                  className="btn-primary text-xs py-3 px-7 inline-flex items-center gap-2 font-mono uppercase tracking-wider font-semibold hover:bg-oxide-red"
                >
                  See who runs this operation <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* RIGHT — Portrait (35%) */}
          <ScrollReveal delay={120}>
            <div className="flex flex-col">
              {/* Image with amber border on top + right only */}
              <div
                className="relative h-[420px] sm:h-[480px] w-full bg-[#1A1A18] overflow-hidden"
                style={{
                  borderTop: "2px solid var(--safety-amber)",
                  borderRight: "2px solid var(--safety-amber)",
                  borderBottom: "1px solid var(--slab-grey)",
                  borderLeft: "1px solid var(--slab-grey)",
                }}
              >
                {/* Placeholder label (replace with real portrait) */}
                {/* TODO: OWNER TO SUPPLY — [FOUNDER PHOTO — Muhammed Farooghuddin, formal portrait] */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#1C1C1A]">
                  <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-quarry-grey/50 block mb-1">
                    Founder portrait
                  </span>
                  <span className="font-mono text-xs text-quarry-grey/30 text-center px-6">
                    [FOUNDER PHOTO — Muhammed Farooghuddin, formal portrait]
                  </span>
                </div>

                {/* If a real portrait exists in SITE_IMAGES, uncomment: */}
                {/* <Image src={SITE_IMAGES.founderPortrait.src} alt="Muhammed Farooghuddin, Founder & CEO" fill sizes="35vw" className="img-cover" /> */}

                {/* Name overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-[#0D0D0C]/90 backdrop-blur-sm px-4 py-3 border-t border-slab-grey/20">
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-safety-amber">
                    Muhammed Farooghuddin
                  </span>
                  <span className="block font-mono text-xs text-dust-tan/70 mt-0.5">
                    Founder & Chief Executive Officer
                  </span>
                </div>
              </div>

              {/* Pull-quote below the image */}
              <div className="mt-6 pl-4 border-l-2 border-safety-amber">
                <p
                  className="text-earth-black/85 leading-snug"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontStyle: "italic",
                    fontSize: "clamp(1rem, 1.4vw, 1.2rem)",
                  }}
                >
                  &ldquo;We built this company with machines, not meetings.&rdquo;
                </p>
                <span className="block font-mono text-[10px] uppercase tracking-widest text-quarry-grey mt-2">
                  — M. Farooghuddin, CEO
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
