import { ReactNode } from "react";
import {Layers} from "../layers/Layers";


const Form = () => {
  return (
    <Layers gutter="xl">
      <InputGroup htmlFor="firstName" label="First Name">
        <input type="text" id="firstName" />
      </InputGroup>
      <InputGroup htmlFor="lastName" label="Last Name">
        <input type="text" id="lastName" />
      </InputGroup>
      <InputGroup htmlFor="email" label="Email">
        <input type="text" id="email" />
      </InputGroup>
      <InputGroup htmlFor="address" label="Street Address">
        <input type="text" id="address" />
      </InputGroup>
      <InputGroup htmlFor="city" label="City">
        <input type="text" id="city" />
      </InputGroup>
      <InputGroup htmlFor="country" label="Country">
        <input type="text" id="country" />
      </InputGroup>
      <InputGroup htmlFor="phone" label="Phone Number">
        <input type="text" id="phone" />
      </InputGroup>
    </Layers>
  );
};

type InputGroupProps = {
  htmlFor?: string,
  label?: string,

  children?: ReactNode
}
export const InputGroup = ({ htmlFor, label, children }: InputGroupProps) => {
  return (
    <Layers gutter="m">
      <label htmlFor={htmlFor}>{label}</label>
      {children}
    </Layers>
  );
};

export default Form;
