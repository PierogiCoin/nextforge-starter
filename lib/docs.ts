import fs from "fs";
import path from "path";
import matter from "gray-matter";

const docsDirectory = path.join(process.cwd(), "content/docs");

export type DocPost = {
    slug: string;
    title: string;
    description: string;
    order: number;
    content: string;
};

export function getSortedDocsData(): DocPost[] {
    if (!fs.existsSync(docsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(docsDirectory);
    const allDocsData = fileNames.map((fileName) => {
        const slug = fileName.replace(/\.md$/, "");
        const fullPath = path.join(docsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        const { data, content } = matter(fileContents);

        return {
            slug,
            content,
            ...(data as any),
        };
    });

    return allDocsData.sort((a, b) => a.order - b.order);
}

export function getDocData(slug: string): DocPost | null {
    try {
        const fullPath = path.join(docsDirectory, `${slug}.md`);

        if (!fs.existsSync(fullPath)) {
            return null;
        }

        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);

        return {
            slug,
            content,
            ...(data as any),
        };
    } catch (error) {
        return null;
    }
}
