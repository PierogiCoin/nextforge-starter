"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Sparkles, Bot, Database, Zap, Mail, Calendar, FileText, ShoppingCart, MessageSquare } from "lucide-react";

interface Example {
    icon: React.ReactNode;
    title: string;
    description: string;
    features: string[];
    buildTime: string;
    revenue: string;
    gradient: string;
}

export const SaaSExamples = ({ t }: { t: any }) => {
    const examples: Example[] = t?.saasExamples?.examples || [
        {
            icon: <Bot className="w-8 h-8" />,
            title: "AI Writing Assistant",
            description: "GPT-powered content generator for marketers and creators",
            features: [
                "OpenAI integration ready",
                "Credit system included",
                "Beautiful text editor",
                "Export to PDF/Markdown"
            ],
            buildTime: "2-3 days",
            revenue: "~$3K/mo potential",
            gradient: "from-purple-600 to-pink-600"
        },
        {
            icon: <Mail className="w-8 h-8" />,
            title: "Email Newsletter Platform",
            description: "Substack alternative for independent creators",
            features: [
                "Subscriber management",
                "Email scheduling",
                "Resend integration",
                "Analytics dashboard"
            ],
            buildTime: "3-4 days",
            revenue: "~$2K/mo potential",
            gradient: "from-blue-600 to-cyan-600"
        },
        {
            icon: <Database className="w-8 h-8" />,
            title: "Directory/Marketplace",
            description: "Curated directory for your niche (like Indie Hackers for X)",
            features: [
                "Submit & approval flow",
                "Search & filters",
                "Paid listings",
                "User profiles"
            ],
            buildTime: "4-5 days",
            revenue: "~$5K/mo potential",
            gradient: "from-green-600 to-emerald-600"
        },
        {
            icon: <Calendar className="w-8 h-8" />,
            title: "Booking/Scheduling SaaS",
            description: "Calendly alternative for consultants and agencies",
            features: [
                "Calendar integration",
                "Payment processing",
                "Email reminders",
                "Client management"
            ],
            buildTime: "5-6 days",
            revenue: "~$4K/mo potential",
            gradient: "from-orange-600 to-red-600"
        },
        {
            icon: <FileText className="w-8 h-8" />,
            title: "Document Generator",
            description: "Generate contracts, invoices, or PDFs with templates",
            features: [
                "React-PDF ready",
                "Template system",
                "Digital signatures",
                "Cloud storage"
            ],
            buildTime: "3-4 days",
            revenue: "~$2.5K/mo potential",
            gradient: "from-indigo-600 to-purple-600"
        },
        {
            icon: <MessageSquare className="w-8 h-8" />,
            title: "Review/Feedback Platform",
            description: "Collect and showcase testimonials (like Testimonial.to)",
            features: [
                "Video/text reviews",
                "Embed widgets",
                "Auto-moderation",
                "Social sharing"
            ],
            buildTime: "2-3 days",
            revenue: "~$3K/mo potential",
            gradient: "from-pink-600 to-rose-600"
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "API-as-a-Service",
            description: "Sell access to your API (data, scraping, validation)",
            features: [
                "API key management",
                "Rate limiting",
                "Usage tracking",
                "Developer docs"
            ],
            buildTime: "3-4 days",
            revenue: "~$6K/mo potential",
            gradient: "from-yellow-600 to-orange-600"
        },
        {
            icon: <ShoppingCart className="w-8 h-8" />,
            title: "Digital Product Store",
            description: "Sell templates, courses, or digital downloads",
            features: [
                "Product catalog",
                "Secure downloads",
                "License keys",
                "Affiliate system"
            ],
            buildTime: "4-5 days",
            revenue: "~$4K/mo potential",
            gradient: "from-teal-600 to-green-600"
        }
    ];

    return (
        <section className="py-32 bg-[#050507] relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
            
            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <Badge className="mb-6">
                        <Sparkles className="w-3 h-3 mr-2 inline" />
                        What You Can Build
                    </Badge>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
                        {t?.saasExamples?.title || (
                            <>
                                Turn NextForge Into <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-gradient-x">
                                    Any SaaS You Imagine
                                </span>
                            </>
                        )}
                    </h2>
                    <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                        {t?.saasExamples?.desc || "Here are 8 proven SaaS ideas you can build and launch with NextForge. Pick one, customize it, and start earning."}
                    </p>
                </div>

                {/* Examples Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
                    {examples.map((example, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative rounded-2xl bg-[#0c0c0e] border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 hover:scale-[1.02]"
                        >
                            {/* Gradient Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${example.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                            
                            <div className="relative p-6">
                                {/* Icon */}
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${example.gradient} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    {example.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-black text-white mb-2">
                                    {example.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                                    {example.description}
                                </p>

                                {/* Features */}
                                <ul className="space-y-2 mb-4">
                                    {example.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-2 text-xs text-gray-500">
                                            <div className={`mt-0.5 w-1 h-1 rounded-full bg-gradient-to-r ${example.gradient}`} />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* Stats */}
                                <div className="pt-4 border-t border-white/5 space-y-2">
                                    <div className="flex items-center justify-between text-xs">
                                        <span className="text-gray-500 font-bold">Build Time:</span>
                                        <span className="text-gray-300 font-bold">{example.buildTime}</span>
                                    </div>
                                    <div className="flex items-center justify-between text-xs">
                                        <span className="text-gray-500 font-bold">Revenue Potential:</span>
                                        <span className={`font-black bg-gradient-to-r ${example.gradient} bg-clip-text text-transparent`}>
                                            {example.revenue}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Hover Glow */}
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}>
                                <div className={`absolute -inset-0.5 bg-gradient-to-r ${example.gradient} blur-xl opacity-30`} />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="p-8 rounded-2xl bg-gradient-to-r from-indigo-600/10 via-purple-600/10 to-pink-600/10 border border-white/10">
                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            <div>
                                <div className="text-3xl md:text-4xl font-black text-white mb-2">
                                    2-6 days
                                </div>
                                <div className="text-sm text-gray-400 font-bold">
                                    Average Build Time
                                </div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-black text-white mb-2">
                                    $2-6K/mo
                                </div>
                                <div className="text-sm text-gray-400 font-bold">
                                    Revenue Potential
                                </div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-black text-white mb-2">
                                    ∞
                                </div>
                                <div className="text-sm text-gray-400 font-bold">
                                    Possibilities
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <p className="text-gray-400 text-sm mb-6 max-w-2xl mx-auto">
                        These are just examples. With NextForge's flexible architecture, you can build <span className="font-bold text-white">any</span> SaaS you can imagine.
                    </p>
                    <a
                        href="#products"
                        className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-xl font-bold transition-all hover:scale-105 shadow-lg shadow-indigo-600/25"
                    >
                        Start Building Your SaaS →
                    </a>
                </motion.div>
            </div>
        </section>
    );
};
