"use client";

import { motion } from "framer-motion";
import { Rocket, Code2, Heart, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/seo";

export default function AboutPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Arkadiusz Łyczkowski",
    description:
      "Twórca stron internetowych i automatyzacji z Polski. Specjalizuję się w Next.js i React. Buduję NextForge — starter kit dla indie hackerów.",
    url: siteConfig.url,
    email: "lykos114@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "PL",
    },
  };

  return (
    <main className="min-h-screen bg-[#030307] text-gray-300 font-medium p-4 md:p-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-2xl mx-auto relative z-10">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-indigo-400 hover:text-white transition-colors mb-12 uppercase text-[10px] font-black tracking-widest"
        >
          <ArrowLeft className="w-4 h-4" /> Powrót
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-10"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-600/20">
              <Rocket className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-black text-white tracking-tighter">
                Arkadiusz Łyczkowski
              </h1>
              <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mt-1">
                NextForge · Polska 🇵🇱
              </p>
            </div>
          </div>

          <div className="space-y-6 text-base leading-relaxed">
            <p>
              Jestem twórcą stron internetowych i automatyzacji z Polski — specjalizuję się w <strong className="text-white">Next.js, React</strong> i budowaniu produktów cyfrowych. NextForge powstało z prostej potrzeby: <strong className="text-white">budować szybciej i zarabiać na tym, co robisz</strong>.
            </p>
            <p>
              <Code2 className="w-5 h-5 text-indigo-400 inline-block mr-2 -mt-0.5" />
              Zamiast w kółko konfigurować auth, płatności i dashboard dla każdego klienta — spakowałem to w jeden starter i udostępniam innym twórcom. Stack (Next.js 15, Tailwind 4, Lemon Squeezy, Supabase) dobrany pod realne wdrożenia produkcyjne.
            </p>
            <p>
              <Heart className="w-5 h-5 text-indigo-400 inline-block mr-2 -mt-0.5" />
              Masz pytania albo chcesz po prostu pogadać o Next.js i automatyzacjach? Napisz:{" "}
              <a href="mailto:lykos114@gmail.com" className="text-indigo-400 hover:text-white underline underline-offset-2">
                lykos114@gmail.com
              </a>
            </p>
          </div>

          <Link
            href="/#products"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold text-sm transition-colors"
          >
            Zobacz ofertę <ArrowLeft className="w-4 h-4 rotate-180" />
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
