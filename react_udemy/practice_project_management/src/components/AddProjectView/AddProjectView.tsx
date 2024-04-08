import {Project} from "../../types/Project";
import {useRef} from "react";

type Props = {
    openNoProjectView: () => void;
    onAddNewProject: (project: Project) => void;
}

export default function AddProjectView({openNoProjectView, onAddNewProject}: Props) {
    const titleInputRef = useRef<HTMLInputElement>(null);
    const descriptionInputRef = useRef<HTMLInputElement>(null);
    const dateInputRef = useRef<HTMLInputElement>(null);

    function handleAddProject(){
        if(!titleInputRef.current || !descriptionInputRef.current || !dateInputRef.current)
            return;

        const p: Project = {
            title: titleInputRef.current.value,
            description: descriptionInputRef.current.value,
            date: new Date(dateInputRef.current.value),
            todos: []
        }

        onAddNewProject(p);
    }

    return(
        <>
            <h1>Add project</h1>
            <button onClick={openNoProjectView}>Cancel</button>
            <button onClick={handleAddProject}>Save</button>
            <div>
                <label htmlFor="title">Title</label>
                <input id="title" name="title" ref={titleInputRef}/>
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <input id="description" name="description" ref={descriptionInputRef}/>
            </div>
            <div>
                <label htmlFor="date">Due date</label>
                <input type="date" id="date" name="title" ref={dateInputRef}/>
            </div>
        </>
    );
}