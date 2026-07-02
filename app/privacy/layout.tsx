import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
    title: `Privacy Policy | ${siteConfig.name}`,
    description:
        "Read the NextForge privacy policy covering data collection, processing, retention, and your rights.",
    alternates: {
        canonical: `${siteConfig.url}/privacy`,
    },
    openGraph: {
        title: `Privacy Policy | ${siteConfig.name}`,
        description:
            "Read the NextForge privacy policy covering data collection, processing, retention, and your rights.",
        url: `${siteConfig.url}/privacy`,
    },
};

export default function PrivacyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
