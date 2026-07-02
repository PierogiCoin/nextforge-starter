"use client";

import { Badge } from "@/components/ui/Badge";
import { CheckCircle2, XCircle } from "lucide-react";

type AudienceItem = {
    title: string;
    desc: string;
};

const forWhoDefaultPl: AudienceItem[] = [
    {
        title: "Solo founder / indie maker",
        desc: "Chcesz wypuścić MVP i walidować rynek zamiast składać infrastrukturę.",
    },
    {
        title: "Mały zespół produktowy",
        desc: "Potrzebujesz powtarzalnego startu dla kolejnych projektów SaaS.",
    },
    {
        title: "Freelancer / software house",
        desc: "Chcesz skrócić delivery i szybciej dowozić klientowi działający produkt.",
    },
];

const notForWhoDefaultPl: AudienceItem[] = [
    {
        title: "Projekt enterprise od dnia 1",
        desc: "Jeśli potrzebujesz od razu wielopoziomowej architektury korporacyjnej.",
    },
    {
        title: "Nauka od podstaw frameworka",
        desc: "To produkt nastawiony na szybkie wdrożenie, nie kurs krok po kroku.",
    },
];

export const ForWhoSection = ({ t }: { t: any }) => {
    const isPl = t?.nav?.pricing === "Cennik";
    const forWhoDefault: AudienceItem[] = isPl
        ? forWhoDefaultPl
        : [
            {
                title: "Solo founder / indie maker",
                desc: "You want to validate fast instead of rebuilding auth, billing and dashboard from scratch.",
            },
            {
                title: "Small product team",
                desc: "You need a repeatable launch baseline for multiple SaaS projects.",
            },
            {
                title: "Freelancer / agency",
                desc: "You want faster delivery and a production-like starter for clients.",
            },
        ];
    const notForWhoDefault: AudienceItem[] = isPl
        ? notForWhoDefaultPl
        : [
            {
                title: "Enterprise-scale architecture from day one",
                desc: "If you need deep custom infrastructure before validating demand.",
            },
            {
                title: "Beginner coding course",
                desc: "This is a launch-oriented starter, not a step-by-step tutorial.",
            },
        ];
    const forWho: AudienceItem[] = t?.forWho?.yes || forWhoDefault;
    const notForWho: AudienceItem[] = t?.forWho?.no || notForWhoDefault;

    return (
        <section className="py-24 bg-[#050507]">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-12">
                    <Badge className="mb-5">{t?.forWho?.badge || (isPl ? "Dla kogo to jest?" : "Who is this for?")}</Badge>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
                        {t?.forWho?.title || (isPl ? "Czy NextForge jest dla Ciebie?" : "Is NextForge right for you?")}
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        {t?.forWho?.desc || (isPl ? "Jasny filtr pomaga szybciej podjąć decyzję i oszczędza czas po obu stronach." : "A clear filter helps visitors decide faster and improves lead quality.")}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="rounded-3xl border border-green-500/20 bg-green-500/[0.04] p-8">
                        <h3 className="text-lg font-black text-green-300 mb-5">{t?.forWho?.yesTitle || (isPl ? "TAK — jeśli" : "YES — if")}</h3>
                        <ul className="space-y-4">
                            {forWho.map((item) => (
                                <li key={item.title} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                                    <div>
                                        <p className="text-white font-bold">{item.title}</p>
                                        <p className="text-sm text-gray-300">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="rounded-3xl border border-red-500/20 bg-red-500/[0.04] p-8">
                        <h3 className="text-lg font-black text-red-300 mb-5">{t?.forWho?.noTitle || (isPl ? "NIE — jeśli" : "NO — if")}</h3>
                        <ul className="space-y-4">
                            {notForWho.map((item) => (
                                <li key={item.title} className="flex items-start gap-3">
                                    <XCircle className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                                    <div>
                                        <p className="text-white font-bold">{item.title}</p>
                                        <p className="text-sm text-gray-300">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
