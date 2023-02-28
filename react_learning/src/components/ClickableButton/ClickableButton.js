import './ClickableButton.css';

import { useState } from 'react';

function ClickableButton(props) {
    const [text, setText] = useState(props.text);
    const clickHandler = () => {
        setText("The text was changed");
        console.log(text);
    }

    return(
        <button className="clickable-button" onClick={clickHandler}>{text}</button>
    );
}

export default ClickableButton;