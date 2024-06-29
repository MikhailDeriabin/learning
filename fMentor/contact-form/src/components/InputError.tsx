import { Properties } from 'csstype';
import { useInputContext } from './Input';

type Props = {
    className?: string,
    style?: Properties
}
export default function InputError({className, style}: Props) {
    const {error} = useInputContext();

    const text = !error || error === '' ? null : error;

    return(
        <p className={`${className}`} style={style}>{text ?? <br/>}</p>
    );
}