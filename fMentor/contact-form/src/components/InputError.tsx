import { Properties } from 'csstype';
import { useInputContext } from './Input';

type Props = {
    className?: string,
    style?: Properties
}
export default function InputError({className, style}: Props) {
    const {error} = useInputContext();

    return(
        <p className={`${className}`} style={style}>{error ?? <br/>}</p>
    );
}