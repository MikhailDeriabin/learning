'use client';
import FormSubmit from "./formSubmit";
import { useFormState } from "react-dom";

type Props = {
    actionFn: (prevState: { errors: string[] }, formData: FormData) => Promise<{ errors: string[] }>
}

export default function PostForm({actionFn}: Props){
    //After form is submitted, the validation might fail
    //In that case we can use action state to get these errors
    const [ actionState, formAction ] = useFormState(actionFn, { errors: [] });
 
    return (
        <>
            <h1>Create a new post</h1>
            <form action={formAction}>
                <p className="form-control">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" />
                    </p>
                <p className="form-control">
                    <label htmlFor="image">Image</label>
                    <input
                        type="file"
                        accept="image/png, image/jpeg"
                        id="image"
                        name="image"
                    />
                    </p>
                <p className="form-control">
                    <label htmlFor="content">Content</label>
                    <textarea id="content" name="content" rows={5} />
                </p>
                <p className="form-actions">
                    <FormSubmit />
                </p>
                {actionState.errors && <ul className="form-errors">
                    {actionState.errors.map(e => <li key={e}>{e}</li>)}    
                </ul>}
            </form>
        </>
    );
} 