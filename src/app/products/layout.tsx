import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Equipment & Plant Catalog | Fiza Engineering",
  description:
    "Procure ultra-heavy hydraulic excavators, modular primary jaw crushing stations, rigid frame dump trucks, and heavy-haul diesel locomotives.",
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "Equipment & Plant Catalog | Fiza Engineering",
    description:
      "Procure ultra-heavy hydraulic excavators, modular primary jaw crushing stations, rigid frame dump trucks, and heavy-haul diesel locomotives.",
    url: "https://fiza-one.vercel.app/products",
    siteName: "Fiza Engineering Corporation",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Equipment & Plant Catalog | Fiza Engineering",
    description:
      "Procure ultra-heavy hydraulic excavators, modular primary jaw crushing stations, rigid frame dump trucks, and heavy-haul diesel locomotives.",
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
