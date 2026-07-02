"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { LayoutDashboard, Users, BarChart3, Settings, LogOut, Bell, Search, Menu, Bot, Handshake } from "lucide-react";
import { useState } from "react";

const sidebarItems = [
    { icon: LayoutDashboard, label: "Overview", href: "/demo/dashboard" },
    { icon: Users, label: "Customers", href: "/demo/dashboard/customers" },
    { icon: BarChart3, label: "Analytics", href: "/demo/dashboard/analytics" },
    { icon: Bot, label: "AI Bot", href: "/demo/dashboard/ai-bot" },
    { icon: Handshake, label: "Partners", href: "/demo/dashboard/partners" },
    { icon: Settings, label: "Settings", href: "/demo/dashboard/settings" },
];

export const DemoSidebar = () => {
    const pathname = usePathname();

    return (
        <aside className="w-64 border-r border-white/5 bg-black flex flex-col h-screen fixed left-0 top-0">
            <div className="h-16 flex items-center px-6 border-b border-white/5">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                        <span className="font-black text-white">NF</span>
                    </div>
                    <span className="font-bold text-white tracking-tight">NextForge</span>
                    <span className="ml-2 px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-500/20 text-indigo-400 border border-indigo-500/20 uppercase">Demo</span>
                </div>
            </div>

            <nav className="flex-1 p-4 space-y-1">
                {sidebarItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive
                                ? "bg-indigo-600/10 text-indigo-400"
                                : "text-gray-400 hover:text-white hover:bg-white/5"
                                }`}
                        >
                            <item.icon className="w-4 h-4" />
                            {item.label}
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-white/5">
                <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/20 mb-4">
                    <h4 className="text-xs font-bold text-white mb-1">Jesteś w trybie Demo</h4>
                    <p className="text-[10px] text-gray-400 mb-3">To tylko podgląd. Dane nie są zapisywane.</p>
                    <Link href="/#pricing" className="block w-full py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-[10px] font-bold uppercase tracking-wider text-center transition-colors">
                        Kup Pełną Wersję
                    </Link>
                </div>
                <button className="flex w-full items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
                    <LogOut className="w-4 h-4" />
                    Wróć na stronę
                </button>
            </div>
        </aside>
    );
}

export const DemoHeader = () => {
    return (
        <header className="h-16 border-b border-white/5 bg-black/50 backdrop-blur-xl fixed top-0 right-0 left-64 z-20 flex items-center justify-between px-6">
            <div className="flex items-center gap-4 text-gray-400">
                <Menu className="w-5 h-5 lg:hidden" />
                <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                        type="text"
                        placeholder="Szukaj..."
                        className="bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-1.5 text-xs text-white placeholder-gray-600 w-64 focus:outline-none focus:border-indigo-500/50 transition-colors"
                    />
                </div>
            </div>
            <div className="flex items-center gap-4">
                <button className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors relative">
                    <Bell className="w-4 h-4 text-gray-400" />
                    <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full border border-black" />
                </button>
                <a
                    href="https://github.com/PierogiCoin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 pl-4 border-l border-white/5 hover:opacity-80 transition-opacity group"
                >
                    <div className="text-right hidden md:block">
                        <div className="text-xs font-bold text-white group-hover:text-indigo-400 transition-colors">PierogiCoin</div>
                        <div className="text-[10px] text-gray-500 text-indigo-400">@PierogiCoin</div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 border border-white/20 overflow-hidden flex items-center justify-center font-bold text-xs text-white">
                        PC
                    </div>
                </a>
            </div>
        </header>
    )
}
