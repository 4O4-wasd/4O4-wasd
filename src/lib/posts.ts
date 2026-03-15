import fs from "fs";
import matter from "gray-matter";
import path from "path";

const postsDir = path.join(process.cwd(), "src/content/blog");

export type PostMeta = {
    slug: string;
    title: string;
    date: string;
    description: string;
    tags: string[];
};

export function getAllPosts(): PostMeta[] {
    const files = fs.readdirSync(postsDir);
    return files
        .map((file) => {
            const raw = fs.readFileSync(path.join(postsDir, file), "utf-8");
            const { data } = matter(raw);
            return {
                slug: file.replace(".mdx", ""),
                title: data.title,
                date: new Date(data.date).toString(),
                description: data.description,
                tags: data.tags ?? [],
            };
        })
        .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
        );
}

export function getPostBySlug(slug: string) {
    const file = path.join(postsDir, `${slug}.mdx`);
    const raw = fs.readFileSync(file, "utf-8");
    const { data, content } = matter(raw);
    return {
        frontmatter: {
            title: data.title,
            date: new Date(data.date).toString(),
            description: data.description,
            tags: data.tags ?? [],
        },
        content,
    };
}
