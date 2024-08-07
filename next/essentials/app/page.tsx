import Link from "next/link";

//This is a server-rendered component
export default function Home() {
    return (
        <main>
            <img src="/logo.png" alt="A server surrounded by magic sparkles." />
            <h1>Welcome to this NextJS Course!</h1>
            <p>🔥 Let&apos;s get started! 🔥</p>
            {/* This will get us to another page and the it will be downloaded from the server => not SPA */}
            <a href="/about">About us</a>
            <p>
                {/* SPA style or React, this page will not be re-downloaded */}
                <Link href="/about">About us</Link>
            </p>
        </main>
    );
}
