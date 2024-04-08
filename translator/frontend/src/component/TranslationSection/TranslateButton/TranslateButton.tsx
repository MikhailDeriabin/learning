import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TranslateButton.css';
import translate from "../../../icon/translate.svg";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import {post} from "../../../common/util/post";
import {TranslationDirection} from "../../../App";

type TranslateButtonProps = {
    textToTranslate: string;
    setTranslatedText: Function;
    translationDirection: TranslationDirection;
}
type TranslateRequest = {
    text: string,
    source: 'en' | 'fi',
    target: 'en' | 'fi'
}
type APIResponse = {
    translatedText: string;
}

export function TranslateButton({...props}: TranslateButtonProps) {
    const [isSpinnerHidden, setIsSpinnerHidden] = useState<boolean>(true);
    async function translateText(text: string) {
        if(!text)
            return;
        text = text.trim();
        if(text.length === 0)
            return;

        setIsSpinnerHidden(false);
        const requestObj: TranslateRequest = {
            text: text,
            source: props.translationDirection.source,
            target: props.translationDirection.target
        }
        const resp = await makeTranslationRequest(requestObj);
        typeof resp === 'string' ? props.setTranslatedText(resp) : props.setTranslatedText(resp.translatedText);
        setIsSpinnerHidden(true);
    }

    async function makeTranslationRequest(data: TranslateRequest): Promise<APIResponse | string> {
        const response = await post('http://localhost:5000/translation', data);
        if(!response)
            return 'Error: Something gone wrong';
        if(response === 404 || response === 400)
            return 'Error: Can not translate this text';
        if(response === 422)
            return 'Error: Text is too long'

        return typeof response === 'object' ? response as APIResponse : 'Error: Something gone wrong, please try to translate later';
    }

    return (
        <Button id="translateButton" variant="primary" size="sm" onClick={() => translateText(props.textToTranslate)}>
            {'translate'}
            <img id="translateIcon" src={translate} alt="translate icon"/>
            <Spinner
                id="translateSpinner"
                animation="border"
                variant="info"
                as="span"
                size="sm"
                role="status"
                hidden={isSpinnerHidden}
            />
        </Button>
    );
}
