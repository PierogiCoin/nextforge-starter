import { Metadata } from "next";

function normalizeSiteUrl(url: string): string {
    return url.endsWith("/") ? url.slice(0, -1) : url;
}

const baseUrl = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL || "https://nextforge.app");

// Użyj NEXT_PUBLIC_OG_IMAGE gdy dodasz public/og-image.png (1200×630). Domyślnie logo.
export const siteConfig = {
    name: "NextForge",
    url: baseUrl,
    ogImage: process.env.NEXT_PUBLIC_OG_IMAGE || "/opengraph-image",
    links: {
        twitter: "https://x.com/ArkadiuszDev",
        github: "https://github.com/PierogiCoin",
        linkedin: "",
    },
};

export type SeoLocale = "en" | "pl" | "de" | "es";

type SeoEntry = {
    title: string;
    description: string;
    keywords: string[];
    localeCode: string;
};

export const seoDict: Record<SeoLocale, SeoEntry> = {
    en: {
        title: "NextForge | Next.js SaaS Starter Kit for Indie Founders",
        description:
            "Launch your SaaS faster with a production-ready Next.js starter kit: auth, billing, database, docs, and growth pages included.",
        keywords: [
            "next.js saas starter kit",
            "saas boilerplate",
            "next.js boilerplate",
            "indie hacker tools",
            "lemon squeezy saas",
            "ship saas fast",
        ],
        localeCode: "en_US",
    },
    pl: {
        title: "NextForge | Szablon Next.js SaaS dla Twórców i Deweloperów",
        description:
            "Uruchom swój SaaS szybciej dzięki gotowemu szablonowi Next.js: autoryzacja, płatności Lemon Squeezy, baza danych, dokumentacja i blog w zestawie.",
        keywords: [
            "szablon nextjs saas",
            "nextjs boilerplate pl",
            "programowanie saas",
            "indie hacker polska",
            "lemon squeezy płatności",
            "szybki start saas",
        ],
        localeCode: "pl_PL",
    },
    de: {
        title: "NextForge | Next.js SaaS Starterkit für Indie-Founder",
        description:
            "Bauen und launchen Sie Ihr SaaS schneller mit einem produktionsbereiten Next.js Boilerplate: Authentifizierung, Zahlungen (Lemon Squeezy), Datenbank, Dokumentation und Blog enthalten.",
        keywords: [
            "next.js saas starterkit",
            "saas boilerplate deutsch",
            "next.js vorlage",
            "indie hacker tools",
            "lemon squeezy saas",
            "saas schnell starten",
        ],
        localeCode: "de_DE",
    },
    es: {
        title: "NextForge | Plantilla Next.js SaaS para Creadores y Desarrolladores",
        description:
            "Lanza tu SaaS más rápido con una plantilla Next.js lista para producción: incluye autenticación, pagos con Lemon Squeezy, base de datos, documentación y blog.",
        keywords: [
            "plantilla next.js saas",
            "saas boilerplate español",
            "next.js plantilla",
            "indie hacker herramientas",
            "lemon squeezy pagos",
            "lanzar saas rapido",
        ],
        localeCode: "es_ES",
    },
};

export function getMetadata(lang: SeoLocale = "en"): Metadata {
    const t = seoDict[lang] || seoDict.en;

    return {
        title: t.title,
        description: t.description,
        keywords: t.keywords,
        authors: [{ name: "NextForge Team" }],
        creator: "NextForge",
        metadataBase: new URL(siteConfig.url),
        openGraph: {
            type: "website",
            locale: t.localeCode,
            url: siteConfig.url,
            title: t.title,
            description: t.description,
            siteName: siteConfig.name,
            images: [
                {
                    url: siteConfig.ogImage,
                    width: 1200,
                    height: 630,
                    alt: t.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: t.title,
            description: t.description,
            images: [siteConfig.ogImage],
            creator: "@ArkadiuszDev",
        },
        alternates: {
            canonical: siteConfig.url,
            languages: {
                "en-US": `${siteConfig.url}/?lang=en`,
                "pl-PL": `${siteConfig.url}/?lang=pl`,
                "de-DE": `${siteConfig.url}/?lang=de`,
                "es-ES": `${siteConfig.url}/?lang=es`,
            },
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
    };
}

export function getSeoCopy(lang: string) {
    const normalized = (lang || "en").toLowerCase();
    if (normalized.startsWith("pl")) return seoDict.pl;
    if (normalized.startsWith("de")) return seoDict.de;
    if (normalized.startsWith("es")) return seoDict.es;
    return seoDict.en;
}
