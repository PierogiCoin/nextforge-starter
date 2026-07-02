"use client";

import { motion } from "framer-motion";
import { ArrowRight, Box, CreditCard, LayoutDashboard, Terminal, Check } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

import { openLSCheckout } from "@/lib/ls-utils";

export const Products = ({ t }: { t: any }) => (
    <section id="products" className="py-32 bg-black relative">
        <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-24">
                <Badge>{t.products.badge}</Badge>
                <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase leading-[0.9]">
                    {t.products.title1} <br />
                    <span className="text-indigo-500 font-bubbly">{t.products.title2}</span>
                </h2>
                <p className="text-gray-400 text-lg md:text-xl font-medium max-w-2xl mx-auto">
                    {t.products.desc}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {t.products.items.map((product: any, index: number) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative flex flex-col p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-indigo-500/30 transition-all duration-300"
                    >
                        {product.badge && (
                            <div className="absolute top-0 right-0 -mt-3 -mr-3 px-3 py-1 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-wider rounded-lg shadow-lg rotate-3 group-hover:rotate-6 transition-transform">
                                {product.badge}
                            </div>
                        )}

                        <h3 className="text-2xl font-black text-white mb-2">{product.title}</h3>
                        <div className="flex items-baseline gap-2 mb-6">
                            {product.oldPrice && (
                                <span className="text-lg text-gray-500 line-through font-bold">{product.oldPrice}</span>
                            )}
                            <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                                {product.price}
                            </span>
                        </div>

                        <p className="text-gray-400 text-sm mb-8 leading-relaxed h-12">
                            {product.desc}
                        </p>

                        <ul className="space-y-3 mb-8 flex-1">
                            {product.features.map((feature: string, i: number) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                                    <div className="w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0">
                                        <Check className="w-3 h-3 text-indigo-400" />
                                    </div>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-col gap-3 mt-auto">
                            <Button
                                onClick={() => openLSCheckout(product.buyUrl)}
                                glow
                                className="w-full text-sm py-4"
                            >
                                {product.btnLabel}
                            </Button>
                            {product.demoUrl && (
                                <a
                                    href={product.demoUrl}
                                    target={product.demoUrl.startsWith("http") ? "_blank" : "_self"}
                                    className="w-full py-3 text-center text-xs font-bold text-gray-500 hover:text-white transition-colors uppercase tracking-widest"
                                >
                                    {t.hero.demoBtn} Live
                                </a>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);
