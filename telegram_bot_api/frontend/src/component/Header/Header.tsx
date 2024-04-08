import {useState} from "react";
import {TranslationDirection} from "../../App";
import './Header.css';

export function Header() {
    const [translatedText, setTranslatedText] = useState<string>('');
    const [translationDirection, setTranslationDirection] = useState<TranslationDirection>({source:'en', target:'fi'});

    return (
        <header id="header">
            <h1>Translator</h1>
        </header>
    );
}