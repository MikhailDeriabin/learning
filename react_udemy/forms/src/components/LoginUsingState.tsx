import {FormEvent} from "react";
import CustomInput from "./CustomInput";
import {useInput} from "../hooks/useInput";
import {hasMinLength, isEmail} from "../util/validation";


function validateEmail(value: string): string {
    return value && isEmail(value) ? '' : 'Email is invalid';
}
function validatePassword(value: string): string {
    return value && hasMinLength(value, 4) ? '' : 'Password should be at least 4 characters';
}

//Validation on every keystroke
export default function LoginUsingState() {
    const {
        value: email,
        error: emailError,
        handleInputChange: emailOnChange,
        handleInputBlur: emailOnBlur
    } = useInput('', validateEmail);

    const {
        value: password,
        error: passwordError,
        handleInputChange: passwordOnChange,
        handleInputBlur: passwordOnBlur
    } = useInput('', validatePassword);

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
    }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
          <CustomInput
              id="email"
              label="Email"
              type="email"
              name="email"

              onBlur={emailOnBlur}
              value={email}
              onChange={emailOnChange}

              error={emailError}
          />
          <CustomInput
              id="password"
              label="Password"
              type="password"
              name="password"

              onBlur={passwordOnBlur}
              onChange={passwordOnChange}
              value={password}
              error={passwordError}
          />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
