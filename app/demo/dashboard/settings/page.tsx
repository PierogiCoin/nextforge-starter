"use client";

import { motion } from "framer-motion";
import { User, Lock, CreditCard, Bell, Save } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useState } from "react";

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState("profile");

    const tabs = [
        { id: "profile", label: "Profile", icon: User },
        { id: "security", label: "Security", icon: Lock },
        { id: "billing", label: "Billing", icon: CreditCard },
        { id: "notifications", label: "Notifications", icon: Bell },
    ];

    return (
        <div className="max-w-4xl">
            <div className="mb-8">
                <h1 className="text-3xl font-black text-white tracking-tight mb-2">Settings</h1>
                <p className="text-gray-400 text-sm">Manage your account preferences.</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Sidebar */}
                <div className="w-full lg:w-64 shrink-0 space-y-1">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === tab.id
                                    ? "bg-indigo-600/10 text-indigo-400 border border-indigo-500/20"
                                    : "text-gray-400 hover:text-white hover:bg-white/5"
                                }`}
                        >
                            <tab.icon className="w-4 h-4" />
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="flex-1">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 md:p-8"
                    >
                        {activeTab === "profile" && (
                            <div className="space-y-6">
                                <div className="flex items-center gap-6 pb-6 border-b border-white/5">
                                    <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 border-4 border-black flex items-center justify-center text-2xl font-black text-white shrink-0">
                                        JK
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white">Jan Kowalski</h3>
                                        <p className="text-sm text-gray-500 mb-3">SaaS Founder • Warsaw, PL</p>
                                        <Button variant="secondary" className="text-xs h-8 px-4">Change Avatar</Button>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-400 uppercase">Full Name</label>
                                        <input type="text" defaultValue="Jan Kowalski" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-indigo-500/50 focus:outline-none" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-400 uppercase">Email Address</label>
                                        <input type="email" defaultValue="jan@nextforge.app" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-indigo-500/50 focus:outline-none" />
                                    </div>
                                    <div className="space-y-2 md:col-span-2">
                                        <label className="text-xs font-bold text-gray-400 uppercase">Bio</label>
                                        <textarea rows={4} defaultValue="Building the next big thing." className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-indigo-500/50 focus:outline-none" />
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === "billing" && (
                            <div className="space-y-6">
                                <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/20 flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div>
                                        <div className="text-xs font-bold text-indigo-400 uppercase mb-1">Current Plan</div>
                                        <div className="text-2xl font-black text-white">PRO Plan</div>
                                        <div className="text-sm text-gray-400">$49/month • Renews on Feb 12, 2026</div>
                                    </div>
                                    <Button glow>Upgrade Plan</Button>
                                </div>

                                <h3 className="text-sm font-bold text-white mt-8 mb-4">Payment Methods</h3>
                                <div className="flex items-center justify-between p-4 border border-white/10 rounded-xl bg-white/[0.02]">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-8 bg-white/10 rounded border border-white/10 flex items-center justify-center">
                                            <div className="w-6 h-4 bg-white/20 rounded-sm" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-white">Visa ending in 4242</div>
                                            <div className="text-xs text-gray-500">Expiry 12/2028</div>
                                        </div>
                                    </div>
                                    <button className="text-xs font-bold text-gray-400 hover:text-white">Edit</button>
                                </div>
                            </div>
                        )}

                        {/* Common Footer for all tabs */}
                        <div className="mt-8 pt-6 border-t border-white/5 flex justify-end">
                            <Button glow className="px-6 gap-2">
                                <Save className="w-4 h-4" /> Save Changes
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
