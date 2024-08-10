import Link from "next/link";
import logoImg from '@/assets/logo.png';
import styles from './MainHeader.module.css';
import Image from "next/image";
import MainHeaderBG from "./MainHeaderBG";
import NavLink from "./NavLink";


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
                    <li><NavLink href="/meals">Meals</NavLink></li>
                    <li><NavLink href="/community">Community</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}