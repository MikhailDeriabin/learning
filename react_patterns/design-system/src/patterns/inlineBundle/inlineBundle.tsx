import styled from "styled-components";
import MenuBasis from "./menu";
import { Gutter, spaceSchema } from "../../common/spaces";

//Inline Bundle pattern allows to keep design system spacing consistent between inline elements
//When the screen size changes and there is no room for all elements part of them will be moved to the next line
type Justify = 'start' | 'end' | 'center';
export const justifySchema: Record<Justify, string> = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
}

type InlineBundleProps = {
  gutter?: Gutter,
  justify?: Justify,
  align?: Justify
}
export const InlineBundle = styled.div<InlineBundleProps>`
  display: flex;
  flex-wrap: wrap;

  justify-content: ${({justify}) => justify ? justifySchema[justify] : justifySchema.start};
  align-items: ${({align}) => align ? justifySchema[align] : justifySchema.start};
  gap: ${({gutter}) => gutter ? spaceSchema[gutter] : spaceSchema.l};
`;

const InlineBundleMenu = () => {
  return (
    <MenuBasis>
      <InlineBundle gutter="m" align="center" justify="end">
        <span>Books</span>
        <span>Authors</span>
        <span>Deals</span>
        <span>About Us</span>
        <span>Sign-in</span>
      </InlineBundle>
    </MenuBasis>
  );
};

export default InlineBundleMenu;
