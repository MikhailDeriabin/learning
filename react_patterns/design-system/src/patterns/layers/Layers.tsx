import { styled } from "styled-components";
import { Gutter, spaceSchema } from "../../common/spaces";

//Basically with this u can simply choose the space u need s, l, xl etc. and just wrap your components with it. 
//So that u can use the same spaces across your app, also u do not have to repeat adding margins gaps etc. for each component
type LayersProps = {
  gutter?: Gutter;
}
export const Layers = styled.div<LayersProps>`
  display: grid;
  gap: ${(props) => props.gutter ? spaceSchema[props.gutter] : spaceSchema.l};
`;

const SubscribeForm = () => {
  return (
    <Layers gutter="xl">
      <Layers gutter="m">
        <h2>Subscribe To Newsletter</h2>
        <p>
          Subscribe to the newsletter to receive updates about new products and
          other news.
        </p>
      </Layers>

      <Layers>
        <Layers gutter="s">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </Layers>

        <Layers gutter="s">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" />
        </Layers>

        <button>Subscribe</button>
      </Layers>
    </Layers>
  );
};

export default SubscribeForm;
