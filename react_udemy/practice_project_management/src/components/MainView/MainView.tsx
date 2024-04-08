import {useEffect, useState} from "react";
import {Project} from "../../types/Project";
import {initialProject, projectInitialName} from "../../initial/initialValues";
import AddProjectView from "../AddProjectView/AddProjectView";
import ModifyProjectView from "../ModifyProjectView/ModifyProjectView";
import NoProjectView from "../NoProjectView/NoProjectView";
import {ToDo} from "../../types/ToDo";

type Props = {
    selectedProject: Project | null | undefined;

    onAddNewProject: (project: Project) => void;

    onAddNewToDo: (todo: ToDo) => void;
    onRemoveToDo: (todo: ToDo) => void;
    onRemoveProject: () => void;
}

type View = 'Add' | 'Modify' | 'No selection';
function determineViewToShow(project: Project | null | undefined): View {
    if(project === null)
        return 'Add';

    if(project === undefined)
        return 'No selection';

    return 'Modify';
}

const MainViewComponent = function ({selectedProject, onAddNewProject, onAddNewToDo, onRemoveToDo, onRemoveProject}: Props) {
    const [viewToShow, setViewToShow] = useState<View>('No selection');

    useEffect(() => {
        setViewToShow(determineViewToShow(selectedProject));
    }, [selectedProject]);

    function openAddProjectView() {
        setViewToShow('Add');
    }
    function openNoProjectView() {
        setViewToShow('No selection');
    }

    return(
        <section>
            {viewToShow === 'Add' && <AddProjectView openNoProjectView={openNoProjectView} onAddNewProject={onAddNewProject}/>}
            {viewToShow === 'Modify' && <ModifyProjectView project={selectedProject ?? initialProject} onAddTodo={onAddNewToDo} onRemoveTodo={onRemoveToDo} onRemoveProject={onRemoveProject}/>}
            {viewToShow === 'No selection' && <NoProjectView openAddProjectView={openAddProjectView}/>}
        </section>
    );
}

const MainView = MainViewComponent;
export default MainView;