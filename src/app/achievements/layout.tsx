import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certifications & Awards",
  description:
    "Explore Fiza Engineering Corporation's certifications, ISO standards, industry accreditations, and verified operational milestones across Africa and the Middle East.",
  alternates: {
    canonical: "/achievements",
  },
  openGraph: {
    title: "Certifications & Awards | Fiza Engineering Corporation",
    description:
      "Explore Fiza Engineering Corporation's certifications, ISO standards, industry accreditations, and verified operational milestones across Africa and the Middle East.",
    url: "https://fiza-one.vercel.app/achievements",
    siteName: "Fiza Engineering Corporation",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Certifications & Awards | Fiza Engineering Corporation",
    description:
      "Explore Fiza Engineering Corporation's certifications, ISO standards, industry accreditations, and verified operational milestones across Africa and the Middle East.",
  },
};

export default function AchievementsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
