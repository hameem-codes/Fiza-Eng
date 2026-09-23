import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
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
              className="img-cover"
            />
            <div className="absolute bottom-3 left-3 bg-earth-black text-iron-white font-mono text-[10px] px-2.5 py-1 uppercase">
              PHOTO ARCHIVE // CORRESPONDENCE DISPATCH
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
                <span>FIZA CORPORATE DISPATCH DESK</span>
                <Link href="/news" className="text-oxide-red font-bold uppercase hover:underline">
                  More Articles →
                </Link>
              </div>
            </article>

            {/* Sidebar (4 Columns) */}
            <aside className="lg:col-span-4 flex flex-col space-y-8">
              <div className="bg-[#EBE8E0] border border-slab-grey p-6">
                <span className="text-label text-earth-black font-mono uppercase tracking-wider block mb-4 pb-2 border-b border-slab-grey">
                  Related Dispatches
                </span>
                <div className="space-y-6">
                  {related.map((item) => (
                    <Link
                      key={item.id}
                      href={`/news/${item.slug}`}
                      className="group block"
                    >
                      <span className="font-mono text-[10px] text-oxide-red uppercase tracking-wider block mb-1">
                        {item.category}
                      </span>
                      <h4 className="text-body-sm font-medium text-earth-black group-hover:text-oxide-red transition-colors leading-snug">
                        {item.headline}
                      </h4>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-coal-dark text-iron-white p-6 border border-slab-grey">
                <span className="text-label text-dust-tan font-mono uppercase tracking-wider block mb-2">
                  Media Contact
                </span>
                <p className="text-quarry-grey text-xs leading-relaxed mb-4">
                  For press inquiries, site inspection credentials, and technical whitepapers:
                </p>
                <span className="text-mono text-xs text-iron-white block font-semibold">
                  press@fizaengineering.com
                </span>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
