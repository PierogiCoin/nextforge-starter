"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Check, ArrowRight, ShieldCheck, Zap, LineChart, Code2, Globe, Layout } from "lucide-react";

export const ProductShowcase = ({ t }: { t: any }) => {
    const [activeTab, setActiveTab] = useState("all");

    // Enhance products with category for filtering
    const products = t.products.items.map((item: any) => ({
        ...item,
        // Allow explicit category in dictionary; default to "pro" for backwards compatibility
        category: item.category ?? "pro",
    }));

    const filteredAndSortedProducts = activeTab === "all"
        ? products
        : products.filter((p: any) => p.category === activeTab);

    // Dynamic Tab Labels
    const tabs = [
        { id: "all", label: t.products.wallet.tabs.all },
        { id: "starter", label: t.products.wallet.tabs.starter },
        { id: "standard", label: t.products.wallet.tabs.standard },
        { id: "pro", label: t.products.wallet.tabs.pro },
    ];

    return (
        <section id="products" className="py-32 bg-[#050507] relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    {t.products.stepLabel && (
                        <p className="text-[10px] font-black text-indigo-400/80 uppercase tracking-[0.3em] mb-4">
                            {t.products.stepLabel}
                        </p>
                    )}
                    <Badge className="mb-6">{t.products.badge}</Badge>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
                        {t.products.wallet.title}
                    </h2>
                    <p className="text-gray-400 text-lg">{t.products.wallet.subtitle}</p>
                </div>

                {/* IOS Style Filter Control */}
                <div className="flex justify-center mb-16">
                    <div className="p-1.5 bg-white/5 border border-white/10 rounded-full flex relative backdrop-blur-md">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`
                                    relative px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 z-10
                                    ${activeTab === tab.id ? "text-white" : "text-gray-500 hover:text-gray-300"}
                                `}
                            >
                                {activeTab === tab.id && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-indigo-600 rounded-full -z-10 shadow-lg shadow-indigo-600/20"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Products Grid - Wallet Style */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredAndSortedProducts.map((product: any, index: number) => (
                            <motion.div
                                layout
                                key={product.title}
                                initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
                                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                                exit={{ opacity: 0, scale: 0.9, rotateX: -10 }}
                                transition={{ duration: 0.4 }}
                                className={`
                                    group relative rounded-[2.5rem] p-8 border border-white/10 overflow-hidden flex flex-col h-full
                                    ${product.category === "pro" ? "bg-gradient-to-b from-[#1a1a20] to-[#0c0c0e] border-indigo-500/30" : "bg-[#0c0c0e]"}
                                `}
                            >
                                {/* Active Glow for PRO */}
                                {product.category === "pro" && (
                                    <div className="absolute inset-0 bg-indigo-500/5 group-hover:bg-indigo-500/10 transition-colors duration-500" />
                                )}

                                {/* Card Header */}
                                <div className="relative z-10 mb-8 flex justify-between items-start">
                                    <div>
                                        <div className="flex gap-2 mb-4">
                                            <Badge className={`border-none ${product.category === "starter" ? "bg-green-500/10 text-green-400" : product.category === "pro" ? "bg-indigo-500/20 text-indigo-300" : "bg-white/10 text-gray-400"}`}>
                                                {product.badge}
                                            </Badge>
                                        </div>
                                        <h3 className="text-2xl font-black text-white mb-2 tracking-tight">{product.title}</h3>
                                        <div className="text-gray-500 text-sm leading-relaxed min-h-[40px]">{product.desc}</div>
                                    </div>
                                    <div className="text-right">
                                        {product.oldPrice && <div className="text-gray-500 line-through text-sm font-bold">{product.oldPrice}</div>}
                                        <div className="text-3xl font-black text-white tracking-tighter">{product.price}</div>
                                    </div>
                                </div>

                                {/* Visual Preview Area (Custom per product type) */}
                                <div className="relative h-40 mb-8 rounded-2xl bg-[#050507] border border-white/5 overflow-hidden group-hover:border-white/10 transition-colors">
                                    {/* Starter Preview (Code) */}
                                    {product.category === "starter" && (
                                        <div className="p-4 font-mono text-[10px] text-gray-500 leading-relaxed opacity-60">
                                            <span className="text-purple-400">import</span> {"{ Auth }"} <span className="text-purple-400">from</span> <span className="text-green-400">'next-auth'</span>;<br />
                                            <span className="text-purple-400">export const</span> <span className="text-yellow-200">User</span> = ...
                                        </div>
                                    )}
                                    {/* Standard Preview (Document/PDF) */}
                                    {product.category === "standard" && (
                                        <div className="flex items-center justify-center h-full">
                                            <div className="w-20 h-24 bg-white/5 border border-white/10 rounded-lg flex flex-col items-center justify-center gap-2 group-hover:scale-110 transition-transform duration-500">
                                                <div className="w-8 h-1 bg-white/20 rounded-full" />
                                                <div className="w-12 h-1 bg-white/10 rounded-full" />
                                                <div className="w-10 h-1 bg-white/10 rounded-full" />
                                            </div>
                                        </div>
                                    )}
                                    {/* PRO Preview (Chart/Dashboard) */}
                                    {product.category === "pro" && (
                                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 flex items-center justify-center">
                                            <div className="relative">
                                                <div className="absolute -inset-4 bg-indigo-500/20 blur-xl rounded-full animate-pulse" />
                                                <LineChart className="w-16 h-16 text-indigo-400 relative z-10" />
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Features List */}
                                <ul className="space-y-3 mb-8 relative z-10 flex-1">
                                    {product.features.map((feat: string, i: number) => (
                                        <li key={i} className="flex items-start gap-3 text-sm font-medium text-gray-400">
                                            <div className={`mt-1 p-0.5 rounded-full ${product.category === "pro" ? "bg-indigo-500 text-white" : "bg-white/10 text-gray-400"}`}>
                                                <Check className="w-3 h-3" />
                                            </div>
                                            <span className={product.category === "pro" ? "text-gray-300" : ""}>{feat}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Actions */}
                                <div className="relative z-10 flex flex-col gap-3">
                                    {product.demoUrl && product.demoUrl !== "#" && (
                                        <a
                                            href={product.demoUrl}
                                            target={product.demoUrl.startsWith("http") ? "_blank" : undefined}
                                            rel={product.demoUrl.startsWith("http") ? "noopener noreferrer" : undefined}
                                            className="w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 border border-white/20 bg-white/5 hover:bg-white/10 text-white text-sm transition-all"
                                        >
                                            {t.products.demoBtn} <ArrowRight className="w-3.5 h-3.5" />
                                        </a>
                                    )}
                                    {product.category === "starter" && product.buyUrl && product.buyUrl.includes("github.com") && (
                                        <a
                                            href={`https://vercel.com/new/clone?repository-url=${encodeURIComponent(product.buyUrl)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 bg-black border border-white/20 hover:bg-white/5 text-white text-sm transition-all"
                                        >
                                            <svg className="w-4.5 h-4.5 fill-white" viewBox="0 0 115 100">
                                                <path d="M57.5 0L115 100H0L57.5 0Z" />
                                            </svg>
                                            {t?.nav?.pricing === "Cennik" ? "Wdróż na Vercel" : "Deploy to Vercel"}
                                        </a>
                                    )}
                                    <a
                                        href={product.buyUrl}
                                        target={product.buyUrl?.startsWith("http") ? "_blank" : undefined}
                                        rel={product.buyUrl?.startsWith("http") ? "noopener noreferrer" : undefined}
                                        className={`
                                            relative w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300
                                            ${product.category === "pro"
                                                ? "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40"
                                                : "bg-white text-black hover:bg-gray-200"}
                                        `}
                                    >
                                        {product.btnLabel || t.products.demoBtn} <ArrowRight className="w-4 h-4" />
                                    </a>
                                </div>

                                {product.category === "pro" && t?.trustBadges?.guarantee && (
                                    <p className="relative z-10 mt-2 text-[10px] text-gray-500 text-center uppercase tracking-widest">
                                        {t.trustBadges.guarantee}
                                    </p>
                                )}

                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {t.guarantee && (
                    <p className="text-center text-gray-500 text-xs font-bold uppercase tracking-widest mt-12">
                        {t.guarantee}
                    </p>
                )}
            </div>
        </section>
    );
};
