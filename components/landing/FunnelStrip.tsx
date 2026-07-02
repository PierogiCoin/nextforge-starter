"use client";

import { motion } from "framer-motion";
import { Eye, ShoppingCart, Rocket } from "lucide-react";
import { openLSCheckout, LEMON_SQUEEZY_CONFIG } from "@/lib/ls-utils";

const icons = [Eye, ShoppingCart, Rocket];

export const FunnelStrip = ({ t }: { t: any }) => {
  const steps = t?.funnel
    ? [t.funnel.step1, t.funnel.step2, t.funnel.step3]
    : ["Zobacz demo", "Wybierz plan", "Wdróż w weekend"];
  const ariaLabel = t?.funnel?.ariaLabel ?? "Purchase funnel";

  const stepActions: Array<
    | { type: "link"; href: string }
    | { type: "button"; onClick: () => void }
  > = [
    { type: "link", href: "#demo" },
    { type: "link", href: "#products" },
    { type: "button", onClick: () => openLSCheckout(LEMON_SQUEEZY_CONFIG.checkoutUrls.pro) },
  ];

  return (
    <section
      aria-label={ariaLabel}
      className="relative py-8 border-y border-white/5 bg-gradient-to-r from-white/[0.02] via-indigo-500/5 to-white/[0.02]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(79,70,229,0.03)_50%,transparent_100%)] pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {steps.map((label: string, i: number) => {
            const Icon = icons[i];
            const action = stepActions[i];
            const content = (
              <div className="flex items-center gap-3">
                <span className="flex w-10 h-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-indigo-400 font-black text-sm">
                  {i + 1}
                </span>
                <span className="hidden sm:inline-flex w-10 h-10 items-center justify-center rounded-xl bg-white/5 text-gray-500">
                  <Icon className="w-5 h-5" />
                </span>
                <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">
                  {label}
                </span>
              </div>
            );
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4"
              >
                {action.type === "link" ? (
                  <a
                    href={action.href}
                    className="flex items-center gap-3 rounded-xl hover:bg-white/5 hover:text-white transition-colors px-2 py-1 -mx-2 -my-1"
                  >
                    {content}
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={action.onClick}
                    className="flex items-center gap-3 rounded-xl hover:bg-white/5 hover:text-white transition-colors px-2 py-1 -mx-2 -my-1 text-left"
                  >
                    {content}
                  </button>
                )}
                {i < steps.length - 1 && (
                  <span className="text-gray-600 font-bold hidden md:inline" aria-hidden>
                    →
                  </span>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
