import { Properties } from 'csstype';
import { useInputContext } from './Input';

type Props = {
    className?: string,
    style?: Properties
}
export default function InputError({className, style}: Props) {
    const {validate, value, id} = useInputContext();

    if(!validate)
        return <p>Error: you must provide a validation function in order to use InputError</p>;

    const text = value === undefined ? '' : validate(id, value);

    return(
        <p className={`${className}`} style={style}>{text}</p>
    );
}