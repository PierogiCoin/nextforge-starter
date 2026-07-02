"use client";

import Link from "next/link";
import { Github, Twitter, Mail, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/seo";
import { useState } from "react";

type FooterCopy = {
    footer: {
        tagline: string;
        status: string;
        newsletter: {
            title: string;
            desc: string;
            placeholder: string;
            btn: string;
        };
        product: { title: string };
        company: { title: string; about: string; contact: string };
        legal: { privacy: string; terms: string };
        by: string;
    };
    nav: { features: string; pricing: string; demo: string; docs: string; blog: string };
};

export const Footer = ({ t }: { t: FooterCopy }) => {
    const [footerEmail, setFooterEmail] = useState("");
    const [footerStatus, setFooterStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleFooterNewsletter = async (e: React.FormEvent) => {
        e.preventDefault();
        if (footerStatus === "loading") return;
        setFooterStatus("loading");
        try {
            const res = await fetch("/api/newsletter", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: footerEmail }),
            });
            if (!res.ok) throw new Error("Failed");
            setFooterStatus("success");
            setFooterEmail("");
        } catch {
            setFooterStatus("error");
        }
    };

    return (
        <footer className="bg-[#050507] border-t border-white/5 pt-32 pb-12 relative overflow-hidden text-sm">
            {/* Ambient Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-24">

                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-3 mb-8 group">
                            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-500 overflow-hidden border border-white/20">
                                <div className="font-black text-white text-lg">NF</div>
                            </div>
                            <div className="text-2xl font-black tracking-tighter text-white">Next<span className="text-indigo-500">Forge</span></div>
                        </Link>
                        <p className="text-gray-400 mb-8 leading-relaxed max-w-xs">
                            {t.footer.tagline}
                        </p>
                        <div className="flex items-center gap-2 text-xs font-bold text-green-500 bg-green-500/10 px-3 py-1.5 rounded-full w-fit border border-green-500/20">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            {t.footer.status}
                        </div>
                    </div>

                    {/* Newsletter Column */}
                    <div className="lg:col-span-2">
                        <h4 className="font-bold text-white mb-6 flex items-center gap-2">
                            {t.footer.newsletter.title} <Mail className="w-4 h-4 text-indigo-500" />
                        </h4>
                        <p className="text-gray-500 text-xs mb-4">
                            {t.footer.newsletter.desc}
                        </p>
                        {footerStatus === "success" ? (
                            <p className="text-green-400 text-xs font-bold uppercase tracking-wider">
                                ✓ {t.footer.newsletter.btn}
                            </p>
                        ) : (
                            <form onSubmit={handleFooterNewsletter} className="flex gap-2">
                                <input
                                    type="email"
                                    required
                                    value={footerEmail}
                                    onChange={(e) => setFooterEmail(e.target.value)}
                                    placeholder={t.footer.newsletter.placeholder}
                                    disabled={footerStatus === "loading"}
                                    className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 w-full disabled:opacity-60"
                                />
                                <button
                                    type="submit"
                                    disabled={footerStatus === "loading"}
                                    className="bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg px-4 py-2 transition-colors disabled:opacity-60 shrink-0"
                                    aria-label={t.footer.newsletter.btn}
                                >
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h4 className="font-bold text-white mb-6">{t.footer.product.title}</h4>
                        <ul className="space-y-4 text-gray-500 font-medium">
                            <li><Link href="/#products" className="hover:text-white transition-colors">{t.nav.features}</Link></li>
                            <li><Link href="/#products" className="hover:text-white transition-colors">{t.nav.pricing}</Link></li>
                            <li><Link href="/demo/dashboard" className="hover:text-white transition-colors">{t.nav.demo}</Link></li>
                            <li><Link href="/docs" className="hover:text-white transition-colors">{t.nav.docs}</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">{t.footer.company.title}</h4>
                        <ul className="space-y-4 text-gray-500 font-medium">
                            <li><Link href="/blog" className="hover:text-white transition-colors">{t.nav.blog}</Link></li>
                            <li><Link href="/about" className="hover:text-white transition-colors">{t.footer.company.about}</Link></li>
                            <li><Link href="/conversions" className="hover:text-white transition-colors">Konwersje</Link></li>
                            <li><Link href="/changelog" className="hover:text-white transition-colors">Changelog</Link></li>
                            <li><Link href="/roadmap" className="hover:text-white transition-colors">Roadmap</Link></li>
                            <li><a href="mailto:contact@nextforge.app" className="hover:text-white transition-colors">{t.footer.company.contact}</a></li>
                        </ul>
                    </div>

                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-gray-600 text-xs font-medium">
                        &copy; {new Date().getFullYear()} NextForge. {t.footer.by}
                    </div>

                    <div className="flex gap-6">
                        <a href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" aria-label="Twitter"><Twitter className="w-4 h-4" /></a>
                        <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" aria-label="GitHub"><Github className="w-4 h-4" /></a>
                    </div>

                    <div className="flex gap-6 text-xs font-bold text-gray-600 uppercase tracking-wider">
                        <Link href="/privacy" className="hover:text-white transition-colors">{t.footer.legal.privacy}</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">{t.footer.legal.terms}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
