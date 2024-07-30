import { ReactNode } from "react";
import {Center} from "../center/center";
import {Pad} from "../pad/pad";

type Props = {
  children: ReactNode
}
export const Description = (props: Props) => (
  <Pad padding="l">
    <Center centerText>{props.children}</Center>
  </Pad>
);
