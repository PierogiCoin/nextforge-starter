"use client";

import { motion } from "framer-motion";
import { Star, MessageSquare } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

const testimonials = [
    { name: "Adam Kowalski", role: "Indie Hacker", text: "Najlepszy starter kit jaki kupiłem. Zwrócił się w 3 dni!", handle: "@adam_code" },
    { name: "Sara Smith", role: "Frontend Dev", text: "Design jest obłędny. Klienci pytają, kto to projektował.", handle: "@sara_frontend" },
    { name: "Marek Z.", role: "SaaS Founder", text: "Oszczędziłem 2 tygodnie pracy. Auth i płatności działają od strzała.", handle: "@marek_saas" },
    { name: "TechCrunch", role: "Media", text: "NextForge redefiniuje, jak szybko można wejść na rynek.", handle: "@techcrunch" },
    { name: "Julia N.", role: "Designer", text: "Typografia i kolory to mistrzostwo świata. Polecam!", handle: "@julia_ux" },
    { name: "Tomek K.", role: "Fullstack", text: "Kod jest czysty i dobrze otypowany. Żadnych bugów.", handle: "@tomek_dev" },
    { name: "ProductHunt", role: "Platform", text: "Jeden z najlepszych produktów dnia. Gratulacje!", handle: "@producthunt" },
    { name: "Karol W.", role: "CTO", text: "Wdrożyliśmy to w firmie dla 3 projektów. Działa wyśmienicie.", handle: "@karol_cto" },
];

const TestimonialCard = ({ item }: { item: typeof testimonials[0] }) => (
    <div className="w-[300px] md:w-[400px] p-6 rounded-2xl bg-[#0c0c0e] border border-white/10 hover:border-indigo-500/30 transition-colors shrink-0 mx-4">
        <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-white text-sm">
                {item.name.charAt(0)}
            </div>
            <div>
                <div className="font-bold text-white text-sm">{item.name}</div>
                <div className="text-xs text-gray-500">{item.handle}</div>
            </div>
            <div className="ml-auto flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                ))}
            </div>
        </div>
        <p className="text-gray-300 text-sm leading-relaxed mb-4">
            "{item.text}"
        </p>
        <div className="flex items-center gap-2 text-[10px] text-gray-500 font-bold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
            Verified Purchase
        </div>
    </div>
);

export const TestimonialsMarquee = ({ t }: { t: any }) => {
    return (
        <section className="py-32 bg-black overflow-hidden relative">
            <div className="container mx-auto px-4 text-center mb-16 relative z-10">
                <Badge>Wall of Love</Badge>
                <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
                    Zaufali nam <span className="text-indigo-500">najlepsi.</span>
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    Dołącz do setek zadowolonych twórców, którzy budują szybciej dzięki NextForge.
                </p>
            </div>

            {/* Gradient Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-20 md:w-60 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 md:w-60 bg-gradient-to-l from-black to-transparent z-10" />

            {/* Row 1: Left */}
            <div className="flex mb-8 overflow-hidden">
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-50%" }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="flex"
                >
                    {[...testimonials, ...testimonials, ...testimonials].map((item, i) => (
                        <TestimonialCard key={i} item={item} />
                    ))}
                </motion.div>
            </div>

            {/* Row 2: Right */}
            <div className="flex overflow-hidden">
                <motion.div
                    initial={{ x: "-50%" }}
                    animate={{ x: 0 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="flex"
                >
                    {[...testimonials, ...testimonials, ...testimonials].map((item, i) => (
                        <TestimonialCard key={i} item={item} />
                    ))}
                </motion.div>
            </div>

        </section>
    );
};
