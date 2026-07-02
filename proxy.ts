import { NextRequest, NextResponse } from "next/server";

const AUTH_COOKIE_NAME = "nextforge-session";
const SKIP_GUARD = process.env.SKIP_AUTH_GUARD === "1";

export function proxy(request: NextRequest) {
    if (SKIP_GUARD) return NextResponse.next();

    const { pathname } = request.nextUrl;
    const needsAuth =
        pathname.startsWith("/dashboard") ||
        pathname.startsWith("/demo");

    if (!needsAuth) return NextResponse.next();

    const hasSession = Boolean(request.cookies.get(AUTH_COOKIE_NAME)?.value);
    if (hasSession) {
        return NextResponse.next();
    }

    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("returnTo", pathname);
    return NextResponse.redirect(loginUrl);
}

export const config = {
    matcher: ["/dashboard/:path*", "/demo/:path*"],
};
