import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/blog");

export type BlogPost = {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    author: string;
    cover: string;
    tags: string[];
    content: string;
    readingTimeMinutes?: number;
};

const WORDS_PER_MINUTE = 200;

export function getReadingTimeMinutes(content: string): number {
    const stripped = content.replace(/```[\s\S]*?```/g, "").replace(/\[([^\]]*)\]\([^)]*\)/g, "$1");
    const words = stripped.split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}

export function getSortedPostsData(): BlogPost[] {
    // Check if directory exists
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        const slug = fileName.replace(/\.md$/, "");
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        const { data, content } = matter(fileContents);

        const readingTimeMinutes = getReadingTimeMinutes(content);
        return {
            slug,
            content,
            readingTimeMinutes,
            ...(data as any),
        };
    });

    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export function getPostData(slug: string): BlogPost | null {
    try {
        const fullPath = path.join(postsDirectory, `${slug}.md`);

        if (!fs.existsSync(fullPath)) {
            return null;
        }

        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);

        const readingTimeMinutes = getReadingTimeMinutes(content);
        return {
            slug,
            content,
            readingTimeMinutes,
            ...(data as any),
        };
    } catch (error) {
        return null;
    }
}
