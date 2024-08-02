import { ColorType } from "./common";
import { GlobalStyles } from "./common/GlobalStyles";
import Input from "./components/Input";

export default function App() {

    return (
        <>
            <Input style={{display: 'flex', flexDirection: 'column'}} size="m" type={ColorType.error}>
                <Input.Label>Name:</Input.Label>
                <Input.Field placeholder="John Doe"/>
                <Input.Info>Some info here</Input.Info>
            </Input>
            <GlobalStyles/>
        </>
    )
}