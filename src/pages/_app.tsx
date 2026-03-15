import { Toast } from "@heroui/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>4O4 - full-stack & game dev</title>
                <meta
                    name="description"
                    content="I build web apps, mobile apps, and the occasional rage-inducing parkour game."
                />
                <meta
                    name="keywords"
                    content="full-stack, game dev, typescript, next.js, unreal engine"
                />
                <meta name="author" content="4O4" />

                <meta
                    property="og:title"
                    content="4O4 - full-stack & game dev"
                />
                <meta
                    property="og:description"
                    content="I build web apps, mobile apps, and the occasional rage-inducing parkour game."
                />
                <meta property="og:url" content="https://404wasd.com/" />
                <meta property="og:site_name" content="4O4" />
                <meta property="og:type" content="website" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="4O4 - full-stack & game dev"
                />
                <meta
                    name="twitter:description"
                    content="I build web apps, mobile apps, and the occasional rage-inducing parkour game."
                />

                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://404wasd.com/" />
            </Head>
            <Component {...pageProps} />
            <Toast.Provider />
        </>
    );
}
