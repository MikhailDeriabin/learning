import React, {ChangeEvent, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TranslationSection.css';
import Form from 'react-bootstrap/Form';
import {TranslateButton} from "./TranslateButton/TranslateButton";
import {TranslationDirection} from "../../App";

type TranslationSectionProps = {
    setTranslatedText: Function;
    translationDirection: TranslationDirection;
}

export function TranslationSection({...props}: TranslationSectionProps) {
    const maxSymbolCount = 200;

    const [inputText, setInputText] = useState<string>('');
    const [symbolCount, setSymbolCount] = useState<number>(0);

    function setTextAreaInfo(evt: ChangeEvent<HTMLInputElement>) {
        setInputText(evt.target.value);
        setSymbolCount(evt.target.value.length);
    }

    return (
        <section id="translationSection">
            <Form.Control
                id="translateTextarea"
                type="text"
                placeholder="type text here"
                size="sm"
                as="textarea"
                onChange={evt => setTextAreaInfo(evt as any)}
                maxLength={maxSymbolCount}
            >
            </Form.Control>
            <div id="textAreaControl">
                <div id="textAreaCounter">
                    {symbolCount}/{maxSymbolCount}
                </div>
                <TranslateButton textToTranslate={inputText} setTranslatedText={props.setTranslatedText} translationDirection={props.translationDirection}/>
            </div>

        </section>
    );
}
