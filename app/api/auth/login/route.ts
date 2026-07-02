import { NextRequest, NextResponse } from "next/server";
import { setSessionCookie } from "@/lib/auth-session";
import { validateCredentials } from "@/lib/auth-users";

const DEV_DEFAULT_EMAIL = "demo@nextforge.app";
const DEV_DEFAULT_PASSWORD = "letmein";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";
        const password = typeof body?.password === "string" ? body.password.trim() : "";

        if (!email || !password) {
            return NextResponse.json({ error: "Email and password required" }, { status: 400 });
        }

        const persistedUser = await validateCredentials(email, password);
        const configuredEmail = process.env.LOGIN_EMAIL?.trim().toLowerCase();
        const configuredPassword = process.env.LOGIN_PASSWORD;
        const isDev = process.env.NODE_ENV !== "production";
        const fallbackEmail = configuredEmail || (isDev ? DEV_DEFAULT_EMAIL : "");
        const fallbackPassword = configuredPassword || (isDev ? DEV_DEFAULT_PASSWORD : "");
        const isFallbackMatch = Boolean(fallbackEmail && fallbackPassword && email === fallbackEmail && password === fallbackPassword);

        if (!persistedUser && !isFallbackMatch) {
            return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
        }

        const response = NextResponse.json({ ok: true });
        setSessionCookie(response, {
            name: persistedUser?.name || email.split("@")[0],
            email,
            plan: "NextForge PRO",
            expiry: "Dożywotni dostęp",
            issuedAt: Math.floor(Date.now() / 1000),
        });
        return response;
    } catch (error) {
        console.error("[auth/login]", error);
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}
