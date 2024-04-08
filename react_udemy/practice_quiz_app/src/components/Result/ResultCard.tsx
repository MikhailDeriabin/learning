import ResultInfo from "./ResultInfo";
import QAList from "./QAList/QAList";

type Props = {

}
export default function ResultCard({}: Props) {
    return(
        <div>
            <ResultInfo/>
            <QAList/>
        </div>
    );
}