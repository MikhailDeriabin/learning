import { redirect } from "react-router-dom";

export default function logout() {
    localStorage.removeItem('authToken');
    return redirect('/');
}