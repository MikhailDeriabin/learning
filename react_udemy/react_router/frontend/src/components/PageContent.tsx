import classes from './PageContent.module.css';
import {ReactNode} from "react";

type Props = {
    title: string,
    children?: ReactNode
}

function PageContent({ title, children }: Props) {
    return (
        <div className={classes.content}>
            <h1>{title}</h1>
            {children}
        </div>
    );
}

export default PageContent;