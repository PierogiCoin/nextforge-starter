"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export const FAQ = ({ t }: { t: any }) => {
    const [open, setOpen] = useState<number | null>(0);
    return (
        <section id="faq" className="py-40 bg-black text-center">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-20 uppercase italic">{t.faq.title}</h2>
                <div className="space-y-6">
                    {t.faq.items.map((item: any, i: number) => (
                        <div key={i} className="rounded-3xl border border-white/5 bg-white/[0.01] text-left">
                            <button
                                onClick={() => setOpen(open === i ? null : i)}
                                className="w-full px-10 py-8 flex justify-between items-center"
                            >
                                <span className="font-black text-white uppercase text-lg">{item.q}</span>
                                <ChevronDown className={`w-6 h-6 text-indigo-500 transition-transform ${open === i ? "rotate-180" : ""}`} />
                            </button>
                            <AnimatePresence>
                                {open === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="px-10 pb-10 text-gray-500 font-bold leading-relaxed"
                                    >
                                        {item.a}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
                {(t.faq.ctaText || t.faq.ctaOr) && (
                    <div className="mt-16 p-8 rounded-3xl border border-white/10 bg-white/[0.02] text-center">
                        {t.faq.ctaText && t.faq.ctaButton && (
                            <>
                                <p className="text-gray-400 font-bold mb-4">{t.faq.ctaText}</p>
                                <a
                                    href="mailto:contact@nextforge.app?subject=NextForge%20–%20pytanie"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold text-sm transition-colors"
                                >
                                    {t.faq.ctaButton}
                                </a>
                            </>
                        )}
                        {t.faq.ctaOr && (
                            <p className="mt-6 pt-6 border-t border-white/10">
                                <span className="text-gray-500 text-sm block mb-2">{t.faq.ctaOr}</span>
                                <a
                                    href="#products"
                                    className="inline-flex items-center justify-center px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-bold text-sm transition-colors"
                                >
                                    {t.faq.ctaBuyLabel ?? "See plans & pricing →"}
                                </a>
                            </p>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
};
