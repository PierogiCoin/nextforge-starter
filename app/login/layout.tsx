import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
    title: `Login | ${siteConfig.name}`,
    description: "Sign in to your NextForge account dashboard.",
    alternates: {
        canonical: `${siteConfig.url}/login`,
    },
    robots: {
        index: false,
        follow: false,
    },
};

export default function LoginLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
