import TabButton from "../TabButton/TabButton";
import {Example, EXAMPLES, MenuButton} from "../../data";
import {useState} from "react";
import Section from "../Section/Section";
import Tabs from "../Tabs/Tabs";

export default function Examples() {
    const [selectedButton, setSelectedButton] = useState<MenuButton | null>(null);
    const [info, setInfo] = useState<Example>(EXAMPLES[MenuButton.Component]);

    function onSelect(button: MenuButton) {
        setSelectedButton(button);
        setInfo(EXAMPLES[button]);
    }

    return(
        <Section id="examples" label="Examples">
            <Tabs
                ButtonsContainer="menu"
                buttons={
                    <>
                        <TabButton onClick={() => onSelect(MenuButton.Component)}>Component</TabButton>
                        <TabButton onClick={() => onSelect(MenuButton.JSX)}>JSX</TabButton>
                        <TabButton onClick={() => onSelect(MenuButton.Props)}>Props</TabButton>
                        <TabButton onClick={() => onSelect(MenuButton.State)}>State</TabButton>
                    </>
                }
            >
                <div id="tab-content">
                    {
                        selectedButton !== null ?
                            <>
                                <h3>{info.title}</h3>
                                <p>{info.description}</p>
                                <pre>
                                    <code>{info.code}</code>
                                </pre>
                            </> :
                            <p>Please select the topic first</p>
                    }
                </div>
            </Tabs>
        </Section>
    );
}