import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Field Dispatches & Logs | Fiza Engineering",
  description:
    "Real-time shift reports, heavy equipment delivery dispatches, and mechanical maintenance logs direct from active pit cuts and rail sidings.",
  alternates: {
    canonical: "/social",
  },
  openGraph: {
    title: "Field Dispatches & Logs | Fiza Engineering",
    description:
      "Real-time shift reports, heavy equipment delivery dispatches, and mechanical maintenance logs direct from active pit cuts and rail sidings.",
    url: "https://fiza-one.vercel.app/social",
    siteName: "Fiza Engineering Corporation",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Field Dispatches & Logs | Fiza Engineering",
    description:
      "Real-time shift reports, heavy equipment delivery dispatches, and mechanical maintenance logs direct from active pit cuts and rail sidings.",
  },
};

export default function SocialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
