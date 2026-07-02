"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import Link from "next/link";

interface BlogHeaderProps {
    title: string;
    author: string;
    date: string;
    readTime?: string;
}

export const BlogHeader = ({ title, author, date, readTime = "5 min read" }: BlogHeaderProps) => {
    return (
        <div className="relative w-full mb-16 pt-20">
            {/* Ambient Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-30 pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-[100px] rounded-full mix-blend-screen"
                />
            </div>

            <div className="container mx-auto px-4 max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-white mb-8 transition-colors group">
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-colors">
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                        </div>
                        <span className="uppercase tracking-widest text-[10px]">Wróć do bazy</span>
                    </Link>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-gray-400 mb-10 leading-tight tracking-tight drop-shadow-2xl"
                >
                    {title}
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="flex flex-wrap gap-6 text-sm font-medium text-gray-400 border-y border-white/5 py-6 backdrop-blur-sm bg-white/[0.02] rounded-2xl px-6"
                >
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-xs font-bold text-white shadow-lg ring-2 ring-black">
                            {author.charAt(0)}
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Autor</span>
                            <span className="text-white">{author}</span>
                        </div>
                    </div>

                    <div className="w-px h-10 bg-white/10 mx-2 hidden sm:block" />

                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                            <Calendar className="w-4 h-4 text-indigo-400" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Opublikowano</span>
                            <span className="text-gray-200">{date}</span>
                        </div>
                    </div>

                    <div className="w-px h-10 bg-white/10 mx-2 hidden sm:block" />

                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                            <Clock className="w-4 h-4 text-pink-400" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Czas czytania</span>
                            <span className="text-gray-200">{readTime}</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
