import React from "react";
import { cn } from "@/lib/utils";

interface TagProps {
  children: React.ReactNode;
  active?: boolean;
  status?: "ACTIVE" | "IN DEVELOPMENT" | "COMPLETED";
  className?: string;
  onClick?: () => void;
}

export function Tag({ children, active, status, className, onClick }: TagProps) {
  const getStatusColor = () => {
    switch (status) {
      case "ACTIVE":
        return "tag--status-active";
      case "IN DEVELOPMENT":
        return "tag--status-dev";
      case "COMPLETED":
        return "bg-slab-grey text-earth-black";
      default:
        return "";
    }
  };

  const getStatusDot = () => {
    if (status === "ACTIVE") return <span className="inline-block w-2 h-2 bg-emerald-600 mr-1.5" />;
    if (status === "IN DEVELOPMENT") return <span className="inline-block w-2 h-2 bg-safety-amber mr-1.5" />;
    if (status === "COMPLETED") return <span className="inline-block w-2 h-2 bg-quarry-grey mr-1.5" />;
    return null;
  };

  return (
    <span
      onClick={onClick}
      className={cn(
        "tag",
        active && "tag--active",
        status && getStatusColor(),
        onClick && "cursor-pointer hover:bg-earth-black hover:text-iron-white transition-colors duration-200",
        className
      )}
    >
      {getStatusDot()}
      {children}
    </span>
  );
}
