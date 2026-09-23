import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certifications & Standards | Fiza Engineering",
  description:
    "International ISO 45001 safety accreditations, continental infrastructure awards, and high-tonnage mining milestones earned over three decades.",
  alternates: {
    canonical: "/achievements",
  },
  openGraph: {
    title: "Certifications & Standards | Fiza Engineering",
    description:
      "International ISO 45001 safety accreditations, continental infrastructure awards, and high-tonnage mining milestones earned over three decades.",
    url: "https://fiza-one.vercel.app/achievements",
    siteName: "Fiza Engineering Corporation",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Certifications & Standards | Fiza Engineering",
    description:
      "International ISO 45001 safety accreditations, continental infrastructure awards, and high-tonnage mining milestones earned over three decades.",
  },
};

export default function AchievementsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
