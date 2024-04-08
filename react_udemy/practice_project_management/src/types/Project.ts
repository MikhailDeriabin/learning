import {ToDo} from "./ToDo";

export type Project = {
    title: string;
    description: string;
    date: Date;
    todos: ToDo[];
}