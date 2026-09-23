"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/lib/constants";

const PRODUCT_CATEGORIES = ["ALL", "Heavy Mining Fleet", "Turnkey Plant Modules", "Railway Solutions"];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const filteredProducts = PRODUCTS.filter((p) => {
    if (selectedCategory === "ALL") return true;
    return p.category === selectedCategory;
  });

  return (
    <div className="w-full pt-[72px]">
      {/* Editorial Header */}
      <section className="bg-iron-white py-20 md:py-24 border-b border-slab-grey">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <span className="text-label text-oxide-red font-mono uppercase tracking-[0.2em] block mb-3">
            Machinery & Modular Systems
          </span>
          <h1 className="text-display-lg sm:text-[3.5rem] md:text-display-xl font-medium text-earth-black leading-[0.95] mb-6">
            Equipment & Plant Catalog
          </h1>
          <p className="text-body-lg text-quarry-grey max-w-2xl leading-relaxed">
            Ultra-heavy mining excavators, modular primary crushing stations, rigid haul trucks, and heavy-haul locomotives engineered for African service conditions.
          </p>

          {/* Horizontal Category Filter */}
          <div className="flex flex-wrap items-center gap-3 mt-10 pt-6 border-t border-slab-grey">
            <span className="text-label font-mono text-earth-black uppercase tracking-wider mr-2">
              Equipment Category:
            </span>
            {PRODUCT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`tag cursor-pointer ${
                  selectedCategory === cat ? "tag--active" : "hover:bg-earth-black hover:text-iron-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="w-full bg-[#EBE8E0] py-20 md:py-28">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="group bg-iron-white border border-slab-grey p-8 flex flex-col justify-between hover:border-earth-black transition-colors"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slab-grey mb-6">
                    <Image
                      src={product.heroImage}
                      alt={product.name}
                      fill
                      className="img-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                    <div className="absolute top-3 left-3 bg-earth-black text-iron-white font-mono text-[10px] uppercase tracking-wider px-2 py-0.5">
                      {product.modelNumber}
                    </div>
                  </div>

                  <span className="font-mono text-xs text-oxide-red uppercase tracking-wider block mb-2 font-bold">
                    {product.category}
                  </span>

                  <h2 className="text-heading-2 font-medium text-earth-black group-hover:text-oxide-red transition-colors mb-4">
                    {product.name}
                  </h2>

                  <p className="text-body-sm text-quarry-grey leading-relaxed mb-6">
                    {product.overview}
                  </p>
                </div>

                <div className="pt-6 border-t border-slab-grey flex items-center justify-between">
                  <span className="font-mono text-xs text-earth-black font-semibold">
                    {Object.keys(product.specs)[0]}: {Object.values(product.specs)[0]}
                  </span>
                  <span className="text-label font-bold text-oxide-red uppercase tracking-wider font-mono inline-flex items-center gap-1">
                    Technical Spec Sheet →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
