import {Project} from "../types/Project";

export const projectInitialName = "New project";

export const initialProject: Project = {
    title: projectInitialName,
    description: '',
    todos: [],
    date: new Date()
}