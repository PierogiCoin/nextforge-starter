const LEAD_EMAIL_KEY = "checkout-recovery-email";
const CHECKOUT_STATE_KEY = "checkout-recovery-state";
const RECOVERY_DELAY_MS = 30 * 60 * 1000;

type CheckoutState = {
    source: string;
    startedAt: number;
    stepsSent?: number[];
};

function normalizeEmail(email: string): string {
    return email.trim().toLowerCase();
}

function isValidEmail(email: string): boolean {
    const normalized = normalizeEmail(email);
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized) && normalized.length <= 254;
}

function readState(): CheckoutState | null {
    if (typeof window === "undefined") return null;
    try {
        const raw = window.localStorage.getItem(CHECKOUT_STATE_KEY);
        if (!raw) return null;
        const parsed = JSON.parse(raw) as CheckoutState;
        if (!parsed || typeof parsed.source !== "string" || typeof parsed.startedAt !== "number") {
            return null;
        }
        return parsed;
    } catch {
        return null;
    }
}

function writeState(state: CheckoutState): void {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(CHECKOUT_STATE_KEY, JSON.stringify(state));
}

export function saveCheckoutRecoveryEmail(email: string): void {
    if (typeof window === "undefined") return;
    const normalized = normalizeEmail(email);
    if (!isValidEmail(normalized)) return;
    window.localStorage.setItem(LEAD_EMAIL_KEY, normalized);
}

export function getCheckoutRecoveryEmail(): string | null {
    if (typeof window === "undefined") return null;
    const email = window.localStorage.getItem(LEAD_EMAIL_KEY);
    if (!email || !isValidEmail(email)) return null;
    return email;
}

export function markCheckoutStarted(source: string): void {
    writeState({
        source,
        startedAt: Date.now(),
        stepsSent: [],
    });
}

export async function runCheckoutRecoverySweep(): Promise<void> {
    if (typeof window === "undefined") return;

    const state = readState();
    if (!state) return;
    const elapsedMs = Date.now() - state.startedAt;
    const thresholds = [
        { step: 1, atMs: RECOVERY_DELAY_MS },
        { step: 2, atMs: 24 * 60 * 60 * 1000 },
        { step: 3, atMs: 72 * 60 * 60 * 1000 },
    ];
    const sentSteps = new Set(state.stepsSent || []);
    const next = thresholds.find((item) => elapsedMs >= item.atMs && !sentSteps.has(item.step));
    if (!next) return;

    const email = window.localStorage.getItem(LEAD_EMAIL_KEY);
    if (!email || !isValidEmail(email)) return;

    const response = await fetch("/api/checkout/recovery", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email,
            source: state.source,
            startedAt: state.startedAt,
            step: next.step,
        }),
        keepalive: true,
    });

    if (response.ok) {
        sentSteps.add(next.step);
        writeState({
            ...state,
            stepsSent: Array.from(sentSteps.values()).sort(),
        });
    }
}
