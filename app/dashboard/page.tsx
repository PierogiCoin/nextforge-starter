"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  BookOpen,
  ExternalLink,
  Key,
  Rocket,
  Github,
  ArrowRight,
  Sparkles,
} from "lucide-react";

type DashboardSession = {
  name: string;
  email: string;
  plan: string;
  expiry: string;
};

function useSession() {
  const [session, setSession] = useState<DashboardSession | null>(null);
  useEffect(() => {
    let mounted = true;
    const loadSession = async () => {
      const response = await fetch("/api/auth/session", {
        method: "GET",
        cache: "no-store",
      });
      if (!response.ok || !mounted) return;
      const payload = (await response.json()) as { session?: DashboardSession };
      if (payload.session) {
        setSession(payload.session);
      }
    };

    loadSession().catch((error) => {
      console.error("[dashboard/session]", error);
    });

    return () => {
      mounted = false;
    };
  }, []);
  return session;
}

export default function DashboardOverviewPage() {
  const session = useSession();
  const userName = session?.name ?? "Użytkowniku";
  const plan = session?.plan ?? "NextForge PRO";
  const planExpiry = session?.expiry ?? "Dożywotni dostęp";
  const quickActions = [
    {
      title: "Dokumentacja",
      desc: "Instalacja, konfiguracja, wdrożenie",
      href: "/docs",
      icon: BookOpen,
      external: false,
    },
    {
      title: "Demo dashboardu",
      desc: "Zobacz podgląd w akcji",
      href: "/demo/dashboard",
      icon: Rocket,
      external: false,
    },
    {
      title: "Repozytorium GitHub",
      desc: "Kod źródłowy (po zakupie)",
      href: "https://github.com/nextforge/starter",
      icon: Github,
      external: true,
    },
  ];

  return (
    <div className="max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <h1 className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-2">
          {`Cześć, ${userName} 👋`}
        </h1>
        <p className="text-gray-500 text-sm font-medium">
          Oto centrum Twojego konta NextForge. Pobierz kod, sprawdź licencje i faktury.
        </p>
      </motion.div>

      {/* Plan card */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="p-8 rounded-3xl border border-indigo-500/20 bg-gradient-to-br from-indigo-600/10 to-purple-600/5 mb-10"
      >
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center">
              <Key className="w-7 h-7 text-white" />
            </div>
            <div>
              <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-1">
                Twój plan
              </p>
              <h2 className="text-xl font-black text-white tracking-tight">
                {plan}
              </h2>
              <p className="text-gray-500 text-sm mt-0.5">{planExpiry}</p>
            </div>
          </div>
          <Link
            href="/dashboard/licenses"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-sm font-bold transition-colors border border-white/10"
          >
            Moje licencje <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.div>

      {/* Quick actions */}
      <div className="mb-8">
        <h3 className="text-sm font-black text-gray-500 uppercase tracking-widest mb-6">
          Szybkie akcje
        </h3>
        <div className="grid gap-4 sm:grid-cols-3">
          {quickActions.map((action, i) => {
            const Icon = action.icon;
            const content = (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/15 transition-all group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/10 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm mb-0.5">
                        {action.title}
                      </h4>
                      <p className="text-gray-500 text-xs leading-relaxed">
                        {action.desc}
                      </p>
                    </div>
                  </div>
                  {action.external ? (
                    <ExternalLink className="w-4 h-4 text-gray-500 shrink-0" />
                  ) : (
                    <ArrowRight className="w-4 h-4 text-gray-500 shrink-0 group-hover:text-indigo-400 transition-colors" />
                  )}
                </div>
              </motion.div>
            );
            return action.external ? (
              <a
                key={action.title}
                href={action.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {content}
              </a>
            ) : (
              <Link key={action.title} href={action.href}>
                {content}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Help card */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-amber-400" />
          </div>
          <div>
            <h4 className="font-bold text-white text-sm mb-0.5">
              Potrzebujesz pomocy?
            </h4>
            <p className="text-gray-500 text-xs mb-3">
              Dokumentacja, FAQ i kontakt w jednym miejscu.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/docs"
                className="text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                Docs →
              </Link>
              <a
                href="mailto:contact@nextforge.app"
                className="text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                Napisz do nas →
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
