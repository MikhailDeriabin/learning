import SideBar from "./components/SideBar/SideBar";
import {useState} from "react";
import {Project} from "./types/Project";
import MainView from "./components/MainView/MainView";
import {ToDo} from "./types/ToDo";
import {
    addOneProject,
    addOneToDo,
    removeOneProject,
    removeOneToDo,
} from "./util/projects";

function getSelectedProject(projects: Project[], index?: number | -1) {
    if(index === undefined)
        return undefined;
    if(index === -1)
        return null;
    return projects[index];
}

function App() {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | -1 | undefined>();
    const [projects, setProjects] = useState<Project[]>([]);

    function addProject(project: Project) {
        setProjects(prevState => addOneProject(project, prevState));
    }
    function removeProject(index: number) {
        setProjects(prevState => removeOneProject(index, prevState));
    }
    function addToDo(index: number, todo: ToDo) {
        setProjects(prevState => addOneToDo(index, todo, prevState));
    }
    function removeToDo(index: number, todo: ToDo) {
        setProjects(prevState => removeOneToDo(index, todo, prevState));
    }

    function selectNewProject() {
        setSelectedProjectIndex(-1);
    }

    function handleListSelect(index: number) {
        setSelectedProjectIndex(index);
    }

    function addToDoToSelectedProject(todo: ToDo) {
        addToDo(selectedProjectIndex ?? -1, todo);
    }
    function removeTodoFromSelectedProject(todo: ToDo) {
        removeToDo( selectedProjectIndex ?? -1, todo);
    }
    function removeSelectedProject() {
        removeProject(selectedProjectIndex ?? -1);
        setSelectedProjectIndex(undefined);
    }

    const selectedProject = getSelectedProject(projects, selectedProjectIndex);

    return (
        <>
            <SideBar
                projects={projects}
                onSelect={handleListSelect}
                onNewProjectOpen={selectNewProject}
            />
            <MainView
                selectedProject={selectedProject}
                onAddNewProject={addProject}
                onAddNewToDo={addToDoToSelectedProject}
                onRemoveToDo={removeTodoFromSelectedProject}
                onRemoveProject={removeSelectedProject}
            />
        </>
    );
}

export default App;
