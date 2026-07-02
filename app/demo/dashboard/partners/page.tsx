"use client";

import { motion } from "framer-motion";
import { Handshake, TrendingUp, Users, DollarSign, Gift, Star, ArrowRight, Share2, Heart, Award, ExternalLink } from "lucide-react";
import { useState } from "react";

const partnershipTiers = [
    {
        name: "Partner",
        price: "Free",
        description: "Promuj nas i zarabiaj na każdej sprzedaży przez nasz panel Lemon Squeezy.",
        features: ["30% prowizji od sprzedaży", "Panel analityczny partnera", "Materiały marketingowe", "Wypłaty przez Lemon Squeezy"],
        icon: Share2,
        color: "from-blue-500 to-indigo-600",
        cta: "Zarejestruj się",
        href: "https://nextforge-hq.lemonsqueezy.com/affiliates"
    },
    {
        name: "Sponsor",
        price: "$49/mo",
        description: "Wspieraj rozwój platformy i zyskaj widoczność w naszym sklepie.",
        features: ["Logo w sekcji 'Sponsorzy'", "Dostęp do wersji Beta", "Odznaka na profilu", "Priorytetowy Support"],
        icon: Heart,
        color: "from-pink-500 to-rose-600",
        cta: "Zostań Sponsorem",
        href: "https://nextforge-hq.lemonsqueezy.com"
    },
    {
        name: "Ambasador",
        price: "Invite Only",
        description: "Dla najbardziej aktywnych twórców i liderów opinii.",
        features: ["50% prowizji od sprzedaży", "Darmowy dostęp do wersji Pro", "Wspólne webinary", "Customowe kody zniżkowe"],
        icon: Award,
        color: "from-amber-400 to-orange-600",
        cta: "Skontaktuj się",
        href: "mailto:support@nextforge-hq.com"
    }
];

const topPartners = [
    { name: "Alex Rivera", earnings: "$2,450.00", referrals: 124, status: "Ambassador" },
    { name: "Sarah Chen", earnings: "$1,120.50", referrals: 56, status: "Partner" },
    { name: "Mike Ross", earnings: "$890.00", referrals: 42, status: "Partner" },
];

export default function PartnersPage() {
    return (
        <div className="space-y-10">
            {/* Header */}
            <div>
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center border border-white/10 shadow-[0_0_30px_rgba(99,102,241,0.3)]">
                        <Handshake className="w-5 h-5 text-white" />
                    </div>
                    <h1 className="text-3xl font-black text-white tracking-tight">Partnerzy i Wsparcie</h1>
                </div>
                <p className="text-gray-400 text-sm">Dołącz do ekosystemu NextForge, wspieraj nas i budujmy razem.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                    { title: "Wypłacone Prowizje", val: "$12,450", icon: DollarSign, color: "text-green-400" },
                    { title: "Aktywni Partnerzy", val: "156", icon: Users, color: "text-blue-400" },
                    { title: "Kliknięcia w Linki", val: "45,201", icon: TrendingUp, color: "text-indigo-400" },
                    { title: "Twoje Zarobki", val: "$0.00", icon: Gift, color: "text-purple-400" },
                ].map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="p-6 rounded-2xl bg-white/[0.02] border border-white/5"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{stat.title}</span>
                            <stat.icon className={`w-4 h-4 ${stat.color}`} />
                        </div>
                        <div className="text-2xl font-black text-white">{stat.val}</div>
                    </motion.div>
                ))}
            </div>

            {/* Partnership Options */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {partnershipTiers.map((tier, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        className="relative group h-full"
                    >
                        <div className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${tier.color} opacity-0 group-hover:opacity-10 transition-opacity blur-xl`} />
                        <div className="relative h-full p-8 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col hover:border-white/10 transition-colors">
                            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${tier.color} flex items-center justify-center mb-6 shadow-lg`}>
                                <tier.icon className="w-6 h-6 text-white" />
                            </div>

                            <div className="mb-2">
                                <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                                <div className="text-2xl font-black text-white mt-1">{tier.price}</div>
                            </div>

                            <p className="text-sm text-gray-400 mb-8">{tier.description}</p>

                            <ul className="space-y-4 mb-8 flex-1">
                                {tier.features.map((feature, j) => (
                                    <li key={j} className="flex items-center gap-3 text-sm text-gray-300">
                                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href={tier.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-full py-4 rounded-xl font-bold flex justify-center items-center gap-2 transition-all group overflow-hidden relative`}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-r ${tier.color} opacity-90 group-hover:opacity-100 transition-opacity`} />
                                <span className="relative text-white flex items-center gap-2">
                                    {tier.cta} <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </span>
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Top Partners Table */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="p-8 rounded-3xl bg-white/[0.02] border border-white/5"
            >
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h3 className="text-lg font-bold text-white">Nasi Top Partnerzy</h3>
                        <p className="text-xs text-gray-500">Najbardziej aktywni członkowie naszej społeczności.</p>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="text-[10px] uppercase text-gray-500 border-b border-white/5">
                                <th className="pb-4 font-black">Nazwa</th>
                                <th className="pb-4 font-black">Status</th>
                                <th className="pb-4 font-black">Polecenia</th>
                                <th className="pb-4 font-black text-right">Zarobki</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {topPartners.map((partner, i) => (
                                <tr key={i} className="group hover:bg-white/[0.01] transition-colors">
                                    <td className="py-4 font-bold text-white flex items-center gap-3 text-sm">
                                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[10px] font-black group-hover:bg-indigo-600 group-hover:text-white transition-colors uppercase">
                                            {partner.name.substring(0, 2)}
                                        </div>
                                        {partner.name}
                                    </td>
                                    <td className="py-4">
                                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${partner.status === 'Ambassador' ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' : 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                                            }`}>
                                            {partner.status}
                                        </span>
                                    </td>
                                    <td className="py-4 text-sm text-gray-400 font-mono italic">{partner.referrals}</td>
                                    <td className="py-4 text-sm font-black text-white text-right">{partner.earnings}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>
        </div>
    );
}
