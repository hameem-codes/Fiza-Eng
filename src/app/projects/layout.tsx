import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Portfolio | Fiza Engineering",
  description:
    "Review active and commissioned industrial concessions, mineral corridors, crushing plants, and heavy-haul railway modernizations in Africa.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Project Portfolio | Fiza Engineering",
    description:
      "Review active and commissioned industrial concessions, mineral corridors, crushing plants, and heavy-haul railway modernizations in Africa.",
    url: "https://fiza-one.vercel.app/projects",
    siteName: "Fiza Engineering Corporation",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Portfolio | Fiza Engineering",
    description:
      "Review active and commissioned industrial concessions, mineral corridors, crushing plants, and heavy-haul railway modernizations in Africa.",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
