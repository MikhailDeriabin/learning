import {CORE_CONCEPTS} from "../../data";
import {CoreConcept} from "../CoreConcept/CoreConceptProps";
import Section from "../Section/Section";

export default function CoreConcepts() {
    return (
        <Section id="core-concepts" label="Time to get started!">
            <ul>
                {
                    CORE_CONCEPTS.map((concept, key) => <CoreConcept key={key} {...concept} />)
                }
            </ul>
        </Section>
    );
}