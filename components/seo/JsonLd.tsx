"use client";

import { getSeoCopy, siteConfig } from "@/lib/seo";

export const JsonLd = ({ lang = "en" }: { lang: string }) => {
    const t = getSeoCopy(lang);

    const softwareApplication = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "NextForge",
        description: t.description,
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Web",
        url: siteConfig.url,
        offers: {
            "@type": "Offer",
            price: "149.00",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
        },
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "512",
        },
        author: {
            "@type": "Organization",
            name: "NextForge Team",
            url: siteConfig.url,
        },
    };

    const webSite = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "NextForge",
        url: siteConfig.url,
        inLanguage: lang === "pl" ? "pl-PL" : "en-US",
    };

    const sameAs = [
        siteConfig.links.twitter,
        siteConfig.links.github,
        siteConfig.links.linkedin,
    ].filter(Boolean);

    const organization = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "NextForge",
        url: siteConfig.url,
        logo: `${siteConfig.url}/logo.png`,
        sameAs,
    };

    const schemas = [softwareApplication, webSite, organization];

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
        />
    );
};
