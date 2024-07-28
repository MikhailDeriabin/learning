import { styled } from "styled-components";
import { spaceSchema, Gutter } from "../../common/spaces";
import {Layers} from "../layers/Layers";
import { InputGroup } from "../split/form";
import { Split } from "../split/InfoForm";

//With Columns pattern u can add column layout for your components

type ColumnsProps = {
  gutter?: Gutter,
  columns?: number
}

export const Columns = styled.div<ColumnsProps>`
  --columns: ${({columns=1}) => columns};

  display: grid;
  gap: ${({gutter}) => gutter ? spaceSchema[gutter] : spaceSchema.l};
  grid-template-columns: repeat(var(--columns), 1fr);
`;

type ColumnProps = {
  size?: number
}
//This is a bit breaking principle of encapsulation, 
//but we are using --columns var from parent in order to check that the provided size is not bigger than the columns number
export const Column = styled.div<ColumnProps>`
  grid-column: span min(${({size}) => size ?? 1}, var(--columns));
`;

export default function ColumnForm (){
  return (
    <Split fraction="1/3" gutter="s">
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

//You can use as follows:
//Specify how much columns do u want for Columns
//Specify how much columns each Column will take
//For example there is 2 columns in total, so if some Column will get 2 as a size => it will take up the whole row
function Form () {
  return (
    <Columns gutter="m" columns={2}>
      <Column size={2}>
        <InputGroup htmlFor="firstName" label="First Name">
          <input type="text" id="firstName" />
        </InputGroup>
      </Column>
      <Column>
        <InputGroup htmlFor="lastName" label="Last Name">
          <input type="text" id="lastName" />
        </InputGroup>
      </Column>
      <Column>
        <InputGroup htmlFor="email" label="Email">
          <input type="text" id="email" />
        </InputGroup>
      </Column>
      <Column>
        <InputGroup htmlFor="address" label="Street Address">
          <input type="text" id="address" />
        </InputGroup>
      </Column>
      <Column>
        <InputGroup htmlFor="city" label="City">
          <input type="text" id="city" />
        </InputGroup>
      </Column>
      <Column>
        <InputGroup htmlFor="country" label="Country">
          <input type="text" id="country" />
        </InputGroup>
      </Column>
      <Column>
        <InputGroup htmlFor="phone" label="Phone Number">
          <input type="text" id="phone" />
        </InputGroup>
      </Column>
    </Columns>
  );
};
