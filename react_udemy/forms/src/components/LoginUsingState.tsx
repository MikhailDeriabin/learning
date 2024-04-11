import {ChangeEvent, FormEvent, useState, FocusEvent} from "react";

enum FormField {
    email,
    password
}
type FormState<T=any> = {
    [FormField.email]: T;
    [FormField.password]: T;
}


export default function LoginUsingState() {
    const [formData, setFormData] = useState<FormState<string>>({
        [FormField.email]: '',
        [FormField.password]: ''
    });

    const [modifiedData, setModifiedData] = useState<FormState<boolean>>({
        [FormField.email]: false,
        [FormField.password]: false
    });

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
    }

    function handleInputChange(field: FormField, e: ChangeEvent<HTMLInputElement>) {
        setFormData(prevState => ({
            ...prevState,
            [field]: e.target.value,
        }));
    }

    function handleInputBlur(field: FormField) {
        setModifiedData(prevState => ({
            ...prevState,
            [field]: true
        }));
    }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
              id="email"
              type="email"
              name="email"
              onBlur={() => handleInputBlur(FormField.email)}
              onChange={(e) => handleInputChange(FormField.email, e)}
              value={formData[FormField.email]}
          />
            <div className="control-error"></div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
              id="password"
              type="password"
              name="password"
              onBlur={() => handleInputBlur(FormField.password)}
              onChange={(e) => handleInputChange(FormField.password, e)}
              value={formData[FormField.password]}
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
