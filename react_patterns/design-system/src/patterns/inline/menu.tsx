import styled from "styled-components";
import { Split } from "../split/InfoForm";
import { ReactNode } from "react";
import { spaceSchema } from "../../common/spaces";

type PadProps = {
  padding: any
}
const Pad = styled.div<PadProps>`
  padding: ${(props) => {
    return []
      .concat(props.padding)
      .map((padKey) => spaceSchema[padKey])
      .join(" ");
  }};
`;

export const Logo = styled.div`
  border-radius: 50%;
  background: linear-gradient(135deg, #ff2828, #d043ff);
  inline-size: 3rem;
  max-inline-size: 3rem;
  block-size: 3rem;
`;

const MenuWrapper = styled(Pad)`
  border: 2px solid #f06292;
  border-radius: 0.5rem;
`;

type MenuProps = {
  switchAt: string
}
const Menu = styled(Split)<MenuProps>`
  > ${Logo} {
    inline-size: 3rem;
    max-inline-size: 3rem;
    block-size: 3rem;
  }
`;

const MenuItems = styled.div`
  color: yellow;
`;

type Props = {
  children: ReactNode
}

const MenuBasis = (props: Props) => (
  <MenuWrapper padding="s">
      {props.children}
  </MenuWrapper>
);

export default MenuBasis;
