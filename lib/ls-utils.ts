import { trackFunnelEvent } from "@/lib/analytics";
import { getCheckoutRecoveryEmail, markCheckoutStarted } from "@/lib/checkout-recovery";

/**
 * NEXTFORGE - Lemon Squeezy & Indie Hacker Optimization Utilities
 * 
 * Ten plik zawiera kluczowe funkcje do integracji z Lemon Squeezy (Merchant of Record)
 * oraz narzędzia optymalizacyjne dla społeczności Indie Hackerów.
 */

// 1. LEMON SQUEEZY CONFIGURATION
export const LEMON_SQUEEZY_CONFIG = {
    storeId: process.env.NEXT_PUBLIC_LS_STORE_ID,
    apiKey: process.env.LS_API_KEY,
    webhookSecret: process.env.LS_WEBHOOK_SECRET,
    checkoutUrls: {
        free: process.env.NEXT_PUBLIC_LS_CHECKOUT_FREE || "https://github.com/your-username/nextforge",
        standard: process.env.NEXT_PUBLIC_LS_CHECKOUT_STANDARD || "https://your-store.lemonsqueezy.com/checkout/buy/standard-id",
        pro: process.env.NEXT_PUBLIC_LS_CHECKOUT_PRO || "https://your-store.lemonsqueezy.com/checkout/buy/pro-id",
        hse: process.env.NEXT_PUBLIC_LS_CHECKOUT_HSE || "https://your-store.lemonsqueezy.com/checkout/buy/hse-id",
    },
};

// 2. TYPES
export interface SubscriptionStatus {
    isActive: boolean;
    variant: "standard" | "pro" | "free";
    renewsAt?: string;
}

// 3. INDIE HACKER SOCIAL PROOF ENGINE
export const INDIE_HACKER_STATS = {
    launchDate: new Date().toISOString().slice(0, 10),
    currentRevenue: "$4,250 / mo",
    timeToLaunch: "48 hours",
    savings: "40+ hours per project",
};

// Centralne liczby social proof — używaj tych wartości we wszystkich komponentach
// żeby zachować spójność (WallOfLove, Hero, TestimonialsMarquee itp.)
export const SOCIAL_PROOF_STATS = {
    customers: "500+",
    revenueGenerated: "$2.1M+",
    avgTimeToLaunch: "48h",
    rating: "4.9/5",
    hoursSaved: "40+",
};

// 4. LEMON SQUEEZY CHECKOUT HANDLER (Client-side)
// Otwiera checkout; jeśli włączony affiliate tracking, dodaje aff_ref do URL (LemonSqueezy.Url.Build).
export const openLSCheckout = (checkoutUrl: string, options?: { source?: string }) => {
    if (typeof window === "undefined") return;
    if (process.env.NODE_ENV === "development" && checkoutUrl.includes("your-store.lemonsqueezy.com")) {
        console.warn("[NextForge] Checkout URL is still a placeholder. Set NEXT_PUBLIC_LS_CHECKOUT_PRO (or other variants) in your .env file.");
    }
    const source = options?.source || "unknown";
    trackFunnelEvent("start_checkout", { source });
    markCheckoutStarted(source);
    const win = window as Window & {
        LemonSqueezy?: {
            Url?: {
                Build?: (url: string) => string;
                Open?: (url: string) => void;
            };
        };
    };
    const leadEmail = getCheckoutRecoveryEmail();
    const urlObj = new URL(win.LemonSqueezy?.Url?.Build?.(checkoutUrl) ?? checkoutUrl, window.location.origin);
    if (leadEmail && !urlObj.searchParams.has("checkout[email]")) {
        urlObj.searchParams.set("checkout[email]", leadEmail);
    }
    const url = urlObj.toString();
    if (win.LemonSqueezy?.Url?.Open) {
        win.LemonSqueezy.Url.Open(url);
    } else {
        window.location.href = url;
    }
};

// 5. AFFILIATE LINK GENERATOR (dla Twojej domeny – afilianci dostają link twojadomena.com/?aff=ID)
// Store slug z LS: Settings → Affiliates; w env: NEXT_PUBLIC_LS_STORE_SLUG
export const getAffiliateLink = (affiliateId: string) => {
    const base = typeof window !== "undefined" ? window.location.origin : process.env.NEXT_PUBLIC_SITE_URL || "";
    return `${base || "https://your-store.lemonsqueezy.com"}?aff=${affiliateId}`;
};

// 6. OPEN GRAPH DYNAMIC GENERATOR (Indie Hacker Style)
// Narzędzie do generowania tagów dla Twittera/X
export const getIHMetadata = (title: string, revenue: string) => ({
    title: `${title} - Making ${revenue}`,
    twitterCard: "summary_large_image",
    badge: "Built with NextForge 🚀",
});
