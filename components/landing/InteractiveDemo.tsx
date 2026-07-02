"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";

export const InteractiveDemo = ({ t }: { t: any }) => {
    const [activeTab, setActiveTab] = useState("overview");
    return (
        <section id="demo" className="py-40 bg-black relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10 text-center">
                <Badge>{t.demo.badge}</Badge>
                <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase leading-[0.9]">{t.demo.title1} <br /><span className="text-white opacity-40">{t.demo.title2}</span></h2>
                <p className="text-gray-400 text-lg md:text-xl font-medium mb-16 max-w-2xl mx-auto">{t.demo.desc}</p>
                <div className="max-w-7xl mx-auto rounded-[3rem] border border-white/10 bg-black/40 overflow-hidden flex flex-col lg:flex-row h-[700px] glass-morphism text-left">
                    <div className="w-full lg:w-72 border-r border-white/5 p-8 flex flex-col gap-10 bg-white/[0.01]">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg overflow-hidden border border-white/20">
                                <img src="/logo.png" alt="NextForge Logo" className="w-full h-full object-cover scale-150" />
                            </div>
                            <span className="font-black text-xl text-white tracking-tighter">NextForge</span>
                        </div>
                        <nav className="flex flex-col gap-3">
                            {["overview", "analytics", "customers"].map((id) => (
                                <button
                                    key={id}
                                    onClick={() => setActiveTab(id)}
                                    className={`flex items-center gap-4 px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === id ? "bg-indigo-600 text-white" : "text-gray-500 hover:text-white"}`}
                                >
                                    {id}
                                </button>
                            ))}
                        </nav>
                        <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/5">
                            <div className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-2">{t.demo.usage}</div>
                            <div className="text-[11px] text-gray-500 font-bold mb-4">92% {t.demo.usageText}</div>
                            <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                                <div className="w-[92%] h-full bg-indigo-600" />
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 p-12 bg-black/20">
                        <div className="flex justify-between items-center mb-12">
                            <h3 className="text-3xl font-black text-white uppercase italic">{activeTab}</h3>
                            <span className="text-gray-500 text-[10px] uppercase font-black">{t.demo.sync}</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[1, 2, 3].map(i => (
                                <motion.button
                                    key={i}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => setActiveTab(i === 1 ? "overview" : i === 2 ? "analytics" : "customers")}
                                    className={`p-8 rounded-[2rem] border transition-all text-left ${activeTab === (i === 1 ? "overview" : i === 2 ? "analytics" : "customers") ? "border-indigo-500 bg-indigo-500/10" : "border-white/5 bg-white/[0.02] shadow-inner"}`}
                                >
                                    <div className="text-[10px] text-gray-500 font-black uppercase mb-1">Metric {i}</div>
                                    <div className="text-3xl font-black text-white">${i * 4500 + (activeTab === "analytics" ? 1200 : 0)}</div>
                                </motion.button>
                            ))}
                        </div>
                        <div className="mt-12 p-8 rounded-[2rem] border border-white/5 bg-white/[0.01] h-64 flex items-end gap-2">
                            {[...Array(12)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ height: 20 }}
                                    animate={{
                                        height: activeTab === "analytics" ? Math.random() * 80 + 20 + "%" : Math.random() * 40 + 10 + "%"
                                    }}
                                    className="flex-1 bg-indigo-600/40 rounded-t-lg border-t border-indigo-500/20 hover:bg-indigo-500 transition-colors"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
