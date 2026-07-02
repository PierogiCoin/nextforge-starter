"use client";

import { useState } from "react";
import type { ComponentType } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { UserPlus, CreditCard, LayoutDashboard, CheckCircle2 } from "lucide-react";

type FlowKey = "register" | "payment" | "dashboard";

type Flow = {
    id: FlowKey;
    icon: ComponentType<{ className?: string }>;
    title: string;
    subtitle: string;
    points: string[];
    output: string;
};

export const DemoShowcase = ({ t }: { t: any }) => {
    const [activeFlow, setActiveFlow] = useState<FlowKey>("register");

    const flows: Flow[] = [
        {
            id: "register",
            icon: UserPlus,
            title: t?.demo?.flowRegisterTitle || "1) Rejestracja użytkownika",
            subtitle: t?.demo?.flowRegisterDesc || "Nowy użytkownik zakłada konto i od razu trafia do panelu.",
            points: [
                "Form register + walidacja",
                "Sesja ustawiona po stronie serwera",
                "Przekierowanie do dashboardu",
            ],
            output: "account_created → session_active → /dashboard",
        },
        {
            id: "payment",
            icon: CreditCard,
            title: t?.demo?.flowPaymentTitle || "2) Płatność i aktywacja",
            subtitle: t?.demo?.flowPaymentDesc || "Checkout uruchamia się jednym kliknięciem i wraca z aktywnym dostępem.",
            points: [
                "Checkout Lemon Squeezy",
                "Webhook z podpisem HMAC",
                "Aktualizacja statusu dostępu",
            ],
            output: "checkout_success → webhook_verified → access_granted",
        },
        {
            id: "dashboard",
            icon: LayoutDashboard,
            title: t?.demo?.flowDashboardTitle || "3) Dashboard klienta",
            subtitle: t?.demo?.flowDashboardDesc || "Klient widzi konto, licencję, pobrania i kolejne kroki wdrożenia.",
            points: [
                "Widok konta i planu",
                "Sekcje docs / billing / licencje",
                "Gotowe CTA do dalszego użycia produktu",
            ],
            output: "authenticated_view → retained_user → repeat_usage",
        },
    ];

    const selected = flows.find((flow) => flow.id === activeFlow) || flows[0];

    return (
        <section id="demo" className="py-28 bg-black">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-12">
                    <Badge className="mb-5">{t?.demo?.badge || "Demo funkcjonalne"}</Badge>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-4">
                        {t?.demo?.title1 || "3 flow, które sprzedają produkt"}
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        {t?.demo?.desc || "Nie pokazujesz animacji — pokazujesz jak użytkownik przechodzi od rejestracji do płatności i realnego użycia produktu."}
                    </p>
                </div>

                <div className="grid lg:grid-cols-[0.45fr_0.55fr] gap-6">
                    <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-4">
                        <div className="space-y-2">
                            {flows.map((flow) => {
                                const Icon = flow.icon;
                                const isActive = flow.id === activeFlow;
                                return (
                                    <button
                                        key={flow.id}
                                        onClick={() => setActiveFlow(flow.id)}
                                        className={`w-full rounded-2xl border p-4 text-left transition-colors ${
                                            isActive
                                                ? "border-indigo-500/50 bg-indigo-600/10"
                                                : "border-white/10 bg-black/20 hover:bg-white/[0.03]"
                                        }`}
                                    >
                                        <div className="flex items-start gap-3">
                                            <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">
                                                <Icon className="w-4 h-4 text-indigo-300" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-white text-sm">{flow.title}</p>
                                                <p className="text-xs text-gray-400 mt-1">{flow.subtitle}</p>
                                            </div>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <motion.div
                        key={selected.id}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="rounded-3xl border border-white/10 bg-[#0c0c0e] p-7"
                    >
                        <p className="text-[10px] font-black uppercase tracking-widest text-indigo-300 mb-3">
                            {t?.demo?.selectedFlowLabel || "Wybrany flow"}
                        </p>
                        <h3 className="text-2xl font-black text-white mb-2">{selected.title}</h3>
                        <p className="text-gray-300 mb-5">{selected.subtitle}</p>

                        <div className="space-y-3 mb-6">
                            {selected.points.map((point) => (
                                <div key={point} className="flex items-start gap-2 text-sm text-gray-200">
                                    <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                                    <span>{point}</span>
                                </div>
                            ))}
                        </div>

                        <div className="rounded-2xl border border-indigo-500/30 bg-indigo-600/[0.08] p-4">
                            <p className="text-[10px] font-black uppercase tracking-widest text-indigo-200 mb-1">
                                {t?.demo?.flowOutputLabel || "Output biznesowy"}
                            </p>
                            <code className="text-sm text-white">{selected.output}</code>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
