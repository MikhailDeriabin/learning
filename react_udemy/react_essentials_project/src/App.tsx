import Header from "./components/Header/Header";
import logo from "./assets/investment-calculator-logo.png";
import Panel from "./components/Panel/Panel";
import {useState} from "react";
import {PanelForm} from "./types/PanelForm";
import Table from "./components/Table/Table";

function App() {
    const [formData, setFormData] = useState<PanelForm>({initial: "", annual: "", expected: "", duration: ""});

    function handleFormDataUpdate(newData: Partial<PanelForm>) {
        setFormData(prevState => {
            return {...prevState, ...newData};
        });
    }

    return (
        <>
            <Header
                hText="React Investment Calculator"
                imageSrc={logo}
            />

            <Panel
                data={formData}
                updateFormData={handleFormDataUpdate}
            />

            <Table data={formData}/>
        </>
    );
}

export default App;
