import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const store = new Map<string, { count: number; resetAt: number }>();
const upstashLimiterCache = new Map<string, Ratelimit>();

if (typeof setInterval !== "undefined") {
    setInterval(() => {
        const now = Date.now();
        for (const [key, val] of store.entries()) {
            if (now >= val.resetAt) store.delete(key);
        }
    }, 120_000);
}

function getUpstashLimiter(maxRequests: number, windowMs: number): Ratelimit | null {
    if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
        return null;
    }

    const windowSeconds = Math.max(1, Math.ceil(windowMs / 1000));
    const cacheKey = `${maxRequests}:${windowSeconds}`;
    const cached = upstashLimiterCache.get(cacheKey);
    if (cached) return cached;

    const limiter = new Ratelimit({
        redis: Redis.fromEnv(),
        limiter: Ratelimit.slidingWindow(maxRequests, `${windowSeconds} s`),
        analytics: false,
        prefix: "indie-rate-limit",
    });

    upstashLimiterCache.set(cacheKey, limiter);
    return limiter;
}

function inMemoryRateLimit(key: string, maxRequests: number, windowMs: number): boolean {
    const now = Date.now();
    const entry = store.get(key);
    if (!entry || now >= entry.resetAt) {
        store.set(key, { count: 1, resetAt: now + windowMs });
        return false;
    }
    if (entry.count >= maxRequests) return true;
    entry.count += 1;
    return false;
}

export async function rateLimit(key: string, maxRequests: number, windowMs: number): Promise<boolean> {
    const limiter = getUpstashLimiter(maxRequests, windowMs);
    if (!limiter) {
        return inMemoryRateLimit(key, maxRequests, windowMs);
    }

    try {
        const result = await limiter.limit(key);
        return !result.success;
    } catch (error) {
        console.error("[rate-limit] Upstash error, falling back to memory store", error);
        return inMemoryRateLimit(key, maxRequests, windowMs);
    }
}

export function getClientIp(request: { headers: { get(name: string): string | null } }): string {
    return (
        request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
        request.headers.get("x-real-ip") ||
        "unknown"
    );
}
