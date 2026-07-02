"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Shield, ArrowRight, CheckCircle2, Zap } from "lucide-react";
import { openLSCheckout, LEMON_SQUEEZY_CONFIG } from "@/lib/ls-utils";

const defaults = {
    headline: "Ready to ship?",
    subline: "Join 500+ developers. One-time payment, lifetime access. 14-day money-back.",
    btn: "Get NextForge",
    guaranteeLine: "Risk-free – full refund guarantee.",
    price: "$129",
    once: "One-time payment · No subscription",
};

export const FinalCTA = ({ t }: { t: any }) => {
    const cta = t?.finalCta ?? defaults;
    const price = cta.price ?? "$129";

    return (
        <section id="final-cta" className="py-24 md:py-32 bg-black relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-600/5 via-transparent to-purple-600/5 pointer-events-none" />
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl mx-auto"
                >
                    <div className="relative rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-12 text-center overflow-hidden">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-indigo-600/20 rounded-full blur-[80px] pointer-events-none" />
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
                                {cta.headline}
                            </h2>
                            <p className="text-base md:text-lg text-gray-400 mb-6 leading-relaxed">
                                {cta.subline}
                            </p>
                            <p className="text-xs font-bold text-indigo-400/90 uppercase tracking-widest mb-8">
                                {cta.once ?? "One-time payment · No subscription"}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                                <Button
                                    onClick={() => openLSCheckout(LEMON_SQUEEZY_CONFIG.checkoutUrls.pro, { source: "final-cta" })}
                                    glow
                                    className="text-base px-8 py-5 h-auto flex items-center gap-2 shadow-[0_20px_50px_rgba(79,70,229,0.35)] hover:shadow-[0_24px_60px_rgba(79,70,229,0.45)] scale-100 hover:scale-105 transition-all w-full sm:w-auto justify-center"
                                >
                                    <Zap className="w-5 h-5" />
                                    {cta.btn}
                                    <span className="font-black text-white/90">{price}</span>
                                    <ArrowRight className="w-5 h-5" />
                                </Button>
                            </div>

                            <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-xl bg-green-500/10 border border-green-500/20 px-4 py-3">
                                <Shield className="w-4 h-4 text-green-500 shrink-0" />
                                <span className="text-sm font-bold text-green-400/90">{cta.guaranteeLine}</span>
                            </div>

                            {Array.isArray(cta.bullets) && cta.bullets.length >= 3 && (
                                <div className="flex flex-wrap items-center justify-center gap-6 mt-6 text-xs text-gray-500">
                                    {cta.bullets.map((label: string, i: number) => (
                                        <span key={i} className="inline-flex items-center gap-1.5">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                                            {label}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
