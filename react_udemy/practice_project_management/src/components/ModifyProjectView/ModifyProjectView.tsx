import {ToDo} from "../../types/ToDo";
import {useRef} from "react";
import {Project} from "../../types/Project";

type Props = {
    project: Project;
    onRemoveProject: () => void;
    onAddTodo: (todo: ToDo) => void;
    onRemoveTodo: (todo: ToDo) => void;
}

export default function ModifyProjectView({project, onAddTodo, onRemoveTodo, onRemoveProject}: Props) {
    const todoInputRef = useRef<HTMLInputElement>(null);

    function handleAddTodo() {
        if(!todoInputRef.current)
            return;

        onAddTodo({content: todoInputRef.current.value});
    }

    function handleRemoveTodo(todo: ToDo) {
        onRemoveTodo(todo);
    }

    return(
        <>
            <h1>Modify project</h1>
            <div>
                <h2>{project.title}</h2>
                <p>{project.date.toDateString()}</p>
                <p>{project.description}</p>
                <button onClick={onRemoveProject}>Delete project</button>
            </div>

            <div>
            <h2>Tasks</h2>
                <div>
                    <input ref={todoInputRef}/>
                    <button onClick={handleAddTodo}>Add task</button>
                </div>

                <ul>
                    {
                        project.todos.map(todo => {
                            return(
                                <li key={todo.content}>
                                    {todo.content}
                                    <button onClick={() => handleRemoveTodo(todo)}>Clear</button>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>

        </>
    );
}