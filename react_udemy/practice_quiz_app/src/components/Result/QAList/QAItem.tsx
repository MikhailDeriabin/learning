type Props = {
    question: string;
    answer: string | null;
    isRight: boolean;
    index: number;
}
export default function QAItem({question, isRight, answer, index}:Props) {
    return(
        <li>
            <p>{index}</p>
            <p>{question}</p>
            <p style={isRight ? {backgroundColor: "green"} : {backgroundColor: "red"}}>{answer ?? 'You skipped'}</p>
        </li>
    );
}