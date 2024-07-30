import { styled } from "styled-components";
import { Gutter, spaceSchema } from "../../common/spaces";
import { ReactNode } from "react";
import {InlineBundle} from "../inlineBundle/inlineBundle";
import {Layers} from "../layers/Layers";
import { Button } from "./components";
import { Pad } from "../pad/pad";

//Allows to align children components vertically, also allows to inject some components on top and bottom edges

type CoverProps = {
  gutter?: Gutter,
  top?: ReactNode,
  bottom?: ReactNode,
  children?: ReactNode,
  minHeight?: string
}
export const Cover = styled.div.attrs<CoverProps>(({ children, top, bottom }) => {
  return {
    children: (
      <>
        {top && <div>{top}</div>}
        <div data-cover-child>{children}</div>
        {bottom && <div>{bottom}</div>}
      </>
    ),
  };
})`
  display: grid;
  gap: ${(props) => props.gutter ? spaceSchema[props.gutter] : spaceSchema.l};
  min-block-size: ${(props) => props.minHeight ?? "100vh"};

  grid-template-rows: ${({ top, bottom }) =>{
    if(top && bottom)
      return "auto 1fr auto";

    if(top)
      return "auto 1fr";

    if(bottom)
      return "1fr auto";

    return "1fr";
  }};

  > [data-cover-child] {
    align-self: center;
  }
`;

const Top = () => {
  return (
    <InlineBundle gutter="xl" justify="end">
      <span>Home</span>
      <span>Products</span>
      <span>Blog</span>
      <span>Contact Us</span>
    </InlineBundle>
  );
};

const Bottom = () => {
  return (
    <InlineBundle gutter="xl" justify="center">
      <a href="/#">Terms and Rules</a>
    </InlineBundle>
  );
};

const HeroPageCover = () => {
  return (
    <Cover top={<Top />} bottom={<Bottom />} as={Pad} padding={["l", 'm']}>
      <Layers gutter="l">
        <h1>CodeLicks</h1>
        <span>Learn and grow</span>
        <InlineBundle gutter="l">
          <Button primary>Enroll now</Button>
          <Button>Register</Button>
        </InlineBundle>
      </Layers>
    </Cover>
  );
};

export default HeroPageCover;
