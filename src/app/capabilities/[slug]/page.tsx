import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CAPABILITIES, PROJECTS, PRODUCTS } from "@/lib/constants";
import { SectionDivider } from "@/components/ui/SectionDivider";

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return CAPABILITIES.map((c) => ({
    slug: c.slug,
  }));
}

export default function CapabilityDetailPage({ params }: Props) {
  const capability = CAPABILITIES.find((c) => c.slug === params.slug);

  if (!capability) {
    notFound();
  }

  // Related projects and products
  const relatedProjects = PROJECTS.slice(0, 2);
  const relatedProducts = PRODUCTS.slice(0, 2);

  return (
    <div className="w-full pt-[72px]">
      {/* Detail Hero Banner */}
      <section className="relative w-full h-[55vh] min-h-[420px] flex items-end overflow-hidden">
        <Image
          src={capability.image}
          alt={capability.title}
          fill
          priority
          className="img-cover object-center"
        />
        <div className="dark-overlay-heavy" />
        <div className="relative z-10 max-w-content mx-auto w-full px-6 md:px-12 pb-14">
          <Link
            href="/capabilities"
            className="text-label text-dust-tan font-mono uppercase tracking-[0.2em] inline-flex items-center gap-2 mb-3 hover:text-iron-white transition-colors"
          >
            ← All Capabilities
          </Link>
          <h1 className="text-display-lg sm:text-[3.5rem] font-medium text-iron-white leading-[0.95]">
            {capability.title}
          </h1>
          <p className="text-body-lg text-dust-tan max-w-2xl mt-4 font-normal">
            {capability.tagline}
          </p>
        </div>
      </section>

      {/* Overview & Key Metrics Bar */}
      <section className="w-full bg-iron-white py-16 border-b border-slab-grey">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="text-label text-oxide-red font-mono uppercase tracking-widest block mb-3">
                Division Profile
              </span>
              <p className="text-body-lg text-quarry-grey leading-relaxed">
                {capability.description}
              </p>
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 gap-6 bg-[#EBE8E0] p-6 border border-slab-grey">
              {capability.keyMetrics.map((metric, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-heading-2 font-medium text-earth-black leading-none mb-1">
                    {metric.value}
                  </span>
                  <span className="text-[11px] font-mono text-quarry-grey uppercase tracking-wider">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services List (Left Column) with Descriptions (Right Column) */}
      <section className="w-full bg-[#E8E5DD] py-20 md:py-28 border-b border-slab-grey">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="mb-14">
            <span className="text-label text-oxide-red font-mono uppercase tracking-widest block mb-2">
              Operational Scope
            </span>
            <h2 className="text-display-lg font-medium text-earth-black leading-[0.95]">
              Core Services & Specifications
            </h2>
          </div>

          <div className="divide-y divide-slab-grey border-t border-b border-slab-grey">
            {capability.scope.map((service, idx) => (
              <div
                key={idx}
                className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-iron-white px-6 md:px-8"
              >
                <div className="lg:col-span-5 flex items-baseline gap-4">
                  <span className="text-display-lg font-medium text-oxide-red leading-none">
                    0{idx + 1}
                  </span>
                  <h3 className="text-heading-3 font-medium text-earth-black">
                    {service}
                  </h3>
                </div>

                <div className="lg:col-span-7">
                  <p className="text-body-sm text-quarry-grey leading-relaxed">
                    Delivered with proprietary heavy plant, strict ISO quality and safety certifications, and dedicated engineering supervisors managing round-the-clock shift rotations.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="w-full bg-iron-white py-20 border-b border-slab-grey">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-label text-oxide-red font-mono uppercase tracking-widest block mb-2">
                Field Execution
              </span>
              <h2 className="text-heading-1 font-medium text-earth-black">
                Active Projects in This Sector
              </h2>
            </div>
            <Link
              href="/projects"
              className="text-label font-bold text-earth-black hover:text-oxide-red uppercase tracking-wider font-mono"
            >
              All Projects →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedProjects.map((proj) => (
              <Link
                key={proj.id}
                href={`/projects/${proj.slug}`}
                className="group border border-slab-grey p-6 bg-[#EBE8E0] hover:border-earth-black transition-colors"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden mb-4 bg-slab-grey">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    className="img-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
                <span className="font-mono text-xs text-oxide-red uppercase tracking-wider block mb-1">
                  {proj.country} · {proj.category}
                </span>
                <h3 className="text-heading-3 font-medium text-earth-black group-hover:text-oxide-red transition-colors mb-2">
                  {proj.title}
                </h3>
                <p className="text-body-sm text-quarry-grey leading-relaxed">
                  {proj.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products / Plant Modules */}
      <section className="w-full bg-[#EBE8E0] py-20">
        <div className="max-w-content mx-auto px-6 md:px-12">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-label text-oxide-red font-mono uppercase tracking-widest block mb-2">
                Deployment Machinery
              </span>
              <h2 className="text-heading-1 font-medium text-earth-black">
                Featured Fleet & Modules
              </h2>
            </div>
            <Link
              href="/products"
              className="text-label font-bold text-earth-black hover:text-oxide-red uppercase tracking-wider font-mono"
            >
              All Machinery →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedProducts.map((prod) => (
              <Link
                key={prod.id}
                href={`/products/${prod.slug}`}
                className="group border border-slab-grey p-6 bg-iron-white hover:border-earth-black transition-colors"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden mb-4 bg-slab-grey">
                  <Image
                    src={prod.heroImage}
                    alt={prod.name}
                    fill
                    className="img-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
                <span className="font-mono text-xs text-quarry-grey uppercase tracking-wider block mb-1">
                  {prod.modelNumber}
                </span>
                <h3 className="text-heading-3 font-medium text-earth-black group-hover:text-oxide-red transition-colors mb-2">
                  {prod.name}
                </h3>
                <span className="text-xs font-mono font-bold text-oxide-red uppercase tracking-wider">
                  Technical Specifications →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
