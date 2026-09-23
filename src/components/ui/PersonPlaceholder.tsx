import React from "react";
import { User } from "lucide-react";
import { cn } from "@/lib/utils";

interface PersonPlaceholderProps {
  name: string;
  title?: string;
  className?: string;
}

export function PersonPlaceholder({ name, title, className }: PersonPlaceholderProps) {
  return (
    <div
      className={cn(
        "relative w-full aspect-square bg-[#E0DCD3] border border-slab-grey flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden group-hover:border-earth-black transition-colors",
        className
      )}
      role="img"
      aria-label={`Official portrait for ${name}: [Photo to be supplied]`}
    >
      {/* Subtle blueprint grid / hatch background */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #1A1A18 0, #1A1A18 1px, transparent 0, transparent 16px)`,
        }}
      />

      {/* Neutral icon */}
      <div className="relative z-10 w-14 h-14 rounded-none bg-iron-white border border-slab-grey flex items-center justify-center mb-4 text-quarry-grey group-hover:text-oxide-red transition-colors shadow-sm">
        <User size={26} strokeWidth={1.5} />
      </div>

      {/* Mandatory exact label */}
      <div className="relative z-10 font-mono text-[11px] font-bold uppercase tracking-wider text-earth-black bg-iron-white/90 px-2.5 py-1 border border-slab-grey/80 mb-2">
        [Photo to be supplied]
      </div>

      <span className="relative z-10 font-heading text-sm font-semibold text-earth-black line-clamp-1">
        {name}
      </span>
      {title && (
        <span className="relative z-10 text-[10px] font-mono text-quarry-grey line-clamp-1 mt-0.5">
          {title}
        </span>
      )}
    </div>
  );
}
