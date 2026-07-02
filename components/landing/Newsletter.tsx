"use client";

import { motion } from "framer-motion";
import { Send, Zap } from "lucide-react";
import { useState } from "react";
import { saveCheckoutRecoveryEmail } from "@/lib/checkout-recovery";

type NewsletterCopy = {
    newsletter?: {
        ctaTitle?: string;
        ctaDesc?: string;
        successMsg?: string;
        btnSubmit?: string;
        countText?: string;
        errorMsg?: string;
        placeholder?: string;
    };
    footer?: {
        newsletter?: {
            ctaTitle?: string;
            ctaDesc?: string;
            successMsg?: string;
            btnSubmit?: string;
            countText?: string;
            errorMsg?: string;
            placeholder?: string;
        };
    };
};

const newsletterDict = (t: NewsletterCopy) => {
    const n = t?.newsletter ?? t?.footer?.newsletter ?? {};
    return {
        ctaTitle: n.ctaTitle ?? "Join the Elite",
        ctaDesc: n.ctaDesc ?? "Sign up and get -50% launch discount. No spam, just real updates.",
        successMsg: n.successMsg ?? "Welcome aboard! Check your email soon. 🚀",
        btnSubmit: n.btnSubmit ?? "Sign me up",
        countText: n.countText ?? "Builders already joined",
        errorMsg: n.errorMsg ?? "Something went wrong. Please try again or contact support.",
    };
};

export const Newsletter = ({ t }: { t: NewsletterCopy }) => {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [serverError, setServerError] = useState<string | null>(null);
    const n = newsletterDict(t);
    const emailPlaceholder = t?.footer?.newsletter?.placeholder ?? t?.newsletter?.placeholder ?? "founder@mystartup.com";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (status === "loading") return;
        setStatus("loading");
        setServerError(null);
        try {
            const res = await fetch("/api/newsletter", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });
            const data = await res.json().catch(() => ({}));
            if (!res.ok) {
                setServerError(data?.error || "Subscription failed");
                setStatus("error");
                return;
            }
            saveCheckoutRecoveryEmail(email);
            setStatus("success");
        } catch {
            setStatus("error");
        }
    };

    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
                <div className="p-12 md:p-20 rounded-[3rem] border border-white/10 bg-white/[0.02] backdrop-blur-3xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Zap className="w-40 h-40 text-indigo-500 rotate-12" />
                    </div>

                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase italic font-bubbly">
                        {n.ctaTitle}
                    </h2>
                    <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto font-medium leading-relaxed">
                        {n.ctaDesc}
                    </p>

                    {status === "success" ? (
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="p-6 rounded-2xl bg-green-500/10 border border-green-500/20 text-green-400 font-black uppercase text-xs tracking-widest"
                        >
                            {n.successMsg}
                        </motion.div>
                    ) : status === "error" ? (
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="p-6 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 font-bold text-sm"
                        >
                            {serverError || n.errorMsg}
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                required
                                placeholder={emailPlaceholder}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
                                disabled={status === "loading"}
                            />
                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className={`px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] shadow-lg flex items-center justify-center gap-3 transition-all ${status === "loading" ? "opacity-50 cursor-not-allowed" : "active:scale-95"}`}
                            >
                                {status === "loading" ? (
                                    <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                                ) : (
                                    <>
                                        <Send className="w-4 h-4" />
                                        {n.btnSubmit}
                                    </>
                                )}
                            </button>
                        </form>
                    )}

                    <div className="mt-8 flex items-center justify-center gap-4 text-[10px] font-black uppercase tracking-widest text-gray-500">
                        <span className="flex h-2 w-2 rounded-full bg-green-500" />
                        {n.countText}
                    </div>
                </div>
            </div>
        </section>
    );
};
