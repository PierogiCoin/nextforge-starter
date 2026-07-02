"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, DollarSign, Users, CreditCard, Activity } from "lucide-react";
import { useState, useEffect } from "react";

const stats = [
    { title: "Total Revenue", value: "$45,231.89", change: "+20.1%", icon: DollarSign },
    { title: "Subscriptions", value: "+2350", change: "+180.1%", icon: Users },
    { title: "Sales", value: "+12,234", change: "+19%", icon: CreditCard },
    { title: "Active Now", value: "+573", change: "+201", icon: Activity },
];

export default function DemoPage() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-black text-white tracking-tight mb-2">Dashboard</h1>
                <p className="text-gray-400 text-sm">Przegląd Twoich metryk w czasie rzeczywistym.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, i) => (
                    <motion.div
                        key={stat.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-sm font-medium text-gray-400">{stat.title}</span>
                            <stat.icon className="w-4 h-4 text-gray-500" />
                        </div>
                        <div className="text-2xl font-black text-white mb-1">{stat.value}</div>
                        <div className="text-xs text-green-400 flex items-center gap-1 font-bold">
                            {stat.change} <span className="text-gray-500 font-normal">from last month</span>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="lg:col-span-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5 min-h-[400px]"
                >
                    <h3 className="text-lg font-bold text-white mb-6">Przychód (Ost. 7 dni)</h3>
                    <div className="h-[300px] flex items-end gap-2 px-4">
                        {[45, 78, 55, 90, 65, 80, 100].map((h, i) => (
                            <motion.div
                                key={i}
                                initial={{ height: 0 }}
                                animate={{ height: `${h}%` }}
                                transition={{ delay: 0.5 + i * 0.1, duration: 1, type: "spring" }}
                                className="flex-1 bg-indigo-600/20 border-t border-indigo-500 rounded-t-lg relative group cursor-pointer hover:bg-indigo-600/40 transition-colors"
                            >
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity border border-white/10">
                                    ${h * 150}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-4 px-4 text-xs text-gray-500 uppercase font-bold">
                        <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="lg:col-span-3 p-6 rounded-2xl bg-white/[0.02] border border-white/5"
                >
                    <h3 className="text-lg font-bold text-white mb-6">Ostatnie Transakcje</h3>
                    <div className="space-y-4">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-800 to-black border border-white/10 flex items-center justify-center font-bold text-xs text-gray-400 group-hover:text-white">
                                        OM
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors">Olivia Martin</div>
                                        <div className="text-xs text-gray-500">olivia.martin@email.com</div>
                                    </div>
                                </div>
                                <div className="text-sm font-black text-white">+$1,999.00</div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
