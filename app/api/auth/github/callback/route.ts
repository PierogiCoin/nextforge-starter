import { NextRequest, NextResponse } from "next/server";
import { readSessionFromRequest, setSessionCookie } from "@/lib/auth-session";

export async function GET(request: NextRequest) {
    const session = readSessionFromRequest(request);
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const code = searchParams.get("code");
    
    if (!code) {
        return NextResponse.json({ error: "Code parameter is missing" }, { status: 400 });
    }

    const clientId = process.env.GITHUB_CLIENT_ID;
    const clientSecret = process.env.GITHUB_CLIENT_SECRET;

    if (!clientId || !clientSecret) {
        return NextResponse.json({ error: "GitHub client config is missing" }, { status: 500 });
    }

    try {
        const tokenResponse = await fetch("https://github.com/login/oauth/access_token", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                client_id: clientId,
                client_secret: clientSecret,
                code,
            }),
        });

        const tokenData = await tokenResponse.json();
        
        if (tokenData.error) {
            return NextResponse.json({ error: tokenData.error_description || tokenData.error }, { status: 400 });
        }

        const githubToken = tokenData.access_token;
        if (!githubToken) {
            return NextResponse.json({ error: "Failed to obtain access token" }, { status: 400 });
        }

        // Update the user session with the new GitHub token
        const updatedSession = {
            ...session,
            githubToken,
        };

        const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || new URL(request.url).origin;
        const response = NextResponse.redirect(`${siteUrl}/dashboard/downloads?github=connected`);
        
        // Save the updated session cookie
        setSessionCookie(response, updatedSession);

        return response;
    } catch (err: any) {
        return NextResponse.json({ error: err.message || "OAuth exchange failed" }, { status: 500 });
    }
}
