import { styled } from "styled-components";
import { spaceSchema, Gutter } from "../../common/spaces";
import Form from "./form";

//How much the left side will take space
export type Fraction = '1/4' | '1/3' | '1/2' | '2/3' | '3/4' | 'auto-start' | 'auto-end';
const fractions: Record<Fraction, string> = {
  "1/4": "1fr 3fr",
  "1/3": "1fr 2fr",
  "1/2": "1fr 1fr",
  "2/3": "2fr 1fr",
  "3/4": "3fr 1fr",
  "auto-start": "auto 1fr",
  "auto-end": "1fr auto",
};

type SplitProps = {
  gutter?: Gutter,
  fraction?: Fraction;
}
export const Split = styled.div<SplitProps>`
  display: grid;
  gap: ${(props) => props.gutter ? spaceSchema[props.gutter] : spaceSchema.l};
  grid-template-columns: ${({ fraction }) => fraction ? fractions[fraction] : fractions["1/2"]};
`;

const InfoForm = () => {
  return (
    <Split fraction="1/2" gutter="s">
      <div>
        <h3>General Information</h3>
        <span>
          All the information you provide via this form will be exposed to the
          public.
        </span>
      </div>
      <Form />
    </Split>
  );
};

export default InfoForm;
