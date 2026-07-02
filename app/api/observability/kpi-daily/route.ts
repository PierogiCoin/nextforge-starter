import { NextResponse } from "next/server";
import { readObservabilityEvents } from "@/lib/observability";

type EventRecord = {
    type?: unknown;
    event?: unknown;
    ts?: unknown;
};

function dayKey(timestamp: number): string {
    return new Date(timestamp).toISOString().slice(0, 10);
}

export async function GET() {
    try {
        const events = (await readObservabilityEvents()) as EventRecord[];
        const rows = new Map<
            string,
            {
                day: string;
                viewHero: number;
                clickHeroCta: number;
                viewPricing: number;
                startCheckout: number;
                purchase: number;
            }
        >();

        for (const record of events) {
            if (record.type !== "funnel_event") continue;
            const ts = typeof record.ts === "number" ? record.ts : Date.now();
            const event = typeof record.event === "string" ? record.event : "";
            const day = dayKey(ts);
            const current = rows.get(day) || {
                day,
                viewHero: 0,
                clickHeroCta: 0,
                viewPricing: 0,
                startCheckout: 0,
                purchase: 0,
            };

            if (event === "view_hero") current.viewHero += 1;
            if (event === "click_hero_cta") current.clickHeroCta += 1;
            if (event === "view_pricing") current.viewPricing += 1;
            if (event === "start_checkout") current.startCheckout += 1;
            if (event === "purchase") current.purchase += 1;

            rows.set(day, current);
        }

        const result = Array.from(rows.values())
            .sort((a, b) => a.day.localeCompare(b.day))
            .map((row) => ({
                ...row,
                checkoutRate: row.viewPricing > 0 ? Number(((row.startCheckout / row.viewPricing) * 100).toFixed(2)) : 0,
                purchaseRate: row.startCheckout > 0 ? Number(((row.purchase / row.startCheckout) * 100).toFixed(2)) : 0,
            }));

        return NextResponse.json({ ok: true, rows: result });
    } catch (error) {
        console.error("[observability/kpi-daily]", error);
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}
