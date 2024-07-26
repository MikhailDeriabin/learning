import { Button, PrimaryButton } from "./components/Button";
import { GlobalStyles } from "./utils";

function App() {
  return (
    <>
      <h1>Some title here</h1>
      <Button>Button</Button><br/><br/>

      <PrimaryButton>Medium</PrimaryButton><br/><br/>

      <PrimaryButton className="small">Small</PrimaryButton><br/><br/>

      <PrimaryButton className="big">Big</PrimaryButton><br/><br/>

      <PrimaryButton className="warning">warning</PrimaryButton><br/><br/>

      <PrimaryButton className="risk">error</PrimaryButton><br/><br/>

      <PrimaryButton className="submit">submit</PrimaryButton><br/><br/>

      <GlobalStyles/>
    </>
  )
}

export default App;
