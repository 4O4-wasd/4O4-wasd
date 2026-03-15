import Footer from "@/components/footer";
import { getAllPosts, PostMeta } from "@/lib/posts";
import { Card, Separator } from "@heroui/react";
import Head from "next/head";
import Link from "next/link";

export async function getStaticProps() {
    const posts = getAllPosts();
    return { props: { posts } };
}

export default function Blog({ posts }: { posts: PostMeta[] }) {
    return (
        <>
            <Head>
                <title>blog - 4O4</title>
                <meta
                    name="description"
                    content="Thoughts on code, games, and whatever else."
                />
            </Head>
            <main className="flex-col min-h-screen text-sm leading-[1.7] overflow-scroll">
                <nav className="px-6 py-8 flex justify-between items-center">
                    <Link
                        href="/"
                        className="text-base text-muted hover:text-accent transition-colors"
                    >
                        ← back
                    </Link>
                    <span className="tracking-[0.14em] uppercase text-xs text-muted">
                        blog
                    </span>
                </nav>

                <Separator />

                <div className="p-6">
                    <p className="tracking-[0.14em] uppercase text-xs mb-3">
                        writings & thoughts
                    </p>
                    {posts.map((post, i) => (
                        <Card
                            key={post.slug}
                            variant="transparent"
                            className="rounded-none border-x-0 border-t px-1"
                        >
                            <Card.Content className="flex justify-between items-start gap-4 p-0">
                                <div className="flex-1">
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="no-underline group"
                                    >
                                        <Card.Title className="text-[14px] font-medium text-foreground mb-1 hover:text-accent transition-colors">
                                            {post.title}
                                        </Card.Title>
                                    </Link>
                                    <Card.Description className="text-xs leading-relaxed">
                                        {post.description}
                                    </Card.Description>
                                </div>
                                <span className="text-[11px] text-muted shrink-0">
                                    {new Date(post.date).toLocaleDateString(
                                        "en-US",
                                        {
                                            year: "numeric",
                                            month: "short",
                                            day: "numeric",
                                        },
                                    )}
                                </span>
                            </Card.Content>
                        </Card>
                    ))}

                    {posts.length === 0 && (
                        <p className="text-muted text-xs pt-6">
                            nothing here yet. check back soon.
                        </p>
                    )}
                </div>

                <Separator />

                <Footer />
            </main>
        </>
    );
}
