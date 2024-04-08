import {HTMLAttributes} from "react";

type TableHeadProps = {} & HTMLAttributes<HTMLElement>
export default function TableHead({...props}: TableHeadProps) {
    return (
        <thead {...props}>
            <tr>
                <td>Year</td>
                <td>Investment Value</td>
                <td>Interest (Year)</td>
                <td>Total Interest</td>
                <td>Invested Capital</td>
            </tr>
        </thead>
    );
}