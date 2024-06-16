import Accordion from "./components/Accordion/Accordion";
import PlaceCard from "./components/SearchableList/PlaceCard";
import SearchableList from "./components/SearchableList/SearchableList";
import { places } from "./places";
import { Place } from "./types/Place";

//Here is an example of use of custom compound components Accordion and AccordionItem
function App() {
    return (
        <main>
            //Here is an example of use of custom compound components Accordion and AccordionItem
            <section>
                <h2>Why work with us?</h2>
                <Accordion className="accordion">
                    <Accordion.Item id="i1" className="accordion-item">
                        <Accordion.Title  className="accordion-item-title">
                            <h3>We got 20 years of experience</h3>
                        </Accordion.Title>
                        <Accordion.Content className="accordion-item-content">
                            <article>
                                <p>You can not go wrong with us!</p>
                                <p>We are in the business of planning vacations for more than 20 years</p>
                            </article>
                        </Accordion.Content>            
                    </Accordion.Item>
                    <Accordion.Item id="i2" className="accordion-item" >
                        <Accordion.Title className="accordion-item-title">
                            <h3>Personalized Itineraries for Every Traveler</h3>
                        </Accordion.Title>
                        <Accordion.Content className="accordion-item-content">
                            <article>
                                <p>Your dream vacation is just a call away!</p>
                                <p>With over 20 years of experience, we specialize in creating custom travel plans tailored to your interests and preferences.</p>
                            </article>
                        </Accordion.Content>                      
                    </Accordion.Item>
                    <Accordion.Item id="i3" className="accordion-item">
                        <Accordion.Title className="accordion-item-title">
                            <h3>Expert Travel Advisors at Your Service</h3>
                        </Accordion.Title>
                        <Accordion.Content className="accordion-item-content">
                            <article>
                                <p>Travel with confidence!</p>
                                <p>Our team has been providing top-notch travel advice and services for more than two decades, ensuring your journey is seamless and memorable.</p>
                            </article>
                        </Accordion.Content>           
                    </Accordion.Item>
                </Accordion>
            </section>

            //This is an example of render props pattern, where same search logic is applied to different type of data
            <section>
                <SearchableList items={places} itemKeyFn={(p, index) => p.id}>
                    {
                        (item) => <PlaceCard item={item as Place}/>
                    }                
                </SearchableList>

                <SearchableList items={['item 1', 'item 2']} itemKeyFn={(str, index) => str}>
                    {
                        (item) => item
                    }
                </SearchableList>
            </section>
            
        </main>

    );
}

export default App;