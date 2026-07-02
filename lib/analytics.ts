export type FunnelEventName =
    | "view_hero"
    | "click_hero_cta"
    | "click_hero_demo"
    | "view_pricing"
    | "start_checkout"
    | "purchase";

type FunnelPayload = Record<string, string | number | boolean | null | undefined>;

export function trackFunnelEvent(event: FunnelEventName, payload: FunnelPayload = {}): void {
    if (typeof window === "undefined") return;

    const body = JSON.stringify({
        event,
        payload,
        page: window.location.pathname,
        ts: Date.now(),
    });

    const dataLayerPayload = {
        event: `funnel_${event}`,
        funnel_event: event,
        ...payload,
    };
    const globalWithDataLayer = window as unknown as { dataLayer?: unknown[] };
    if (Array.isArray(globalWithDataLayer.dataLayer)) {
        globalWithDataLayer.dataLayer.push(dataLayerPayload);
    }

    const globalWithGtag = window as unknown as { gtag?: (...args: unknown[]) => void };
    if (typeof globalWithGtag.gtag === "function") {
        globalWithGtag.gtag("event", event, payload);
    }

    if (typeof navigator.sendBeacon === "function") {
        const blob = new Blob([body], { type: "application/json" });
        navigator.sendBeacon("/api/analytics/event", blob);
        return;
    }

    fetch("/api/analytics/event", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
        keepalive: true,
    }).catch(() => {
        // no-op: analytics must never block UX
    });
}
