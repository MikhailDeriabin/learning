import { Button, PrimaryButton } from "./components/Button";
import Modal from "./components/Modal";
import { fontSize, GlobalStyles, text } from "./utils";
import enterImg from './assets/enter-img.svg';

function App() {
  return (
    <>
      {/* <Button>Button</Button><br/><br/>

      <PrimaryButton>Medium</PrimaryButton><br/><br/>

      <PrimaryButton className="small">Small</PrimaryButton><br/><br/>

      <PrimaryButton className="big">Big</PrimaryButton><br/><br/>

      <PrimaryButton className="warning small">warning</PrimaryButton><br/><br/>

      <PrimaryButton className="risk">error</PrimaryButton><br/><br/>

      <PrimaryButton className="submit">submit</PrimaryButton><br/><br/> */}

      <Modal 
        image={enterImg} 
        label={<div style={{color: text.text, fontSize: fontSize.header1}}>Register now <br/>to unlock all cool features</div>}
        actions={<div style={{display: 'flex', gap: '10px'}}><PrimaryButton>Back</PrimaryButton><PrimaryButton>Register</PrimaryButton></div>}
      />

      <GlobalStyles/>
    </>
  )
}

export default App;
