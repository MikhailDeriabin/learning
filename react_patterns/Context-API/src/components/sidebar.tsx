import styled from "styled-components";
import Button from "./button";
import { useNavContext } from "../context/NavController";

const SidebarDiv = styled.div<{ collapsed?: boolean }>`
  width: ${(props) => (props.collapsed ? "60px" : "200px")};
  transition: width 0.3s;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

type Props = {
  collapsed: boolean,
  setCollapsed: () => void
}

const Sidebar = () => {
  const { collapsed } = useNavContext();

  return (
    <SidebarDiv collapsed={collapsed}>
      <Button />
      <div>Sidebar Content</div>
    </SidebarDiv>
  );
};

export default Sidebar;
