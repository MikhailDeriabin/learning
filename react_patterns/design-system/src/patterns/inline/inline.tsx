import styled from "styled-components";
import MenuBasis, { Logo } from "./menu";
import { Gutter, spaceSchema } from "../../common/spaces";
import { InlineBundle } from "../inlineBundle/inlineBundle";

//Inline Bundle pattern allows to keep design system spacing consistent between inline elements
//When the screen size changes and there is no room for all elements to be in one line, 
//the direct children will be placed in a vertical column
type Stretch = 'start' | 'end' | 'all';
const stretchSchema: Record<Stretch, string> = {
  start: "> :first-child * { flex: 1 }",
  end: "> :last-child * { flex: 1 }",
  all: "> * { flex: 1 }",
}

type InlineProps = {
  gutter?: Gutter,
  stretch?: Stretch | number
}
export const Inline = styled(InlineBundle)<InlineProps>`
  flex-wrap: wrap;
  > * {
    min-width: fit-content;
  }

  ${({stretch}) => {
    if(typeof stretch === "number"){
      return `> :nth-child(${stretch}) { flex: 1 }`
    }

    return stretch ? stretchSchema[stretch] : ''
  }}
`;

const InlineMenu = () => {
  return (
    <MenuBasis>
      <Inline gutter="m" align="center" justify="center" stretch={2}>
        <div>
          <Logo />
        </div>
        <InlineBundle gutter="m" justify="center" align="center">
          <span>Books</span>
          <span>Authors</span>
          <span>Deals</span>
          <span>About Us</span>
        </InlineBundle>
        
        <div>
          <span>Sign-in</span>
          <button>Register</button>
        </div>
        
      </Inline>
    </MenuBasis>
  );
};

export default InlineMenu;
