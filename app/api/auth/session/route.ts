import { NextRequest, NextResponse } from "next/server";
import { readSessionFromRequest } from "@/lib/auth-session";

export async function GET(request: NextRequest) {
    const session = readSessionFromRequest(request);
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    return NextResponse.json({
        ok: true,
        session: {
            name: session.name,
            email: session.email,
            plan: session.plan,
            expiry: session.expiry,
        },
    });
}
