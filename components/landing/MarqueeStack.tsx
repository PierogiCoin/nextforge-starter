"use client";

import React from "react";

export const MarqueeStack = () => {
    const techs = ["Next.js 15", "React 19", "Tailwind 4", "Supabase", "Prisma", "Stripe", "Lemon Squeezy", "Framer Motion", "Lucide", "TypeScript"];
    return (
        <div className="py-16 border-y border-white/5 bg-black/60 backdrop-blur-3xl overflow-hidden relative">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
            <div className="flex gap-16 animate-gradient-x whitespace-nowrap">
                {[...techs, ...techs, ...techs].map((tech, i) => (
                    <span key={i} className="text-gray-500 font-black text-xs uppercase tracking-[0.4em] opacity-50 hover:opacity-100 hover:text-indigo-400 transition-all duration-500 cursor-default">
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
};
