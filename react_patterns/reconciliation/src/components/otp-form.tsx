import { useState } from "react";
import styled from "styled-components";

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  margin-right: 0.5rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
`;

const Span = styled.span`
  display: block;
  margin-bottom: 1rem;
  color: #555;
`;

const Button = styled.button<{ received: boolean }>`
  padding: 0.5rem 1rem;
  background-color: ${(props) => (props.received ? "#4CAF50" : "#008CBA")};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.received ? "#45a049" : "#007bb5")};
  }
`;

const OTP = () => {
  const [received, setReceived] = useState(false);
  return (
    <>
      <CheckboxWrapper>
        <Checkbox id="otp-checkbox" onChange={() => setReceived(!received)} />
        <label htmlFor="otp-checkbox">I received the OTP</label>
      </CheckboxWrapper>

      {/* Here we have a bug, React does not see that these are a different elements on re-renders */}
      {/* The Only thing it sees is that the id and placeholder props are changed => it will change only this props */}
      {/* The value prop is no changed here => when "received"-value changes, the value prop of the input stays the same  */}
      <h2>Bug</h2>
      {received ? (
        <Input id="otp-code" placeholder="Enter the otp code here" />
      ) : (
        <Input id="email" placeholder="john@mail.com" />
      )} 

      <h2>Solution with Input or null</h2>
        {/* This is a possible solution, here the React sees that here is some two different components. 
        They can be Input or null => the value props belong to different component => the value will not stay the same    */}
      {received ? <Input id="otp-code" placeholder="Enter the otp code here" /> : null}
      {!received ? <Input id="email" placeholder="john@mail.com" /> : null}

      <h2>Solution with key prop</h2>
        {/* Another solution, React can see and differentiate the components using the key prop 
        This method is also called state reset. Of course if u have some heavy components u should not reset the state but think about another solution */}
      {received ? (
        <Input key="otp-input-field" id="otp-code" placeholder="Enter the otp code here" />
      ) : (
        <Input key="email-input-field" id="email" placeholder="john@mail.com" />
      )}

      <Button received={received}>
        {received ? "Submit OTP" : "Send me OTP"}
      </Button>
    </>
  );
};

export default OTP;
