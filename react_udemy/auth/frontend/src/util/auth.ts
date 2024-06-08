import { ActionFunction, redirect } from "react-router-dom";

export function getAuthToken() {
    return localStorage.getItem('authToken');
}

export function tokenLoader() {
    return getAuthToken();
}

export const checkAuthLoader: ActionFunction = () => {
    const authToken = getAuthToken();

    if(!authToken)
        return redirect('/auth');

    return null;
}