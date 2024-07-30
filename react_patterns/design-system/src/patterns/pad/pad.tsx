import { styled } from "styled-components";
import { Bottom, Card, CustomButton, Description, Name, Price, Top } from "./component";
import { Gutter, spaceSchema } from "../../common/spaces";
import {InlineBundle} from "../inlineBundle/inlineBundle";
import {Layers} from "../layers/Layers";
import { Grid } from "../gridPattern/GridCards";

//This pattern allows u to add consistent spacing (padding) for children
type PadProps = {
  padding?: Gutter[] | Gutter
}
export const Pad = styled.div<PadProps>`
  padding: ${({padding}) => {
    if(!padding)
      return 'inherit';
    //Make a padding string 
    const arr: Gutter[] = [];
    return arr
      .concat(padding)
      .map((paddingKey) => spaceSchema[paddingKey])
      .join(" ");
  }};
`;

//"as" is setting the HTML tag for a component. Sometimes it can be called variant, component or element
//attrs allows u to override or pass some props for Pad
export const Button = styled(Pad)
  .attrs(() => ({as: CustomButton, padding: ["s", "l"]}))``;

function GiftCardPad () {
  return (
    <Card>
      <Pad padding="l">
        <Top>
          <Name>Gift Card</Name>
          <Description>This is one of our gift cards you can buy.</Description>
          <Price>$25.99</Price>
          <InlineBundle gutter="none" justify="center">
            <Button>Buy</Button>
          </InlineBundle>
        </Top>
      </Pad>

      <Bottom>
        <Pad padding="s">
          <Layers gutter="m">
            <span>Includes:</span>
            <ul>
              <li>This is inclusion number 1</li>
              <li>
                This is inclusion number 2 which comes after inclusion number1
              </li>
              <li>This is inclusion number 3</li>
            </ul>
          </Layers>
        </Pad>
      </Bottom>
    </Card>
  );
};

export default function GiftCardPadList () {
  return (
    <Grid gutter="xl" columnSize="16rem">
      <GiftCardPad />
      <GiftCardPad />
      <GiftCardPad />
      <GiftCardPad />
    </Grid>
  );
};

