"use client";

import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Play, Terminal, CheckCircle2, Shield, Star, TrendingUp } from "lucide-react";
import { openLSCheckout, LEMON_SQUEEZY_CONFIG, SOCIAL_PROOF_STATS } from "@/lib/ls-utils";
import { siteConfig } from "@/lib/seo";
import { useEffect } from "react";
import { trackFunnelEvent } from "@/lib/analytics";

type HeroVariant = "a" | "b" | "c";
type HeroVariantCopy = { title1: string; title2: string; desc: string; buyBtn: string; demoBtn: string };
type HeroCopy = {
    hero: {
        preheadline?: string;
        badge?: string;
        benefits?: string[];
        earningBadge?: string;
        socialProofDevs?: string;
        socialProofRating?: string;
        socialProofRevenue?: string;
        trustLine?: string;
        scrollToProducts?: string;
        scrollAriaLabel?: string;
        scrollHint?: string;
    };
    finalCta?: { price?: string; once?: string };
    trustBadges?: { secure?: string; guarantee?: string };
};

const heroVariantsByLang: Record<string, Record<HeroVariant, HeroVariantCopy>> = {
    en: {
        a: {
            title1: "Ship your SaaS in 48 hours,",
            title2: "without rebuilding the stack.",
            desc: "Get auth, payments and dashboard wired from day one. Focus on features and revenue, not plumbing.",
            buyBtn: "Get HSE Conversion Bundle",
            demoBtn: "Watch 2-min demo",
        },
        b: {
            title1: "Stop losing weeks",
            title2: "on auth and billing.",
            desc: "Use a conversion-ready baseline and spend your energy on product value and customer acquisition.",
            buyBtn: "Launch with ready foundation",
            demoBtn: "Show me product flow",
        },
        c: {
            title1: "From idea to checkout",
            title2: "in one focused weekend.",
            desc: "Landing, checkout, webhook and dashboard are already connected, so you can ship faster with less risk.",
            buyBtn: "Start selling faster",
            demoBtn: "See end-to-end demo",
        },
    },
    pl: {
        a: {
            title1: "Uruchom SaaS w 48h,",
            title2: "bez składania stacku od zera.",
            desc: "Dostajesz gotowy system z auth, płatnościami i dashboardem. Skupiasz się na funkcjach i sprzedaży.",
            buyBtn: "Kup i uruchom swój SaaS",
            demoBtn: "Zobacz demo (2 min)",
        },
        b: {
            title1: "Przestań tracić tygodnie",
            title2: "na auth i billing.",
            desc: "Gotowy fundament produktu pozwala skupić się na wartości biznesowej od pierwszego dnia.",
            buyBtn: "Start z gotowym fundamentem",
            demoBtn: "Pokaż mi flow produktu",
        },
        c: {
            title1: "Od pomysłu do płatności",
            title2: "w jeden weekend.",
            desc: "Landing, checkout, webhook i dashboard działają razem — Ty dowozisz funkcje, nie infrastrukturę.",
            buyBtn: "Włącz sprzedaż szybciej",
            demoBtn: "Sprawdź demo end-to-end",
        },
    },
    de: {
        a: {
            title1: "Starte dein SaaS in 48 Stunden,",
            title2: "ohne den Stack neu aufzubauen.",
            desc: "Authentifizierung, Zahlungen und Dashboard sind von Tag 1 verbunden. Fokus auf Features und Umsatz.",
            buyBtn: "HSE Conversion Bundle kaufen",
            demoBtn: "2-Minuten-Demo ansehen",
        },
        b: {
            title1: "Verliere keine Wochen",
            title2: "für Auth und Billing.",
            desc: "Nutze ein conversion-ready Fundament und arbeite direkt an Produktwert und Kundengewinnung.",
            buyBtn: "Mit fertigem Fundament starten",
            demoBtn: "Produkt-Flow zeigen",
        },
        c: {
            title1: "Von der Idee zum Checkout",
            title2: "in einem fokussierten Wochenende.",
            desc: "Landing, Checkout, Webhook und Dashboard sind schon verbunden, damit du schneller verkaufen kannst.",
            buyBtn: "Schneller verkaufen",
            demoBtn: "End-to-End Demo ansehen",
        },
    },
    es: {
        a: {
            title1: "Lanza tu SaaS en 48 horas,",
            title2: "sin reconstruir todo el stack.",
            desc: "Autenticación, pagos y dashboard listos desde el día 1. Enfócate en funciones y ventas.",
            buyBtn: "Comprar HSE Conversion Bundle",
            demoBtn: "Ver demo de 2 minutos",
        },
        b: {
            title1: "Deja de perder semanas",
            title2: "en auth y billing.",
            desc: "Usa una base lista para conversión y dedica el tiempo al valor del producto y adquisición.",
            buyBtn: "Empezar con base lista",
            demoBtn: "Mostrar flujo de producto",
        },
        c: {
            title1: "De idea a checkout",
            title2: "en un fin de semana enfocado.",
            desc: "Landing, checkout, webhook y dashboard ya conectados para vender más rápido y con menos riesgo.",
            buyBtn: "Vender más rápido",
            demoBtn: "Ver demo end-to-end",
        },
    },
};

