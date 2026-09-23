import React from "react";
import { cn } from "@/lib/utils";

interface SectionDividerProps {
  className?: string;
  light?: boolean;
}

export function SectionDivider({ className, light = false }: SectionDividerProps) {
  return (
    <hr
      className={cn(
        light ? "divider-rule-light" : "divider-rule",
        className
      )}
      aria-hidden="true"
    />
  );
}
