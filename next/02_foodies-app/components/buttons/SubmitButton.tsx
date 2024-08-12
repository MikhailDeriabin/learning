'use client';
import { ReactNode } from "react";
import { useFormStatus } from "react-dom";

type Props = Readonly<{
    children: ReactNode
}>;
export default function SubmitButton({ children }: Props) {
    const { pending } = useFormStatus();
    
    return (
        <button disabled={pending}>{pending ? 'Submitting...' : children}</button>
    );
}