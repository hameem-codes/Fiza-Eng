import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { CAPABILITIES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Engineering Capabilities | Fiza Engineering",
  description:
    "Explore our eight core divisions: open-pit mining services, physical mineral trading, heavy rail, turnkey processing plants, and hybrid power systems.",
  alternates: {
    canonical: "/capabilities",
  },
  openGraph: {
    title: "Engineering Capabilities | Fiza Engineering",
    description:
      "Explore our eight core divisions: open-pit mining services, physical mineral trading, heavy rail, turnkey processing plants, and hybrid power systems.",
    url: "https://fiza-one.vercel.app/capabilities",
    siteName: "Fiza Engineering Corporation",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Capabilities | Fiza Engineering",
    description:
      "Explore our eight core divisions: open-pit mining services, physical mineral trading, heavy rail, turnkey processing plants, and hybrid power systems.",
  },
};

export default function CapabilitiesPage() {
  return (
    <div className="w-full pt-[72px]">
      {/* Editorial Header */}
      <section className="bg-iron-white py-20 md:py-28 border-b border-slab-grey">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <span className="text-label text-oxide-red font-mono uppercase tracking-[0.2em] block mb-3">
            Industrial Sectors & Services
          </span>
          <h1 className="text-display-lg sm:text-[3.5rem] md:text-display-xl font-medium text-earth-black leading-[0.95] mb-6">
            Core Capabilities
          </h1>
          <p className="text-body-lg text-quarry-grey max-w-2xl leading-relaxed">
            Eight integrated operational divisions engineered for self-reliance in remote African extraction and transit zones.
          </p>
        </div>
      </section>

      {/* Grid of 8 Capabilities */}
      <section className="w-full bg-[#EBE8E0] py-20 md:py-28">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {CAPABILITIES.map((cap, idx) => (
              <div
                key={cap.id}
                className="bg-iron-white border border-slab-grey p-8 flex flex-col justify-between group hover:border-earth-black transition-colors"
              >
                <div>
                  <div className="relative aspect-[16/9] w-full overflow-hidden mb-6 bg-slab-grey">
                    <Image
                      src={cap.image}
                      alt={cap.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="img-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                    <div className="absolute top-3 left-3 bg-earth-black text-iron-white font-mono text-[10px] tracking-wider px-2 py-0.5">
                      SECTOR 0{idx + 1}
                    </div>
                  </div>

                  <h2 className="text-heading-2 font-medium text-earth-black mb-3 group-hover:text-oxide-red transition-colors">
                    {cap.title}
                  </h2>

                  <p className="text-body-sm text-quarry-grey mb-6 leading-relaxed">
                    {cap.description}
                  </p>

                  <div className="mb-6">
                    <span className="text-label text-earth-black font-mono uppercase tracking-wider block mb-2">
                      Key Technical Scope:
                    </span>
                    <ul className="space-y-1.5 font-mono text-xs text-quarry-grey">
                      {cap.scope.slice(0, 3).map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-oxide-red inline-block" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-slab-grey flex items-center justify-between">
                  <span className="text-xs font-mono text-quarry-grey">
                    {cap.keyMetrics[0].value} {cap.keyMetrics[0].label}
                  </span>
                  <Link
                    href={`/capabilities/${cap.slug}`}
                    className="text-label font-bold text-oxide-red hover:underline uppercase tracking-wider font-mono inline-flex items-center gap-1"
                  >
                    Division Overview →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
