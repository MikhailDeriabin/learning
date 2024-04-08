import {HTMLAttributes, ReactNode} from "react";

type SectionProps = {
    label: string;
    children: ReactNode;
} & HTMLAttributes<HTMLElement>;

export default function Section({label, children, ...props}: SectionProps) {
    return (
        <section {...props}>
            <h2>{label}</h2>
            {children}
        </section>
    );
}