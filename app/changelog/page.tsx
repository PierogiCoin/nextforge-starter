import Link from "next/link";

const entries = [
    {
        date: "2026-06-19",
        title: "Revenue + observability hardening",
        items: [
            "Lifecycle emails (welcome, onboarding, upsell, winback)",
            "Abandoned checkout recovery sequence (3-step)",
            "Funnel KPI daily endpoint and dashboard page",
            "Sentry instrumentation + security headers + webhook replay protection",
        ],
    },
];

export default function ChangelogPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <section className="container mx-auto px-4 max-w-4xl py-20">
                <h1 className="text-4xl font-black tracking-tight mb-3">Public changelog</h1>
                <p className="text-gray-400 mb-10">Transparent list of shipped improvements.</p>

                <div className="space-y-6">
                    {entries.map((entry) => (
                        <article key={entry.date} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                            <p className="text-xs uppercase tracking-widest text-indigo-300 mb-2">{entry.date}</p>
                            <h2 className="text-2xl font-black mb-4">{entry.title}</h2>
                            <ul className="space-y-2 text-gray-200 text-sm list-disc list-inside">
                                {entry.items.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>

                <div className="mt-10 text-sm text-gray-400">
                    Looking for upcoming work? <Link href="/roadmap" className="text-indigo-300 hover:text-indigo-200">Open roadmap</Link>.
                </div>
            </section>
        </main>
    );
}
