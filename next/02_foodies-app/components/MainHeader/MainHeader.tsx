import Link from "next/link";
import logoImg from '@/assets/logo.png';
import styles from './MainHeader.module.css';
import Image from "next/image";
import MainHeaderBG from "./MainHeaderBG";

export default function MainHeader() {
    return (
        <header className={styles.header}>
            <MainHeaderBG/>
            <Link href="/" className={styles.logo}>
                {/* Better to use Image, it adds loading optimization settings automatically */}
                <Image src={logoImg} alt="logo" priority/> 
                Next level food
            </Link>
            <nav className={styles.nav}>
                <ul>                  
                    <li><Link href="/meals">Meals</Link></li>
                    <li><Link href="/meals/share">Share Meals</Link></li>
                    <li><Link href="/community">Community</Link></li>
                </ul>
            </nav>
        </header>
    );
}