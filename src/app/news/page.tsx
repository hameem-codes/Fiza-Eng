"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NEWS_ARTICLES } from "@/lib/constants";
import { formatDate } from "@/lib/utils";

const NEWS_CATEGORIES = ["ALL", "INFRASTRUCTURE & MINING", "FLEET LOGISTICS", "ENERGY SYSTEMS"];

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const filteredArticles = NEWS_ARTICLES.filter((a) => {
    if (selectedCategory === "ALL") return true;
    return a.category === selectedCategory;
  });

  const featured = filteredArticles[0] || NEWS_ARTICLES[0];
  const remaining = filteredArticles.slice(1);

  return (
    <div className="w-full pt-[72px]">
      {/* Editorial Header */}
      <section className="bg-iron-white py-20 md:py-24 border-b border-slab-grey">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <span className="text-label text-oxide-red font-mono uppercase tracking-[0.2em] block mb-3">
            Press & Technical Dispatches
          </span>
          <h1 className="text-display-lg sm:text-[3.5rem] md:text-display-xl font-medium text-earth-black leading-[0.95] mb-6">
            Newsroom
          </h1>
          <p className="text-body-lg text-quarry-grey max-w-2xl leading-relaxed">
            Operational reports, infrastructure commissioning milestones, and technical field dispatches from Fiza operations across Africa.
          </p>

          {/* Horizontal Category Tabs */}
          <div className="flex flex-wrap items-center gap-3 mt-10 pt-6 border-t border-slab-grey">
            <span className="text-label font-mono text-earth-black uppercase tracking-wider mr-2">
              Topic:
            </span>
            {NEWS_CATEGORIES.map((cat) => (
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

      {/* Featured Story (Full-Width Bleed Style) */}
      {featured && (
        <section className="w-full bg-[#EBE8E0] py-16 md:py-24 border-b border-slab-grey">
          <div className="max-w-content mx-auto px-6 md:px-12">
            <Link
              href={`/news/${featured.slug}`}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-iron-white border border-slab-grey p-6 md:p-10 hover:border-earth-black transition-colors"
            >
              <div className="lg:col-span-7 relative aspect-[16/10] w-full overflow-hidden bg-slab-grey">
                <Image
                  src={featured.image}
                  alt={featured.headline}
                  fill
                  priority
                  className="img-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>

              <div className="lg:col-span-5 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-3 text-xs font-mono text-quarry-grey mb-3">
                    <span className="bg-earth-black text-iron-white px-2 py-0.5 uppercase tracking-wider text-[10px]">
                      {featured.category}
                    </span>
                    <span>{formatDate(featured.date)}</span>
                  </div>

                  <h2 className="text-display-lg sm:text-[2.25rem] font-medium text-earth-black leading-[1.05] group-hover:text-oxide-red transition-colors mb-4">
                    {featured.headline}
                  </h2>

                  <p className="text-body text-quarry-grey leading-relaxed line-clamp-4 mb-6">
                    {featured.leadParagraph}
                  </p>
                </div>

                <div className="pt-4 border-t border-slab-grey">
                  <span className="text-label font-bold text-oxide-red uppercase tracking-wider font-mono inline-flex items-center gap-1">
                    Read Full Technical Dispatch →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Remaining News Grid */}
      {remaining.length > 0 && (
        <section className="w-full bg-iron-white py-20 md:py-24">
          <div className="max-w-content mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {remaining.map((article) => (
                <Link
                  key={article.id}
                  href={`/news/${article.slug}`}
                  className="group bg-[#EBE8E0] border border-slab-grey p-6 flex flex-col justify-between hover:border-earth-black transition-colors"
                >
                  <div>
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slab-grey mb-4">
                      <Image
                        src={article.image}
                        alt={article.headline}
                        fill
                        className="img-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    </div>

                    <div className="flex items-center gap-3 text-xs font-mono text-quarry-grey mb-2">
                      <span className="text-oxide-red font-semibold">{article.category}</span>
                      <span>·</span>
                      <span>{formatDate(article.date)}</span>
                    </div>

                    <h3 className="text-heading-2 font-medium text-earth-black group-hover:text-oxide-red transition-colors mb-3 leading-snug">
                      {article.headline}
                    </h3>

                    <p className="text-body-sm text-quarry-grey leading-relaxed line-clamp-3 mb-6">
                      {article.leadParagraph}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slab-grey">
                    <span className="text-label font-bold text-earth-black group-hover:text-oxide-red uppercase tracking-wider font-mono inline-flex items-center gap-1 transition-colors">
                      Full Article →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
