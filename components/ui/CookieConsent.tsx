"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, Check } from "lucide-react";

export const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [lang, setLang] = useState("en");

    useEffect(() => {
        if (typeof window !== "undefined") {
            if (navigator.language.startsWith("pl")) setLang("pl");
            const consent = localStorage.getItem("cookie_consent");
            if (consent === undefined || consent === null || consent === "") {
                const timer = setTimeout(() => setIsVisible(true), 1500);
                return () => clearTimeout(timer);
            }
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie_consent", "true");
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem("cookie_consent", "declined");
        setIsVisible(false);
    };

    const texts = {
        pl: { title: "Ciasteczka 🍪", desc: "Używamy plików cookie, aby zapewnić najlepszą jakość korzystania z naszej platformy.", accept: "Akceptuj", decline: "Odrzuć" },
        en: { title: "Cookies 🍪", desc: "We use cookies to ensure you get the best experience on our platform.", accept: "Accept", decline: "Decline" }
    };

    const t = lang === "pl" ? texts.pl : texts.en;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-6 left-4 right-4 md:left-auto md:right-6 md:w-[400px] z-[100]"
                >
                    <div className="bg-[#0c0c0e]/80 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl flex flex-col gap-4 relative overflow-hidden">
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-200%] animate-shimmer pointer-events-none" />

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-indigo-500/10 rounded-2xl text-indigo-400 shrink-0">
                                <Cookie className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white mb-1 text-sm">{t.title}</h4>
                                <p className="text-xs text-gray-400 leading-relaxed font-medium">
                                    {t.desc}
                                </p>
                            </div>
                            <button onClick={() => setIsVisible(false)} className="text-gray-500 hover:text-white transition-colors absolute top-4 right-4">
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                        <div className="flex gap-3 mt-2">
                            <button onClick={handleAccept} className="flex-1 py-2.5 bg-white text-black rounded-xl text-xs font-black uppercase tracking-wider hover:bg-indigo-50 transition-colors flex items-center justify-center gap-2">
                                <Check className="w-3 h-3" /> {t.accept}
                            </button>
                            <button onClick={handleDecline} className="flex-1 py-2.5 bg-white/5 text-gray-400 border border-white/10 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-white/10 hover:text-white transition-colors">
                                {t.decline}
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
