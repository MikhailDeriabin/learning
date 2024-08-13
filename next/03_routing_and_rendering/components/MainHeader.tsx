import Link from "next/link";

export default function MainHeader(){
    return(
        <header id="main-header">
            <div id="logo">
                <Link href="/">Home</Link>
            </div>
            <nav>
                <ul>
                <li>
                    <Link href="/news">News</Link>
                </li>
                </ul>
            </nav>
        </header>
    );
}