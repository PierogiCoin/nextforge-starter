"use client";

import Link from "next/link";
import { Github, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/seo";

export const Navbar = ({ t, lang, setLang }: { t: any, lang: string, setLang: any }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-[100] border-b border-white/5 bg-black/40 backdrop-blur-2xl">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_-20%,rgba(99,102,241,0.3),transparent_50%)] pointer-events-none" />

            <div className="container mx-auto px-4 h-24 flex items-center justify-between relative z-10">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-500 overflow-hidden border border-white/20">
                        {/* Fallback text logo if image fails or for cleaner look */}
                        <div className="font-black text-white text-xl">NF</div>
                        {/* <img src="/logo.png" alt="NextForge Logo" className="w-full h-full object-cover scale-150" /> */}
                    </div>
                    <div>
                        <div className="text-2xl font-black tracking-tighter text-white leading-none">Next<span className="text-indigo-500">Forge</span></div>
                        <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">SaaS Engine</div>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex gap-10 text-[11px] font-black uppercase tracking-[0.2em] text-gray-500">
                    <Link href="/#demo" className="hover:text-white transition-colors">{t.nav.demo}</Link>
                    <Link href="/#products" className="hover:text-white transition-colors text-indigo-400 font-bold">{t.nav.products}</Link>
                    <Link href="/#products" className="hover:text-white transition-colors">{t.nav.features}</Link>
                    <Link href="/#products" className="hover:text-white transition-colors">{t.nav.pricing}</Link>
                    <Link href="/blog" className="hover:text-white transition-colors">{t.nav.blog}</Link>
                    <Link href="/docs" className="hover:text-white transition-colors">{t.nav.docs}</Link>
                </div>

                {/* Desktop Right Side */}
                <div className="hidden lg:flex items-center gap-6">
                    <LanguageSwitcher lang={lang} setLang={setLang} />
                    <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-all hover:scale-110" aria-label="GitHub"><Github className="w-6 h-6" /></a>
                    <Button variant="secondary" href="/register" className="py-3 px-6 text-[10px] border-none bg-transparent hover:bg-white/5">{lang === "pl" ? "Rejestracja" : "Register"}</Button>
                    <Button variant="primary" href="/login" className="py-3 px-8 text-[10px] bg-white text-black hover:bg-gray-200">{t.nav.login}</Button>
                </div>

                {/* Mobile: Language Switcher + Hamburger */}
                <div className="lg:hidden flex items-center gap-3">
                    <LanguageSwitcher lang={lang} setLang={setLang} mobile />
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
                        {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="lg:hidden absolute top-24 left-0 w-full bg-[#050507] border-b border-white/10 p-6 flex flex-col gap-6 shadow-2xl"
                    >
                        <div className="flex flex-col gap-6 text-sm font-bold uppercase tracking-widest text-gray-400 text-center">
                            <Link href="/#demo" onClick={() => setIsOpen(false)} className="hover:text-white py-2 border-b border-white/5">{t.nav.demo}</Link>
                            <Link href="/#products" onClick={() => setIsOpen(false)} className="hover:text-indigo-400 text-white py-2 border-b border-white/5">{t.nav.products}</Link>
                            <Link href="/#products" onClick={() => setIsOpen(false)} className="hover:text-white py-2 border-b border-white/5">{t.nav.features}</Link>
                            <Link href="/#products" onClick={() => setIsOpen(false)} className="hover:text-white py-2 border-b border-white/5">{t.nav.pricing}</Link>
                            <Link href="/blog" onClick={() => setIsOpen(false)} className="hover:text-white py-2 border-b border-white/5">{t.nav.blog}</Link>
                            <Link href="/docs" onClick={() => setIsOpen(false)} className="hover:text-white py-2 border-b border-white/5">{t.nav.docs}</Link>
                        </div>

                        <div className="flex flex-col gap-4 mt-2">
                            <Button href="/login" className="w-full justify-center bg-white text-black py-4">{t.nav.login}</Button>
                            <div className="flex justify-center gap-6 pt-4">
                                <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" className="text-white" aria-label="GitHub"><Github className="w-6 h-6" /></a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
