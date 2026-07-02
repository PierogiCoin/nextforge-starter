import { Resend } from "resend";

type LifecycleKind = "welcome" | "onboarding" | "upsell" | "winback";

function getResendClient(): Resend | null {
    if (!process.env.RESEND_API_KEY) return null;
    return new Resend(process.env.RESEND_API_KEY);
}

function getFromAddress(): string {
    return process.env.RESEND_FROM || "NextForge <onboarding@resend.dev>";
}

function getSiteUrl(): string {
    return process.env.NEXT_PUBLIC_SITE_URL || "https://nextforge.app";
}

type LifecycleEmail = {
    subject: string;
    html: string;
    text: string;
};

function buildEmail(kind: LifecycleKind): LifecycleEmail {
    const siteUrl = getSiteUrl();
    const docs = `${siteUrl}/docs`;
    const dashboard = `${siteUrl}/dashboard`;
    const checkout = process.env.NEXT_PUBLIC_LS_CHECKOUT_PRO || siteUrl;

    if (kind === "welcome") {
        return {
            subject: "Welcome to NextForge — your access is ready",
            html: `<h2>Welcome to NextForge</h2><p>Your access is active. Start here:</p><p><a href="${dashboard}">Open dashboard</a></p><p><a href="${docs}">Read setup docs</a></p>`,
            text: `Welcome to NextForge. Open dashboard: ${dashboard}. Setup docs: ${docs}.`,
        };
    }

    if (kind === "onboarding") {
        return {
            subject: "Onboarding checklist: launch in a weekend",
            html: `<h2>Launch checklist</h2><ol><li>Configure env</li><li>Run checkout flow</li><li>Publish first landing</li></ol><p><a href="${docs}">Open docs</a></p>`,
            text: `Onboarding checklist: configure env, test checkout flow, publish landing. Docs: ${docs}`,
        };
    }

    if (kind === "upsell") {
        return {
            subject: "Next step: increase your conversion rate",
            html: `<h2>Scale your setup</h2><p>Add case studies, KPI dashboard, and email lifecycle to improve conversion.</p><p><a href="${dashboard}">Open dashboard</a></p>`,
            text: `Scale your setup: add case studies, KPI dashboard and lifecycle emails. Dashboard: ${dashboard}`,
        };
    }

    return {
        subject: "We can help you recover growth",
        html: `<h2>Need help getting back on track?</h2><p>If your subscription changed or was canceled, we can help optimize conversion and onboarding.</p><p><a href="${checkout}">Reactivate access</a></p>`,
        text: `Need help getting back on track? Reactivate access here: ${checkout}`,
    };
}

export async function sendLifecycleEmail(input: {
    to: string;
    kind: LifecycleKind;
}): Promise<void> {
    const resend = getResendClient();
    if (!resend) return;
    const email = buildEmail(input.kind);
    const { error } = await resend.emails.send({
        from: getFromAddress(),
        to: input.to,
        subject: email.subject,
        html: email.html,
        text: email.text,
    });
    if (error) {
        throw new Error(`Lifecycle email failed (${input.kind}): ${error.message}`);
    }
}

export function extractCustomerEmail(payload: unknown): string | null {
    if (!payload || typeof payload !== "object") return null;
    const candidate = payload as {
        data?: {
            attributes?: {
                user_email?: string;
                customer_email?: string;
            };
        };
        meta?: {
            custom_data?: {
                email?: string;
            };
        };
    };

    const email =
        candidate.data?.attributes?.user_email ||
        candidate.data?.attributes?.customer_email ||
        candidate.meta?.custom_data?.email ||
        null;
    return typeof email === "string" && email.includes("@") ? email.trim().toLowerCase() : null;
}
