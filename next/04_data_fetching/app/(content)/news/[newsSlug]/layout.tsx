import { ReactNode } from "react";

//Here we get the intercepted route from the @modal, which returns a dialog window
//The dialog will be shown whenever the image is clicked (=/news/${pageNews.slug}/image path called)
type Props = Readonly<{
    children?: ReactNode,
    modal?: ReactNode
}>;
export default function SlugLayout({children, modal}: Props){
    return (
        <>
            {modal}
            {children}
        </>
    );
}