import Link from "next/link";
import { Header } from "@/components/Header";

//This is a server-rendered component
export default function Home() {
    return (
        <main>
            <Header />
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
