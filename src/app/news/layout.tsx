import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Newsroom & Dispatches | Fiza Engineering",
  description:
    "Official operational announcements, haul road commissioning reports, heavy fleet mobilizations, and hybrid microgrid updates from active concessions.",
  alternates: {
    canonical: "/news",
  },
  openGraph: {
    title: "Newsroom & Dispatches | Fiza Engineering",
    description:
      "Official operational announcements, haul road commissioning reports, heavy fleet mobilizations, and hybrid microgrid updates from active concessions.",
    url: "https://fiza-one.vercel.app/news",
    siteName: "Fiza Engineering Corporation",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Newsroom & Dispatches | Fiza Engineering",
    description:
      "Official operational announcements, haul road commissioning reports, heavy fleet mobilizations, and hybrid microgrid updates from active concessions.",
  },
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
