import { useState } from "react";
import { Button } from "./Button";
import { ModalDialog } from "./ModalDialog";

type Props = {

}
export default function ToggleButton({  }: Props) {
    //Now the state is isolated and does not causes re-renders of its consumer
    const [visible, setVisible] = useState<boolean>(false);

    function handleOpen() {
        setVisible(true);
    }
    function handleClose() {
        setVisible(false);
    }

    return(
        <>
            <Button onClick={handleOpen}>Open Dialog</Button>
            {visible && <ModalDialog onClose={handleClose}></ModalDialog>}
        </>
    );
}