"use client";

import { useEffect, useState } from "react";

type Row = {
    day: string;
    viewHero: number;
    clickHeroCta: number;
    viewPricing: number;
    startCheckout: number;
    purchase: number;
    checkoutRate: number;
    purchaseRate: number;
};

export default function ConversionsPage() {
    const [rows, setRows] = useState<Row[]>([]);

    useEffect(() => {
        const run = async () => {
            const response = await fetch("/api/observability/kpi-daily", { cache: "no-store" });
            if (!response.ok) return;
            const payload = (await response.json()) as { rows?: Row[] };
            setRows(payload.rows || []);
        };
        run().catch((error) => console.error("[conversions]", error));
    }, []);

    return (
        <main className="min-h-screen bg-black text-white">
            <section className="container mx-auto px-4 max-w-5xl py-20">
                <h1 className="text-4xl font-black tracking-tight mb-3">Transparent conversion metrics</h1>
                <p className="text-gray-400 mb-10">Daily funnel metrics captured from landing events.</p>

                <div className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-auto">
                    <table className="w-full min-w-[900px] text-sm">
                        <thead className="bg-white/[0.03] text-left text-gray-400">
                            <tr>
                                <th className="px-4 py-3">Day</th>
                                <th className="px-4 py-3">Hero views</th>
                                <th className="px-4 py-3">CTA clicks</th>
                                <th className="px-4 py-3">Pricing views</th>
                                <th className="px-4 py-3">Checkout starts</th>
                                <th className="px-4 py-3">Purchases</th>
                                <th className="px-4 py-3">Checkout %</th>
                                <th className="px-4 py-3">Purchase %</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row) => (
                                <tr key={row.day} className="border-t border-white/5">
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
                            {rows.length === 0 && (
                                <tr>
                                    <td className="px-4 py-4 text-gray-500" colSpan={8}>
                                        No data yet. As traffic flows, metrics appear here.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </section>
        </main>
    );
}
