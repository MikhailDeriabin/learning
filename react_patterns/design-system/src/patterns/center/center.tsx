import { styled } from "styled-components";
import { Extras } from "./components";
import {Layers} from "../layers/Layers";
import { Gutter } from "../../common/spaces";

//This patterns allow us to center children components

type CenterProps = {
  maxWidth?: string,
  centerText?: boolean
  centerChildren?: boolean
}
export const Center = styled.div<CenterProps>`
  box-sizing: content-box;
  //this is a better way to write: margin: 0 auto;
  //Because it set margins for left and right
  margin-inline-start: auto;
  margin-inline-end: auto;

  max-inline-size: ${(props) => props.maxWidth};

  //Just pass properties straight to css if needed
  ${(props) => props.centerText && `text-align: center;`}

  ${(props) =>
    props.centerChildren &&
    `
    display: flex;
    flex-direction: column;
    align-items: center;
  `}
`;

const ProfileCenter = () => {
  return (
    <Center as={Layers} gutter="s" maxWidth="60ch" centerText centerChildren>
      <h2>I am title!</h2>
      <p>
        "This is a long long text , nibh lorem convenire quo et. Usu ea libris
        omittantur. Dicta theophrastus ad mei. Dicat appetere at vis, I am the
        end of text."
      </p>
      <Extras />
    </Center>
  );
};

export default ProfileCenter;
