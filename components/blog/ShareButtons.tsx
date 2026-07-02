"use client";

import { motion } from "framer-motion";
import { Twitter, Linkedin, Facebook, Link as LinkIcon, Share2 } from "lucide-react";
import { useState } from "react";

export const ShareButtons = ({ title, slug }: { title: string, slug: string }) => {
    const url = `https://nextforge.app/blog/${slug}`; // Replace with generic domain or use window.location
    const [copied, setCopied] = useState(false);

    const share = (platform: string) => {
        let href = "";
        switch (platform) {
            case "twitter":
                href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
                break;
            case "linkedin":
                href = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
                break;
            case "facebook":
                href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
                break;
        }
        window.open(href, '_blank');
    };

    const copyLink = () => {
        navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="hidden xl:flex flex-col gap-4 fixed left-8 top-1/2 -translate-y-1/2 z-40">
            <div className="text-[10px] font-bold text-gray-500 text-center uppercase tracking-wider mb-2 rotate-180 [writing-mode:vertical-rl]">
                Share this post
            </div>

            {[
                { icon: Twitter, id: "twitter", color: "hover:text-[#1DA1F2]" },
                { icon: Linkedin, id: "linkedin", color: "hover:text-[#0A66C2]" },
                { icon: Facebook, id: "facebook", color: "hover:text-[#1877F2]" },
            ].map((btn, i) => (
                <motion.button
                    key={btn.id}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    onClick={() => share(btn.id)}
                    className={`w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 ${btn.color} hover:bg-white/10 hover:border-white/20 transition-all`}
                >
                    <btn.icon className="w-4 h-4" />
                </motion.button>
            ))}

            <motion.button
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                onClick={copyLink}
                className="w-10 h-10 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 hover:bg-indigo-500 hover:text-white transition-all relative"
            >
                {copied ? <span className="absolute text-[8px] font-bold">COPIED</span> : <LinkIcon className="w-4 h-4" />}
            </motion.button>
        </div>
    );
};
