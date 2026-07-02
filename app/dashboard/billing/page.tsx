"use client";

import { motion } from "framer-motion";
import { FileText, ExternalLink, Receipt } from "lucide-react";

// Mock – w produkcji: Lemon Squeezy Customer Portal lub API
const invoices = [
  { id: "INV-2024-001", date: "2024-01-15", amount: "$149.00", product: "NextForge PRO", status: "Paid" },
];

// Global: wszystkie zamówienia. Dla sklepu: https://TWOJ-SKLEP.lemonsqueezy.com/billing
const customerPortalUrl = process.env.NEXT_PUBLIC_LS_CUSTOMER_PORTAL_URL || "https://app.lemonsqueezy.com/my-orders";

export default function BillingPage() {
  return (
    <div className="max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <h1 className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-2">
          Faktury
        </h1>
        <p className="text-gray-500 text-sm">
          Historia płatności i faktury. Pełna historia w portalu Lemon Squeezy.
        </p>
      </motion.div>

      <motion.a
        href={customerPortalUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between p-6 rounded-2xl border border-indigo-500/20 bg-indigo-600/10 hover:bg-indigo-600/15 transition-colors mb-10"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-indigo-600/20 flex items-center justify-center">
            <Receipt className="w-6 h-6 text-indigo-400" />
          </div>
          <div>
            <h3 className="font-bold text-white">Portal Lemon Squeezy</h3>
            <p className="text-gray-500 text-sm">
              Wszystkie zamówienia, faktury i dane do rozliczeń
            </p>
          </div>
        </div>
        <ExternalLink className="w-5 h-5 text-indigo-400 shrink-0" />
      </motion.a>

      <h3 className="text-sm font-black text-gray-500 uppercase tracking-widest mb-4">
        Ostatnie faktury (podgląd)
      </h3>
      <div className="space-y-4">
        {invoices.length === 0 ? (
          <div className="p-10 rounded-2xl border border-white/5 bg-white/[0.02] text-center text-gray-500 text-sm">
            Brak faktur w podglądzie. Użyj portalu Lemon Squeezy powyżej.
          </div>
        ) : (
          invoices.map((inv, i) => (
            <motion.div
              key={inv.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center justify-between p-6 rounded-2xl border border-white/10 bg-white/[0.02]"
            >
              <div className="flex items-center gap-4">
                <FileText className="w-5 h-5 text-gray-500" />
                <div>
                  <p className="font-bold text-white text-sm">{inv.id}</p>
                  <p className="text-gray-500 text-xs">
                    {inv.date} · {inv.product}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-black text-white">{inv.amount}</p>
                <span className="text-[10px] font-bold text-emerald-400 uppercase">
                  {inv.status}
                </span>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}
