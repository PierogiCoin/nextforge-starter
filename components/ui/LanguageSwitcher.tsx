"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ChevronDown } from "lucide-react";

interface LanguageSwitcherProps {
    lang: string;
    setLang: (l: string) => void;
    mobile?: boolean;
}

export const LanguageSwitcher = ({ lang, setLang, mobile = false }: LanguageSwitcherProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const languages = [
        { code: "pl", name: "Polski", flag: "🇵🇱" },
        { code: "en", name: "English", flag: "🇺🇸" },
        { code: "de", name: "Deutsch", flag: "🇩🇪" },
        { code: "es", name: "Español", flag: "🇪🇸" },
    ];

    if (mobile) {
        return (
            <div className="flex gap-2" suppressHydrationWarning>
                {languages.map((l) => (
                    <button
                        key={l.code}
                        onClick={() => setLang(l.code)}
                        className={`px-3 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all ${
                            lang === l.code
                                ? 'bg-indigo-600 text-white'
                                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                        }`}
                    >
                        {l.flag}
                    </button>
                ))}
            </div>
        );
    }

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all"
            >
                <Globe className="w-3 h-3 text-indigo-400" />
                {languages.find(l => l.code === lang)?.flag} {lang}
                <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute top-full right-0 mt-2 w-32 rounded-xl border border-white/10 bg-black/80 backdrop-blur-xl shadow-2xl p-1 z-[500]"
                    >
                        {languages.map((l) => (
                            <button
                                key={l.code}
                                onClick={() => { setLang(l.code); setIsOpen(false); }}
                                className={`w-full text-left px-3 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest flex items-center gap-2 transition-all ${lang === l.code ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
                            >
                                <span>{l.flag}</span> {l.name}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
