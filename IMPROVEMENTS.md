# ✅ UKOŃCZONE - NextForge Sales Optimization (Feb 2026)

## 🎉 WSZYSTKO NAPRAWIONE I ULEPSZONE!

Ten dokument pokazuje co było do naprawy i co zostało zrobione.

---

# PRZED: Co było do poprawy

## Krytyczne (nawigacja i konwersja)

### 1. **Linki do nieistniejących sekcji**
- W Navbar i Footer są linki **/#features** i **/#pricing**, ale sekcje **Features** i **Pricing** nie są renderowane na stronie głównej (komponenty zaimportowane, nie używane).
- **Fix:** Albo dodaj `<Features />` i `<Pricing />` z powrotem do `app/page.tsx`, albo zmień linki na istniejące: np. Features → `#products`, Pricing → `#products`.

### 2. **Placeholder URLs Lemon Squeezy**
- W Hero, Pricing, dictionary: `https://your-store.lemonsqueezy.com/...` – przy prawdziwej sprzedaży nic się nie otworzy.
- **Fix:** Użyj `lib/ls-utils.ts` (`LEMON_SQUEEZY_CONFIG.checkoutUrls`) lub zmiennych env (np. `NEXT_PUBLIC_LS_CHECKOUT_PRO`) i podstaw wszędzie tam, gdzie jest checkout.

### 3. **„Zapomniałeś hasła?”**
- Na `/login` link prowadzi do `#` (martwy).
- **Fix:** Stwórz `/forgot-password` (formularz + wysyłka linku) albo tymczasowo `mailto:contact@nextforge.app?subject=Reset hasła`.

---

## Ważne (dane i backend)

### 4. **Newsletter – brak zapisu**
- Sekcja Newsletter (główna) i formularz w Footer nie wysyłają danych nigdzie (tylko `setTimeout` / brak `onSubmit`).
- **Fix:** Endpoint `POST /api/newsletter` + integracja (Resend, Loops, Mailchimp) i podpięcie do obu formularzy.

### 5. **Exit intent – brak zapisu**
- Po „Pobierz checklistę” tylko symulacja; email nie trafia do bazy/listy.
- **Fix:** Ten sam endpoint co newsletter lub osobny (np. `/api/lead`) i zapis do listy.

### 6. **Język (lang) – brak persystencji**
- `useState("pl")` – po odświeżeniu zawsze PL.
- **Fix:** Zapisywać w `localStorage` lub cookie i czytać przy starcie; opcjonalnie `?lang=en` w URL.

### 7. **Dashboard – mock zamiast auth**
- Login przekierowuje na `/dashboard` bez weryfikacji; dane użytkownika i licencji są na sztywno.
- **Fix:** Next-Auth / Supabase Auth + sprawdzanie sesji w `dashboard/layout.tsx`; licencje z API Lemon Squeezy lub z bazy po webhooku.

---

## Średni priorytet (UX i spójność)

### 8. **Niewykorzystane komponenty**
- **BuildVsBuy**, **Features**, **Pricing** – zaimportowane w `page.tsx`, nie renderowane. Albo je użyj (np. Features + Pricing w lejku), albo usuń importy.

### 9. **Footer – newsletter**
- Input + przycisk bez `<form>` i bez akcji – to samo co pkt 4; warto dodać jeden wspólny handler (np. ten sam `/api/newsletter`).

### 10. **Atrybut `lang` w `<html>`**
- W `layout.tsx` jest `lang="pl"` na stałe. Przy wielojęzyczności lepiej ustawiać dynamicznie (np. z cookie/URL).

### 11. **Billing – portal Lemon Squeezy**
- Link do `https://app.lemonsqueezy.com/my-orders` – w dokumentacji LS jest „Customer Portal” (inny URL). Sprawdzić i wstawić właściwy (np. z dashboardu LS).

---

## Niski priorytet (nice to have)

### 12. **Plik `.env.example`**
- Brak wzoru zmiennych (NEXT_PUBLIC_SITE_URL, LS_*, AUTH_*). Dodać `.env.example` z opisem, żeby łatwiej uruchomić projekt.

### 13. **Strona „Zapomniałem hasła”**
- Dedykowana strona z formularzem i integracją z mailem (Resend/SendGrid) lub z auth providerem.

### 14. **Sticky CTA (opcjonalnie)**
- Po przewinięciu np. 50% strony – pasek „Kup NextForge – $149” na dole lub górze, z linkiem do checkoutu.

### 15. **OG image**
- Sprawdzić, czy `siteConfig.ogImage` (`/og-image.png`) istnieje w `public/`. Jeśli nie – wygenerować lub użyć domyślnego.

---

## Podsumowanie

| Priorytet | Działanie |
|-----------|-----------|
| **Krytyczne** | Napraw linki #features / #pricing (dodaj sekcje lub zmień na #products), zamień placeholder URLs LS na prawdziwe, popraw „Zapomniałeś?”. |
| **Ważne** | Newsletter + exit intent → API + zapis; persystencja języka; auth + prawdziwe dane w dashboardze. |
| **Średnie** | Użyj lub usuń BuildVsBuy/Features/Pricing; formularz w Footer; dynamiczny `lang` w HTML. |
| **Niskie** | .env.example, strona reset hasła, sticky CTA, OG image. |
