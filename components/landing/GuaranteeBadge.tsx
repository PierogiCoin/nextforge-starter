"use client";

import { motion } from "framer-motion";
import { Shield, RefreshCw, CheckCircle2, ShoppingCart } from "lucide-react";
import { openLSCheckout, LEMON_SQUEEZY_CONFIG } from "@/lib/ls-utils";

export const GuaranteeBadge = ({ t }: { t: any }) => {
    const trustBadges = t?.trustBadges;

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="py-20 bg-gradient-to-b from-black to-[#050507]"
        >
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Main Guarantee Card */}
                    <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-green-600/10 to-emerald-600/10 border-2 border-green-500/30 overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />
                        
                        <div className="relative z-10">
                            {/* Icon */}
                            <div className="flex justify-center mb-6">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-green-500 blur-2xl opacity-50" />
                                    <div className="relative w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center transform rotate-3">
                                        <Shield className="w-10 h-10 text-white" />
                                    </div>
                                </div>
                            </div>

                            {/* Title */}
                            <h2 className="text-3xl md:text-5xl font-black text-white text-center mb-4 tracking-tight">
                                {t?.guarantee?.title || "14-Day Money-Back Guarantee"}
                            </h2>

                            {/* Description */}
                            <p className="text-center text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                                {t?.guarantee?.desc || "Try NextForge risk-free. If you're not satisfied within 14 days, we'll refund you. No questions asked."}
                            </p>

                            {/* Features Grid */}
                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-black/20 border border-green-500/10">
                                    <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                                        <RefreshCw className="w-6 h-6 text-green-400" />
                                    </div>
                                    <h3 className="font-black text-white mb-2 text-sm uppercase tracking-wider">
                                        Easy Refunds
                                    </h3>
                                    <p className="text-xs text-gray-400">
                                        One-click refund process. No hassle, no forms.
                                    </p>
                                </div>

                                <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-black/20 border border-green-500/10">
                                    <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                                        <CheckCircle2 className="w-6 h-6 text-green-400" />
                                    </div>
                                    <h3 className="font-black text-white mb-2 text-sm uppercase tracking-wider">
                                        14 Full Days
                                    </h3>
                                    <p className="text-xs text-gray-400">
                                        Plenty of time to build and test your project.
                                    </p>
                                </div>

                                <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-black/20 border border-green-500/10">
                                    <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                                        <Shield className="w-6 h-6 text-green-400" />
                                    </div>
                                    <h3 className="font-black text-white mb-2 text-sm uppercase tracking-wider">
                                        Zero Risk
                                    </h3>
                                    <p className="text-xs text-gray-400">
                                        If it doesn't work for you, get your money back.
                                    </p>
                                </div>
                            </div>

                            {/* Testimonial Quote */}
                            {(t?.guarantee?.testimonial?.content || t?.guarantee?.testimonial) && (
                            <div className="relative p-6 rounded-2xl bg-white/[0.02] border border-green-500/10">
                                <div className="absolute top-4 left-4 text-6xl text-green-500/20 font-serif">"</div>
                                <p className="text-gray-300 italic text-center relative z-10">
                                    {t.guarantee.testimonial?.content ?? t.guarantee.testimonial}
                                </p>
                                {t.guarantee.testimonial?.author && (
                                <div className="text-center mt-4">
                                    <div className="text-sm font-bold text-white">{t.guarantee.testimonial.author}</div>
                                    {t.guarantee.testimonial.role && (
                                        <div className="text-xs text-gray-500">{t.guarantee.testimonial.role}</div>
                                    )}
                                </div>
                                )}
                            </div>
                            )}

                            {/* CTA */}
                            <div className="flex justify-center mt-8">
                                <button
                                    type="button"
                                    onClick={() => openLSCheckout(LEMON_SQUEEZY_CONFIG.checkoutUrls.pro)}
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-500 text-white rounded-xl font-black text-sm transition-all hover:scale-105 shadow-lg shadow-green-600/20"
                                >
                                    <ShoppingCart className="w-5 h-5" />
                                    {t?.guaranteeCta ?? "Get it with guarantee"}
                                </button>
                            </div>

                            {/* Fine Print */}
                            <p className="text-center text-xs text-gray-500 mt-6">
                                * Refund processed within 24-48 hours. Valid for purchases under $500.
                            </p>
                        </div>
                    </div>

                    {/* Trust Badges Below */}
                    <div className="flex flex-wrap justify-center items-center gap-6 mt-8 text-xs text-gray-500">
                        {trustBadges ? (
                            <>
                                <div className="flex items-center gap-2">
                                    <Shield className="w-4 h-4 text-green-500" />
                                    <span>{trustBadges.secure}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                                    <span>{trustBadges.instant}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Shield className="w-4 h-4 text-green-500" />
                                    <span>{trustBadges.guarantee}</span>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="flex items-center gap-2">
                                    <Shield className="w-4 h-4 text-green-500" />
                                    <span>Secure Checkout</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                                    <span>Instant Access</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Shield className="w-4 h-4 text-green-500" />
                                    <span>GDPR Compliant</span>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </motion.section>
    );
};
