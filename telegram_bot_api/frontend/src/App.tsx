import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {SelectLanguage} from "./component/LanguageSelect/LanguageSelect";
import {TranslationSection} from "./component/TranslationSection/TranslationSection";
import {TranslationResult} from "./component/TranslationResult/TranslationResult";
import {Header} from "./component/Header/Header";


export type TranslationDirection = {
    source: 'en' | 'fi',
    target: 'en' | 'fi'
}

function App() {
    const [translatedText, setTranslatedText] = useState<string>('');
    const [translationDirection, setTranslationDirection] = useState<TranslationDirection>({source:'en', target:'fi'});

    return (
        <div className="App">
            <Header/>
            <SelectLanguage setTranslationDirection={setTranslationDirection}/>

            <TranslationSection setTranslatedText={setTranslatedText} translationDirection={translationDirection}/>

            <TranslationResult translatedText={translatedText}/>
        </div>
    );
}

export default App;
