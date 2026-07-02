"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export const MiniPurchaseFAQ = ({ t }: { t: any }) => {
    const faq = t?.faq;
    const items = Array.isArray(faq?.items) ? faq.items.slice(0, 3) : [];

    if (!items.length) return null;

    return (
        <section className="py-12 bg-[#050507] border-t border-white/5" aria-label="Key purchase questions">
            <div className="container mx-auto px-4 max-w-3xl">
                <h3 className="text-lg font-black text-white mb-4 tracking-tight">
                    {faq?.title ?? "Najczęstsze pytania przed zakupem"}
                </h3>
                <p className="text-xs text-gray-400 mb-6">
                    {faq?.ctaText ?? "Kilka najważniejszych odpowiedzi, zanim przejdziesz do płatności."}
                </p>
                <div className="space-y-3">
                    {items.map((item: any, index: number) => (
                        <FAQRow key={index} q={item.q} a={item.a} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const FAQRow = ({ q, a }: { q: string; a: string }) => {
    const id = q.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "");

    return (
        <motion.details
            initial={false}
            className="group rounded-xl border border-white/10 bg-[#050509] px-4 py-3 text-sm text-gray-300"
        >
            <summary
                className="flex cursor-pointer list-none items-center justify-between gap-3 text-left font-medium text-white"
                aria-controls={id}
            >
                <span>{q}</span>
                <ChevronDown className="h-4 w-4 text-gray-400 transition-transform duration-200 group-open:rotate-180" />
            </summary>
            <AnimatePresence initial={false}>
                <motion.div
                    id={id}
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                    className="mt-2 text-xs text-gray-400"
                >
                    {a}
                </motion.div>
            </AnimatePresence>
        </motion.details>
    );
};

