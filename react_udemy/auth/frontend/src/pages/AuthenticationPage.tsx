import { ActionFunction, json, redirect } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

function AuthenticationPage() {
    return <AuthForm />;
}

export default AuthenticationPage;

export const AuthenticationPageAction: ActionFunction = async function ({request}) {
    const query = new URL(request.url).searchParams;
    const mode = query.get('mode') ?? 'login';

    const data = await request.formData();
    const authData = {
        email: data.get('email'),
        password: data.get('password'),
    }

    const url = `http//:localhost:8080/${mode}`;
    console.log(url);
    const resp = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(authData)
    });

    if(resp.status === 422 || resp.status === 401)
        return resp;

    if(!resp.ok)
        throw json({message: 'Can not auth user'}, {status: 500});
    
    return redirect('/');
}