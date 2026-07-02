"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Rocket, Send } from "lucide-react";

const CONTACT_EMAIL = "contact@nextforge.app";

export const LiveChat = ({ t, lang }: { t: any; lang?: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [showNotification, setShowNotification] = useState(false);
    const [message, setMessage] = useState("");
    const lc = t?.livechat || {};
    const greeting = lc.greeting ?? "Hi there! 👋";
    const intro = lc.intro ?? "Have questions about NextForge? I'm here to help!";
    const placeholder = lc.placeholder ?? "Type a message...";
    const firstMessage = lc.firstMessage ?? "Hi! How can I help you today?";

    useEffect(() => {
        const NOTIF_KEY = "nf_chat_notif_shown";
        try {
            if (sessionStorage.getItem(NOTIF_KEY)) return;
        } catch (_) {}
        const timer = setTimeout(() => {
            if (!isOpen) {
                setShowNotification(true);
                try { sessionStorage.setItem(NOTIF_KEY, "1"); } catch (_) {}
            }
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    const handleSend = () => {
        const defaultSubject = lc.mailSubject ?? "NextForge – question from website";
        const defaultBody = lc.mailBodyFallback ?? "(Message from chat form)";
        const subject = encodeURIComponent(defaultSubject);
        const body = encodeURIComponent(message || defaultBody);
        window.open(`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`, "_blank");
        setMessage("");
    };

    return (
        <div className="fixed bottom-8 right-8 z-[300]">
            <AnimatePresence>
                {showNotification && !isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className="absolute bottom-20 right-0 w-64 p-5 rounded-2xl bg-indigo-600 text-white shadow-[0_20px_50px_rgba(79,70,229,0.4)] mb-2"
                    >
                        <div className="text-xs font-bold mb-1">{greeting}</div>
                        <div className="text-[11px] leading-relaxed opacity-90">
                            {intro}
                        </div>
                        <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-indigo-600 rotate-45" />
                        <button
                            onClick={(e) => { e.stopPropagation(); setShowNotification(false); }}
                            className="absolute top-2 right-2 opacity-50 hover:opacity-100 p-1"
                        >
                            <X className="w-3 h-3" />
                        </button>
                    </motion.div>
                )}

                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20, transformOrigin: "bottom right" }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="absolute bottom-20 right-0 w-[380px] h-[500px] rounded-3xl border border-white/10 bg-black/40 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col glass-morphism"
                    >
                        <div className="p-6 bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center border border-white/10">
                                    <Rocket className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-white">Arkadiusz</div>
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                        <span className="text-[10px] text-indigo-100 uppercase tracking-widest font-bold">Online</span>
                                    </div>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                                <X className="w-5 h-5 text-indigo-100" />
                            </button>
                        </div>
                        <div className="flex-1 p-6 space-y-4 overflow-y-auto">
                            <div className="flex gap-3">
                                <div className="w-8 h-8 rounded-full bg-indigo-600/20 flex items-center justify-center text-[10px] font-bold text-indigo-400 border border-indigo-500/20">AF</div>
                                <div className="max-w-[80%] p-4 rounded-2xl rounded-tl-none bg-white/[0.03] border border-white/10 text-[11px] text-gray-300 leading-relaxed shadow-inner">
                                    {firstMessage}
                                </div>
                            </div>
                        </div>
                        <div className="p-4 border-t border-white/5 flex gap-2 mb-2 px-6">
                            <input
                                type="text"
                                placeholder={placeholder}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                                className="flex-1 bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500/50"
                            />
                            <button type="button" onClick={handleSend} className="p-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl shadow-lg transition-colors" aria-label="Send">
                                <Send className="w-4 h-4" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => { setIsOpen(!isOpen); setShowNotification(false); }}
                className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 ${isOpen ? "bg-white text-black rotate-90" : "bg-indigo-600 text-white"}`}
            >
                {isOpen ? <X className="w-7 h-7" /> : <MessageSquare className="w-7 h-7" />}
            </motion.button>
            <span className="sr-only">{lc.openLabel ?? "Chat"}</span>
        </div>
    );
};
