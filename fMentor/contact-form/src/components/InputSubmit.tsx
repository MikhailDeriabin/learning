import { Properties } from 'csstype';

type Props = {
    className?: string,
    style?: Properties
}
export default function InputSubmit({className, style}: Props) {
    return(
        <button id="submit-btn" type="submit" className={`${className}`} style={style}>Submit</button>
    );
}