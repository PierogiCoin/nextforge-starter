import { NextRequest, NextResponse } from "next/server";
import { getClientIp } from "@/lib/rate-limit";
import { logObservabilityEvent } from "@/lib/observability";

type AnalyticsBody = {
    event?: string;
    payload?: Record<string, unknown>;
    page?: string;
    ts?: number;
};

export async function POST(request: NextRequest) {
    try {
        const body = (await request.json()) as AnalyticsBody;
        if (!body?.event || typeof body.event !== "string") {
            return NextResponse.json({ error: "Invalid event" }, { status: 400 });
        }

        const ip = getClientIp(request);
        const userAgent = request.headers.get("user-agent") || "unknown";
        const record = {
            type: "funnel_event",
            event: body.event,
            payload: {
                ...(body.payload || {}),
                page: body.page || null,
                clientTs: typeof body.ts === "number" ? body.ts : null,
                ip,
                userAgent,
            },
            ts: Date.now(),
        };
        await logObservabilityEvent(record);
        console.log(JSON.stringify(record));

        return NextResponse.json({ ok: true });
    } catch (error) {
        console.error("[analytics/event]", error);
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}
