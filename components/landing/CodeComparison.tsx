"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Code2, Zap, ArrowRight } from "lucide-react";

interface Example {
    title: string;
    description: string;
    before: {
        lines: number;
        time: string;
        code: string;
    };
    after: {
        lines: number;
        time: string;
        code: string;
    };
}

export const CodeComparison = ({ t }: { t: any }) => {
    const examples: Example[] = t?.codeComparison?.examples || [
        {
            title: "Payment Checkout",
            description: "Open Lemon Squeezy checkout with proper error handling",
            before: {
                lines: 45,
                time: "~2 hours setup",
                code: `// Without NextForge - Setup everything manually
import { loadScript } from '@lemonsqueezy/lemonsqueezy.js';

const LEMON_SQUEEZY_STORE_ID = process.env.NEXT_PUBLIC_LS_STORE_ID;

async function initializeLemonSqueezy() {
  await loadScript();
  // Initialize Lemon Squeezy
  if (window.createLemonSqueezy) {
    window.LemonSqueezy = window.createLemonSqueezy();
  }
}

function handleCheckout(variantId: string) {
  if (!LEMON_SQUEEZY_STORE_ID) {
    console.error('Store ID not configured');
    return;
  }
  
  if (typeof window !== 'undefined' && window.LemonSqueezy) {
    try {
      window.LemonSqueezy.Setup({
        eventHandler: (event) => {
          if (event === 'Checkout.Success') {
            // Handle success
            trackPurchase(variantId);
          }
        }
      });
      window.LemonSqueezy.Url.Open(variantId);
    } catch (error) {
      console.error('Checkout failed:', error);
      // Fallback to direct link
      window.location.href = variantId;
    }
  } else {
    window.location.href = variantId;
  }
}

// ... + webhook setup, types, config, etc.`
            },
            after: {
                lines: 1,
                time: "~30 seconds",
                code: `// With NextForge - Just works ✨
import { openLSCheckout, LEMON_SQUEEZY_CONFIG } from '@/lib/ls-utils';

onClick={() => openLSCheckout(LEMON_SQUEEZY_CONFIG.checkoutUrls.pro)}`
            }
        },
        {
            title: "Newsletter Subscription",
            description: "Add subscriber to email list with validation",
            before: {
                lines: 60,
                time: "~3 hours",
                code: `// Without NextForge - Build from scratch
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = body?.email;
    
    // Email validation
    if (!email || !email.includes('@')) {
      return Response.json(
        { error: 'Invalid email' },
        { status: 400 }
      );
    }
    
    // Check if already subscribed
    const contacts = await resend.contacts.list();
    const exists = contacts.data?.find(c => c.email === email);
    
    if (exists) {
      return Response.json(
        { error: 'Already subscribed' },
        { status: 400 }
      );
    }
    
    // Add to Resend
    const { error } = await resend.contacts.create({
      email,
      unsubscribed: false,
      audienceId: process.env.RESEND_AUDIENCE_ID,
    });
    
    if (error) {
      console.error('Resend error:', error);
      return Response.json(
        { error: 'Failed to subscribe' },
        { status: 500 }
      );
    }
    
    // Send welcome email
    await resend.emails.send({
      from: 'hello@yourdomain.com',
      to: email,
      subject: 'Welcome!',
      html: '<p>Thanks for subscribing!</p>'
    });
    
    return Response.json({ ok: true });
  } catch (error) {
    return Response.json(
      { error: 'Server error' },
      { status: 500 }
    );
  }
}`
            },
            after: {
                lines: 5,
                time: "Already done",
                code: `// With NextForge - Pre-built API route
// Just use the endpoint, it's already configured!

const response = await fetch('/api/newsletter', {
  method: 'POST',
  body: JSON.stringify({ email })
});`
            }
        },
        {
            title: "Blog System",
            description: "MDX blog with automatic routing and SEO",
            before: {
                lines: 120,
                time: "~8 hours",
                code: `// Without NextForge - Build entire system
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      slug,
      ...data,
      content
    };
  });
  
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) return 1;
    else return -1;
  });
}

export async function getPostData(slug: string) {
  const fullPath = path.join(postsDirectory, \`\${slug}.md\`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  const processedContent = await remark()
    .use(html)
    .process(content);
  const contentHtml = processedContent.toString();
  
  return {
    slug,
    contentHtml,
    ...data,
  };
}

// + Components, styling, SEO, OG images, sitemap...`
            },
            after: {
                lines: 8,
                time: "Already done",
                code: `// With NextForge - Complete blog system included
// Just add markdown files to /content/blog/

// /content/blog/my-post.md
---
title: "My First Post"
date: "2024-01-15"
---

# Hello World
Your content here...

// Auto-generated routes, SEO, OG images ✨`
            }
        }
    ];

    const [activeExample, setActiveExample] = useState(0);

    return (
        <section className="py-32 bg-black relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
            
            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <Badge className="mb-6">
                        <Code2 className="w-3 h-3 mr-2 inline" />
                        Code Comparison
                    </Badge>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
                        {t?.codeComparison?.title || (
                            <>
                                Stop Writing <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                                    Boilerplate Code
                                </span>
                            </>
                        )}
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        {t?.codeComparison?.desc || "See the dramatic difference between building from scratch vs using NextForge"}
                    </p>
                </div>

                {/* Example Selector */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {examples.map((example, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveExample(index)}
                            className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                                activeExample === index
                                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/25'
                                    : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
                            }`}
                        >
                            {example.title}
                        </button>
                    ))}
                </div>

                {/* Comparison Display */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeExample}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="max-w-7xl mx-auto"
                    >
                        {/* Description */}
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-black text-white mb-2">
                                {examples[activeExample].title}
                            </h3>
                            <p className="text-gray-400">
                                {examples[activeExample].description}
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-6">
                            {/* Before (Without NextForge) */}
                            <div className="rounded-2xl border border-red-500/20 bg-red-500/5 overflow-hidden">
                                {/* Header */}
                                <div className="px-6 py-4 bg-red-500/10 border-b border-red-500/20">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-black text-red-400 uppercase tracking-wider">
                                            ❌ Without NextForge
                                        </span>
                                        <div className="flex gap-2">
                                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 text-xs text-red-300">
                                        <span className="font-bold">{examples[activeExample].before.lines} lines</span>
                                        <span>•</span>
                                        <span>{examples[activeExample].before.time}</span>
                                    </div>
                                </div>
                                {/* Code */}
                                <div className="p-6 overflow-x-auto">
                                    <pre className="text-xs font-mono leading-relaxed text-gray-400">
                                        <code>{examples[activeExample].before.code}</code>
                                    </pre>
                                </div>
                            </div>

                            {/* After (With NextForge) */}
                            <div className="rounded-2xl border border-green-500/20 bg-green-500/5 overflow-hidden">
                                {/* Header */}
                                <div className="px-6 py-4 bg-green-500/10 border-b border-green-500/20">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-black text-green-400 uppercase tracking-wider flex items-center gap-2">
                                            <Zap className="w-4 h-4" />
                                            ✅ With NextForge
                                        </span>
                                        <div className="flex gap-2">
                                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 text-xs text-green-300">
                                        <span className="font-bold">{examples[activeExample].after.lines} lines</span>
                                        <span>•</span>
                                        <span>{examples[activeExample].after.time}</span>
                                    </div>
                                </div>
                                {/* Code */}
                                <div className="p-6 overflow-x-auto">
                                    <pre className="text-xs font-mono leading-relaxed text-gray-300">
                                        <code>{examples[activeExample].after.code}</code>
                                    </pre>
                                </div>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10 text-center">
                                <div className="text-3xl font-black text-green-400 mb-2">
                                    {Math.round((1 - examples[activeExample].after.lines / examples[activeExample].before.lines) * 100)}%
                                </div>
                                <div className="text-sm text-gray-400 font-bold">Less Code</div>
                            </div>
                            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10 text-center">
                                <div className="text-3xl font-black text-indigo-400 mb-2">
                                    {examples[activeExample].before.lines - examples[activeExample].after.lines}
                                </div>
                                <div className="text-sm text-gray-400 font-bold">Lines Saved</div>
                            </div>
                            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10 text-center">
                                <div className="text-3xl font-black text-purple-400 mb-2">
                                    {examples[activeExample].before.time.replace('~', '')}
                                </div>
                                <div className="text-sm text-gray-400 font-bold">Time Saved</div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <p className="text-gray-400 text-sm mb-6">
                        Ready to write less code and ship faster?
                    </p>
                    <a
                        href="#products"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold transition-all hover:scale-105 shadow-lg shadow-indigo-600/25"
                    >
                        Get Started with NextForge <ArrowRight className="w-5 h-5" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};
