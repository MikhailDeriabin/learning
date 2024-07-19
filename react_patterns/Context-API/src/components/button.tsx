import styled from "styled-components";
import { useNavContext } from "../context/NavController";

const ToggleButton = styled.button`
  margin-bottom: 20px;
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;
type Props = {
  collapsed: boolean,
  setCollapsed: () => void
}
const Button = () => {
  const { collapsed, toggle } = useNavContext();

  return <ToggleButton onClick={toggle}>{collapsed ? '➡️' : '⮜'}</ToggleButton>;
};

export default Button;
