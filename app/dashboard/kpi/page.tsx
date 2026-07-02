"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type KpiRow = {
    day: string;
    viewHero: number;
    clickHeroCta: number;
    viewPricing: number;
    startCheckout: number;
    purchase: number;
    checkoutRate: number;
    purchaseRate: number;
};

export default function KpiDailyPage() {
    const [rows, setRows] = useState<KpiRow[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const run = async () => {
            const response = await fetch("/api/observability/kpi-daily", { cache: "no-store" });
            if (!response.ok) {
                setLoading(false);
                return;
            }
            const payload = (await response.json()) as { rows?: KpiRow[] };
            setRows(payload.rows || []);
            setLoading(false);
        };
        run().catch((error) => {
            console.error("[dashboard/kpi]", error);
            setLoading(false);
        });
    }, []);

    return (
        <div className="max-w-6xl">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
                <h1 className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-2">KPI dzienne</h1>
                <p className="text-gray-500 text-sm">Lejek sprzedażowy i konwersje dzień po dniu.</p>
            </motion.div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-auto">
                <table className="w-full min-w-[920px] text-sm">
                    <thead className="bg-white/[0.03]">
                        <tr className="text-left text-gray-400">
                            <th className="px-4 py-3">Dzień</th>
                            <th className="px-4 py-3">View hero</th>
                            <th className="px-4 py-3">Click CTA</th>
                            <th className="px-4 py-3">View pricing</th>
                            <th className="px-4 py-3">Start checkout</th>
                            <th className="px-4 py-3">Purchase</th>
                            <th className="px-4 py-3">Checkout rate</th>
                            <th className="px-4 py-3">Purchase rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading && (
                            <tr>
                                <td className="px-4 py-4 text-gray-500" colSpan={8}>
                                    Ładowanie KPI...
                                </td>
                            </tr>
                        )}
                        {!loading && rows.length === 0 && (
                            <tr>
                                <td className="px-4 py-4 text-gray-500" colSpan={8}>
                                    Brak danych. Zbierz eventy i odśwież.
                                </td>
                            </tr>
                        )}
                        {rows.map((row) => (
                            <tr key={row.day} className="border-t border-white/5 text-gray-200">
                                <td className="px-4 py-3">{row.day}</td>
                                <td className="px-4 py-3">{row.viewHero}</td>
                                <td className="px-4 py-3">{row.clickHeroCta}</td>
                                <td className="px-4 py-3">{row.viewPricing}</td>
                                <td className="px-4 py-3">{row.startCheckout}</td>
                                <td className="px-4 py-3">{row.purchase}</td>
                                <td className="px-4 py-3">{row.checkoutRate}%</td>
                                <td className="px-4 py-3">{row.purchaseRate}%</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
