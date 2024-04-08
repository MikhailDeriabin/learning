import {CSSProperties} from "react";

type Props = {
    answer: string;
    onClick: (answer: string) => void;
    isRight: boolean | null;
}
export default function QuestionItem({answer, onClick, isRight}: Props) {
    let styles: CSSProperties = {};
    if(isRight)
        styles = {backgroundColor: "green"};
    if(isRight === false)
        styles = {backgroundColor: "red"};

    return(
        <li style={styles} onClick={() => onClick(answer)}>
            {answer}
        </li>
    );
}