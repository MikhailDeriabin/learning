import { Properties } from 'csstype';

type Props = {
    text: string,
    className?: string,
    style?: Properties
}
export default function InputLabel({text, className, style}: Props) {
    return(
        <p className={`${className}`} style={style}>{text}</p>
    );
}