const roadmap = [
    { status: "Now", title: "Checkout conversion optimization", detail: "Reduce friction and improve purchase completion." },
    { status: "Next", title: "Lifecycle automation", detail: "Move recovery and winback to scheduled workflows." },
    { status: "Planned", title: "Attribution modeling", detail: "Channel-level ROAS and funnel attribution by source." },
    { status: "Planned", title: "Customer success hub", detail: "In-app onboarding checklist and proactive support triggers." },
];

export default function RoadmapPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <section className="container mx-auto px-4 max-w-4xl py-20">
                <h1 className="text-4xl font-black tracking-tight mb-3">Public roadmap</h1>
                <p className="text-gray-400 mb-10">What we are actively improving next.</p>

                <div className="space-y-4">
                    {roadmap.map((item) => (
                        <article key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                            <p className="text-xs uppercase tracking-widest text-indigo-300 mb-2">{item.status}</p>
                            <h2 className="text-xl font-black mb-2">{item.title}</h2>
                            <p className="text-sm text-gray-300">{item.detail}</p>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}
