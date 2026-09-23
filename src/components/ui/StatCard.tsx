import React from "react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  value: string;
  label: string;
  highlight?: boolean;
  className?: string;
}

export function StatCard({ value, label, highlight, className }: StatCardProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      <span
        className={cn(
          "text-display-lg md:text-[4rem] font-medium leading-none tracking-tight",
          highlight ? "text-oxide-red" : "text-inherit"
        )}
      >
        {value}
      </span>
      <span className="mt-2 text-body-sm text-quarry-grey max-w-[200px] uppercase font-mono tracking-wide leading-snug">
        {label}
      </span>
    </div>
  );
}
