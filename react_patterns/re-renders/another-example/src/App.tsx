import { SlowComponent } from "./components/SlowComponent";
import {
  AdditionalComplexThings,
  BlaBla
} from "./components/DummyComponents";
import DynamicScroll from "./components/DynamicScroll";



export default function App() {
  // Again no state here
  // const [position, setPosition] = useState<number>(170);

  return (
    // <ScrollableContainer onScroll={handleScroll}>
    //   {/* Here we can again move the component into separate one */}
    //   <DynamicBlock top={position === 113 ? 113 : position} color={blackColor}>🛒</DynamicBlock>

    //   {/* Here is once again a slow components, which are adding a lag for the scrolling effect */}
    //   <SlowComponent />
    //   <BlaBla />
    //   <AdditionalComplexThings />
    // </ScrollableContainer>

    //The trick is that since the state is in the DynamicScroll, 
    //but the components (content prop) are in the App => so the app will not be re-rendered and these components too
    <DynamicScroll content={
      <>
        <SlowComponent />
        <BlaBla />
        <AdditionalComplexThings />
      </>
    }/>
  );
}
