import { SlowComponent } from "./components/SlowComponent";
import { AdditionalComplexThings, BlaBla } from "./components/DummyComponents";
import ToggleButton from "./components/ToggleButton";
import useDialog from "./hooks/useDialog";
import { Button } from "./components/Button";
import { ModalDialog } from "./components/ModalDialog";

export default function App() {
  //No state here for toggling modal
  //const [visible, setVisible] = useState<boolean>(false);

  //Little drawback the custom hooks can introduce is that the state is still going here, but inside that hook => the App will be re-rendered
  //So hooks can hide the state changes
  const { isVisible, show, hide } = useDialog();


  return (
    <>
      {
        /*
        Instead of having state here, we can move these components to a separate child component
        <Button onClick={handleOpen}>Open Dialog</Button>
        {visible && <ModalDialog onClose={handleClose}></ModalDialog>}
        */
      }
      {/* Now the state is in this component */}
      <ToggleButton/>
      
      
        
      <Button onClick={show}>Open Dialog via custom hook</Button>
      {isVisible && <ModalDialog onClose={hide}></ModalDialog>}
        
      
      
      {/* This is a slow element, which if re-renders causes a delay in reloading the whole App. So here are two solutions: use memo for it or 
        move the state to child component for Button and Modal dialog
      */}
      <SlowComponent />
      <BlaBla />
      <AdditionalComplexThings />
    </>
  );
}
