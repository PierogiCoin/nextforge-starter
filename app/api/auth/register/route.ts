import { NextRequest, NextResponse } from "next/server";
import { createUser, isValidEmail } from "@/lib/auth-users";
import { setSessionCookie } from "@/lib/auth-session";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const name = typeof body?.name === "string" ? body.name.trim() : "";
        const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";
        const password = typeof body?.password === "string" ? body.password : "";

        if (!name || !email || !password) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }
        if (!isValidEmail(email)) {
            return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
        }
        if (password.length < 8) {
            return NextResponse.json({ error: "Password must be at least 8 characters" }, { status: 400 });
        }

        let user;
        try {
            user = await createUser({ name, email, password });
        } catch (error) {
            if (error instanceof Error && error.message === "USER_ALREADY_EXISTS") {
                return NextResponse.json({ error: "User with this email already exists" }, { status: 409 });
            }
            throw error;
        }

        const response = NextResponse.json({ ok: true });
        setSessionCookie(response, {
            name: user.name || email.split("@")[0],
            email: user.email,
            plan: "NextForge PRO",
            expiry: "Dożywotni dostęp",
            issuedAt: Math.floor(Date.now() / 1000),
        });
        return response;
    } catch (error) {
        console.error("[auth/register]", error);
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}
