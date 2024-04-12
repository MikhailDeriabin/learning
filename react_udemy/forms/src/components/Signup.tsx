import {FormEvent} from "react";


//U can also use built-in browser validations:
//required, type, minLength/maxLength, pattern, min/max(for numbers)
export default function Signup() {

    function onSubmitForm(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        //built-in browser feature
        const formData = new FormData(e.target as HTMLFormElement);
        let data: Record<string, string | string[] | object> = {};
        for (let [key, value] of formData.entries())
            data[key] = value;

        data['acquisition'] = formData.getAll('acquisition');
    }

    return (
        <form onSubmit={onSubmitForm}>
            <h2>Welcome on board!</h2>
            <p>We just need a little bit of data from you to get you started 🚀</p>

            <div className="control">
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    minLength={4}
                    maxLength={20}
                />
            </div>

            <div className="control-row">
                <div className="control">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" name="password" />
                </div>

                <div className="control">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input
                        id="confirm-password"
                        type="password"
                        name="confirm-password"
                    />
                </div>
            </div>

        <hr />

        <div className="control-row">
            <div className="control">
                <label htmlFor="first-name">First Name</label>
                <input
                    type="text"
                    id="first-name"
                    name="first-name"
                    pattern="[M]*"
                />
            </div>

            <div className="control">
                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" name="last-name" />
            </div>
        </div>

        <div className="control">
            <label htmlFor="phone">What best describes your role?</label>
            <select id="role" name="role">
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
                <option value="employee">Employee</option>
                <option value="founder">Founder</option>
                <option value="other">Other</option>
            </select>
        </div>

        <fieldset>
            <legend>How did you find us?</legend>
            <div className="control">
                <input
                    type="checkbox"
                    id="google"
                    name="acquisition"
                    value="google"
                />
                <label htmlFor="google">Google</label>
            </div>

            <div className="control">
                <input
                    type="checkbox"
                    id="friend"
                    name="acquisition"
                    value="friend"
                />
                <label htmlFor="friend">Referred by friend</label>
            </div>

            <div className="control">
                <input type="checkbox" id="other" name="acquisition" value="other" />
                <label htmlFor="other">Other</label>
            </div>
        </fieldset>

        <div className="control">
            <label htmlFor="terms-and-conditions">
            <input type="checkbox" id="terms-and-conditions" name="terms" />I agree to the terms and conditions
            </label>
        </div>

        <p className="form-actions">
            <button type="reset" className="button button-flat">
                Reset
            </button>
            <button type="submit" className="button">
                Sign up
            </button>
        </p>
    </form>
);
}