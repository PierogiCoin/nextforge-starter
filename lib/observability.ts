import { promises as fs } from "fs";
import path from "path";

type EventPayload = Record<string, unknown>;

export type ObservabilityEvent = {
    type: string;
    event: string;
    severity?: "info" | "warning" | "error" | "critical";
    payload?: EventPayload;
    ts?: number;
};

const EVENTS_FILE = path.resolve(process.cwd(), "data", "observability-events.ndjson");

async function ensureEventsDir(): Promise<void> {
    await fs.mkdir(path.dirname(EVENTS_FILE), { recursive: true });
}

export async function logObservabilityEvent(event: ObservabilityEvent): Promise<void> {
    const record = {
        type: event.type,
        event: event.event,
        severity: event.severity || "info",
        payload: event.payload || {},
        ts: event.ts || Date.now(),
    };
    await ensureEventsDir();
    await fs.appendFile(EVENTS_FILE, `${JSON.stringify(record)}\n`, "utf8");
}

export async function readObservabilityEvents(): Promise<Array<Record<string, unknown>>> {
    try {
        const raw = await fs.readFile(EVENTS_FILE, "utf8");
        return raw
            .split("\n")
            .filter((line) => line.trim().length > 0)
            .map((line) => JSON.parse(line) as Record<string, unknown>);
    } catch (error) {
        const nodeError = error as NodeJS.ErrnoException;
        if (nodeError.code === "ENOENT") return [];
        throw error;
    }
}

export async function sendCriticalAlert(title: string, details: EventPayload): Promise<void> {
    const webhook = process.env.ALERT_WEBHOOK_URL;
    if (!webhook) return;

    const response = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            text: `🚨 ${title}`,
            details,
            ts: Date.now(),
        }),
    });

    if (!response.ok) {
        throw new Error(`Alert webhook failed: ${response.status}`);
    }
}
