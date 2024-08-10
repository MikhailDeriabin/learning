'use client';
//Here we have moved the Link from the MainHeader and made it a client component
//It is a better to make the least amount of code client side, since the Next idea is server side rendered components for SEO etc.

import { usePathname } from "next/navigation";
import classes from './NavLink.module.css';
import Link from "next/link";
import { ReactNode } from "react";

type Props = {
    href: string,
    children: ReactNode
}
export default function NavLink({ href, children }: Props) {
    const path = usePathname();

    const isActive = path.startsWith(href);

    return <Link className={isActive ? classes.active : ''} href={href}>{children}</Link>;
}