import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Fiza Engineering Corporation. Inquire about mining services, railway engineering, equipment supply, and bulk commodity trading across our operational hubs.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | Fiza Engineering Corporation",
    description:
      "Get in touch with Fiza Engineering Corporation. Inquire about mining services, railway engineering, equipment supply, and bulk commodity trading across our operational hubs.",
    url: "https://fiza-one.vercel.app/contact",
    siteName: "Fiza Engineering Corporation",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Fiza Engineering Corporation",
    description:
      "Get in touch with Fiza Engineering Corporation. Inquire about mining services, railway engineering, equipment supply, and bulk commodity trading across our operational hubs.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
