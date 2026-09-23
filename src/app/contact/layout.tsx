import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Global Hubs | Fiza Engineering",
  description:
    "Connect with our corporate headquarters in Dubai DIFC or regional operations depots in Bamako, Kolwezi, and Johannesburg for project tenders.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact & Global Hubs | Fiza Engineering",
    description:
      "Connect with our corporate headquarters in Dubai DIFC or regional operations depots in Bamako, Kolwezi, and Johannesburg for project tenders.",
    url: "https://fiza-one.vercel.app/contact",
    siteName: "Fiza Engineering Corporation",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact & Global Hubs | Fiza Engineering",
    description:
      "Connect with our corporate headquarters in Dubai DIFC or regional operations depots in Bamako, Kolwezi, and Johannesburg for project tenders.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
