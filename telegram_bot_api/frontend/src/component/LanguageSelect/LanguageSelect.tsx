import React, {ChangeEvent} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LanguageSelect.css';
import Form from 'react-bootstrap/Form';

type SelectLanguageProps = {
    setTranslationDirection: Function;
}
enum Option {
    'EN-FI' =  'EN-FI',
    'FI-EN' =  'FI-EN'
}

export function SelectLanguage({...props}: SelectLanguageProps) {
    function setDirection(evt: ChangeEvent<HTMLSelectElement>) {
        if(evt.target.value === Option["EN-FI"])
            props.setTranslationDirection({source: 'en', target: 'fi'});

        if(evt.target.value === Option["FI-EN"])
            props.setTranslationDirection({source: 'fi', target: 'en'});
    }

    return (
        <Form.Select id="changeLanguageSelect" size="sm" onChange={evt => setDirection(evt)}>
            <option value={Option["EN-FI"]}>{Option["EN-FI"]}</option>
            <option value={Option["FI-EN"]}>{Option["FI-EN"]}</option>
        </Form.Select>
    );
}
