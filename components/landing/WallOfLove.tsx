"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Star, TrendingUp, Zap, DollarSign } from "lucide-react";
import { SOCIAL_PROOF_STATS } from "@/lib/ls-utils";

interface Testimonial {
    name: string;
    role: string;
    company?: string;
    avatar: string;
    content: string;
    rating: number;
    revenue?: string;
    timeToLaunch?: string;
    badge?: string;
}

export const WallOfLove = ({ t }: { t: any }) => {
    const testimonials: Testimonial[] = t.testimonials?.items || [
        {
            name: "Alex Thompson",
            role: "Solo Founder",
            company: "TaskFlow AI",
            avatar: "AT",
            content: "Launched my SaaS in 48 hours. Already made $2,400 in the first month. NextForge saved me months of dev time.",
            rating: 5,
            revenue: "$2.4K/mo",
            timeToLaunch: "2 days",
            badge: "Verified Customer"
        },
        {
            name: "Sarah Chen",
            role: "Indie Hacker",
            company: "DocuSign Clone",
            avatar: "SC",
            content: "Best investment I made. The Lemon Squeezy integration alone saved me 20+ hours. Worth every penny.",
            rating: 5,
            revenue: "$1.8K/mo",
            timeToLaunch: "3 days"
        },
        {
            name: "Marcus Johnson",
            role: "Tech Lead → Founder",
            company: "API Monitor Pro",
            avatar: "MJ",
            content: "As someone who built MVPs from scratch before, this is a game-changer. Clean code, modern stack, zero bloat.",
            rating: 5,
            timeToLaunch: "4 days",
            badge: "Ex-FAANG"
        },
        {
            name: "Emma Rodriguez",
            role: "Product Designer",
            company: "Design Tools Hub",
            avatar: "ER",
            content: "Finally a boilerplate that doesn't look like everyone else's. The design is chef's kiss 👨‍🍳💋",
            rating: 5,
            revenue: "$3.2K/mo"
        },
        {
            name: "David Kim",
            role: "Serial Entrepreneur",
            company: "5 SaaS exits",
            avatar: "DK",
            content: "I've tried ShipFast, SaaSBoiler, and 3 others. NextForge is the only one I'd recommend. Modern, fast, and works.",
            rating: 5,
            badge: "5 Exits"
        },
        {
            name: "Lisa Wang",
            role: "Full-Stack Dev",
            company: "EmailFlow",
            avatar: "LW",
            content: "The documentation is incredible. Setup took 10 minutes. First payment in 6 days. This is the real deal.",
            rating: 5,
            revenue: "$950/mo",
            timeToLaunch: "5 days"
        }
    ];

    // Split into 3 columns for marquee effect
    const column1 = testimonials.slice(0, 2);
    const column2 = testimonials.slice(2, 4);
    const column3 = testimonials.slice(4, 6);

    const TestimonialCard = ({ testimonial, delay = 0 }: { testimonial: Testimonial; delay?: number }) => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="group p-6 rounded-2xl bg-[#0c0c0e] border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 mb-6"
        >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-black text-sm">
                        {testimonial.avatar}
                    </div>
                    <div>
                        <div className="font-bold text-white text-sm">{testimonial.name}</div>
                        <div className="text-xs text-gray-500">{testimonial.role}</div>
                        {testimonial.company && (
                            <div className="text-[10px] text-gray-600 font-mono">{testimonial.company}</div>
                        )}
                    </div>
                </div>
                {testimonial.badge && (
                    <Badge className="text-[9px] bg-green-500/10 text-green-400 border-green-500/20">
                        ✓ {testimonial.badge}
                    </Badge>
                )}
            </div>

            {/* Rating */}
            <div className="flex gap-0.5 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
                ))}
            </div>

            {/* Content */}
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                "{testimonial.content}"
            </p>

            {/* Metrics */}
            {(testimonial.revenue || testimonial.timeToLaunch) && (
                <div className="flex flex-wrap gap-2 pt-3 border-t border-white/5">
                    {testimonial.revenue && (
                        <div className="flex items-center gap-1.5 text-[10px] font-bold px-2 py-1 rounded-full bg-green-500/10 text-green-400">
                            <DollarSign className="w-3 h-3" />
                            {testimonial.revenue}
                        </div>
                    )}
                    {testimonial.timeToLaunch && (
                        <div className="flex items-center gap-1.5 text-[10px] font-bold px-2 py-1 rounded-full bg-indigo-500/10 text-indigo-400">
                            <Zap className="w-3 h-3" />
                            {t?.testimonialsExtra?.launchedIn || "Launched in"} {testimonial.timeToLaunch}
                        </div>
                    )}
                </div>
            )}
        </motion.div>
    );

    return (
        <section className="py-32 bg-black relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
            
            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <Badge className="mb-6">💜 Wall of Love</Badge>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
                        {t.testimonials?.title || (
                            <>
                                Real Founders.<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                                    Real Results.
                                </span>
                            </>
                        )}
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        {t.testimonials?.desc || "Join 500+ indie hackers who shipped their SaaS faster with NextForge"}
                    </p>
                </div>

                {/* Stats Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-8 mb-16 p-8 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm"
                >
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-black text-white mb-1">{SOCIAL_PROOF_STATS.customers}</div>
                        <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">{t?.testimonialsExtra?.statsCustomers || "Customers"}</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-black text-white mb-1">{SOCIAL_PROOF_STATS.revenueGenerated}</div>
                        <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">{t?.testimonialsExtra?.statsRevenue || "Revenue Generated"}</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-black text-white mb-1">{SOCIAL_PROOF_STATS.avgTimeToLaunch}</div>
                        <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">{t?.testimonialsExtra?.statsLaunch || "Avg. Time to Launch"}</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-black text-white mb-1">{SOCIAL_PROOF_STATS.rating}</div>
                        <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">{t?.testimonialsExtra?.statsRating || "Average Rating"}</div>
                    </div>
                </motion.div>

                {/* Testimonials Grid - Masonry Style */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    <div>
                        {column1.map((testimonial, i) => (
                            <TestimonialCard key={i} testimonial={testimonial} delay={i * 0.1} />
                        ))}
                    </div>
                    <div className="md:mt-12">
                        {column2.map((testimonial, i) => (
                            <TestimonialCard key={i} testimonial={testimonial} delay={i * 0.1 + 0.2} />
                        ))}
                    </div>
                    <div className="lg:mt-24 md:col-span-2 lg:col-span-1">
                        {column3.map((testimonial, i) => (
                            <TestimonialCard key={i} testimonial={testimonial} delay={i * 0.1 + 0.4} />
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">
                        {t?.testimonialsExtra?.cta || "Join them today"} →
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
