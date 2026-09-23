import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { NEWS_ARTICLES } from "@/lib/constants";
import { formatDate } from "@/lib/utils";

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return NEWS_ARTICLES.map((a) => ({
    slug: a.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const article = NEWS_ARTICLES.find((a) => a.slug === params.slug);
  if (!article) {
    return {
      title: "News Dispatch | Fiza Engineering",
    };
  }

  const fullTitle = `${article.headline.slice(0, 40)} | Fiza Engineering`;
  const title = fullTitle.length <= 60 ? fullTitle : `${article.headline.slice(0, 38)} | Fiza Engineering`;

  const rawDesc = article.leadParagraph;
  const description = rawDesc.length >= 120 && rawDesc.length <= 155
    ? rawDesc
    : rawDesc.length > 155
    ? `${rawDesc.slice(0, 151)}...`
    : `${rawDesc} Official news from Fiza Engineering Corporation.`.slice(0, 150);

  return {
    title,
    description,
    alternates: {
      canonical: `/news/${article.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://fiza-one.vercel.app/news/${article.slug}`,
      siteName: "Fiza Engineering Corporation",
      type: "article",
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.headline,
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

export default function ArticlePage({ params }: Props) {
  const article = NEWS_ARTICLES.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  const related = NEWS_ARTICLES.filter((a) => a.slug !== params.slug).slice(0, 2);

  return (
    <div className="w-full pt-[72px]">
      {/* Header Bar */}
      <section className="bg-iron-white py-16 border-b border-slab-grey">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <Link
            href="/news"
            className="text-label text-oxide-red font-mono uppercase tracking-[0.2em] inline-flex items-center gap-2 mb-4 hover:underline"
          >
            ← Back To Newsroom
          </Link>
          <div className="flex items-center gap-4 text-xs font-mono text-quarry-grey mb-4">
            <span className="bg-earth-black text-iron-white px-2 py-0.5 uppercase tracking-wider text-[10px]">
              {article.category}
            </span>
            <span>PUBLISHED {formatDate(article.date)}</span>
          </div>
          <h1 className="text-display-lg sm:text-[3.25rem] font-medium text-earth-black leading-[1.0] max-w-4xl">
            {article.headline}
          </h1>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="w-full bg-[#E8E5DD] py-8 border-b border-slab-grey">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="relative aspect-[21/9] w-full bg-slab-grey border border-slab-grey overflow-hidden">
            <Image
              src={article.image}
              alt={article.headline}
              fill
              priority
              sizes="100vw"
              className="img-cover"
            />
            <div className="absolute bottom-3 left-3 bg-earth-black text-iron-white font-mono text-[10px] px-2.5 py-1 uppercase">
              FIELD PHOTOGRAPHIC ARCHIVE · OPERATIONAL DISPATCH
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout: Magazine-Style Single Column (Max 720px) + Sidebar */}
      <section className="w-full bg-iron-white py-20 md:py-28 border-b border-slab-grey">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Article Body (7 Columns, max 720px) */}
            <article className="lg:col-span-8 max-w-[720px]">
              <p className="text-body-lg text-earth-black font-medium leading-relaxed mb-8 pb-6 border-b border-slab-grey">
                {article.leadParagraph}
              </p>

              <div className="space-y-6 text-quarry-grey text-body leading-relaxed">
                {article.bodyParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Pull Quote with Oxide Red Left Border */}
              {article.pullQuote && (
                <div className="pull-quote my-12">
                  <p className="text-heading-2 font-medium italic text-earth-black leading-snug">
                    &ldquo;{article.pullQuote.quote}&rdquo;
                  </p>
                  <span className="block text-label font-mono not-italic text-quarry-grey uppercase tracking-wider mt-4">
                    — {article.pullQuote.author}
                  </span>
                </div>
              )}

              <div className="space-y-6 text-quarry-grey text-body leading-relaxed">
                <p>
                  All project milestones are audited by third-party engineering inspectors and verified against ISO standards for structural, environmental, and worker safety protocols.
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-slab-grey flex items-center justify-between text-xs font-mono text-quarry-grey">
                <span>COMMUNICATIONS DESK</span>
                <span>DOC REF: FEC-DISPATCH-{article.slug.toUpperCase().slice(0, 10)}</span>
              </div>
            </article>

            {/* Sidebar (4 Columns) */}
            <aside className="lg:col-span-4 flex flex-col space-y-8">
              <div className="bg-[#EBE8E0] p-6 border border-slab-grey font-mono text-xs">
                <span className="text-label text-earth-black uppercase tracking-wider block mb-3 pb-2 border-b border-slab-grey font-bold">
                  Corporate Dispatches
                </span>
                <p className="text-quarry-grey leading-relaxed mb-4">
                  For press inquiries, technical documentation requests, or photographic assets, contact our corporate communications desk.
                </p>
                <Link
                  href="/contact"
                  className="text-label font-bold text-oxide-red uppercase tracking-wider hover:underline block"
                >
                  Media & Public Relations →
                </Link>
              </div>

              {/* Related Stories */}
              {related.length > 0 && (
                <div>
                  <span className="text-label text-earth-black font-mono uppercase tracking-wider block mb-4">
                    Related Dispatches
                  </span>
                  <div className="space-y-4">
                    {related.map((rel) => (
                      <Link
                        key={rel.id}
                        href={`/news/${rel.slug}`}
                        className="group block p-4 border border-slab-grey bg-iron-white hover:border-earth-black transition-colors"
                      >
                        <span className="font-mono text-[10px] text-oxide-red uppercase tracking-wider block mb-1">
                          {rel.category}
                        </span>
                        <h4 className="text-heading-3 font-medium text-earth-black text-sm group-hover:text-oxide-red transition-colors leading-snug">
                          {rel.headline}
                        </h4>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
