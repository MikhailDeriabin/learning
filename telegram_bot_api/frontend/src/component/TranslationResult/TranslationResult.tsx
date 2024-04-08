import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TranslationResult.css';


type TranslationResultProps = {
    translatedText: string;
}

export function TranslationResult({...props}: TranslationResultProps) {
    return (
        <div id="translationResult">
            <p>{props.translatedText}</p>
        </div>
    );
}
