import classes from './NewsletterSignup.module.css';
import {useFetcher} from "react-router-dom";
import {useEffect} from "react";

function NewsletterSignup() {
    //This Form will not redirect u to path specified in action attr
    //state is probably state of page
    //data is value returned from action function
    const {Form, data, state} = useFetcher();

    useEffect(() => {
        if(state === 'idle' && data && data.message)
            window.alert(data.message);
    }, [data, state]);

    return (
        <Form
            method="post"
            action="/newsletter"
            className={classes.newsletter}
        >
            <input
                type="email"
                placeholder="Sign up for newsletter..."
                aria-label="Sign up for newsletter"
            />
            <button>Sign up</button>
        </Form>
    );
}

export default NewsletterSignup;