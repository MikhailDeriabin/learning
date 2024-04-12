import {FormEvent, useRef, useState} from "react";

enum FormField {
    email,
    password
}
type FormState = {
    [FormField.email]: string;
    [FormField.password]: string;
}

//Validating on submit. The best solution is combine both on submit and on every keystroke
export default function LoginUsingRefs() {
    const [emailIsInvalid, setEmailIsInvalid] = useState<boolean>();

    const emailInputRef = useRef<HTMLInputElement>(null);
    const passwordInputRef = useRef<HTMLInputElement>(null);

    const [formData, setFormData] = useState<FormState>({
        [FormField.email]: '',
        [FormField.password]: ''
    });

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const enteredEmail = emailInputRef.current?.value;
        const enteredPassword = passwordInputRef.current?.value;

        const emailIsInvalid = !enteredEmail && !formData[FormField.email].includes('@');
        if(emailIsInvalid){
            setEmailIsInvalid(true);
            return;
        }
        setEmailIsInvalid(false);

    }

  return (
    <form onSubmit={handleSubmit} >
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
              id="email"
              type="text"
              name="email"
              ref={emailInputRef}
          />
            {emailIsInvalid && <div className="control-error">Email is invalid</div>}
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
              id="password"
              type="password"
              name="password"
              ref={passwordInputRef}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
