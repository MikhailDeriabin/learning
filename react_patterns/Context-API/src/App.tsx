import styled from "styled-components";
import Sidebar from "./components/sidebar";
import Main from "./components/main";
import NavController from "./context/NavController";

const Container = styled.div`
  display: flex;
  height: 100vh;
`;
//In this app the collapsed and setCollapsed props have to be passed down the tree
//There is not only the props drilling problem, but also that the whole app has to be rerendered each time when the props change
//For example in Main component not every child component needs these props, but only part of them and still these other children has to be re-rendered as well
//We can solve it with the context API, and only the components, which are getting the props now via useContext() will be re-rendered
//After that another problem may arise, all component who are calling the useContext(), will be re-rendered, even if the are using only part of the context
//This problem can be resolved by splitting the contexts to smaller ones, For example u can split the functions and data into different contexts
export default function App() {
  return (
    <NavController>
      <Container>
        <Sidebar/>
        <Main/>
      </Container>
    </NavController>
  );
}
