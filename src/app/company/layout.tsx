import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Fiza & Leadership | Fiza Engineering",
  description:
    "Founded in 1994, Fiza Engineering Corporation operates heavy engineering, concession development, and strategic mining infrastructure across Africa.",
  alternates: {
    canonical: "/company",
  },
  openGraph: {
    title: "About Fiza & Leadership | Fiza Engineering",
    description:
      "Founded in 1994, Fiza Engineering Corporation operates heavy engineering, concession development, and strategic mining infrastructure across Africa.",
    url: "https://fiza-one.vercel.app/company",
    siteName: "Fiza Engineering Corporation",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Fiza & Leadership | Fiza Engineering",
    description:
      "Founded in 1994, Fiza Engineering Corporation operates heavy engineering, concession development, and strategic mining infrastructure across Africa.",
  },
};

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
