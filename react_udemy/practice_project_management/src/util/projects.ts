import {Project} from "../types/Project";
import {ToDo} from "../types/ToDo";

export function addOneProject(project: Project, projects: Project[]) {
    return [...projects, project]
}

export function removeOneProject(index: number, projects: Project[]) {
    return projects.filter((project, i) => i !== index)
}

export function addOneToDo(index: number, todo: ToDo, projects: Project[]) {
    return projects.map((project, i) => {
        if (i === index){
            return { ...project, todos: [...project.todos, todo] };
        }

        return project;
    });
}

export function removeOneToDo(index: number, todo: ToDo, projects: Project[]) {
    return projects.map((project, i) => {
        if (i === index)
            project.todos = project.todos.filter(t => t.content !== todo.content);
        return project;
    });
}