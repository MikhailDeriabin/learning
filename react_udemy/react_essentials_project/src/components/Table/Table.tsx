import {HTMLAttributes} from "react";
import {PanelForm, PanelFormName, ParsedPanelForm} from "../../types/PanelForm";
import TableHead from "../TableHead/TableHead";
import "./styles.css";
import {calculateInvestmentResults, formatter} from "../../util/investment";
import {parseToFloat, parseToInt} from "../../util/stringUtil";

type TableProps = {
    data: PanelForm;
} & HTMLAttributes<HTMLTableElement>;

function parse({name, value}: {name: PanelFormName, value: string}) {
    switch (name) {
        case PanelFormName.initial:
            return parseToInt(value);
        case PanelFormName.annual:
            return parseToInt(value);
        case PanelFormName.expected:
            return parseToFloat(value);
        case PanelFormName.duration:
            return parseToInt(value);
        default:
            return null;
    }
}

export default function Table({data, ...props}: TableProps) {

    //Parsing here, because only here it is needed
    let parsedData: ParsedPanelForm = { initial: 0, annual: 0, duration: 0, expected: 0 };
    for(const key in data){
        const name = key as PanelFormName;
        parsedData[name] = parse({name, value: data[name]}) ?? 0;
    }

    //if any value is zero do not calculate
    const isAnyZero = Object.keys(parsedData).find(key => parsedData[key as PanelFormName] === 0);
    const tableData = !isAnyZero ? calculateInvestmentResults(parsedData) : [];
    const initialInvestment = tableData[0] ? tableData[0].valueEndOfYear - tableData[0].interest - tableData[0].annualInvestment : 0;

    return(
        <table {...props} id="result">
            <TableHead/>
            <tbody>
                {tableData.map((item) => {
                    const totalInterest = item.valueEndOfYear - item.annualInvestment*item.year - initialInvestment;
                    const totalAmountInvested = item.valueEndOfYear - totalInterest;

                    return(
                        <tr key={item.year}>
                            <td>{item.year}</td>
                            <td>{formatter.format(item.valueEndOfYear)}</td>
                            <td>{formatter.format(item.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
}