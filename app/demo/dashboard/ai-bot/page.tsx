"use client";

import { motion } from "framer-motion";
import { Bot, PenTool, Search, Users, Sparkles, TrendingUp, ArrowRight, FileText, DollarSign, Mail } from "lucide-react";
import { useState } from "react";
import { BLOG_OUTPUT_CONTRACT, SEO_BOT_QUALITY_CHECKLIST, SEO_BOT_RULES } from "@/lib/seo-bot";

const recentLeads = [
    { name: "John Doe", email: "john@cybersec.io", source: "Kupno: Plan Elite", date: "2 mins ago", status: "Closed", type: "purchase" },
    { name: "Alice Smith", email: "alice@techstart.com", source: "Newsletter", date: "1 hour ago", status: "Hot", type: "newsletter" },
    { name: "Bob Johnson", email: "bob@agilegroup.net", source: "SEO - Next.js Guide", date: "3 hours ago", status: "Warm", type: "seo" },
    { name: "Marta Nowak", email: "marta@design.pl", source: "Kupno: Plan Pro", date: "5 hours ago", status: "Closed", type: "purchase" },
    { name: "Liam Wilson", email: "liam@webflow.com", source: "Newsletter", date: "yesterday", status: "Warm", type: "newsletter" },
];

export default function AIBotPage() {
    const [activeTab, setActiveTab] = useState("seo");

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center border border-white/10 shadow-[0_0_30px_rgba(99,102,241,0.3)]">
                            <Bot className="w-5 h-5 text-white" />
                        </div>
                        <h1 className="text-3xl font-black text-white tracking-tight">AI SEO & Blog Bot</h1>
                    </div>
                    <p className="text-gray-400 text-sm">Automatyzuj tworzenie treści, optymalizuj SEO i zbieraj leady.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 flex items-center gap-4"
                >
                    <div className="w-12 h-12 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center">
                        <TrendingUp className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-sm font-medium text-gray-400">Wygenerowany ruch</div>
                        <div className="text-2xl font-black text-white">+14,502</div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 flex items-center gap-4"
                >
                    <div className="w-12 h-12 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                        <FileText className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-sm font-medium text-gray-400">Napisane Artykuły</div>
                        <div className="text-2xl font-black text-white">128</div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="p-6 rounded-3xl bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border border-indigo-500/20 flex items-center gap-4"
                >
                    <div className="w-12 h-12 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                        <Users className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-sm font-medium text-gray-400">Zebrane Leady</div>
                        <div className="text-2xl font-black text-white">3,492</div>
                    </div>
                </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center gap-2 p-1 bg-white/5 rounded-xl w-fit">
                        <button
                            onClick={() => setActiveTab("seo")}
                            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === "seo" ? "bg-indigo-600 text-white shadow-lg" : "text-gray-400 hover:text-white"}`}
                        >
                            Optymalizacja SEO
                        </button>
                        <button
                            onClick={() => setActiveTab("blog")}
                            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === "blog" ? "bg-indigo-600 text-white shadow-lg" : "text-gray-400 hover:text-white"}`}
                        >
                            Generator Bloga
                        </button>
                    </div>

                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/5"
                    >
                        {activeTab === "seo" ? (
                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                        <Search className="w-5 h-5 text-indigo-400" />
                                        Analiza Frazy Kluczowej
                                    </h3>
                                </div>
                                <div className="flex gap-4">
                                    <input
                                        type="text"
                                        placeholder="Wpisz słowo kluczowe..."
                                        className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/50"
                                    />
                                    <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold flex items-center gap-2 transition-colors">
                                        <Sparkles className="w-4 h-4" /> Analizuj
                                    </button>
                                </div>
                                <div className="p-4 rounded-xl border border-dashed border-white/10 flex flex-col items-center justify-center h-48 text-gray-500">
                                    <Search className="w-8 h-8 mb-4 opacity-50" />
                                    <p>Wpisz frazę, aby wygenerować raport i strategię SEO.</p>
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                        <PenTool className="w-5 h-5 text-purple-400" />
                                        Generator Artykułów
                                    </h3>
                                </div>
                                <div className="space-y-4">
                                    <input
                                        type="text"
                                        placeholder="Tytuł lub temat wpisu..."
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/50"
                                    />
                                    <textarea
                                        placeholder="Dodatkowe wytyczne (opcjonalnie)..."
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 min-h-[100px]"
                                    />
                                    <button className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-xl font-bold flex justify-center items-center gap-2 transition-colors shadow-lg shadow-indigo-500/25">
                                        <Sparkles className="w-5 h-5" /> Generuj Wpis
                                    </button>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="p-6 rounded-3xl bg-white/[0.02] border border-white/5"
                >
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold text-white flex items-center gap-2">
                            <Users className="w-5 h-5 text-indigo-400" />
                            Ostatnie Leady
                        </h3>
                        <button className="text-xs text-indigo-400 font-bold hover:text-indigo-300 transition-colors flex items-center gap-1">
                            Wszystkie <ArrowRight className="w-3 h-3" />
                        </button>
                    </div>

                    <div className="space-y-4">
                        {recentLeads.map((lead, i) => (
                            <div key={i} className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5 relative group cursor-pointer">
                                <div className="flex items-start justify-between mb-2">
                                    <div className="flex gap-3">
                                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center border border-white/5 ${lead.type === 'purchase' ? 'bg-green-500/10 text-green-400' :
                                                lead.type === 'newsletter' ? 'bg-blue-500/10 text-blue-400' :
                                                    'bg-indigo-500/10 text-indigo-400'
                                            }`}>
                                            {lead.type === 'purchase' ? <DollarSign className="w-4 h-4" /> :
                                                lead.type === 'newsletter' ? <Mail className="w-4 h-4" /> :
                                                    <Search className="w-4 h-4" />}
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors">{lead.name}</div>
                                            <div className="text-xs text-gray-400">{lead.email}</div>
                                        </div>
                                    </div>
                                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${lead.status === 'Closed' ? 'bg-green-500/20 text-green-400 border-green-500/20' :
                                            lead.status === 'Hot' ? 'bg-red-500/20 text-red-400 border-red-500/20' :
                                                lead.status === 'Warm' ? 'bg-orange-500/20 text-orange-400 border-orange-500/20' :
                                                    'bg-blue-500/20 text-blue-400 border-blue-500/20'
                                        }`}>
                                        {lead.status}
                                    </span>
                                </div>
                                <div className="flex items-center justify-between mt-3 text-xs">
                                    <div className="text-gray-500"><span className="text-gray-600">Źródło:</span> {lead.source}</div>
                                    <div className="text-gray-600 font-medium">{lead.date}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-6 rounded-3xl bg-white/[0.02] border border-white/5"
                >
                    <h3 className="text-lg font-bold text-white mb-4">SEO Bot Brain v2</h3>
                    <p className="text-sm text-gray-400 mb-5">
                        Rules the bot must follow to produce ranking-focused, human-readable content.
                    </p>
                    <ul className="space-y-2">
                        {SEO_BOT_RULES.slice(0, 7).map((rule) => (
                            <li key={rule} className="text-sm text-gray-300 flex gap-2">
                                <span className="text-indigo-400">•</span>
                                <span>{rule}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-6 p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-200">
                        Tip: Keep this list immutable and treat it as the robot system prompt.
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="p-6 rounded-3xl bg-white/[0.02] border border-white/5"
                >
                    <h3 className="text-lg font-bold text-white mb-4">Quality Gate + Output Contract</h3>
                    <p className="text-sm text-gray-400 mb-5">
                        Reject any draft that fails these checks.
                    </p>
                    <ul className="space-y-2 mb-5">
                        {SEO_BOT_QUALITY_CHECKLIST.slice(0, 6).map((item) => (
                            <li key={item} className="text-sm text-gray-300 flex gap-2">
                                <span className="text-emerald-400">•</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <pre className="text-[11px] leading-relaxed text-gray-300 bg-black/40 border border-white/10 rounded-2xl p-4 overflow-x-auto">
                        <code>{BLOG_OUTPUT_CONTRACT}</code>
                    </pre>
                </motion.div>
            </div>
        </div>
    );
}
