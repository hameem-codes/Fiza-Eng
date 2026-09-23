import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
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

export function generateMetadata({ params }: Props): Metadata {
  const product = PRODUCTS.find((p) => p.slug === params.slug);
  if (!product) {
    return {
      title: "Equipment Catalog | Fiza Engineering",
    };
  }

  const fullTitle = `${product.name} | Fiza Engineering`;
  const title = fullTitle.length <= 60 ? fullTitle : `${product.name.slice(0, 38)} | Fiza Engineering`;

  const rawDesc = `${product.overview} Model: ${product.modelNumber}. Engineered for heavy industrial service.`;
  const description = rawDesc.length >= 120 && rawDesc.length <= 155
    ? rawDesc
    : rawDesc.length > 155
    ? `${rawDesc.slice(0, 151)}...`
    : `${rawDesc} Multidisciplinary mining and rail solutions across Africa.`.slice(0, 150);

  return {
    title,
    description,
    alternates: {
      canonical: `/products/${product.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://fiza-one.vercel.app/products/${product.slug}`,
      siteName: "Fiza Engineering Corporation",
      type: "website",
      images: [
        {
          url: product.heroImage,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
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
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="img-cover"
                />
                <div className="absolute bottom-3 left-3 bg-earth-black text-iron-white font-mono text-[10px] px-2.5 py-1 uppercase">
                  TECHNICAL SPECIFICATION · {product.modelNumber}
                </div>
              </div>

              <div className="p-6 bg-iron-white border border-slab-grey">
                <span className="text-label text-earth-black font-mono uppercase tracking-wider block mb-2 font-bold">
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
                      className={idx % 2 === 0 ? "bg-[#F5F3ED]" : "bg-iron-white"}
                    >
                      <td className="py-3 px-4 font-semibold text-earth-black border-b border-slab-grey/40">
                        {specKey}
                      </td>
                      <td className="py-3 px-4 text-quarry-grey border-b border-slab-grey/40">
                        {specVal}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="mt-8 pt-6 border-t border-slab-grey">
                <span className="text-label font-bold text-earth-black uppercase tracking-wider block mb-3">
                  Qualified Operational Applications
                </span>
                <ul className="space-y-2 text-xs text-quarry-grey">
                  {product.applications.map((app, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-oxide-red inline-block" />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Procurement CTA Strip */}
      <section className="w-full bg-iron-white py-16">
        <div className="max-w-content mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-heading-2 font-medium text-earth-black">
              Procure Machinery or Reserve Fleet Units
            </h3>
            <p className="text-body-sm text-quarry-grey mt-1">
              Direct factory commissioning, bonded port transit, and on-site operator training included.
            </p>
          </div>
          <Link href="/contact" className="btn-primary text-xs py-3 px-6 whitespace-nowrap">
            Submit Equipment Tender →
          </Link>
        </div>
      </section>
    </div>
  );
}
