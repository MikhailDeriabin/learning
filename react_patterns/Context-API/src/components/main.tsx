import styled from "styled-components";
import Blocks from "./blocks";
import { AnotherSlowComponent, SlowComponent } from "./slow-component";

const MainDiv = styled.div`
  flex-grow: 1;
  padding: 20px;
  background-color: #fff;
  transition: margin-left 0.3s;
`;

type Props = {
  collapsed: boolean
}

const Main = () => {
  return (
    <MainDiv>
      <h1>Main Content</h1>
      <p>This is the main content area.</p>
      <SlowComponent />
      <AnotherSlowComponent />
      <Blocks/>
    </MainDiv>
  );
};

export default Main;
