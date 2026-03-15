import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html
            lang="en"
            className="antialiased font-sans font-medium dark bg-background h-dvh"
            data-theme="one-dark"
        >
            <Head />
            <body className="h-dvh">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
