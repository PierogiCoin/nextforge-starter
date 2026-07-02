import crypto from "crypto";
import { NextRequest, NextResponse } from "next/server";

export const AUTH_COOKIE_NAME = "nextforge-session";
const SESSION_MAX_AGE_SECONDS = 60 * 60 * 24;

export type AuthSession = {
    name: string;
    email: string;
    plan: string;
    expiry: string;
    issuedAt: number;
    githubToken?: string;
};

function getPrimarySessionSecret(): string {
    const configured = process.env.SESSION_SECRET_CURRENT || process.env.SESSION_SECRET;
    if (configured) return configured;
    if (process.env.NODE_ENV !== "production") {
        return "dev-only-insecure-session-secret-change-me";
    }
    throw new Error("SESSION_SECRET_CURRENT (or SESSION_SECRET) is required in production.");
}

function getVerificationSecrets(): string[] {
    const secrets = [
        process.env.SESSION_SECRET_CURRENT,
        process.env.SESSION_SECRET_PREVIOUS,
        process.env.SESSION_SECRET,
    ].filter((item): item is string => Boolean(item));
    if (secrets.length > 0) return secrets;
    return [getPrimarySessionSecret()];
}

function signWithSecret(payloadB64: string, secret: string): string {
    return crypto
        .createHmac("sha256", secret)
        .update(payloadB64)
        .digest("base64url");
}

function sign(payloadB64: string): string {
    return signWithSecret(payloadB64, getPrimarySessionSecret());
}

export function createSessionToken(payload: AuthSession): string {
    const payloadB64 = Buffer.from(JSON.stringify(payload), "utf8").toString("base64url");
    const signature = sign(payloadB64);
    return `${payloadB64}.${signature}`;
}

function isValidSessionShape(value: unknown): value is AuthSession {
    if (!value || typeof value !== "object") return false;
    const candidate = value as Partial<AuthSession>;
    return (
        typeof candidate.name === "string" &&
        candidate.name.length > 0 &&
        typeof candidate.email === "string" &&
        candidate.email.length > 0 &&
        typeof candidate.plan === "string" &&
        candidate.plan.length > 0 &&
        typeof candidate.expiry === "string" &&
        candidate.expiry.length > 0 &&
        typeof candidate.issuedAt === "number" &&
        Number.isFinite(candidate.issuedAt) &&
        (candidate.githubToken === undefined || typeof candidate.githubToken === "string")
    );
}

export function parseSessionToken(token: string | undefined | null): AuthSession | null {
    if (!token) return null;
    const [payloadB64, signature] = token.split(".");
    if (!payloadB64 || !signature) return null;

    const actualBuffer = Buffer.from(signature);
    const isValidSignature = getVerificationSecrets().some((secret) => {
        const expectedSignature = signWithSecret(payloadB64, secret);
        const expectedBuffer = Buffer.from(expectedSignature);
        return expectedBuffer.length === actualBuffer.length && crypto.timingSafeEqual(expectedBuffer, actualBuffer);
    });
    if (!isValidSignature) {
        return null;
    }

    let decoded: unknown;
    try {
        decoded = JSON.parse(Buffer.from(payloadB64, "base64url").toString("utf8"));
    } catch {
        return null;
    }
    if (!isValidSessionShape(decoded)) {
        return null;
    }

    const expiresAt = decoded.issuedAt + SESSION_MAX_AGE_SECONDS;
    if (Math.floor(Date.now() / 1000) > expiresAt) {
        return null;
    }

    return decoded;
}

export function readSessionFromRequest(request: NextRequest): AuthSession | null {
    return parseSessionToken(request.cookies.get(AUTH_COOKIE_NAME)?.value);
}

export function setSessionCookie(response: NextResponse, session: AuthSession): void {
    response.cookies.set(AUTH_COOKIE_NAME, createSessionToken(session), {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production",
        maxAge: SESSION_MAX_AGE_SECONDS,
    });
}

export function clearSessionCookie(response: NextResponse): void {
    response.cookies.set(AUTH_COOKIE_NAME, "", {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        maxAge: 0,
    });
}
