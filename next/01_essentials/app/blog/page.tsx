import Link from "next/link";

export default function BlogPages() {
    return (<main>
        <h1>Welcome to the blog</h1>
        <p>
            <Link href="/blog/post-1">Post 1</Link>
        </p>
        <p>
            <Link href="/blog/post-2">Post 2</Link>
        </p>
    </main>);
}