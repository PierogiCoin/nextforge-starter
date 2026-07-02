export type SeoBotInput = {
    primaryKeyword: string;
    searchIntent: "informational" | "commercial" | "transactional";
    audience: string;
    productName: string;
    productUrl: string;
    secondaryKeywords: string[];
    internalLinks: Array<{ anchor: string; url: string }>;
};

export const SEO_BOT_RULES: string[] = [
    "Write for humans first, search engines second.",
    "Match the exact search intent and satisfy it in the first 120 words.",
    "Use one clear H1 containing the primary keyword naturally.",
    "Use scannable H2/H3 headings with semantic variants of the keyword.",
    "Keep keyword density natural; avoid stuffing or repetitive phrasing.",
    "Add practical examples, numbers, and tradeoffs to increase perceived expertise.",
    "Include exactly 3 internal links to relevant pages with descriptive anchors.",
    "Add one short CTA that fits the reader stage and context.",
    "Use a compelling meta title and description with strong click intent.",
    "Return valid JSON-LD for BlogPosting consistent with page metadata.",
];

export const SEO_BOT_QUALITY_CHECKLIST: string[] = [
    "Title includes primary keyword and is <= 60 characters.",
    "Meta description is <= 155 characters and includes user benefit.",
    "Intro answers the query fast and states who this guide is for.",
    "Article has clear structure: H1 + 5-8 H2 sections.",
    "At least 2 sections include concrete examples or calculations.",
    "At least 1 section handles objections or alternatives.",
    "Contains exactly 3 internal links and 1 relevant external source.",
    "Contains FAQ section with 3-5 concise Q&A items.",
    "Includes BlogPosting JSON-LD with canonical URL and image.",
    "Ends with a contextual CTA without aggressive sales language.",
];

export const BLOG_OUTPUT_CONTRACT = `Return output in this exact shape:

1) Frontmatter (markdown):
---
title: "<SEO title>"
date: "<YYYY-MM-DD>"
excerpt: "<meta description style summary>"
author: "NextForge Team"
cover: "/blog/<slug>.jpg"
tags: ["<primary-keyword>", "<cluster>", "<intent>"]
---

2) Content rules:
- 1200-2200 words
- One H1 only
- 5-8 H2 sections
- Short paragraphs
- Bullet lists when useful
- Include FAQ section at the end
- Include exactly 3 internal links

3) Structured data block (JSON-LD):
- @type: BlogPosting
- headline, description, image, datePublished, dateModified
- author, publisher, mainEntityOfPage, inLanguage: "en-US"
`;

export function buildSeoBotPrompt(input: SeoBotInput): string {
    const internalLinkLines = input.internalLinks
        .map((link) => `- ${link.anchor}: ${link.url}`)
        .join("\n");

    const secondary = input.secondaryKeywords.join(", ");
    const rules = SEO_BOT_RULES.map((rule, index) => `${index + 1}. ${rule}`).join("\n");
    const checks = SEO_BOT_QUALITY_CHECKLIST.map((item, index) => `${index + 1}. ${item}`).join("\n");

    return [
        "You are an expert SaaS SEO content strategist and editor.",
        "",
        "Task:",
        `- Primary keyword: ${input.primaryKeyword}`,
        `- Search intent: ${input.searchIntent}`,
        `- Audience: ${input.audience}`,
        `- Product: ${input.productName} (${input.productUrl})`,
        `- Secondary keywords: ${secondary}`,
        "- Internal links to use:",
        internalLinkLines,
        "",
        "Rules:",
        rules,
        "",
        "Quality checklist (must pass all):",
        checks,
        "",
        BLOG_OUTPUT_CONTRACT,
    ].join("\n");
}
