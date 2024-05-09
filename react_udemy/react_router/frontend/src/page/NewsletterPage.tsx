import NewsletterSignup from '../components/NewsletterSignup';
import PageContent from '../components/PageContent';
import {ActionFunction} from "react-router-dom";

function NewsletterPage() {
    return (
        <PageContent title="Join our awesome newsletter!">
            <NewsletterSignup />
        </PageContent>
    );
}

export default NewsletterPage;

export const newsletterAction: ActionFunction = async ({ request }) => {
    const data = await request.formData();
    //get data coming from router Form component
    const email = data.get('email');

    // send to backend newsletter server ...
    console.log(email);
    //Get this data via useFetcher() in any component,
    //which will send action from router form component to the "newsletter" path
    return { message: 'Signup successful!' };
}