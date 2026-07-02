import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
    title: `Register | ${siteConfig.name}`,
    description: "Create your NextForge account and start building your SaaS faster.",
    alternates: {
        canonical: `${siteConfig.url}/register`,
    },
    robots: {
        index: false,
        follow: false,
    },
};

export default function RegisterLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
