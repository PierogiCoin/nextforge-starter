"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, X } from "lucide-react";

const BANNER_KEY = "nf_banner_dismissed";

export const Banner = ({ t }: { t: any }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        try {
            if (!sessionStorage.getItem(BANNER_KEY)) setVisible(true);
        } catch (_) {
            setVisible(true);
        }
    }, []);

    const dismiss = () => {
        setVisible(false);
        try { sessionStorage.setItem(BANNER_KEY, "1"); } catch (_) {}
    };

    if (!visible) return null;

    return (
        <div className="bg-indigo-600 py-2.5 px-4 text-center text-[10px] md:text-xs font-black uppercase tracking-[0.25em] text-white overflow-hidden relative border-b border-indigo-400/20">
            <motion.div
                animate={{ x: [-20, 0, -20] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="inline-flex items-center gap-3"
            >
                <Sparkles className="w-3 h-3 text-indigo-200" /> {t.banner} <Sparkles className="w-3 h-3 text-indigo-200" />
            </motion.div>
            <div className="absolute inset-0 bg-white/10 animate-pulse-slow pointer-events-none" />
            <button
                onClick={dismiss}
                aria-label="Dismiss banner"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 opacity-60 hover:opacity-100 transition-opacity"
            >
                <X className="w-3.5 h-3.5" />
            </button>
        </div>
    );
};
