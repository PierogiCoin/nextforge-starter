# 🏆 NextForge – ulepszenia na poziom mistrzowski

Lista tego, co **właśnie poprawiono**, oraz **kolejne kroki**, żeby szablon był na najwyższym poziomie.

---

## ✅ Wdrożone w tej sesji

| Co | Opis |
|----|------|
| **JsonLd** | `author.url` ustawione na `siteConfig.url` zamiast placeholder; dodane `url` do schema. |
| **Newsletter** | Komunikat błędu z dictionary (`errorMsg` PL/EN); komponent czyta też `t.footer.newsletter`. |
| **404 / Blog** | Usunięto odwołanie do nieistniejącego `/noise.png`; zastąpiono delikatnym wzorem CSS (bez zewnętrznego pliku). |
| **Skip to content** | Link „Skip to main content” w `layout.tsx` (widoczny po Tab); `main` ma `id="main-content"`. |
| **Exit intent popup** | Zamykanie klawiszem **Escape**; `role="dialog"`, `aria-modal`, `aria-labelledby`/`aria-describedby`; przycisk zamknięcia z `aria-label`. |
| **Sticky Buy Bar** | Stan „dismissed” zapisywany w `sessionStorage` – po zamknięciu nie pojawia się ponownie w tej sesji. |
| **Cookie consent** | Przycisk „Odrzuć” zapisuje `cookie_consent: "declined"` w `localStorage` – baner nie wraca po odświeżeniu. |

---

## 🎯 Co jeszcze dodać / poprawić (poziom mistrzowski)

### 1. Trust i konwersja

- [x] **Pasek trust badges**  
  Pod Hero lub nad stopką: ikonki + krótkie hasła (np. „Bezpieczna płatność”, „Natychmiastowy dostęp”, „14 dni na zwrot”). Można to zrobić jako nowy komponent lub rozszerzyć `GuaranteeBadge`.

- [ ] **OG image**  
  Dodać `/public/og-image.png` (1200×630) lub generować dynamicznie (`opengraph-image.tsx` już jest – upewnić się, że działa dla `/` i `/blog/[slug]`).

- [ ] **Structured Data dla artykułów**  
  W `app/blog/[slug]/page.tsx` dodać JSON-LD `Article` (author, datePublished, dateModified, image) – lepsze rich snippety w Google.

### 2. Wydajność i Core Web Vitals

- [ ] **Obrazy**  
  Hero / produkty: używać `next/image` z `priority` dla above-the-fold; dla obrazów z zewnątrz – `sizes` i `placeholder="blur"` gdzie możliwe.

- [ ] **Fonty**  
  `Inter`, `DynaPuff`, `Caveat` – już z `next/font`; opcjonalnie `display: "swap"` w konfiguracji, żeby ograniczyć FOUT.

- [ ] **Lazy below-the-fold**  
  Sekcje daleko na stronie (np. FAQ, Footer) można opakować w `dynamic(..., { loading: () => null })` – tylko jeśli bundle strony głównej będzie duży.

### 3. Doświadczenie użytkownika (UX)

- [ ] **Focus trap w Exit Intent**  
  Gdy modal jest otwarty, focus pozostaje w środku (Tab krąży między przyciskiem zamknięcia a polem email); po zamknięciu – powrót do ostatniego aktywnego elementu.

- [ ] **Widoczny focus (keyboard)**  
  Sprawdzić, czy wszystkie interaktywne elementy mają wyraźny `:focus-visible` (np. w `globals.css` lub w komponentach).

- [ ] **Sticky Bar na mobile**  
  Upewnić się, że pasek nie zasłania dolnego CTA lub że jest wystarczająco niski; ewentualnie na bardzo małych ekranach pokazywać uproszczoną wersję.

### 4. Backend i bezpieczeństwo

- [ ] **Rate limit na `/api/newsletter`**  
- [x] **Rate limit na `/api/newsletter`**  
  Ograniczenie liczby requestów z jednego IP (np. 5/min) – np. przez Vercel KV, Upstash Redis lub prosty in-memory (dla jednej instancji).

- [ ] **Walidacja po stronie API**  
  API już zwraca `{ error: "Invalid or missing email" }`; w Newsletter można wyświetlać `data?.error` gdy backend zwróci konkretny komunikat.

### 5. Content i SEO

- [ ] **Czas czytania w blogu**  
  Obliczanie „X min read” na podstawie długości treści i wyświetlanie przy każdym poście (lista + strona pojedynczego).

- [ ] **Canonical + hreflang**  
  `lib/seo.ts` ma już `alternates`; upewnić się, że wszystkie ważne strony (blog, docs) mają poprawne canonical i hreflang tam, gdzie jest wielojęzyczność.

### 6. Dopracowanie szczegółów

- [ ] **Strona 404**  
  Opcjonalnie: osobne meta/OG dla 404, żeby przy udostępnieniu linku nie pokazywało się „Houston, mamy problem” jako tytuł (można ustawić `metadata` w `not-found` jeśli Next.js to wspiera).

- [ ] **Placeholder OG**  
  Jeśli brak pliku `og-image.png`, w `lib/seo.ts` można tymczasowo ustawić `ogImage` na `/logo.png` lub inny istniejący obraz, żeby uniknąć pustego podglądu.

- [ ] **Komponenty niewykorzystane**  
  `BuildVsBuy`, `Features`, `Pricing` – albo dodać jedną sekcję (np. „Build vs Buy” lub „Features”) na stronę główną, albo zostawić jako opcjonalne i opisać to w `customization.md`.

---

## Priorytety (sugestia)

| Priorytet | Działanie |
|-----------|-----------|
| **Wysoki** | OG image w `public/`, rate limit newsletter, JSON-LD Article w blogu. |
| **Średni** | Trust badges, czas czytania, focus trap w popup. |
| **Niski** | Lazy sekcji, osobne meta 404, rozbudowa BuildVsBuy/Features. |

---

## Podsumowanie

- **Już zrobione:** JsonLd, Newsletter (błędy + dict), 404/blog (noise), skip-to-content, a11y Exit Intent (Escape, ARIA), persystencja Sticky Bar i Cookie Decline.
- **Do zrobienia dla „mistrzostwa”:** OG image, rate limit, Article schema, trust strip, czas czytania, ewentualnie focus trap i dalsze dopracowania UX/SEO.

Po wdrożeniu punktów z sekcji „Wdrożone” szablon jest już wyraźnie lepszy pod kątem dostępności, spójności treści i zachowania użytkownika. Kolejne punkty z listy powyżej podnoszą go jeszcze bardziej w stronę poziomu „mistrzowskiego”.
