import styled from "styled-components";
import { Pad } from "../pad/pad";

type Props = {
  primary?: boolean
}
export const Button = styled(Pad).attrs(() => ({
  padding: ["m", "xl"],
  as: "button",
}))<Props>`
  background: ${(props) => (props.primary ? "crimson" : "white")};
  color: ${(props) => (props.primary ? "white" : "crimson")};
  border: ${(props) => (props.primary ? "none" : "1px solid crimson")};
  border-radius: 0.25rem;
`;
