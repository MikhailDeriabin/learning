import { Properties } from 'csstype';
import { useInputFormContext } from './InputForm';

type Props = {
    className?: string,
    style?: Properties
}
export default function InputField({className, style}: Props) {
    const {onSubmit, values} = useInputFormContext();

    function handleSubmit() {
        onSubmit(values);
    }

    return(
        <input id="submit-btn" onSubmit={handleSubmit} type="submit" className={`${className}`} style={style}/>
    );
}