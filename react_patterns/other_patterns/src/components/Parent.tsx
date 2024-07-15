import Buttons from "./Buttons";
import Counter from "./Counter";

type Props = {

}

export default function Parent({  }: Props) {
    return (
        <>
            <Buttons/>
            <Counter/>
        </>
    );
}