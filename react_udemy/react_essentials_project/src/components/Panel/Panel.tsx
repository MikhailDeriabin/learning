import {ChangeEvent, HTMLAttributes, useState} from "react";
import "./styles.css"
import {PanelForm, PanelFormName} from "../../types/PanelForm";
import {isNumber, parseToFloat, parseToInt} from "../../util/stringUtil";

type PanelProps = {
    updateFormData: (data: Partial<PanelForm>) => void;
    data: PanelForm;
} & HTMLAttributes<HTMLDivElement>

type FormError = {
    initial: string,
    annual: string,
    expected: string,
    duration: string
}
type FormField = {
    name: PanelFormName;
    value: string;
}

export default function Panel({updateFormData, data, ...props}: PanelProps) {
    const [error, setError] = useState<FormError>({initial: '', annual: '', expected: '', duration: ''});

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const {name, value} = e.target;

        const convertedName = name as PanelFormName;
        clearErrorText(convertedName);

        if(value !== '' && !validate({name: convertedName, value})){
            setErrorText(convertedName);
            return;
        }

        updateFormData({[convertedName]: value});
    }

    function validate({name, value}: FormField) {
        switch (name) {
            case 'initial':
                return isNumber(value);
            case 'annual':
                return isNumber(value);
            case 'expected':
                return isNumber(value);
            case 'duration':
                return isNumber(value);
            default:
                return false;
        }
    }


    function setErrorText(name: PanelFormName) {
        setError(prevState => {
            return {...prevState, [name]: 'Should be a number'};
        });
    }
    function clearErrorText(name: PanelFormName) {
        setError(prevState => {
            return {...prevState, [name]: ''};
        });
    }

    return(
        <div {...props} id="user-input" className="input-group">
            <form id="form">

                <div>
                    <label htmlFor="initial">Initial investment</label>
                    <input id="initial" type="number" name={PanelFormName.initial} value={data.initial} onChange={handleChange}/>
                    <div className="error-text">{error.initial}</div>
                </div>

                <div>
                    <label htmlFor="annual">Annual investment</label>
                    <input id="annual" type="number" name={PanelFormName.annual} value={data.annual} onChange={handleChange}/>
                    <div className="error-text">{error.annual}</div>
                </div>

                <div>
                    <label htmlFor="expected">Expected return</label>
                    <input id="expected" type="number" name={PanelFormName.expected} value={data.expected} onChange={handleChange}/>
                    <div className="error-text">{error.expected}</div>
                </div>

                <div>
                    <label htmlFor="duration">Duration</label>
                    <input id="duration" type="number" name={PanelFormName.duration} value={data.duration} onChange={handleChange}/>
                    <div className="error-text">{error.duration}</div>
                </div>

            </form>
        </div>
    );
}