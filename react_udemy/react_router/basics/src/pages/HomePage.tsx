import {useNavigate} from "react-router-dom";

export default function HomePage() {
    const navigate = useNavigate();

    //Better use <Link /> component, but u can navigate also via function
    function handleNavigate() {
        navigate('/products');
    }

    return (
        <>
            <h1>My home page</h1>
            <p>
                <button onClick={handleNavigate}>To products</button>
            </p>
        </>
    );
}