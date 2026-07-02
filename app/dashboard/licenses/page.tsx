"use client";

import { motion } from "framer-motion";
import { Key, CheckCircle2, Calendar, Package } from "lucide-react";

// Mock – w produkcji: API Lemon Squeezy / twoja baza
const licenses = [
  {
    id: "nf-pro-001",
    product: "NextForge PRO",
    status: "active",
    purchaseDate: "2024-01-15",
    licenseKey: "••••••••-••••-••••-••••-••••••••1234",
  },
  // Możesz dodać więcej: HSE PRO, itd.
];

const statusLabel: Record<string, string> = {
  active: "Aktywna",
  expired: "Wygasła",
  cancelled: "Anulowana",
};

export default function LicensesPage() {
  return (
    <div className="max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <h1 className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-2">
          Moje licencje
        </h1>
        <p className="text-gray-500 text-sm">
          Produkty, które kupiłeś. Licencje dożywotnie (lifetime) nie wygasają.
        </p>
      </motion.div>

      <div className="space-y-6">
        {licenses.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-12 rounded-3xl border border-white/10 bg-white/[0.02] text-center"
          >
            <Key className="w-12 h-12 text-gray-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">
              Brak licencji
            </h3>
            <p className="text-gray-500 text-sm mb-6 max-w-sm mx-auto">
              Po zakupie NextForge PRO lub innego produktu pojawią się tutaj.
            </p>
            <a
              href="/#products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 text-white text-sm font-bold hover:bg-indigo-500 transition-colors"
            >
              Zobacz ofertę
            </a>
          </motion.div>
        ) : (
          licenses.map((license, i) => (
            <motion.div
              key={license.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="p-8 rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
            >
              <div className="flex flex-wrap items-start justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-600/20 flex items-center justify-center">
                    <Package className="w-7 h-7 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-white tracking-tight mb-1">
                      {license.product}
                    </h3>
                    <div className="flex items-center gap-2 text-sm">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold ${
                          license.status === "active"
                            ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                            : "bg-gray-500/10 text-gray-400 border border-gray-500/20"
                        }`}
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {statusLabel[license.status] || license.status}
                      </span>
                      <span className="text-gray-500 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        Zakup: {license.purchaseDate}
                      </span>
                    </div>
                    <p className="text-gray-500 text-xs font-mono mt-2">
                      Klucz: {license.licenseKey}
                    </p>
                  </div>
                </div>
                <a
                  href="/dashboard/downloads"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-sm font-bold transition-colors border border-white/10"
                >
                  Pobrania
                </a>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}
