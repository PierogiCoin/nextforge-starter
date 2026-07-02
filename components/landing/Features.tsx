"use client";

import { Badge } from "@/components/ui/Badge";
import { motion } from "framer-motion";
import { Database, Lock, CreditCard, Palette, ShieldCheck, Rocket, Zap, FileCode } from "lucide-react";

const FeatureCard = ({ item, index }: { item: any, index: number }) => {
    // Determine span based on index for Bento Grid look
    // 0: Small, 1: Small, 2: Wide
    // 3: Wide, 4: Small, 5: Small

    // Actually, let's do:
    // [Small] [Wide]
    // [Wide] [Small]
    // [Small] [Small] [Small] (if 6 items)

    // Or standard 3 columns:
    // [Small] [Small] [Small]
    // [Wide  ] [Small]
    // [Small] [Wide  ]

    const isWide = index === 3 || index === 2; // Let's try making Payments and UI wide? No.
    // Let's stick to a solid 3-column grid but with visual flair inside.

    const icons = [Database, Lock, CreditCard, Palette, ShieldCheck, Rocket];
    const Icon = icons[index % icons.length];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`
                group relative p-8 rounded-[2rem] border border-white/10 bg-[#0c0c0e] overflow-hidden hover:border-indigo-500/30 transition-colors
                ${index === 2 ? "md:col-span-2 md:bg-gradient-to-br md:from-indigo-900/10 md:to-purple-900/10" : ""}
                ${index === 3 ? "md:col-span-2" : ""}
            `}
        >
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10 h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center mb-6 text-indigo-400 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>

                {/* Visual Filler for "Wide" cards */}
                {index === 2 && ( // Payments
                    <div className="absolute top-8 right-8 hidden md:block opacity-20 group-hover:opacity-40 transition-opacity">
                        <div className="flex gap-1 items-end h-16">
                            <div className="w-3 bg-indigo-500 h-[40%] rounded-t-sm" />
                            <div className="w-3 bg-indigo-500 h-[70%] rounded-t-sm" />
                            <div className="w-3 bg-indigo-500 h-[50%] rounded-t-sm" />
                            <div className="w-3 bg-indigo-500 h-[100%] rounded-t-sm" />
                        </div>
                    </div>
                )}
                {index === 3 && ( // UI
                    <div className="absolute top-1/2 -translate-y-1/2 right-8 hidden md:block opacity-20 group-hover:opacity-40 transition-opacity">
                        <div className="flex gap-2">
                            <div className="w-8 h-8 rounded-lg bg-pink-500" />
                            <div className="w-8 h-8 rounded-lg bg-purple-500" />
                            <div className="w-8 h-8 rounded-lg bg-indigo-500" />
                        </div>
                    </div>
                )}
            </div>
        </motion.div>
    );
}

export const Features = ({ t }: { t: any }) => (
    <section id="features" className="py-32 bg-black relative">
        <div className="container mx-auto px-4 relative z-10">
            <div className="mb-20 max-w-2xl">
                <Badge>{t.features.badge}</Badge>
                <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tighter">
                    {t.features.title1} <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                        {t.features.title2}
                    </span>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                    {t.features.desc}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
                {t.features.items.map((item: any, i: number) => (
                    <FeatureCard key={i} item={item} index={i} />
                ))}
            </div>
        </div>
    </section>
);
