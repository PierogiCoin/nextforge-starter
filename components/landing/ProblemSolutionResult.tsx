"use client";

import { Badge } from "@/components/ui/Badge";

type Stage = {
    title: string;
    body: string;
};

const stagesDefaultPl: Stage[] = [
    {
        title: "1. Problem",
        body: "Każdy nowy projekt SaaS zaczynasz od auth, płatności, sesji i panelu. To zjada tygodnie bez dostarczania wartości klientowi.",
    },
    {
        title: "2. Rozwiązanie",
        body: "Dostajesz gotowy, połączony stack: landing, checkout, webhook, dashboard i docs. Wchodzisz od razu w etap produktu.",
    },
    {
        title: "3. Rezultat",
        body: "Szybszy time-to-market, mniej kosztów wdrożenia i większa szansa na pierwszą sprzedaż w pierwszych tygodniach.",
    },
];

export const ProblemSolutionResult = ({ t }: { t: any }) => {
    const isPl = t?.nav?.pricing === "Cennik";
    const stagesDefault: Stage[] = isPl
        ? stagesDefaultPl
        : [
            {
                title: "1. Problem",
                body: "Every new SaaS starts with auth, billing, sessions and dashboard plumbing before users see any value.",
            },
            {
                title: "2. Solution",
                body: "You get a connected baseline: landing, checkout, webhook, dashboard and docs, ready to customize.",
            },
            {
                title: "3. Result",
                body: "Faster time-to-market, lower implementation cost and higher chance of first sales in the first weeks.",
            },
        ];
    const stages: Stage[] = t?.psr?.stages || stagesDefault;

    return (
        <section className="py-24 bg-black">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-12">
                    <Badge className="mb-5">{t?.psr?.badge || (isPl ? "Jak to działa w praktyce" : "How it works in practice")}</Badge>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
                        {t?.psr?.title || (isPl ? "Problem → rozwiązanie → wynik" : "Problem → solution → result")}
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        {t?.psr?.desc || (isPl ? "Jedna ścieżka: mniej technicznego długu, więcej czasu na sprzedaż i dowożenie wartości." : "One clear path: less technical debt, more time for shipping and selling.")}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-5">
                    {stages.map((stage) => (
                        <article key={stage.title} className="rounded-3xl border border-white/10 bg-white/[0.02] p-7">
                            <h3 className="text-lg font-black text-white mb-3">{stage.title}</h3>
                            <p className="text-sm text-gray-300 leading-relaxed">{stage.body}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};
