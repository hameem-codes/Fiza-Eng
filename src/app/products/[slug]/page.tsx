import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PRODUCTS } from "@/lib/constants";
import { SectionDivider } from "@/components/ui/SectionDivider";

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({
    slug: p.slug,
  }));
}

export default function ProductDetailPage({ params }: Props) {
  const product = PRODUCTS.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="w-full pt-[72px]">
      {/* Header Bar */}
      <section className="bg-iron-white py-14 border-b border-slab-grey">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <Link
            href="/products"
            className="text-label text-oxide-red font-mono uppercase tracking-[0.2em] inline-flex items-center gap-2 mb-4 hover:underline"
          >
            ← All Products & Machinery
          </Link>
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
            <div>
              <span className="font-mono text-xs text-quarry-grey uppercase tracking-wider block mb-1">
                {product.category} · MODEL {product.modelNumber}
              </span>
              <h1 className="text-display-lg sm:text-[3rem] font-medium text-earth-black leading-[1.0]">
                {product.name}
              </h1>
            </div>
            <Link
              href="/contact"
              className="btn-primary !bg-earth-black hover:!bg-oxide-red text-xs py-3 px-6 whitespace-nowrap"
            >
              Request Fleet Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Technical Spec Sheet: Image Left, Specs Table Right */}
      <section className="w-full bg-[#EBE8E0] py-20 md:py-24 border-b border-slab-grey">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Image Gallery Container (6 Columns) */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[16/11] w-full bg-slab-grey border border-slab-grey mb-4">
                <Image
                  src={product.heroImage}
                  alt={product.name}
                  fill
                  priority
                  className="img-cover"
                />
                <div className="absolute bottom-3 left-3 bg-earth-black text-iron-white font-mono text-[10px] px-2.5 py-1 uppercase">
                  SPECIFICATION ARCHIVE // {product.modelNumber}
                </div>
              </div>

              <div className="p-6 bg-iron-white border border-slab-grey">
                <span className="text-label text-earth-black font-mono uppercase tracking-wider block mb-2">
                  Engineering Overview
                </span>
                <p className="text-body-sm text-quarry-grey leading-relaxed">
                  {product.overview}
                </p>
              </div>
            </div>

            {/* Right: Technical Specs Table (6 Columns) */}
            <div className="lg:col-span-6 bg-iron-white border border-slab-grey p-8 font-mono">
              <div className="flex items-center justify-between pb-4 border-b-2 border-earth-black mb-6">
                <span className="text-label font-bold text-earth-black uppercase tracking-wider">
                  Engineering Data Sheet
                </span>
                <span className="text-xs text-oxide-red font-semibold">
                  REV 2026.4
                </span>
              </div>

              <table className="w-full text-left text-xs">
                <tbody>
                  {Object.entries(product.specs).map(([specKey, specVal], idx) => (
                    <tr
                      key={idx}
                      className="border-b border-slab-grey/60 hover:bg-[#F2F0EB] transition-colors"
                    >
                      <td className="py-3.5 pr-4 text-quarry-grey uppercase font-medium">
                        {specKey}
                      </td>
                      <td className="py-3.5 pl-4 text-earth-black font-bold text-right">
                        {specVal}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="mt-8 pt-6 border-t border-slab-grey flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-quarry-grey">
                <span>All machinery certified to ISO/SAE standards.</span>
                <span className="text-earth-black font-semibold">Warranty: 24 Mo / 5,000 Hrs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications & Service Protocols Below */}
      <section className="w-full bg-iron-white py-20">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <span className="text-label text-oxide-red font-mono uppercase tracking-widest block mb-2">
              Field Suitability
            </span>
            <h2 className="text-heading-1 font-medium text-earth-black mb-8">
              Target Field Applications
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-sm">
              {product.applications.map((app, i) => (
                <div key={i} className="p-4 bg-[#EBE8E0] border border-slab-grey flex items-center gap-3">
                  <span className="w-2 h-2 bg-oxide-red inline-block" />
                  <span className="text-earth-black">{app}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-coal-dark text-iron-white border border-slab-grey flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <h4 className="text-heading-3 text-iron-white mb-1">Require Site Mobilization?</h4>
                <p className="text-quarry-grey text-xs">
                  We handle customs clearance, lowbed road transit, and on-site assembly across West and Central Africa.
                </p>
              </div>
              <Link
                href="/contact"
                className="btn-primary !bg-iron-white !text-earth-black hover:!bg-oxide-red hover:!text-iron-white text-xs py-3 px-6 whitespace-nowrap"
              >
                Inquire Logistics →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
