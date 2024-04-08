
type CoreConceptProps = {
    image: string;
    alt: string;
    description: string;
    title: string;
}

export const CoreConcept = ({ image, description, alt, title }: CoreConceptProps) => {

    return (
        <li>
            <img src={image} alt={alt}/>
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
}