import Footer from "@/components/footer";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import * as components from "@heroui/react";
import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import Link from "next/link";
import rehypePrettyCode from "rehype-pretty-code";

type Props = {
    frontmatter: {
        title: string;
        date: string;
        description: string;
        tags: string[];
    };
    mdxSource: MDXRemoteSerializeResult;
};

export async function getStaticPaths() {
    const posts = getAllPosts();
    return {
        paths: posts.map((p) => ({ params: { slug: p.slug } })),
        fallback: false,
    };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
    const { frontmatter, content } = getPostBySlug(params.slug);
    const mdxSource = await serialize(content, {
        mdxOptions: {
            rehypePlugins: [
                [
                    rehypePrettyCode,
                    {
                        theme: "one-dark-pro",
                    },
                ],
            ],
        },
    });
    return { props: { frontmatter, mdxSource } };
}

export default function BlogPost({ frontmatter, mdxSource }: Props) {
    return (
        <>
            <Head>
                <title>{frontmatter.title} - 4O4</title>
                <meta name="description" content={frontmatter.description} />
            </Head>
            <main className="flex-col min-h-screen text-sm leading-[1.8] overflow-scroll">
                <nav className="px-6 py-8 flex justify-between items-center">
                    <Link
                        href="/blog"
                        className="text-base text-muted hover:text-accent transition-colors"
                    >
                        ← back
                    </Link>
                    <span className="tracking-[0.14em] uppercase text-xs text-muted">
                        blog
                    </span>
                </nav>

                <components.Separator />

                <div className="p-6">
                    <div className="py-6 mb-6 border-b">
                        <h1 className="font-medium text-foreground text-[22px] leading-[1.2] tracking-[-0.02em] mb-2">
                            {frontmatter.title}
                        </h1>
                        <p className="text-xs text-muted">
                            {new Date(frontmatter.date).toLocaleDateString(
                                "en-US",
                                {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                },
                            )}
                        </p>
                    </div>

                    <div className="prose prose-sm max-w-none">
                        <MDXRemote
                            {...mdxSource}
                            components={components as Record<string, any>}
                        />
                    </div>
                </div>

                <components.Separator />

                <Footer />
            </main>
        </>
    );
}
