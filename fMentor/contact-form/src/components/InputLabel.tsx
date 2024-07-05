import { Properties } from 'csstype';
import { useInputContext } from './Input';

type Props = {
    text: string,
    className?: string,
    style?: Properties
}
export default function InputLabel({text, className, style}: Props) {
    const { id } = useInputContext();

    return(
        <label htmlFor={`${id}-input-field`} className={`${className}`} style={style}>{text}</label>
    );
}