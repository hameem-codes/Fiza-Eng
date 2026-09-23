import React from "react";
import Link from "next/link";

export function ContactCTA() {
  return (
    <section className="w-full bg-coal-dark text-iron-white py-24 md:py-32 dark-section border-t border-slab-grey/20">
      <div className="max-w-content mx-auto px-6 md:px-12 text-left">
        <div className="max-w-3xl">
          <span className="text-label text-dust-tan font-mono uppercase tracking-widest block mb-4">
            Commercial Partnerships & EPC Tenders
          </span>

          <h2 className="text-display-lg sm:text-[3.5rem] md:text-display-xl font-medium text-iron-white leading-[0.92] mb-8">
            Let&apos;s build something.
          </h2>

          <p className="text-quarry-grey text-body-lg max-w-xl mb-10 leading-relaxed font-normal">
            Whether mobilizing heavy machinery for an open-pit cut, laying heavy-haul rail, or structuring direct mineral off-takes, our engineering teams are ready to deploy.
          </p>

          <div>
            <Link
              href="/contact"
              className="btn-primary !bg-iron-white !text-earth-black hover:!bg-oxide-red hover:!text-iron-white text-sm py-4 px-10"
            >
              Get In Touch →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
