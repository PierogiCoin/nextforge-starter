export const dict: any = {
    pl: {
        banner: "🔥 Oferta Premierowa: -40% tylko przez pierwsze 48h!",
        nav: { demo: "Demo", products: "Produkty", features: "Funkcje", pricing: "Cennik", docs: "Dokumentacja", blog: "Blog", login: "Zaloguj" },
        hero: {
            preheadline: "Dla solo founderów, którzy nienawidzą boilerplate’u",
            badge: "🚀 v2.0 - Next.js 15 & Tailwind 4 Gotowy",
            title1: "Uruchom SaaS w 48h,",
            title2: "bez składania stacku od zera.",
            desc: "Dostajesz gotowy system z auth, płatnościami i dashboardem. Skupiasz się na funkcjach i sprzedaży zamiast na infrastrukturze.",
            buyBtn: "Kup i uruchom swój SaaS",
            demoBtn: "Zobacz demo (2 min)",
            codeHeader: "Wdrażaj w sekundy",
            visitors: "osób ogląda teraz",
            scrollToProducts: "Zobacz produkty",
            benefits: ["40+ godzin oszczędności", "Płatności od dnia 1", "Dożywotni dostęp"],
            trustLine: "Bezpieczna płatność · Lemon Squeezy · Bez subskrypcji",
            scrollHint: "Zobacz demo",
            earningBadge: "Zarabiaj od 48h 🚀",
            socialProofDevs: "500+ deweloperów",
            socialProofRating: "Ocena 4.9/5",
            socialProofRevenue: "$2.1M+ wygenerowanego przychodu",
            launchedIn: "Uruchomiono w"
        },
        trustBadges: {
            secure: "Bezpieczna płatność",
            instant: "Natychmiastowy dostęp",
            guarantee: "14 dni na zwrot",
        },
        liveCounter: {
            viewing: "osób ogląda teraz",
            sales: "zakupów dzisiaj",
            trending: "🔥 Na topie",
        },
        countdown: {
            title: "⏰ Cena premierowa tylko przez chwilę:",
            days: "DNI",
            hours: "GODZ.",
            mins: "MIN",
            secs: "SEK",
            message:
                "Specjalna cena startowa dla pierwszych klientów, dopóki licznik nie dobiegnie końca.",
            urgency:
                "Oferta dla early adopters – później możemy podnieść cenę.",
        },
        products: {
            stepLabel: "Krok 2",
            badge: "NASZE PORTFOLIO",
            wallet: {
                title: "Twój Portfel",
                subtitle: "Wybierz idealne rozwiązanie dla siebie",
                tabs: { all: "Wszystkie", starter: "Startery", standard: "Szablony", pro: "Systemy PRO" }
            },
            title1: "Gotowe rozwiązania",
            title2: "do natychmiastowego startu",
            desc: "Wybierz gotowy produkt i zacznij sprzedawać swoim klientom od razu.",
            items: [
                {
                    title: "NextForge Starter",
                    price: "$0",
                    desc: "Idealny dla hobbystów i nauki. Minimalny szkielet SaaS: auth, dashboard i podstawowe UI na Next.js 15 + Tailwind 4.",
                    features: [
                        "Next.js 15 & Tailwind 4",
                        "Supabase Auth + prosty dashboard",
                        "Podstawowy UI Kit (Button, Card, Layout)",
                        "Licencja MIT – rób z tym co chcesz"
                    ],
                    buyUrl: process.env.NEXT_PUBLIC_LS_CHECKOUT_FREE || "https://github.com/your-username/nextforge-starter",
                    demoUrl: "/demo/dashboard",
                    badge: "Open Source",
                    btnLabel: "Pobierz za darmo z GitHub",
                    category: "starter",
                },
                {
                    title: "HSE PRO System",
                    price: "$49",
                    oldPrice: "$79",
                    desc: "Kompletna platforma szkoleniowa z generatorem certyfikatów PDF i obsługą e-maili.",
                    features: ["Generator PDF (React-PDF)", "Integracja Resend & Email", "Wielojęzyczność (i18n)", "Kalkulator Wycen"],
                    buyUrl: process.env.NEXT_PUBLIC_LS_CHECKOUT_HSE || "https://your-store.lemonsqueezy.com/checkout/buy/hse-id",
                    demoUrl: "https://bhp-demo.vercel.app",
                    badge: "Bestseller",
                    btnLabel: "Kup Szablon",
                    category: "standard",
                },
                {
                    title: "NextForge PRO",
                    price: "$129",
                    desc: "Pełny pakiet komercyjny. Gotowy SaaS w pudełku z lejkiem sprzedażowym, blogiem SEO, dokumentacją, płatnościami Lemon Squeezy i dashboardem – zastępuje 80+ godzin pracy Senior Developera.",
                    features: [
                        "Pełny lejek sprzedażowy (Hero, ROI, testimonials, FAQ)",
                        "11 artykułów SEO + 7 plików dokumentacji",
                        "Integracja z Lemon Squeezy (checkout + webhook)",
                        "Dashboard użytkownika i demo /demo/dashboard",
                        "Licencja komercyjna – możesz sprzedawać własny SaaS"
                    ],
                    buyUrl: process.env.NEXT_PUBLIC_LS_CHECKOUT_PRO || "https://your-store.lemonsqueezy.com/checkout/buy/pro-license",
                    demoUrl: "/demo/dashboard",
                    badge: "Popularne",
                    btnLabel: "Kup i odpal swój SaaS",
                    category: "pro",
                }
            ],
            demoBtn: "Zobacz Demo",
        },
        tech: { badge: "⚙️ Tech Stack", title: "Tylko najnowocześniejsze narzędzia", desc: "Wybraliśmy technologie, które są standardem w 2024 roku." },
        demo: {
            stepLabel: "Krok 1",
            badge: "💎 Live Preview",
            title1: "Twój Dashboard",
            title2: "już tu jest.",
            desc: "NextForge to kompletny, wysokiej klasy system dashboardu gotowy na Twoich klientów.",
            welcome: "Witaj",
            subtitle: "Oto co się dzieje w Twoim biznesie dzisiaj.",
            syncBtn: "Synchronizuj",
            projectBtn: "Nowy Projekt",
            metrics: { revenue: "Całkowity Przychód", users: "Aktywni Użytkownicy", churn: "Współczynnik Odejść" },
            revenueChart: "Przychód w czasie",
            topCustomers: "Najlepsi Klienci",
            systemStatus: "Status Systemu",
            statusText: "Wszystkie systemy sprawne",
            statusSubtext: "Synchronizacja danych aktywna",
            usage: "Plan zużycia",
            usageText: "użytych kredytów",
            overview: "Przegląd",
            analytics: "Analityka",
            customers: "Klienci",
            settings: "Ustawienia",
            billing: "Płatności"
        },
        features: {
            badge: "🔥 Kluczowe Funkcje",
            title1: "Zbudowany dla Twojej",
            title2: "produktywności.",
            desc: "Zoptymalizowany pod kątem szybkości wdrażania produktów.",
            items: [
                { title: "Supabase & Prisma", desc: "Zintegrowana baza danych z pełnym typowaniem Prisma i bezpieczeństwem RLS." },
                { title: "Next-Auth v5", desc: "Najnowsze uwierzytelnianie: Google, GitHub, Magic Links i hasła." },
                { title: "Lemon Squeezy", desc: "Obsługa płatności, subskrypcji i rozliczeń VAT OSS." },
                { title: "Tailwind 4 & Shadcn", desc: "Komponenty zbudowane na najnowszej wersji Tailwind CSS." },
                { title: "TypeScript v5+", desc: "Zero błędów typesafety. Cały projekt jest w 100% otypowany." },
                { title: "Turbo Deployment", desc: "Meta tagi, sitemap i OG Image generują się automatycznie." }
            ]
        },
        docs: {
            badge: "DOKUMENTACJA",
            title1: "Wszystko, co musisz wiedzieć,",
            title2: "by wystartować.",
            desc: "Otrzymujesz dostęp do interaktywnej bazy wiedzy, która przeprowadzi Cię od instalacji aż po zysk.",
            btn: "Przeglądaj Docs",
            tutorial: "Obejrzyj tutorial (15 min)"
        },
        buildVsBuy: {
            badge: "⚖️ Analiza kosztów",
            title1: "Przestań budować",
            title2: "to samo setny raz.",
            desc: "Kup NextForge i poświęć ten czas na marketing i funkcje.",
            points: [
                "Zaoszczędź 40+ godzin powtarzalnej pracy",
                "NextForge kosztuje mniej niż 1h pracy Seniora",
                "Dowieź MVP w ten sam weekend"
            ],
            self: "Budowanie samemu",
            total: "Łącznie",
            price: "Cena"
        },
        testimonials: {
            title: "Zaufali nam Indie Hackerzy",
            items: [
                { name: "Marek", role: "Założyciel SaaS", text: "NextForge pozwoliło mi dowieźć projekt w weekend. W poniedziałek miałem już sprzedaż!" },
                { name: "Julia", role: "Fullstack Developer", text: "Najczystszy starter kit jaki widziałam. Konfiguracja Supabase to poezja." },
                { name: "Artur", role: "Indie Maker", text: "Integracja Lemon Squeezy to game changer dla twórców z UE." }
            ]
        },
        footer: {
            tagline: "Najlepszy Starter Kit dla nowoczesnych deweloperów. Przestań budować logowanie w kółko.",
            status: "Wszystkie systemy sprawne",
            newsletter: { title: "Bądź na bieżąco", desc: "Dołącz do twórców. Porady SaaS i nowości — zero spamu.", placeholder: "Podaj swój email", btn: "Zapisz się", ctaTitle: "Dołącz do Elity", ctaDesc: "Zapisz się i otrzymaj kod rabatowy -50% na start. Zero spamu, tylko konkretne update'y.", successMsg: "Witamy w ekipie! Sprawdź maila wkrótce. 🚀", btnSubmit: "Zapisz mnie", countText: "Twórcy już z nami", errorMsg: "Coś poszło nie tak. Spróbuj ponownie lub skontaktuj się z nami." },
            product: { title: "Produkt" },
            company: { title: "Firma", about: "O mnie", contact: "Kontakt" },
            legal: { privacy: "Prywatność", terms: "Regulamin" },
            rights: "Wszelkie prawa zastrzeżone.",
            by: "Stworzone przez Indie Hackera"
        },
        pricing: {
            badge: "💰 Cennik",
            title1: "Zainwestuj raz.",
            title2: "Buduj zawsze.",
            desc: "Dostęp do kodu na zawsze. Jednorazowa płatność, żadnych subskrypcji.",
            standard: { title: "Standard", price: "$99", desc: "Idealny start dla Twojego hobbystycznego projektu." },
            pro: { title: "SaaS Founder", price: "$129", oldPrice: "$249", desc: "Wszystko, czego potrzebujesz, by podbić rynek.", badge: "Najlepszy Wybór" },
            buyNow: "Kup Teraz",
            buyNowPro: "Kup Teraz i Buduj",
            secure: "Bezpieczna płatność przez Lemon Squeezy",
            join: "Dołącz do twórców"
        },
        finalCta: {
            headline: "Gotowy, żeby wystartować?",
            subline: "Dołącz do 500+ deweloperów. Jedna płatność, dożywotni dostęp. 14 dni na zwrot.",
            btn: "Odpal swój SaaS z NextForge",
            price: "$129",
            once: "Jednorazowa płatność · Bez subskrypcji",
            guaranteeLine: "Bez ryzyka – gwarancja zwrotu pieniędzy.",
            bullets: ["Pełny dostęp", "Aktualizacje w cenie", "14 dni na zwrot"],
        },
        stickyBar: {
            title: "Gotowy, żeby uruchomić swój SaaS?",
            subtitle: "Jedna płatność, dożywotni dostęp. 14 dni na zwrot.",
            cta: "Odpal SaaS z NextForge",
            onlyLabel: "Tylko",
        },
        faq: {
            title: "Najczęstsze Pytania",
            ctaText: "Nie znalazłeś odpowiedzi?",
            ctaButton: "Napisz do nas",
            ctaOr: "Lub kup od razu i zacznij budować:",
            ctaBuyLabel: "Zobacz plany i ceny →",
            items: [
                { q: "Darmowe aktualizacje?", a: "Tak! Otrzymujesz dostęp do wszystkich przyszłych wersji za darmo." },
                { q: "Lemon Squeezy czy Stripe?", a: "Obsługujemy oba! Lemon Squeezy jest idealny dla osób z UE." },
                { q: "Wiele projektów?", a: "Licencja PRO pozwala na budowanie nieograniczonej liczby własnych projektów." },
                { q: "Bezpieczeństwo?", a: "Stosujemy najlepsze praktyki bezpieczeństwa dla Auth i bazy danych." },
                { q: "Czy dostanę wsparcie?", a: "Tak. Dokumentacja, FAQ i e-mail. Kupując PRO masz dostęp do aktualizacji i materiałów pomocy." }
            ]
        },
        guarantee: "Bezpieczna płatność · Lemon Squeezy",
        guaranteeCta: "Kup z gwarancją zwrotu",
        livechat: { greeting: "Cześć! 👋", intro: "Masz pytania dotyczące NextForge? Chętnie pomogę!", placeholder: "Napisz wiadomość...", firstMessage: "Cześć! Tu Arkadiusz. W czym mogę Ci pomóc?", openLabel: "Chat", mailSubject: "NextForge – pytanie ze strony", mailBodyFallback: "(Wiadomość z formularza chat)" },
        login: { title: "Witaj ponownie", subtitle: "Wpisz swoje dane, aby uzyskać dostęp", submit: "Zaloguj się", connecting: "Łączenie...", serverError: "Błąd serwera", invalidCredentials: "Nieprawidłowe dane logowania" },
        testimonialsExtra: { statsCustomers: "Klientów", statsRevenue: "Wygenerowanych przychodów", statsLaunch: "Średni czas wdrożenia", statsRating: "Średnia ocena", launchedIn: "Wdrożono w", cta: "Dołącz do nich dziś" },
        blog: { guidesTitle: "Najlepsze poradniki SaaS", guidesDesc: "Zacznij od przewodników o cenach, launchach i szablonach.", guide1: "Strategia cenowa SaaS 2026", guide2: "Przewodnik po Product Hunt 2026", guide3: "Poradnik Next.js SaaS Boilerplate 2026" },
        funnel: { step1: "Zobacz demo", step2: "Wybierz plan", step3: "Wdróż w weekend", ariaLabel: "Lejek zakupowy" },
        saleNotification: { bought: "właśnie kupił NextForge!", location: "Lokalizacja", justNow: "Przed chwilą" },
        exitIntent: { title: "Czekaj! Nie przegap tego. 🎁", desc: "Zanim wyjdziesz – pobierz darmową checklistę:", lead: "10 Kroków do Wdrożenia SaaS w Weekend", button: "Pobierz darmową checklistę", sending: "Wysyłanie...", success: "Wysłano!", successTitle: "Sprawdź skrzynkę!", successDesc: "Checklista jest już w drodze.", noSpam: "Zero spamu. Wypisz się w każdej chwili." }
    },
    en: {
        banner: "🔥 Launch Offer: -40% only for the first 48h!",
        nav: { demo: "Demo", products: "Products", features: "Features", pricing: "Pricing", docs: "Docs", blog: "Blog", login: "Login" },
        hero: {
            badge: "🚀 v2.0 - Next.js 15 & Tailwind 4 Ready",
            title1: "Launch your SaaS in 48 hours,",
            title2: "without rebuilding the stack.",
            desc: "Get auth, payments and dashboard wired from day one so you can focus on shipping features and closing first customers.",
            buyBtn: "Buy and launch your SaaS",
            demoBtn: "Watch 2-min demo",
            codeHeader: "Deploy in seconds",
            visitors: "people viewing",
            scrollToProducts: "See products",
            benefits: ["40+ hours saved", "Payments from day 1", "Lifetime access"],
            trustLine: "Secure payment · Lemon Squeezy · No subscription",
            scrollHint: "See demo",
            earningBadge: "Start earning in 48h 🚀",
            socialProofDevs: "500+ developers",
            socialProofRating: "4.9/5 rating",
            socialProofRevenue: "$2.1M+ revenue generated",
            launchedIn: "Launched in"
        },
        trustBadges: {
            secure: "Secure payment",
            instant: "Instant access",
            guarantee: "14-day money-back",
        },
        liveCounter: {
            viewing: "people viewing now",
            sales: "purchases today",
            trending: "🔥 Trending",
        },
        countdown: {
            title: "⏰ Launch pricing for early customers:",
            days: "Days",
            hours: "Hours",
            mins: "Mins",
            secs: "Secs",
            message:
                "Special launch pricing reserved for early customers while this timer is running.",
            urgency:
                "Offer reserved for early customers – we may increase price after the timer.",
        },
        products: {
            stepLabel: "Step 2",
            badge: "OUR PORTFOLIO",
            wallet: {
                title: "Store Wallet",
                subtitle: "Choose your perfect fit",
                tabs: { all: "All Products", starter: "Starters", standard: "Templates", pro: "PRO Systems" }
            },
            title1: "Ready solutions",
            title2: "for instant launch",
            desc: "Choose a ready-made product and start selling to your customers immediately.",
            items: [
                {
                    title: "NextForge Starter",
                    price: "$0",
                    desc: "Perfect for learning and side projects. Minimal SaaS skeleton with auth, dashboard and basic UI on Next.js 15 + Tailwind 4.",
                    features: [
                        "Next.js 15 & Tailwind 4",
                        "Supabase Auth + simple dashboard",
                        "Basic UI kit (Button, Card, Layout)",
                        "MIT license – use it however you want"
                    ],
                    buyUrl: process.env.NEXT_PUBLIC_LS_CHECKOUT_FREE || "https://github.com/your-username/nextforge-starter",
                    demoUrl: "/demo/dashboard",
                    badge: "Open Source",
                    btnLabel: "Get free on GitHub",
                    category: "starter",
                },
                {
                    title: "HSE PRO System",
                    price: "$49",
                    oldPrice: "$79",
                    desc: "Complete training platform with PDF certificate generator and email handling.",
                    features: ["PDF Generator (React-PDF)", "Resend & Email Integration", "Multilingual (i18n)", "Quote Calculator"],
                    buyUrl: process.env.NEXT_PUBLIC_LS_CHECKOUT_HSE || "https://your-store.lemonsqueezy.com/checkout/buy/hse-id",
                    demoUrl: "https://bhp-demo.vercel.app",
                    badge: "Bestseller",
                    btnLabel: "Buy Template",
                    category: "standard",
                },
                {
                    title: "NextForge PRO",
                    price: "$129",
                    desc: "Full commercial package. A revenue‑ready SaaS in a box with sales funnel, SEO blog, documentation, Lemon Squeezy payments and user dashboard – replacing 80+ hours of senior dev work.",
                    features: [
                        "High‑converting sales funnel (Hero, ROI, testimonials, FAQ)",
                        "11 SEO blog posts + 7 docs",
                        "Lemon Squeezy integration (checkout + webhook‑ready)",
                        "User dashboard and live demo /demo/dashboard",
                        "Commercial license – build and sell your own SaaS"
                    ],
                    buyUrl: process.env.NEXT_PUBLIC_LS_CHECKOUT_PRO || "https://your-store.lemonsqueezy.com/checkout/buy/pro-license",
                    demoUrl: "/demo/dashboard",
                    badge: "Popular",
                    btnLabel: "Buy & launch your SaaS",
                    category: "pro",
                }
            ],
            demoBtn: "View Demo",
        },
        tech: { badge: "⚙️ Tech Stack", title: "Modern tools only", desc: "We selected technologies that are the 2024 standard." },
        demo: {
            stepLabel: "Step 1",
            badge: "💎 Live Preview",
            title1: "Your Dashboard",
            title2: "is already here.",
            desc: "NextForge is not just a skeleton. It's a complete, high-end dashboard system ready for your clients.",
            welcome: "Welcome",
            subtitle: "Here's what's happening today.",
            syncBtn: "Sync Data",
            projectBtn: "New Project",
            metrics: { revenue: "Total Revenue", users: "Active Users", churn: "Churn Rate" },
            revenueChart: "Revenue Over Time",
            topCustomers: "Top Customers",
            systemStatus: "System Status",
            statusText: "All systems operational",
            statusSubtext: "Data sync active",
            usage: "Usage Plan",
            usageText: "of credits used",
            overview: "Overview",
            analytics: "Analytics",
            customers: "Customers",
            settings: "Settings",
            billing: "Billing"
        },
        features: {
            badge: "🔥 Core Features",
            title1: "Built for your",
            title2: "productivity.",
            desc: "Every line of code is optimized for fast deployment.",
            items: [
                { title: "Supabase & Prisma", desc: "Integrated database with full Prisma typing and RLS security." },
                { title: "Next-Auth v5", desc: "Latest authentication: Google, GitHub, Magic Links and passwords." },
                { title: "Lemon Squeezy", desc: "Handle payments, subscriptions, and VAT OSS tax - you just withdraw funds." },
                { title: "Tailwind 4 & Shadcn", desc: "Components built on the latest Tailwind CSS version." },
                { title: "TypeScript v5+", desc: "Zero typesafety errors. 100% typed for your convenience." },
                { title: "Turbo Deployment", desc: "Meta tags, sitemaps and OG Images generate automatically." }
            ]
        },
        docs: {
            badge: "DOCUMENTATION",
            title1: "Everything you need",
            title2: "to get started.",
            desc: "Get access to an interactive knowledge base that guides you from installation to profit.",
            btn: "Browse Docs",
            tutorial: "Watch tutorial (15 min)"
        },
        buildVsBuy: {
            badge: "⚖️ Cost Analysis",
            title1: "Stop building",
            title2: "the same thing 100 times.",
            desc: "Buy NextForge and spend that time on marketing and features.",
            points: [
                "Save 40+ hours of repetitive work",
                "NextForge costs less than 1h of Senior work",
                "Ship your MVP this same weekend"
            ],
            self: "Building yourself",
            total: "Total",
            price: "Price"
        },
        testimonials: {
            title: "Trusted by Indie Hackers",
            items: [
                { name: "Mark", role: "SaaS Founder", text: "NextForge allowed me to ship in a weekend. I had my first sale on Monday!" },
                { name: "Julia", role: "Fullstack Developer", text: "Cleanest starter kit I've seen. Supabase config is like poetry." },
                { name: "Arthur", role: "Indie Maker", text: "Lemon Squeezy integration is a game changer for EU creators." }
            ]
        },
        footer: {
            tagline: "The ultimate SaaS Starter Kit. Stop building auth again and again.",
            status: "All systems operational",
            newsletter: { title: "Stay updated", desc: "Join fellow builders. SaaS tips & news — no spam.", placeholder: "Enter your email", btn: "Subscribe", ctaTitle: "Join the Elite", ctaDesc: "Sign up and get -50% launch discount. No spam, just real updates.", successMsg: "Welcome aboard! Check your email soon. 🚀", btnSubmit: "Sign me up", countText: "Builders already joined", errorMsg: "Something went wrong. Please try again or contact support." },
            product: { title: "Product" },
            company: { title: "Company", about: "About", contact: "Contact" },
            legal: { privacy: "Privacy", terms: "Terms" },
            rights: "All rights reserved.",
            by: "Built by an Indie Hacker"
        },
        pricing: {
            badge: "💰 Pricing",
            title1: "Invest once.",
            title2: "Build forever.",
            desc: "Lifetime access to code. One-time payment, no subscriptions.",
            standard: { title: "Standard", price: "$99", desc: "Ideal start for your hobby project." },
            pro: { title: "SaaS Founder", price: "$129", oldPrice: "$249", desc: "Everything you need to conquer the market.", badge: "Best Choice" },
            buyNow: "Start Now",
            buyNowPro: "Buy Now & Build",
            secure: "Secure Checkout via Lemon Squeezy",
            join: "Join 500+ Top Creators"
        },
        finalCta: {
            headline: "Ready to ship?",
            subline: "Join 500+ developers. One-time payment, lifetime access. 14-day money-back.",
            btn: "Launch your SaaS with NextForge",
            price: "$129",
            once: "One-time payment · No subscription",
            guaranteeLine: "Risk-free – full refund guarantee.",
            bullets: ["Full access", "Updates included", "14-day refund"],
        },
        stickyBar: {
            title: "Ready to launch your SaaS?",
            subtitle: "One-time payment, lifetime access. 14-day money-back.",
            cta: "Launch with NextForge",
            onlyLabel: "Only",
        },
        faq: {
            title: "Frequently Asked Questions",
            ctaText: "Can't find your answer?",
            ctaButton: "Contact us",
            ctaOr: "Or buy now and start building:",
            ctaBuyLabel: "See plans & pricing →",
            items: [
                { q: "Free updates?", a: "Yes! You get access to all future versions for free." },
                { q: "Lemon Squeezy or Stripe?", a: "We support both! Lemon Squeezy is ideal for EU-based creators." },
                { q: "Multiple projects?", a: "The PRO license allows for unlimited own commercial projects." },
                { q: "Is code secure?", a: "Yes, we apply best security practices for Auth and Database." },
                { q: "Is there support?", a: "Yes. Docs, FAQ, and email. With PRO you get updates and help resources." }
            ]
        },
        guarantee: "Secure payment · Lemon Squeezy",
        guaranteeCta: "Get it with guarantee",
        livechat: { greeting: "Hi there! 👋", intro: "Have questions about NextForge? I'm here to help!", placeholder: "Type a message...", firstMessage: "Hi! Arkadiusz here. How can I help you today?", openLabel: "Chat", mailSubject: "NextForge – question from website", mailBodyFallback: "(Message from chat form)" },
        login: { title: "Welcome back", subtitle: "Enter your credentials to get access", submit: "Sign In", connecting: "Connecting...", serverError: "Server error", invalidCredentials: "Invalid credentials" },
        testimonialsExtra: { statsCustomers: "Customers", statsRevenue: "Revenue Generated", statsLaunch: "Avg. Time to Launch", statsRating: "Average Rating", launchedIn: "Launched in", cta: "Join them today" },
        blog: { guidesTitle: "Top SaaS Growth Guides", guidesDesc: "Start with the highest-intent playbooks for pricing, launch, and boilerplate selection.", guide1: "SaaS Pricing Strategy 2026", guide2: "Product Hunt Launch Guide 2026", guide3: "Next.js SaaS Boilerplate Guide 2026" },
        funnel: { step1: "See the demo", step2: "Choose a plan", step3: "Deploy in a weekend", ariaLabel: "Purchase funnel" },
        saleNotification: { bought: "just bought NextForge!", location: "Location", justNow: "Just now" },
        exitIntent: { title: "Wait! Don't miss this. 🎁", desc: "Before you go – get our free checklist:", lead: "10 Steps to Ship Your SaaS in a Weekend", button: "Get free checklist", sending: "Sending...", success: "Sent!", successTitle: "Check your inbox!", successDesc: "The checklist is on its way.", noSpam: "No spam. Unsubscribe anytime." }
    },
    de: {
        banner: "🔥 Einführungsangebot: -40% nur in den ersten 48h!",
        nav: { demo: "Demo", products: "Produkte", features: "Funktionen", pricing: "Preise", docs: "Dokumentation", blog: "Blog", login: "Login" },
        hero: {
            badge: "🚀 v2.0 - Next.js 15 & Tailwind 4 Bereit",
            title1: "Starte dein SaaS in 48 Stunden,",
            title2: "ohne den Stack neu aufzubauen.",
            desc: "Auth, Zahlungen und Dashboard sind sofort einsatzbereit, damit Sie sich auf Features und erste Kunden konzentrieren können.",
            buyBtn: "Kaufen und SaaS starten",
            demoBtn: "2‑Minuten‑Demo ansehen",
            codeHeader: "Sekundenschnelle Bereitstellung",
            visitors: "Personen sehen sich das an",
            scrollToProducts: "Produkte ansehen",
            earningBadge: "In 48h verdienen 🚀",
            socialProofDevs: "500+ Entwickler",
            socialProofRating: "4.9/5 Bewertung",
            socialProofRevenue: "$2.1M+ generierter Umsatz",
            launchedIn: "Gestartet in"
        },
        trustBadges: {
            secure: "Sichere Zahlung",
            instant: "Sofortiger Zugriff",
            guarantee: "14 Tage Geld-zurück",
        },
        liveCounter: {
            viewing: "Personen sehen sich das an",
            sales: "Käufe heute",
            trending: "🔥 Im Trend",
        },
        countdown: {
            title: "⏰ Einführungspreis für Early Adopters:",
            days: "Tage",
            hours: "Stunden",
            mins: "Min",
            secs: "Sek",
            message:
                "Der Einführungspreis gilt nur für frühe Kunden, solange dieser Timer läuft.",
            urgency:
                "Angebot für Early Adopters – der Preis kann nach Ablauf steigen.",
        },
        stickyBar: {
            title: "Bereit, dein SaaS zu starten?",
            subtitle: "Einmal zahlen, lebenslanger Zugriff. 14 Tage Geld-zurück.",
            cta: "Mit NextForge starten",
            onlyLabel: "Nur",
        },
        products: {
            badge: "UNSER PORTFOLIO",
            wallet: {
                title: "Store Wallet",
                subtitle: "Wählen Sie das perfekte Paket",
                tabs: { all: "Alle", starter: "Starter", standard: "Vorlagen", pro: "PRO Systeme" }
            },
            title1: "Fertige Lösungen",
            title2: "für den sofortigen Start",
            desc: "Wählen Sie ein fertiges Produkt und beginnen Sie sofort mit dem Verkauf.",
            items: [
                {
                    title: "NextForge Starter",
                    price: "$0",
                    desc: "Ideal für Hobbyisten und zum Lernen. Enthält grundlegende UI-Komponenten und Konfiguration.",
                    features: ["Next.js 15 & Tailwind 4", "Supabase Auth", "Basic UI Kit", "MIT Lizenz"],
                    buyUrl: process.env.NEXT_PUBLIC_LS_CHECKOUT_FREE || "https://github.com/your-username/nextforge",
                    demoUrl: "/demo/dashboard",
                    badge: "Open Source",
                    btnLabel: "Von GitHub laden",
                    category: "starter",
                },
                {
                    title: "HSE PRO System",
                    price: "$49",
                    oldPrice: "$79",
                    desc: "Komplette Schulungsplattform mit PDF-Zertifikatsgenerator und E-Mail-Handling.",
                    features: ["PDF Generator (React-PDF)", "Resend & E-Mail", "Mehrsprachig (i18n)", "Angebotsrechner"],
                    buyUrl: process.env.NEXT_PUBLIC_LS_CHECKOUT_HSE || "https://your-store.lemonsqueezy.com/checkout/buy/hse-id",
                    demoUrl: "https://bhp-demo.vercel.app",
                    badge: "Bestseller",
                    btnLabel: "Vorlage kaufen",
                    category: "standard",
                },
                {
                    title: "NextForge PRO",
                    price: "$129",
                    desc: "Volles kommerzielles Paket. SaaS-in-a-Box mit Zahlungen, Blog und Dokumentation.",
                    features: ["Alles aus der Free-Version", "Lemon Squeezy Zahlungen", "Blog & Docs System", "User Dashboard", "Kommerzielle Lizenz"],
                    buyUrl: process.env.NEXT_PUBLIC_LS_CHECKOUT_PRO || "https://your-store.lemonsqueezy.com/checkout/buy/pro-license",
                    demoUrl: "/demo/dashboard",
                    badge: "Beliebt",
                    btnLabel: "Pro-Paket kaufen",
                    category: "pro",
                }
            ],
            demoBtn: "Demo ansehen",
        },
        tech: { badge: "⚙️ Tech Stack", title: "Nur moderne Tools", desc: "Wir haben Technologien ausgewählt, die der Standard 2024 sind." },
        demo: {
            badge: "💎 Live-Vorschau",
            title1: "Ihr Dashboard",
            title2: "ist schon da.",
            desc: "NextForge ist nicht nur ein Skelett. Es ist ein komplettes High-End-Dashboardsystem, bereit für Ihre Kunden.",
            welcome: "Willkommen",
            subtitle: "Das passiert heute in Ihrem Geschäft.",
            syncBtn: "Daten sync",
            projectBtn: "Neues Projekt",
            metrics: { revenue: "Gesamtumsatz", users: "Aktive Nutzer", churn: "Abwanderung" },
            revenueChart: "Umsatz im Zeitverlauf",
            topCustomers: "Top Kunden",
            systemStatus: "Systemstatus",
            statusText: "Alle Systeme laufen",
            statusSubtext: "Datensynchronisation aktiv",
            usage: "Nutzungsplan",
            usageText: "der genutzten Kredite",
            overview: "Übersicht",
            analytics: "Analytik",
            customers: "Kunden",
            settings: "Einstellungen",
            billing: "Abrechnung"
        },
        features: {
            badge: "🔥 Kernfunktionen",
            title1: "Gebaut für Ihre",
            title2: "Produktivität.",
            desc: "Jede Codezeile ist für eine schnelle Bereitstellung optimiert.",
            items: [
                { title: "Supabase & Prisma", desc: "Integrierte Datenbank mit vollem Prisma-Typing und RLS-Sicherheit." },
                { title: "Next-Auth v5", desc: "Neueste Authentifizierung: Google, GitHub, Magic Links und Passwörter." },
                { title: "Lemon Squeezy", desc: "Zahlungen, Abos und MwSt-Abwicklung - Sie heben nur das Geld ab." },
                { title: "Tailwind 4 & Shadcn", desc: "Komponenten basierend auf der neuesten Tailwind CSS Version." },
                { title: "TypeScript v5+", desc: "Zero Typesafety-Fehler. 100% typisiert für Ihren Komfort." },
                { title: "Turbo Deployment", desc: "Meta-Tags, Sitemaps und OG-Bilder generieren sich automatisch." }
            ]
        },
        docs: {
            badge: "DOKUMENTATION",
            title1: "Alles, was Sie",
            title2: "zum Start brauchen.",
            desc: "Erhalten Sie Zugang zu einer interaktiven Wissensdatenbank, die Sie von der Installation bis zum Gewinn führt.",
            btn: "Dokumentation durchsuchen",
            tutorial: "Tutorial ansehen (15 Min)"
        },
        buildVsBuy: {
            badge: "⚖️ Kostenanalyse",
            title1: "Hör auf,",
            title2: "dasselbe 100 Mal zu bauen.",
            desc: "Kaufen Sie NextForge und investieren Sie die Zeit in Marketing und Funktionen.",
            points: [
                "Sparen Sie 40+ Stunden repetitive Arbeit",
                "NextForge kostet weniger als 1 Std Senior-Arbeit",
                "Liefern Sie Ihr MVP noch dieses Wochenende"
            ],
            self: "Selbst bauen",
            total: "Gesamt",
            price: "Preis"
        },
        testimonials: {
            title: "Von Indie Hackern geschätzt",
            items: [
                { name: "Mark", role: "SaaS Gründer", text: "NextForge hat mir geholfen, mein Projekt am Wochenende zu launchen. Erster Verkauf am Montag!" },
                { name: "Julia", role: "Fullstack Entwicklerin", text: "Sauberstes Starter-Kit, das ich je gesehen habe. Supabase-Konfiguration ist wie Poesie." },
                { name: "Arthur", role: "Indie Maker", text: "Die Lemon Squeezy Integration ist ein Game Changer für EU-Creator." }
            ]
        },
        footer: {
            tagline: "Das ultimative SaaS-Starter-Kit. Hören Sie auf, Auth immer wieder neu zu bauen.",
            status: "Alle Systeme laufen",
            newsletter: { title: "Bleiben Sie informiert", desc: "Treten Sie 2.000+ Gründern bei.", placeholder: "E-Mail eingeben", btn: "Abonnieren" },
            product: { title: "Produkt" },
            company: { title: "Unternehmen", about: "Über mich", contact: "Kontakt" },
            legal: { privacy: "Datenschutz", terms: "AGB" },
            rights: "Alle Rechte vorbehalten.",
            by: "Gebaut von einem Indie Hacker"
        },
        pricing: {
            badge: "💰 Preise",
            title1: "Einmal investieren.",
            title2: "Ewig bauen.",
            desc: "Lebenslanger Zugriff auf den Code. Einmalzahlung, keine Abos.",
            standard: { title: "Standard", price: "$99", desc: "Idealer Start für Ihr Hobbyprojekt." },
            pro: { title: "SaaS Founder", price: "$129", oldPrice: "$249", desc: "Alles, was Sie brauchen, um den Markt zu erobern.", badge: "Beste Wahl" },
            buyNow: "Jetzt starten",
            buyNowPro: "Kaufen & Bauen",
            secure: "Sicherer Checkout über Lemon Squeezy",
            join: "Schließen Sie sich 500+ Top-Creatorn an"
        },
        finalCta: { headline: "Bereit durchzustarten?", subline: "Über 500 Entwickler dabei. Einmal zahlen, lebenslang nutzen. 14 Tage Geld-zurück.", btn: "NextForge holen", price: "$129", once: "Einmalzahlung · Kein Abo.", guaranteeLine: "Risikofrei – Geld-zurück-Garantie.", bullets: ["Voller Zugriff", "Updates inklusive", "14 Tage Rückgabe"] },
        guaranteeCta: "Mit Garantie kaufen",
        faq: {
            title: "Häufig gestellte Fragen",
            ctaText: "Keine Antwort gefunden?",
            ctaButton: "Kontakt",
            ctaOr: "Oder jetzt kaufen und loslegen:",
            ctaBuyLabel: "Pläne & Preise →",
            items: [
                { q: "Kostenlose Updates?", a: "Ja! Sie erhalten Zugriff auf alle zukünftigen Versionen kostenlos." },
                { q: "Lemon Squeezy oder Stripe?", a: "Wir unterstützen beides! Lemon Squeezy ist ideal für EU-Creator." },
                { q: "Mehrere Projekte?", a: "Die PRO-Lizenz erlaubt unbegrenzt viele eigene kommerzielle Projekte." },
                { q: "Ist der Code sicher?", a: "Ja, wir nutzen Sicherheitsstandards für Auth und Datenbank." },
                { q: "Gibt es Support?", a: "Ja. Dokumentation, FAQ und E-Mail. Mit PRO erhalten Sie Updates und Hilfsmaterialien." }
            ]
        },
        guarantee: "Sichere Zahlung · Lemon Squeezy",
        livechat: { greeting: "Hallo! 👋", intro: "Fragen zu NextForge? Ich helfe gern!", placeholder: "Nachricht...", firstMessage: "Hallo! Arkadiusz hier. Wie kann ich helfen?", openLabel: "Chat", mailSubject: "NextForge – Frage von der Website", mailBodyFallback: "(Nachricht aus dem Chat-Formular)" },
        login: { title: "Willkommen zurück", subtitle: "Geben Sie Ihre Daten ein", submit: "Anmelden", connecting: "Verbinden...", serverError: "Serverfehler", invalidCredentials: "Ungültige Anmeldedaten" },
        testimonialsExtra: { statsCustomers: "Kunden", statsRevenue: "Umsatz generiert", statsLaunch: "Durchschn. Startzeit", statsRating: "Durchschnittsbewertung", launchedIn: "Gestartet in", cta: "Jetzt dazugehören" },
        blog: { guidesTitle: "Top SaaS-Wachstumsguides", guidesDesc: "Starten Sie mit den wichtigsten Playbooks für Preise, Launch und Boilerplate.", guide1: "SaaS Preisstrategie 2026", guide2: "Product Hunt Leitfaden 2026", guide3: "Next.js SaaS Boilerplate Guide 2026" },
        funnel: { step1: "Demo ansehen", step2: "Plan wählen", step3: "Am Wochenende deployen", ariaLabel: "Kauftrichter" },
        saleNotification: { bought: "hat NextForge gekauft!", location: "Standort", justNow: "Gerade eben" },
        exitIntent: { title: "Warte! Verpass das nicht. 🎁", desc: "Bevor du gehst – hol dir die Checkliste:", lead: "10 Schritte zum SaaS-Start am Wochenende", button: "Checkliste holen", sending: "Wird gesendet...", success: "Gesendet!", successTitle: "Prüfe dein Postfach!", successDesc: "Die Checkliste ist unterwegs.", noSpam: "Kein Spam. Jederzeit abmelden." }
    },
    es: {
        banner: "🔥 Oferta de Lanzamiento: -40% solo durante las primeras 48h!",
        nav: { demo: "Demo", products: "Productos", features: "Funciones", pricing: "Precios", docs: "Documentos", blog: "Blog", login: "Login" },
        hero: {
            badge: "🚀 v2.0 - Next.js 15 y Tailwind 4 Listo",
            title1: "Lanza tu SaaS en 48 horas,",
            title2: "sin rehacer el stack desde cero.",
            desc: "Auth, pagos y dashboard listos desde el día 1 para que te enfoques en funcionalidades y primeras ventas.",
            buyBtn: "Comprar y lanzar tu SaaS",
            demoBtn: "Ver demo de 2 min",
            codeHeader: "Despliegue en segundos",
            visitors: "personas viendo ahora",
            scrollToProducts: "Ver productos",
            earningBadge: "Gana en 48h 🚀",
            socialProofDevs: "500+ desarrolladores",
            socialProofRating: "Valoración 4.9/5",
            socialProofRevenue: "$2.1M+ ingresos generados",
            launchedIn: "Lanzado en"
        },
        trustBadges: {
            secure: "Pago seguro",
            instant: "Acceso instantáneo",
            guarantee: "14 días de reembolso",
        },
        liveCounter: {
            viewing: "personas viendo ahora",
            sales: "compras hoy",
            trending: "🔥 En tendencia",
        },
        countdown: {
            title: "⏰ Precio de lanzamiento para early adopters:",
            days: "Días",
            hours: "Horas",
            mins: "Min",
            secs: "Seg",
            message:
                "Precio especial de lanzamiento reservado para los primeros clientes mientras este contador esté activo.",
            urgency:
                "Oferta para early adopters: es posible que subamos el precio después.",
        },
        products: {
            badge: "NUESTRO PORTAFOLIO",
            wallet: {
                title: "Cartera de Productos",
                subtitle: "Elige tu plan perfecto",
                tabs: { all: "Todos", starter: "Inicial", standard: "Plantillas", pro: "Sistemas PRO" }
            },
            title1: "Soluciones listas",
            title2: "para lanzamiento inmediato",
            desc: "Elige un producto listo y comienza a vender a tus clientes de inmediato.",
            items: [
                {
                    title: "NextForge Starter",
                    price: "$0",
                    desc: "Perfecto para aficionados y aprendizaje. Incluye componentes UI básicos y configuración.",
                    features: ["Next.js 15 & Tailwind 4", "Supabase Auth", "Kit UI Básico", "Licencia MIT"],
                    buyUrl: process.env.NEXT_PUBLIC_LS_CHECKOUT_FREE || "https://github.com/your-username/nextforge",
                    demoUrl: "/demo/dashboard",
                    badge: "Open Source",
                    btnLabel: "Obtener en GitHub",
                    category: "starter",
                },
                {
                    title: "HSE PRO System",
                    price: "$49",
                    oldPrice: "$79",
                    desc: "Plataforma de formación completa con generador de certificados PDF y manejo de email.",
                    features: ["Generador PDF (React-PDF)", "Integración Resend & Email", "Multilingüe (i18n)", "Calculadora Presupuestos"],
                    buyUrl: process.env.NEXT_PUBLIC_LS_CHECKOUT_HSE || "https://your-store.lemonsqueezy.com/checkout/buy/hse-id",
                    demoUrl: "https://bhp-demo.vercel.app",
                    badge: "Bestseller",
                    btnLabel: "Comprar Plantilla",
                    category: "standard",
                },
                {
                    title: "NextForge PRO",
                    price: "$129",
                    desc: "Paquete comercial completo. SaaS en una caja con pagos, blog y documentación.",
                    features: ["Todo lo de la versión Gratis", "Pagos Lemon Squeezy", "Sistema Blog & Docs", "Panel de Usuario", "Licencia Comercial"],
                    buyUrl: process.env.NEXT_PUBLIC_LS_CHECKOUT_PRO || "https://your-store.lemonsqueezy.com/checkout/buy/pro-license",
                    demoUrl: "/demo/dashboard",
                    badge: "Popular",
                    btnLabel: "Paquete Completo",
                    category: "pro",
                }
            ],
            demoBtn: "Ver Demo",
        },
        tech: { badge: "⚙️ Tech Stack", title: "Solo herramientas modernas", desc: "Elegimos tecnologías que son el estándar en 2024." },
        demo: {
            badge: "💎 Vista Previa",
            title1: "Tu Dashboard",
            title2: "ya está aquí.",
            desc: "NextForge no es solo un esqueleto. Es un sistema de dashboard completo de alta gama listo para tus clientes.",
            welcome: "Bienvenido",
            subtitle: "Aquí está lo que sucede hoy en tu negocio.",
            syncBtn: "Sincronizar",
            projectBtn: "Nuevo Proyecto",
            metrics: { revenue: "Ingresos Totales", users: "Usuarios Activos", churn: "Tasa de Abandono" },
            revenueChart: "Ingresos en el tiempo",
            topCustomers: "Mejores Clientes",
            systemStatus: "Estado del Sistema",
            statusText: "Todos los sistemas operativos",
            statusSubtext: "Sincronización activa",
            usage: "Plan de Uso",
            usageText: "de créditos usados",
            overview: "Vistazo",
            analytics: "Analítica",
            customers: "Clientes",
            settings: "Ajustes",
            billing: "Facturación"
        },
        features: {
            badge: "🔥 Características",
            title1: "Construido para tu",
            title2: "productividad.",
            desc: "Cada línea de código está optimizada para un despliegue rápido.",
            items: [
                { title: "Supabase y Prisma", desc: "Base de datos integrada con tipado completo de Prisma y seguridad RLS." },
                { title: "Next-Auth v5", desc: "Autenticación de última generación: Google, GitHub, Magic Links y contraseñas." },
                { title: "Lemon Squeezy", desc: "Gestión de pagos, suscripciones e impuestos VAT OSS - tú solo retiras los fondos." },
                { title: "Tailwind 4 y Shadcn", desc: "Componentes construidos sobre la última versión de Tailwind CSS." },
                { title: "TypeScript v5+", desc: "Cero errores de typesafety. 100% tipado para tu comodidad." },
                { title: "Turbo Deployment", desc: "Etiquetas meta, sitemaps e imágenes OG se generan automáticamente." }
            ]
        },
        docs: {
            badge: "DOCUMENTACIÓN",
            title1: "Todo lo que necesitas",
            title2: "para empezar.",
            desc: "Accede a una base de conocimientos interactiva que te guía desde la instalación hasta las ganancias.",
            btn: "Explorar Documentos",
            tutorial: "Ver tutorial (15 min)"
        },
        buildVsBuy: {
            badge: "⚖️ Análisis de Costos",
            title1: "Deja de construir",
            title2: "lo mismo 100 veces.",
            desc: "Compra NextForge y dedica ese tiempo al marketing y a las funciones.",
            points: [
                "Ahorra 40+ horas de trabajo repetitivo",
                "NextForge cuesta menos que 1h de trabajo de un Senior",
                "Lanza tu MVP este mismo fin de semana"
            ],
            self: "Construirlo tú mismo",
            total: "Total",
            price: "Precio"
        },
        testimonials: {
            title: "Confiado por Indie Hackers",
            items: [
                { name: "Mark", role: "Fundador de SaaS", text: "NextForge me permitió lanzar en un fin de semana. ¡Tuve mi primera venta el lunes!" },
                { name: "Julia", role: "Desarrolladora Fullstack", text: "El kit de inicio más limpio que he visto. La configuración de Supabase es perfecta." },
                { name: "Arthur", role: "Indie Maker", text: "La integración con Lemon Squeezy es clave para los creadores de la UE." }
            ]
        },
        footer: {
            tagline: "El kit de inicio SaaS definitivo. Deja de construir auth de nuevo.",
            status: "Sistemas operativos",
            newsletter: { title: "Mantente al día", desc: "Únete a 2,000+ fundadores. Consejos SaaS.", placeholder: "Tu email", btn: "Suscribirse" },
            product: { title: "Producto" },
            company: { title: "Compañía", about: "Sobre mí", contact: "Contacto" },
            legal: { privacy: "Privacidad", terms: "Términos" },
            rights: "Todos los derechos reservados.",
            by: "Construido por un Indie Hacker"
        },
        pricing: {
            badge: "💰 Precios",
            title1: "Invierte una vez.",
            title2: "Construye siempre.",
            desc: "Acceso de por vida al código. Pago único, sin suscripciones.",
            standard: { title: "Standard", price: "$99", desc: "Inicio ideal para tu proyecto personal." },
            pro: { title: "SaaS Founder", price: "$129", oldPrice: "$249", desc: "Todo lo que necesitas para conquistar el mercado.", badge: "Mejor Opción" },
            buyNow: "Empezar Ahora",
            buyNowPro: "Comprar y Construir",
            secure: "Pago seguro vía Lemon Squeezy",
            join: "Únete a 500+ Top Creadores"
        },
        finalCta: { headline: "¿Listo para lanzar?", subline: "Únete a 500+ desarrolladores. Pago único, acceso de por vida. 14 días de devolución.", btn: "Obtener NextForge", price: "$129", once: "Pago único · Sin suscripción.", guaranteeLine: "Sin riesgo – garantía de reembolso.", bullets: ["Acceso completo", "Actualizaciones incluidas", "14 días de reembolso"] },
        guaranteeCta: "Comprar con garantía",
        stickyBar: {
            title: "¿Listo para lanzar tu SaaS?",
            subtitle: "Pago único, acceso de por vida. 14 días de reembolso.",
            cta: "Lanzar con NextForge",
            onlyLabel: "Solo",
        },
        faq: {
            title: "Preguntas Frecuentes",
            ctaText: "¿No encuentras respuesta?",
            ctaButton: "Contáctanos",
            ctaOr: "O compra ahora y empieza a construir:",
            ctaBuyLabel: "Ver planes y precios →",
            items: [
                { q: "¿Actualizaciones gratis?", a: "¡Sí! Obtienes acceso a todas las versiones futuras de forma gratuita." },
                { q: "¿Lemon Squeezy o Stripe?", a: "¡Soportamos ambos! Lemon Squeezy es ideal para creadores de la UE." },
                { q: "¿Varios proyectos?", a: "La licencia PRO permite proyectos comerciales propios ilimitados." },
                { q: "¿Es seguro el código?", a: "Sí, aplicamos las mejores prácticas de seguridad para Auth y DB." },
                { q: "¿Hay soporte?", a: "Sí. Documentación, FAQ y email. Con PRO tienes actualizaciones y recursos de ayuda." }
            ]
        },
        guarantee: "Pago seguro · Lemon Squeezy",
        livechat: { greeting: "¡Hola! 👋", intro: "¿Preguntas sobre NextForge? ¡Aquí estoy!", placeholder: "Escribe un mensaje...", firstMessage: "¡Hola! Arkadiusz. ¿En qué puedo ayudarte?", openLabel: "Chat", mailSubject: "NextForge – pregunta desde el sitio web", mailBodyFallback: "(Mensaje del formulario de chat)" },
        login: { title: "Bienvenido de nuevo", subtitle: "Ingresa tus credenciales para acceder", submit: "Iniciar sesión", connecting: "Conectando...", serverError: "Error del servidor", invalidCredentials: "Credenciales inválidas" },
        testimonialsExtra: { statsCustomers: "Clientes", statsRevenue: "Ingresos generados", statsLaunch: "Tiempo medio de lanzamiento", statsRating: "Valoración media", launchedIn: "Lanzado en", cta: "Únete hoy" },
        blog: { guidesTitle: "Mejores guías de crecimiento SaaS", guidesDesc: "Comienza con los playbooks de precios, lanzamiento y plantillas.", guide1: "Estrategia de precios SaaS 2026", guide2: "Guía de Product Hunt 2026", guide3: "Guía Next.js SaaS Boilerplate 2026" },
        funnel: { step1: "Ver demo", step2: "Elegir plan", step3: "Lanzar en un fin de semana", ariaLabel: "Embudo de compra" },
        saleNotification: { bought: "acaba de comprar NextForge!", location: "Ubicación", justNow: "Ahora mismo" },
        exitIntent: { title: "¡Espera! No te pierdas esto. 🎁", desc: "Antes de irte – descarga la checklist:", lead: "10 Pasos para lanzar tu SaaS en un finde", button: "Descargar checklist", sending: "Enviando...", success: "¡Enviado!", successTitle: "¡Revisa tu correo!", successDesc: "La checklist está en camino.", noSpam: "Sin spam. Cancela cuando quieras." }
    }
};
