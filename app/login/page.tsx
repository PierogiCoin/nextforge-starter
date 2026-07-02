"use client";

import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight, Github, Chrome } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { FormEvent } from "react";
import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { dict } from "@/lib/dictionary";
import { getStoredLang } from "@/lib/lang-cookie";
import { saveCheckoutRecoveryEmail } from "@/lib/checkout-recovery";

type LoginCopy = {
    title?: string;
    subtitle?: string;
    submit?: string;
    connecting?: string;
    serverError?: string;
    invalidCredentials?: string;
};

function LoginInner() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const returnTo = searchParams.get("returnTo") || "/dashboard";
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const lang = (typeof window !== "undefined" ? getStoredLang() : null) || "pl";
    const dictRecord = dict as Record<string, { login?: LoginCopy }>;
    const t = dictRecord[lang]?.login || {};

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError(null);
        setIsLoading(true);

        const response = await fetch("/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            const payload = await response.json().catch(() => ({ error: t.serverError || "Server error" }));
            setError(payload.error || t.invalidCredentials || "Invalid credentials");
            setIsLoading(false);
            return;
        }

        saveCheckoutRecoveryEmail(email);
        router.push(returnTo);
    };

    return (
        <main className="min-h-screen bg-[#030307] flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 mesh-gradient opacity-40" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none" />
            <div className="noise-overlay opacity-[0.03]" />

            <div className="w-full max-w-md relative z-10">
                {/* Logo Area */}
                <Link href="/" className="flex items-center justify-center gap-3 mb-12 group">
                    <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-[0_10px_30px_rgba(79,70,229,0.4)] group-hover:rotate-12 transition-transform duration-500 overflow-hidden border border-white/20">
                        <Image src="/logo.png" alt="NextForge Logo" width={56} height={56} className="w-full h-full object-cover scale-150" />
                    </div>
                    <span className="text-3xl font-black text-white tracking-tighter">NextForge</span>
                </Link>

                {/* Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-10 rounded-[2.5rem] border border-white/10 bg-black/40 backdrop-blur-2xl shadow-[0_40px_100px_rgba(0,0,0,0.5)] glass-morphism"
                >
                    <div className="text-center mb-10">
                        <h1 className="text-2xl font-black text-white uppercase tracking-tighter mb-2 italic">{t.title || "Witaj ponownie"}</h1>
                        <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">{t.subtitle || "Wpisz swoje dane, aby uzyskać dostęp"}</p>
                    </div>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Email</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-12 py-4 text-sm text-white focus:outline-none focus:border-indigo-500/50 transition-all shadow-inner"
                                placeholder="name@company.com"
                                required
                            />
                        </div>
                    </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center ml-1">
                                <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Hasło</label>
                                <Link href="mailto:contact@nextforge.app?subject=Reset%20hasła%20–%20NextForge" className="text-[10px] font-black text-indigo-400 uppercase tracking-widest hover:text-indigo-300 transition-colors">Zapomniałeś?</Link>
                            </div>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-12 py-4 text-sm text-white focus:outline-none focus:border-indigo-500/50 transition-all shadow-inner"
                                placeholder="••••••••"
                                required
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-indigo-500 transition-all shadow-[0_10px_30px_rgba(79,70,229,0.3)] hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={isLoading}
                    >
                        {isLoading ? (t.connecting || "Łączenie...") : (t.submit || "Zaloguj Się")} <ArrowRight className="w-4 h-4" />
                    </button>
                    {error && (
                        <div className="text-red-400 text-center text-xs font-bold uppercase tracking-widest">
                            {error}
                        </div>
                    )}
                    </form>

                    <div className="relative my-10">
                        <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/5"></div></div>
                        <div className="relative flex justify-center"><span className="px-4 bg-transparent text-[10px] font-black text-gray-600 uppercase tracking-widest">Lub kontynuuj przez</span></div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <button className="flex items-center justify-center gap-3 py-4 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] transition-all text-[10px] font-black text-white uppercase tracking-widest">
                            <Github className="w-4 h-4" /> GitHub
                        </button>
                        <button className="flex items-center justify-center gap-3 py-4 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] transition-all text-[10px] font-black text-white uppercase tracking-widest">
                            <Chrome className="w-4 h-4" /> Google
                        </button>
                    </div>

                    <p className="text-center mt-10 text-[10px] font-black text-gray-500 uppercase tracking-widest">
                        Nie masz konta?{" "}
                        <Link href="/register" className="text-indigo-400 hover:text-indigo-300 transition-all italic">Zarejestruj się</Link>
                    </p>
                </motion.div>
            </div>
        </main>
    );
}

export default function LoginPage() {
    return (
        <Suspense>
            <LoginInner />
        </Suspense>
    );
}
