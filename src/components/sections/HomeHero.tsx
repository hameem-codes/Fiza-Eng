import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SITE_FACTS } from "@/lib/siteFacts";
import { SITE_IMAGES } from "@/lib/images";

export function HomeHero() {
  return (
    <section className="relative w-full h-[90vh] min-h-[640px] max-h-[960px] flex flex-col justify-end overflow-hidden bg-coal-dark">
      {/* Background Image with Dark Industrial Texture & Gradient Overlay */}
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src={SITE_IMAGES.homeHero.src}
          alt={SITE_IMAGES.homeHero.alt}
          fill
          priority
          sizes="100vw"
          className="img-cover object-center scale-[1.02] transform transition-transform duration-1000 ease-out"
        />
        {/* Subtle Industrial Mesh/Dot Texture */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(rgba(242, 240, 235, 0.4) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Cinematic Gradient: Dark Coal to Deep Tone */}
        <div className="absolute inset-0 bg-gradient-to-t from-earth-black via-earth-black/75 to-earth-black/40" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-content mx-auto w-full px-6 md:px-12 pb-16 md:pb-24">
        <div className="max-w-3xl">
          {/* Authentic Company Tagline Overline */}
          <div className="flex items-center gap-3 mb-5">
            <span className="w-2.5 h-2.5 bg-oxide-red inline-block" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-dust-tan font-medium">
              Established {SITE_FACTS.foundedYear} · {SITE_FACTS.footprintRegions}
            </span>
          </div>

          {/* Statement Headline: Real Brochure Headline */}
          <h1 className="text-display-lg sm:text-[3.5rem] md:text-display-xl font-medium text-iron-white tracking-tight leading-[0.94] mb-6">
            Building the Industries That Power Progress.
          </h1>

          {/* Authentic Subtitle from Company Reference */}
          <p className="text-body-lg text-dust-tan max-w-2xl mb-8 leading-relaxed font-normal">
            Mining, infrastructure, railways, and industrial solutions across Africa, Asia, the Middle East and beyond. From concept to commissioning.
          </p>

          {/* Purposeful CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <Button
              variant="primary"
              href="/projects"
              className="!bg-oxide-red hover:!bg-earth-black shadow-sm"
            >
              Explore Our Work
            </Button>
            <Button
              variant="secondary"
              href="/capabilities"
              className="!border-iron-white !text-iron-white hover:!bg-iron-white hover:!text-earth-black"
            >
              Core Capabilities
            </Button>
          </div>
        </div>

        {/* Authentic Footprint Quick Stat Counter Bar */}
        <div className="hidden lg:grid grid-cols-4 gap-6 pt-10 mt-12 border-t border-slab-grey/20 max-w-4xl text-iron-white font-mono text-xs">
          <div>
            <span className="block text-oxide-red text-base font-semibold">{SITE_FACTS.fleetSize}</span>
            <span className="text-dust-tan text-[11px] uppercase tracking-wider">Heavy Machines</span>
          </div>
          <div>
            <span className="block text-iron-white text-base font-semibold">{SITE_FACTS.countries}</span>
            <span className="text-dust-tan text-[11px] uppercase tracking-wider">Countries</span>
          </div>
          <div>
            <span className="block text-iron-white text-base font-semibold">{SITE_FACTS.continents}</span>
            <span className="text-dust-tan text-[11px] uppercase tracking-wider">Active Continents</span>
          </div>
          <div>
            <span className="block text-oxide-red text-base font-semibold">{SITE_FACTS.yearsInBusinessLabel}</span>
            <span className="text-dust-tan text-[11px] uppercase tracking-wider">Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
}
