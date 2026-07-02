"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Monitor, Smartphone, TrendingUp } from "lucide-react";
import { useState } from "react";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const trafficData = [45, 62, 55, 88, 70, 95, 120];
const bounceData = [20, 15, 25, 10, 18, 5, 8];

export default function AnalyticsPage() {
    const [period, setPeriod] = useState("7d");

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-black text-white tracking-tight mb-2">Analytics</h1>
                    <p className="text-gray-400 text-sm">Real-time insights into your app performance.</p>
                </div>
                <div className="bg-white/5 p-1 rounded-lg flex text-xs font-bold">
                    {["24h", "7d", "30d", "90d"].map((p) => (
                        <button
                            key={p}
                            onClick={() => setPeriod(p)}
                            className={`px-4 py-1.5 rounded-md transition-all ${period === p ? "bg-indigo-600 text-white shadow-lg" : "text-gray-500 hover:text-white"}`}
                        >
                            {p}
                        </button>
                    ))}
                </div>
            </div>

            {/* Main Chart */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/5 relative overflow-hidden"
            >
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h3 className="text-lg font-bold text-white mb-1">Total Traffic</h3>
                        <div className="flex items-center gap-2">
                            <span className="text-3xl font-black text-white">124,592</span>
                            <span className="px-2 py-0.5 rounded bg-green-500/10 text-green-400 text-xs font-bold border border-green-500/20 flex items-center gap-1">
                                <TrendingUp className="w-3 h-3" /> +12.5%
                            </span>
                        </div>
                    </div>
                </div>

                <div className="h-[300px] flex items-end gap-3 md:gap-6">
                    {trafficData.map((val, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-2 group relative">
                            {/* Tooltip */}
                            <div className="absolute bottom-full mb-3 hidden group-hover:block z-10">
                                <div className="bg-black border border-white/10 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap">
                                    {val * 100} Visits
                                </div>
                            </div>

                            {/* Bar */}
                            <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: `${(val / 120) * 100}%` }}
                                transition={{ delay: i * 0.1, duration: 1, type: "spring" }}
                                className="w-full rounded-t-xl bg-gradient-to-t from-indigo-900/40 to-indigo-500 relative group-hover:to-indigo-400 transition-colors"
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-white/20" />
                            </motion.div>

                            {/* Label */}
                            <span className="text-[10px] uppercase font-bold text-gray-500">{days[i]}</span>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Secondary Grids */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Device Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="p-6 rounded-3xl bg-white/[0.02] border border-white/5"
                >
                    <h3 className="text-lg font-bold text-white mb-6">Devices</h3>
                    <div className="space-y-6">
                        {[
                            { icon: Monitor, label: "Desktop", val: 65, color: "bg-indigo-500" },
                            { icon: Smartphone, label: "Mobile", val: 25, color: "bg-purple-500" },
                            { icon: Globe, label: "Tablet", val: 10, color: "bg-pink-500" },
                        ].map((device, i) => (
                            <div key={i}>
                                <div className="flex items-center justify-between text-sm mb-2">
                                    <div className="flex items-center gap-2 text-gray-300">
                                        <device.icon className="w-4 h-4 text-gray-500" /> {device.label}
                                    </div>
                                    <span className="font-bold text-white">{device.val}%</span>
                                </div>
                                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${device.val}%` }}
                                        transition={{ delay: 0.5 + i * 0.1, duration: 1 }}
                                        className={`h-full rounded-full ${device.color}`}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Geography Map Placeholder */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col"
                >
                    <h3 className="text-lg font-bold text-white mb-6">Top Countries</h3>
                    <div className="flex-1 flex flex-col justify-center space-y-4">
                        {[
                            { country: "United States", val: "45%", flag: "🇺🇸" },
                            { country: "Germany", val: "22%", flag: "🇩🇪" },
                            { country: "Poland", val: "12%", flag: "🇵🇱" },
                            { country: "United Kingdom", val: "8%", flag: "🇬🇧" },
                        ].map((c, i) => (
                            <div key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer">
                                <div className="flex items-center gap-3">
                                    <span className="text-lg">{c.flag}</span>
                                    <span className="text-sm font-bold text-gray-300">{c.country}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-24 h-1.5 bg-white/5 rounded-full overflow-hidden">
                                        <div className="h-full bg-indigo-500 rounded-full" style={{ width: c.val }} />
                                    </div>
                                    <span className="text-xs font-mono text-gray-500 w-8 text-right">{c.val}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