export const Hero = ({ t, abVariant = "a", lang = "en" }: { t: HeroCopy; abVariant?: HeroVariant; lang?: string }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const variantSet = heroVariantsByLang[lang] ?? heroVariantsByLang.en;
    const variantCopy = variantSet[abVariant] ?? variantSet.a;

    useEffect(() => {
        trackFunnelEvent("view_hero", { variant: abVariant });
    }, [abVariant]);

    const spotlightBackground = useMotionTemplate`
        radial-gradient(
            650px circle at ${mouseX}px ${mouseY}px,
            rgba(79, 70, 229, 0.18),
            transparent 70%
        )
    `;

    const handleMouseMove = ({ currentTarget, clientX, clientY }: React.MouseEvent) => {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    return (
        <section
            onMouseMove={handleMouseMove}
            className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-[90vh] flex flex-col justify-center"
        >
            {/* Spotlight Effect - subtle by default, stronger on move */}
            <motion.div
                className="pointer-events-none absolute -inset-px z-10 transition-opacity duration-500"
                style={{
                    background: spotlightBackground,
                    opacity: 0.25,
                }}
            />

            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none select-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow delay-1000" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            </div>

            <div className="container relative mx-auto px-4 text-center max-w-7xl z-20">
                {t.hero?.preheadline && (
                    <p className="text-[10px] font-black text-indigo-400/80 uppercase tracking-[0.3em] mb-4">
                        {t.hero.preheadline}
                    </p>
                )}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8 flex justify-center gap-4 flex-wrap"
                >
                    <Badge className="backdrop-blur-md bg-white/5 border-white/10 hover:bg-white/10 transition-colors cursor-default">
                        <span className="mr-2">✨</span> {t.hero.badge}
                    </Badge>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white mb-8 leading-[0.9] text-gradient font-bubbly relative"
                >
                    {variantCopy.title1}
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 animate-gradient-x relative inline-block">
                        {variantCopy.title2}
                        <motion.div
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ delay: 1, duration: 1 }}
                            className="absolute bottom-2 left-0 h-4 bg-indigo-500/20 -rotate-1 rounded-full blur-sm -z-10"
                        />
                    </span>

                    {/* Hand-drawn element */}
                    <div className="absolute -top-12 right-0 md:right-20 lg:right-40 hidden md:block rotate-12">
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.2, type: "spring" }}
                            className="bg-[#2a2a2e] text-indigo-300 font-mono text-xs px-3 py-1.5 rounded-lg border border-indigo-500/30 shadow-xl rotate-3"
                        >
                            {t.hero.earningBadge || "Start earning in 48h 🚀"}
                        </motion.div>
                        <svg className="absolute top-8 left-0 w-8 h-8 text-indigo-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
                        </svg>
                    </div>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-lg md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed font-medium"
                >
                    {variantCopy.desc}
                </motion.p>

                {/* Benefit bullets */}
                {((t.hero.benefits && t.hero.benefits.length > 0) || true) && (
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12"
                    >
                        {(t.hero.benefits || ["Auth + sesja gotowe", "Płatności i webhook od dnia 1", "Panel użytkownika + flow sprzedaży"]).map((b: string, i: number) => (
                            <span key={i} className="inline-flex items-center gap-2 text-sm font-bold text-gray-400">
                                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                                {b}
                            </span>
                        ))}
                    </motion.div>
                )}

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-2"
                >
                    <Button
                        onClick={() => {
                            trackFunnelEvent("click_hero_cta", { variant: abVariant });
                            openLSCheckout(LEMON_SQUEEZY_CONFIG.checkoutUrls.pro, { source: `hero-${abVariant}` });
                        }}
                        glow
                        className="text-base px-10 py-5 h-auto shadow-[0_20px_50px_rgba(79,70,229,0.3)] hover:shadow-[0_20px_60px_rgba(79,70,229,0.5)] scale-100 hover:scale-105 transition-all"
                    >
                        {variantCopy.buyBtn}
                        <span className="ml-2 font-black text-white/70">{t.finalCta?.price ?? "$129"}</span>
                    </Button>
                    <Button
                        href="/demo/dashboard"
                        variant="secondary"
                        onClick={() => trackFunnelEvent("click_hero_demo", { variant: abVariant })}
                        className="text-base px-10 py-5 h-auto border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-md group"
                    >
                        <Play className="w-4 h-4 mr-2 fill-current" /> {variantCopy.demoBtn}
                    </Button>
                </motion.div>

                {t?.trustBadges?.guarantee && (
                    <p className="text-xs text-gray-500 mb-6">
                        {t.trustBadges.guarantee} · {t?.finalCta?.once || t?.hero?.trustLine}
                    </p>
                )}

                {/* Trust Signals */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-wrap items-center justify-center gap-6 mb-16 text-xs text-gray-500"
                >
                    {/* Social Proof */}
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.02] border border-white/5">
                        <div className="flex -space-x-2">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-2 border-black flex items-center justify-center text-[8px] font-black text-white">JD</div>
                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 border-2 border-black flex items-center justify-center text-[8px] font-black text-white">SK</div>
                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 border-2 border-black flex items-center justify-center text-[8px] font-black text-white">ML</div>
                        </div>
                        <span className="font-bold text-gray-400">{t.hero.socialProofDevs || `${SOCIAL_PROOF_STATS.customers} developers`}</span>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.02] border border-white/5">
                        <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                            ))}
                        </div>
                        <span className="font-bold text-gray-400">{t.hero.socialProofRating || `${SOCIAL_PROOF_STATS.rating} rating`}</span>
                    </div>

                    {/* Revenue Generated */}
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.02] border border-white/5">
                        <TrendingUp className="w-3.5 h-3.5 text-green-500" />
                        <span className="font-bold text-gray-400">{t.hero.socialProofRevenue || `${SOCIAL_PROOF_STATS.revenueGenerated} revenue generated`}</span>
                    </div>

                    {/* Security */}
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.02] border border-white/5">
                        <Shield className="w-3.5 h-3.5 text-indigo-500" />
                        <span className="font-bold text-gray-400">
                            {t?.hero?.trustLine ||
                                (t?.trustBadges
                                    ? `${t.trustBadges.secure} · ${t.trustBadges.guarantee}`
                                    : "Secure payments · 14-day refund")}
                        </span>
                    </div>
                </motion.div>

                {/* Code Terminal Visual */}
                <motion.div
                    initial={{ opacity: 0, y: 40, rotateX: 20 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ duration: 1, delay: 0.8, type: "spring", stiffness: 50 }}
                    className="relative mx-auto max-w-5xl rounded-[2rem] bg-[#0c0c0e]/80 border border-white/10 shadow-[0_0_100px_rgba(79,70,229,0.15)] backdrop-blur-xl overflow-hidden group perspective-1000"
                >
                    {/* Header */}
                    <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/5">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                        </div>
                        <div className="flex items-center gap-2 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                            <Terminal className="w-3 h-3" />
                            NextForge-Starter ~ bash
                        </div>
                        <div className="w-16" /> {/* Spacer for centering */}
                    </div>

                    {/* Code Body */}
                    <div className="p-8 md:p-12 text-left overflow-x-auto text-sm md:text-base font-mono leading-relaxed relative">
                        {/* Glow behind code */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-indigo-500/10 blur-3xl rounded-full pointer-events-none" />

                        <div className="relative z-10 text-gray-400 space-y-2">
                            <div className="flex items-center gap-2">
                                <span className="text-green-400">➜</span>
                                <span className="text-cyan-400">~</span>
                                <span className="text-gray-200">{`git clone ${siteConfig.links.github.replace("https://github.com/", "git@github.com:")}.git`}</span>
                            </div>
                            <div className="text-gray-500 pb-4">Cloning into &apos;nextforge-starter&apos;...</div>

                            <div className="flex items-center gap-2">
                                <span className="text-green-400">➜</span>
                                <span className="text-cyan-400">nextforge-starter</span>
                                <span className="text-gray-200">npm install</span>
                            </div>
                            <div className="text-gray-500 pb-4">
                                added 842 packages in 12s
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="text-green-400">➜</span>
                                <span className="text-cyan-400">nextforge-starter</span>
                                <span className="text-gray-200">npm run dev</span>
                            </div>
                            <div className="text-gray-500">
                                <span className="text-green-400">ready</span> started server on 0.0.0.0:3000, url: http://localhost:3000
                            </div>
                            <div className="flex items-center gap-2 mt-4 animate-pulse">
                                <span className="text-green-400">➜</span>
                                <span className="text-cyan-400">nextforge-starter</span>
                                <span className="w-2.5 h-4 bg-gray-500 block" />
                            </div>
                        </div>
                    </div>

                    {/* Overlay Gradient on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                </motion.div>

                {/* Fade to next section */}
                <div className="absolute -bottom-20 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />

                {/* Scroll indicator */}
                <motion.a
                    href="#demo"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-white transition-colors z-20"
                    aria-label={t?.hero?.scrollAriaLabel || "Scroll down"}
                >
                    <span className="text-[10px] font-bold uppercase tracking-widest">{t.hero.scrollHint || "Zobacz demo"}</span>
                    <motion.span
                        animate={{ y: [0, 6, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </motion.span>
                </motion.a>
            </div>
        </section>
    );
};
