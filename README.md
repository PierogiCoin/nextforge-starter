# NextForge / Indie Starter

Next.js App Router starter pod sprzedaż SaaS (landing + blog + docs + dashboard + integracje Lemon Squeezy/Resend/Gemini).

## Start

```bash
npm ci
cp .env.example .env.local
npm run dev
```

App: `http://localhost:3000`

## Wymagane env (minimum)

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
SESSION_SECRET=very-long-random-secret-at-least-32-chars
LOGIN_EMAIL=demo@nextforge.app
LOGIN_PASSWORD=change-me
```

## Auth (aktualny stan)

- `POST /api/auth/register` tworzy użytkownika w lokalnym store `data/auth-users.json` (hash hasła: `scrypt`).
- `POST /api/auth/login` loguje użytkownika ze store; fallback do `LOGIN_EMAIL/LOGIN_PASSWORD`.
- Sesja jest trzymana w `httpOnly` cookie `nextforge-session` jako **podpisany token HMAC**.
- `GET /api/auth/session` zwraca profil sesji dla UI dashboardu.

## Integracje

### Lemon Squeezy

- `LS_API_KEY`
- `LS_WEBHOOK_SECRET`
- `NEXT_PUBLIC_LS_CHECKOUT_*`
- Webhook endpoint: `POST /api/webhook/ls` (weryfikacja sygnatury `x-signature`).

### Newsletter (Resend)

- `RESEND_API_KEY`
- opcjonalnie `RESEND_SEGMENT_ID`
- endpoint: `POST /api/newsletter`

### SEO Bot (Gemini)

- `GEMINI_API_KEY`
- opcjonalnie `GEMINI_MODEL`
- endpoint: `POST /api/seo-bot`

## Rate limiting

Domyślnie działa fallback in-memory. Dla produkcji/multi-instance ustaw:

```env
UPSTASH_REDIS_REST_URL=...
UPSTASH_REDIS_REST_TOKEN=...
```

Wtedy limiter przełącza się na Upstash Redis (sliding window).

## Conversion & analytics

- Hero ma warianty A/B/C (wymuszenie przez query: `/?ab=a`, `/?ab=b`, `/?ab=c`).
- Funnel events: `view_hero`, `click_hero_cta`, `view_pricing`, `start_checkout`, `purchase`.
- Eventy klienta trafiają do `POST /api/analytics/event` (logowane jako JSON).
- `purchase` loguje się po stronie webhooka Lemon Squeezy.
- Recovery po porzuconym checkout: klient zapisuje lead email lokalnie i wysyła przypomnienie przez `POST /api/checkout/recovery` po czasie (Resend).
- Publiczne metryki: `/conversions`, changelog: `/changelog`, roadmap: `/roadmap`.

## Revenue lifecycle engine

- `order_created`: welcome + onboarding + upsell lifecycle emails.
- `subscription_created`: welcome lifecycle email.
- `subscription_updated`: winback lifecycle email.
- Porzucony checkout: sekwencja recovery 3-krokowa (30m / 24h / 72h), endpoint `POST /api/checkout/recovery`.

## HSE PRO download

- Endpoint: `GET /api/downloads/hse-pro` (wymaga aktywnej sesji + statusu paid customer).
- Domyślnie pobiera plik z: `downloads/hse-conversion-bundle.zip` (folder lemon-squeeze).
- Możesz nadpisać ścieżkę env: `HSE_PRO_PACKAGE_PATH=/absolute/path/hse-conversion-bundle.zip`.
- Webhook `order_created` / `subscription_created` automatycznie dopisuje email kupującego do listy uprawnionych (`data/paid-customers.json`).

## Security hardening

- Global security headers + CSP w `next.config.ts`.
- Webhook replay protection (cache podpisów + okno czasowe).
- Rotacja sekretu sesji: `SESSION_SECRET_CURRENT` + `SESSION_SECRET_PREVIOUS`.
- Sesja: `httpOnly`, `secure` (prod), `sameSite=lax`, `maxAge=24h`.

## Observability

## Demo video (optional)

Ustaw `NEXT_PUBLIC_DEMO_VIDEO_URL` (YouTube embed lub plik `.mp4`), aby osadzić video w sekcji flow.

- Sentry: `SENTRY_DSN` / `NEXT_PUBLIC_SENTRY_DSN` + tracing sample rate.
- Alerty krytyczne: `ALERT_WEBHOOK_URL`.
- KPI API: `GET /api/observability/kpi-daily` (używane też w dashboardzie `/dashboard/kpi`).

## Skrypty

```bash
npm run dev
npm run build
npm run start
npm run lint
```
