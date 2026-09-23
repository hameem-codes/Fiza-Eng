import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionDivider } from "@/components/ui/SectionDivider";

const PLANT_TYPES = [
  {
    title: "1,500 TPH Primary Jaw Crushing Circuit",
    category: "Crushing & Screening",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop",
    href: "/products"
  },
  {
    title: "Modular Dense Media Separation (DMS) Unit",
    category: "Beneficiation",
    image: "https://images.unsplash.com/photo-1615680022647-99c397cbcaea?w=800&q=80",
    href: "/products"
  },
  {
    title: "Heavy Ball Mill & Dynamic Cyclone Station",
    category: "Grinding Circuits",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop",
    href: "/products"
  },
  {
    title: "60,000 MT Aerated Grain Terminal & Elevator",
    category: "Agro-Processing",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop",
    href: "/products"
  }
];

export function TurnkeyPlantStrip() {
  return (
    <section className="w-full bg-iron-white">
      <SectionDivider />
      <div className="max-w-content mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <span className="text-label text-oxide-red font-mono uppercase tracking-widest block mb-2">
              Modular Plant EPC
            </span>
            <h2 className="text-display-lg font-medium text-earth-black leading-[0.95]">
              Turnkey Processing Plants
            </h2>
          </div>
          <Link
            href="/capabilities/turnkey-plants"
            className="text-label font-bold text-earth-black hover:text-oxide-red uppercase tracking-wider inline-flex items-center gap-2 font-mono transition-colors"
          >
            All Modular Plants <span>→</span>
          </Link>
        </div>

        {/* Clean Strip: Image + Type label only */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PLANT_TYPES.map((plant, idx) => (
            <Link
              key={idx}
              href={plant.href}
              className="group flex flex-col border border-slab-grey bg-iron-white p-3 hover:border-earth-black transition-colors"
            >
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-slab-grey mb-3">
                <Image
                  src={plant.image}
                  alt={plant.title}
                  fill
                  className="img-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <span className="font-mono text-[10px] text-quarry-grey uppercase tracking-wider block mb-1">
                {plant.category}
              </span>
              <h3 className="text-body-sm font-medium text-earth-black leading-snug group-hover:text-oxide-red transition-colors">
                {plant.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
