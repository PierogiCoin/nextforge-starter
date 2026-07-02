"use client";

import { Badge } from "@/components/ui/Badge";
import { ArrowRight } from "lucide-react";

const defaultMetricsPl = [
    { label: "Freelancer: od briefu do demo", value: "48h" },
    { label: "Agencja: czas dostarczenia MVP", value: "-63%" },
    { label: "Pierwsza sprzedaż po wdrożeniu", value: "Dzień 11" },
];

const defaultMetricsEn = [
    { label: "Freelancer: brief to demo", value: "48h" },
    { label: "Agency: MVP delivery time", value: "-63%" },
    { label: "First sale after launch", value: "Day 11" },
];

type CaseStudyCopy = {
    nav?: { pricing?: string };
    caseStudy?: {
        metrics?: Array<{ label: string; value: string }>;
        badge?: string;
        title?: string;
        desc?: string;
        href?: string;
        cta?: string;
    };
};

export const CaseStudyHighlight = ({ t }: { t: CaseStudyCopy }) => {
    const isPl = t?.nav?.pricing === "Cennik";
    const metrics = t?.caseStudy?.metrics || (isPl ? defaultMetricsPl : defaultMetricsEn);

    return (
        <section className="py-24 bg-black">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-10">
                    <Badge className="mb-4">{t?.caseStudy?.badge || (isPl ? "Case study" : "Case study")}</Badge>
                    <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-3">
                        {t?.caseStudy?.title || (isPl ? "Jak founder skrócił drogę do sprzedaży" : "How one founder reached first revenue faster")}
                    </h2>
                    <p className="text-gray-300 mb-8">
                        {t?.caseStudy?.desc || (isPl ? "Po wdrożeniu gotowego fundamentu zamiast budowania od zera, zespół skupił się wyłącznie na wartości dla użytkownika." : "By using a ready baseline instead of rebuilding infrastructure, the team focused only on user value and launch execution.")}
                    </p>

                    <div className="grid md:grid-cols-3 gap-4 mb-8">
                        {metrics.map((item: { label: string; value: string }) => (
                            <div key={item.label} className="rounded-2xl border border-white/10 bg-black/30 p-5">
                                <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">{item.label}</p>
                                <p className="text-2xl font-black text-white">{item.value}</p>
                            </div>
                        ))}
                    </div>

                    <a
                        href={t?.caseStudy?.href || "/docs"}
                        className="inline-flex items-center gap-2 text-sm font-bold text-indigo-300 hover:text-indigo-200 transition-colors"
                    >
                        {t?.caseStudy?.cta || (isPl ? "Zobacz pełny breakdown wdrożenia" : "See full launch breakdown")}
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </section>
    );
};
