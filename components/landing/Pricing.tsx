"use client";

import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { openLSCheckout, LEMON_SQUEEZY_CONFIG } from "@/lib/ls-utils";

export const Pricing = ({ t }: { t: any }) => (
    <section id="pricing" className="py-40 bg-black text-center">
        <div className="container mx-auto px-4">
            <Badge>{t.pricing.badge}</Badge>
            <h2 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter uppercase italic leading-[0.8]">{t.pricing.title1} <br /><span className="text-white opacity-40">{t.pricing.title2}</span></h2>
            <p className="text-gray-400 text-lg md:text-xl font-medium mb-24">{t.pricing.desc}</p>
            <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto text-left">
                <div className="p-12 rounded-[3rem] border border-white/10 bg-white/[0.01] flex flex-col glass-morphism">
                    <div className="text-6xl font-black text-white mb-6 tracking-tighter">{t.pricing.standard.price}</div>
                    <h4 className="text-gray-500 font-black uppercase text-[10px] mb-8">{t.pricing.standard.title}</h4>
                    <p className="text-xs text-gray-400 mb-12 font-bold uppercase">{t.pricing.standard.desc}</p>
                    <Button
                        variant="secondary"
                        className="w-full"
                        onClick={() => openLSCheckout(LEMON_SQUEEZY_CONFIG.checkoutUrls.standard)}
                    >
                        {t.pricing.buyNow}
                    </Button>
                </div>
                <div className="p-12 rounded-[3rem] border border-indigo-600 bg-indigo-600/[0.05] flex flex-col scale-105 shadow-2xl glass-morphism">
                    <div className="absolute -top-5 right-12 bg-indigo-600 text-white text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-widest">{t.pricing.pro.badge}</div>
                    <div className="text-7xl font-black text-white mb-6 tracking-tighter italic">{t.pricing.pro.price}</div>
                    <h4 className="text-indigo-400 font-black uppercase text-[10px] mb-8">{t.pricing.pro.title}</h4>
                    <p className="text-xs text-indigo-100/60 mb-12 font-black uppercase">{t.pricing.pro.desc}</p>
                    <Button
                        variant="glow"
                        className="w-full"
                        glow
                        onClick={() => openLSCheckout(LEMON_SQUEEZY_CONFIG.checkoutUrls.pro)}
                    >
                        {t.pricing.buyNowPro}
                    </Button>
                </div>
            </div>
            {(t?.trustBadges || t.pricing.secure) && (
                <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-12 text-center">
                    {t?.trustBadges
                        ? `${t.trustBadges.secure} · ${t.trustBadges.instant} · ${t.trustBadges.guarantee}`
                        : t.pricing.secure}
                </p>
            )}
        </div>
    </section>
);
