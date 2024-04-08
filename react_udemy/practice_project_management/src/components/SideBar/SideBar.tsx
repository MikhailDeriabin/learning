import {Project} from "../../types/Project";
import ProjectList from "../ProjectList/ProjectList";

type Props ={
    onSelect: (index: number) => void;
    onNewProjectOpen: () => void;
    projects: Project[];
}

const SideBarComponent = function({onSelect, onNewProjectOpen, projects}: Props) {
    return(
        <aside>
            <h1>YOUR PROJECTS</h1>
            <button onClick={onNewProjectOpen}>+ Add Project</button>
            <ProjectList
                projects={projects}
                onClick={onSelect}
            />
        </aside>
    );
}

const SideBar = SideBarComponent;
export default SideBar;