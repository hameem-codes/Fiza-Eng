import React from "react";
import Link from "next/link";
import { 
  Pickaxe, 
  Cog, 
  Coins, 
  TrainTrack, 
  Construction, 
  Wheat, 
  Factory, 
  Zap,
  ArrowRight
} from "lucide-react";
import { CAPABILITIES } from "@/lib/constants";
import { SectionDivider } from "@/components/ui/SectionDivider";

const CAPABILITY_ICONS: { [key: string]: React.ReactNode } = {
  "mining-services": <Pickaxe size={26} className="text-earth-black" />,
  "mineral-trading": <Coins size={26} className="text-earth-black" />,
  "railway-solutions": <TrainTrack size={26} className="text-earth-black" />,
  "infrastructure": <Construction size={18} className="text-earth-black" />,
  "turnkey-plants": <Factory size={18} className="text-earth-black" />,
  "agriculture": <Wheat size={18} className="text-earth-black" />,
  "equipment-procurement": <Cog size={18} className="text-earth-black" />,
  "industrial-power": <Zap size={18} className="text-earth-black" />,
};

export function CapabilitiesGrid() {
  const featuredCapabilities = CAPABILITIES.slice(0, 3);
  const standardCapabilities = CAPABILITIES.slice(3);

  return (
    <section className="w-full bg-iron-white">
      <SectionDivider />

      <div className="max-w-content mx-auto px-6 md:px-12 py-20 md:py-28">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 bg-oxide-red inline-block" />
              <span className="text-label text-earth-black font-mono tracking-widest font-semibold">
                Core capabilities
              </span>
            </div>
            <h2 className="text-display-lg font-medium text-earth-black leading-[0.95]">
              Integrated Industrial Engineering
            </h2>
          </div>
          <Link
            href="/capabilities"
            className="text-label font-bold text-earth-black hover:text-oxide-red uppercase tracking-wider inline-flex items-center gap-2 transition-colors font-mono"
          >
            Explore All 8 Divisions <ArrowRight size={14} />
          </Link>
        </div>

        {/* Featured Top 3 Services: Visually Distinct with Red Left Accent & Warm Tint */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <h3 className="font-heading text-lg font-semibold text-earth-black">
              Our Core Services
            </h3>
            <span className="h-[1px] bg-slab-grey/80 flex-grow" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredCapabilities.map((item) => (
              <Link
                key={item.id}
                href={`/capabilities/${item.slug}`}
                className="group flex flex-col justify-between bg-[#EFECE5] border-y border-r border-slab-grey border-l-4 border-l-oxide-red p-8 md:p-9 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-earth-black hover:border-l-oxide-red"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 bg-iron-white border border-slab-grey group-hover:bg-oxide-red group-hover:text-iron-white transition-colors shadow-sm">
                      {CAPABILITY_ICONS[item.id]}
                    </div>
                    <span className="text-[11px] font-mono text-oxide-red font-bold uppercase tracking-wider">
                      Primary Division
                    </span>
                  </div>

                  <h4 className="text-heading-2 font-medium text-earth-black mb-3 group-hover:text-oxide-red transition-colors">
                    {item.title}
                  </h4>

                  <p className="text-body-sm text-earth-black font-medium mb-3 leading-snug">
                    {item.tagline}
                  </p>

                  <p className="text-body-sm text-quarry-grey leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Scope Highlights */}
                  <div className="pt-4 border-t border-slab-grey/60 space-y-2 mb-6">
                    {item.scope.slice(0, 3).map((s, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-mono text-quarry-grey">
                        <span className="w-1.5 h-1.5 bg-oxide-red inline-block flex-shrink-0" />
                        <span className="truncate">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 border-t border-slab-grey flex items-center justify-between">
                  <span className="text-label font-mono font-bold text-earth-black uppercase tracking-wider group-hover:text-oxide-red transition-colors inline-flex items-center gap-1.5">
                    View Services <ArrowRight size={14} />
                  </span>
                  <span className="text-[11px] font-mono text-quarry-grey">
                    Active Operations
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Secondary 5 Services: Compact, Supporting Grid */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <h3 className="font-heading text-base font-semibold text-quarry-grey">
              Additional Services
            </h3>
            <span className="h-[1px] bg-slab-grey/60 flex-grow" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {standardCapabilities.map((item) => (
              <Link
                key={item.id}
                href={`/capabilities/${item.slug}`}
                className="group flex flex-col justify-between bg-iron-white border border-slab-grey p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-sm hover:border-earth-black"
              >
                <div>
                  <div className="p-2 bg-[#E8E5DD] border border-slab-grey w-fit mb-3 group-hover:bg-earth-black group-hover:text-iron-white transition-colors">
                    {CAPABILITY_ICONS[item.id]}
                  </div>

                  <h5 className="text-body font-medium text-earth-black mb-1.5 leading-snug group-hover:text-oxide-red transition-colors">
                    {item.title}
                  </h5>

                  <p className="text-xs text-quarry-grey leading-relaxed mb-4">
                    {item.tagline}
                  </p>
                </div>

                <div className="pt-3 border-t border-slab-grey/40 flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold text-earth-black group-hover:text-oxide-red transition-colors inline-flex items-center gap-1">
                    Learn More <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
