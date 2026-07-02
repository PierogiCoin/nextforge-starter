"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Rocket, MoveLeft, Home } from "lucide-react";

export default function NotFoundClient() {
    return (
        <div className="min-h-screen bg-[#030307] flex items-center justify-center relative overflow-hidden text-white font-sans p-4">
            {/* Background Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none" />
            <div className="noise-overlay opacity-[0.05]" />

            {/* Stars */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[length:200px_200px] [background-image:radial-gradient(circle,#fff_1px,transparent_1px)]" aria-hidden="true" />

            <div className="text-center relative z-10 max-w-2xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="mb-8 relative inline-flex items-center justify-center">
                        <div className="text-[120px] md:text-[200px] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent tracking-tighter select-none blur-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
                            404
                        </div>

                        <motion.div
                            animate={{
                                y: [-20, 20, -20],
                                rotate: [0, 5, -5, 0],
                                scale: [1, 1.05, 1]
                            }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            className="relative z-10"
                        >
                            <div className="w-40 h-40 bg-indigo-600/20 rounded-full blur-[50px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                            <Rocket className="w-32 h-32 text-indigo-500 drop-shadow-[0_0_30px_rgba(99,102,241,0.6)]" />
                        </motion.div>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-white">
                        Houston, mamy problem.
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl mb-12 font-medium leading-relaxed">
                        Strona, której szukasz, zaginęła w przestrzeni kosmicznej lub została przeniesiona do innego wymiaru.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <Link
                            href="/"
                            className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-wider hover:bg-indigo-500 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-indigo-600/20 flex items-center gap-2 group"
                        >
                            <Home className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" /> Wróć do bazy
                        </Link>
                        <button
                            onClick={() => window.history.back()}
                            className="px-8 py-4 bg-white/5 border border-white/10 text-gray-300 rounded-2xl font-bold uppercase tracking-wider hover:bg-white/10 hover:text-white transition-all flex items-center gap-2"
                        >
                            <MoveLeft className="w-4 h-4" /> Cofnij się
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
