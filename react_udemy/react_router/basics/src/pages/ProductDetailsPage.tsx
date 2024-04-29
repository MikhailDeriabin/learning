import {useParams} from "react-router-dom";

export default function ProductDetailsPage() {
    //All params defined from dynamic routing
    const params = useParams();

    return (
        <>
            <h1>About product</h1>
            <p>It has an id of '{params.id}'</p>
        </>
    );
}