import { styled } from "styled-components";
import tshirt from "../../images/tshirt.jpg";
import { Description } from "./components";
import { Grid } from "../gridPattern/GridCards";

//This pattern allows us to choose how to display images

type MediaWrapperProps = {
  ratio?: number[]
}
export const MediaWrapper = styled.div<MediaWrapperProps>`
  position: relative;

  //Set vars for requested aspect ratio
  --horizontal: ${({ratio}) => ratio && ratio[0] ? ratio[0] : 1};
  --vertical: ${({ratio}) => ratio && ratio[1] ? ratio[1] : 1};

  //If the aspect ration is supported by browser, just set this property
  aspect-ratio: var(--horizontal) / var(--vertical);

  //If this prop is not supported by browser, calculate it manually
  @supports not (aspect-ratio: 1/1){
    padding-bottom: calc(var(--vertical) / var(--horizontal) * 100%);
  }

  > * {
    position: absolute;
    top: 0;
    left: 0;

    //If element is not img or video
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  //If element is img or video
  > img, > video{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const NewProducts = () => {
  return (
    <div>
      <MediaWrapper ratio={[1, 1]}>
        <img src={tshirt} alt="" />
      </MediaWrapper>
      <Description>White T-shirt - $19.99</Description>
    </div>
  );
};

const NewProductsListMediaWrapper = () => {
  return (
    <Grid gutter="xl" columnSize="18rem">
        <NewProducts />
        <NewProducts />
        <NewProducts />
        <NewProducts />
    </Grid>
  );
};

export default NewProductsListMediaWrapper;
