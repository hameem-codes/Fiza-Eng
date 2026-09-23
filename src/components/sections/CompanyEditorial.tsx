import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SITE_FACTS } from "@/lib/siteFacts";
import { SITE_IMAGES } from "@/lib/images";

export function CompanyEditorial() {
  return (
    <section className="w-full py-20 md:py-28 overflow-hidden bg-iron-white border-b border-slab-grey">
      <div className="max-w-content mx-auto px-6 md:px-12">
        {/* Pattern A: Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Block (7 Columns) */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-oxide-red inline-block" />
              <span className="text-label text-earth-black font-mono tracking-widest font-semibold">
                About Fiza Engineering
              </span>
            </div>

            <h2 className="text-display-lg sm:text-[3rem] font-medium text-earth-black leading-[1.0] mb-8">
              Turning complex industrial terrain into dependable, executed operations.
            </h2>

            <div className="space-y-6 text-quarry-grey text-body leading-relaxed max-w-editorial">
              <p className="text-earth-black font-medium text-body-lg leading-relaxed">
                Fiza Engineering Corporation is a multidisciplinary industrial company headquartered in the Middle East, with an operational focus across Africa. We develop mining and infrastructure projects, supply minerals and deliver heavy industrial solutions to international markets.
              </p>
              <p>
                We combine active mining interests, equipment manufacturing, engineering capability and international project development to turn complex industrial requirements into dependable, operational assets.
              </p>
              <p className="border-l-2 border-oxide-red pl-4 text-earth-black/90 italic text-sm">
                Founded by <strong className="font-semibold text-earth-black">Muhammed Farooghuddin</strong>, with over four decades of experience in international business and mineral trading, Fiza has developed strategic concessions, heavy rail logistics, and large-scale plant operations with rigorous operational discipline.
              </p>
            </div>

            <div className="mt-10 pt-6 border-t border-slab-grey flex flex-wrap items-center gap-6">
              <Link
                href="/company"
                className="btn-primary text-xs py-3 px-6 inline-flex items-center gap-2"
              >
                Read Company Profile <span>→</span>
              </Link>
              <Link
                href="/contact"
                className="btn-secondary text-xs py-3 px-6 inline-flex items-center gap-2"
              >
                Our Operations & Offices
              </Link>
            </div>
          </div>

          {/* Right Image Block (5 Columns) */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[420px] sm:h-[480px] w-full border border-slab-grey bg-slab-grey/40 shadow-sm overflow-hidden">
              <Image
                src={SITE_IMAGES.editorialMining.src}
                alt={SITE_IMAGES.editorialMining.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="img-cover object-center transition-transform duration-700 hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-earth-black/70 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 bg-earth-black/90 backdrop-blur-sm p-4 text-iron-white border border-slab-grey/20">
                <span className="block font-mono text-[10px] uppercase text-dust-tan tracking-wider">
                  Field Operations · Concession Development
                </span>
                <span className="text-body-sm font-medium text-iron-white block mt-1">
                  100% owned fleet of over {SITE_FACTS.fleetSize} machines active across {SITE_FACTS.continents} continents.
                </span>
              </div>
            </div>

            {/* Asymmetric Floating Stat Tag */}
            <div className="hidden sm:block absolute -top-4 -right-4 bg-iron-white border border-slab-grey p-4 shadow-sm">
              <span className="font-heading text-2xl font-bold text-oxide-red block">{SITE_FACTS.foundedYear}</span>
              <span className="font-mono text-[10px] uppercase text-quarry-grey tracking-wider">Established</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
