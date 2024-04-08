
type Props = {
    openAddProjectView: () => void;
}

export default function NoProjectView({openAddProjectView}: Props) {
    return(
        <>
            <h1>No project selected</h1>
            <p>Select a project please</p>
            <button onClick={openAddProjectView}>Create new project</button>
        </>
    );
}