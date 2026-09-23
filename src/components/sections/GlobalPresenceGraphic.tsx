import React from "react";
import { GlobalPresenceMap } from "@/components/maps/GlobalPresenceMap";
import { SectionDivider } from "@/components/ui/SectionDivider";

export function GlobalPresenceGraphic() {
  return (
    <section className="w-full bg-iron-white">
      <SectionDivider />
      <div className="max-w-content mx-auto px-6 md:px-12 py-20 md:py-28">
        <GlobalPresenceMap />
      </div>
    </section>
  );
}
