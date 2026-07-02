"use client";

import { Badge } from "@/components/ui/Badge";

type FlowVideoCopy = {
    nav?: { pricing?: string };
    flowVideo?: {
        title?: string;
        desc?: string;
        badge?: string;
    };
};

export const FlowVideo = ({ t }: { t: FlowVideoCopy }) => {
    const isPl = t?.nav?.pricing === "Cennik";
    const videoUrl = process.env.NEXT_PUBLIC_DEMO_VIDEO_URL;
    const hasYouTube = typeof videoUrl === "string" && /youtube\.com|youtu\.be/.test(videoUrl);
    const hasMp4 = typeof videoUrl === "string" && videoUrl.endsWith(".mp4");

    const title = t?.flowVideo?.title || (isPl ? "Demo 60–90 sek: pełny przepływ" : "60–90 sec demo: full flow");
    const desc =
        t?.flowVideo?.desc ||
        (isPl
            ? "Krótki film powinien pokazać: rejestrację, checkout i pierwszy widok dashboardu po zakupie."
            : "This short video should show register, checkout, and first post-purchase dashboard view.");

    return (
        <section className="py-24 bg-[#050507]">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="text-center mb-8">
                    <Badge className="mb-4">{t?.flowVideo?.badge || "Flow video"}</Badge>
                    <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-3">{title}</h2>
                    <p className="text-gray-300 max-w-3xl mx-auto">{desc}</p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-black/40 overflow-hidden">
                    {hasYouTube ? (
                        <iframe
                            src={videoUrl}
                            title="NextForge demo video"
                            className="w-full aspect-video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />
                    ) : hasMp4 ? (
                        <video className="w-full aspect-video bg-black" controls preload="metadata">
                            <source src={videoUrl} type="video/mp4" />
                        </video>
                    ) : (
                        <div className="aspect-video flex items-center justify-center p-8 text-center">
                            <div>
                                <p className="text-white font-bold mb-2">
                                    {isPl ? "Dodaj URL video, aby osadzić demo" : "Add a video URL to embed demo"}
                                </p>
                                <p className="text-sm text-gray-400">
                                    {isPl
                                        ? "Ustaw NEXT_PUBLIC_DEMO_VIDEO_URL (YouTube embed lub plik .mp4)."
                                        : "Set NEXT_PUBLIC_DEMO_VIDEO_URL (YouTube embed or .mp4 file)."}
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};
