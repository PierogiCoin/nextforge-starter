"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";

// Using React Icons for authentic logos (need to install react-icons or use placeholders)
// If react-icons is not available, I will use text or lucide icons. 
// Assuming standard Next environment where I can install if missing, but let's be safe and use lucide/text 
// or SVG paths if I don't want to risk import errors. 
// Actually, let's use Lucide with Names for reliability, but styled better.

import { Rocket, Zap, Database, Code2, CreditCard, Sparkles, Box, Lock, Mail, FileCode } from "lucide-react";

const technologies = [
    { icon: <Rocket className="w-6 h-6" />, name: "Next.js 15" },
    { icon: <FileCode className="w-6 h-6" />, name: "TypeScript" },
    { icon: <Zap className="w-6 h-6" />, name: "Tailwind 4" },
    { icon: <Database className="w-6 h-6" />, name: "Supabase" },
    { icon: <Code2 className="w-6 h-6" />, name: "Prisma ORM" },
    { icon: <Lock className="w-6 h-6" />, name: "NextAuth v5" },
    { icon: <CreditCard className="w-6 h-6" />, name: "Lemon Squeezy" },
    { icon: <Mail className="w-6 h-6" />, name: "Resend" },
    { icon: <Sparkles className="w-6 h-6" />, name: "Framer Motion" },
];

export const TechStack = ({ t }: { t: any }) => (
    <section className="py-24 bg-black relative overflow-hidden border-y border-white/5">
        <div className="container mx-auto px-4 text-center mb-12">
            <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">
                {t.tech.title}
            </p>
        </div>

        <div className="flex overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

            <motion.div
                className="flex gap-16 items-center px-16"
                animate={{ x: "-50%" }}
                transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            >
                {[...technologies, ...technologies, ...technologies].map((tech, i) => (
                    <div key={i} className="flex items-center gap-3 opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 cursor-default group shrink-0">
                        <div className="text-indigo-400 group-hover:text-indigo-300 transition-colors">
                            {tech.icon}
                        </div>
                        <span className="text-lg font-bold text-white tracking-tight">{tech.name}</span>
                    </div>
                ))}
            </motion.div>
        </div>
    </section>
);
