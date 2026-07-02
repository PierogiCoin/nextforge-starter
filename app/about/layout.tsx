import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: `About | ${siteConfig.name}`,
  description:
    "Meet the team behind NextForge and learn why this Next.js SaaS starter kit is built for indie founders shipping fast.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
  openGraph: {
    title: `About | ${siteConfig.name}`,
    description:
      "Meet the team behind NextForge and learn why this Next.js SaaS starter kit is built for indie founders shipping fast.",
    url: `${siteConfig.url}/about`,
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
