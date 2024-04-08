import {Project} from "../../types/Project";
import {useState} from "react";
import './styles.css'

type Props ={
    projects: Project[];
    onClick: (index: number) => void;
}

export default function ProjectList({projects, onClick}: Props) {
    const [selected, setSelected] = useState<string>('');

    function handleClick(index: number ,title: string) {
        setSelected(title);
        onClick(index);
    }

    return(
        <ul>
            {projects.map((project, i) => {
                return (
                    <li
                        key={project.title}
                        onClick={() => handleClick(i, project.title)}
                        className={selected === project.title ? 'selected' : ''}
                    >
                        {project.title}
                    </li>
                );
            })}
        </ul>
    );
}