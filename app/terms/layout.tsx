import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
    title: `Terms of Service | ${siteConfig.name}`,
    description:
        "Read the NextForge terms of service, licensing terms, refunds, and support policy.",
    alternates: {
        canonical: `${siteConfig.url}/terms`,
    },
    openGraph: {
        title: `Terms of Service | ${siteConfig.name}`,
        description:
            "Read the NextForge terms of service, licensing terms, refunds, and support policy.",
        url: `${siteConfig.url}/terms`,
    },
};

export default function TermsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
