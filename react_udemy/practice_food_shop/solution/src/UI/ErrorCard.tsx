type Props = {
    title: string;
    message: string;
}

export default function ErrorCard({title, message}: Props) {
    return(
        <div className="error">
            <h2>{title}</h2>
            <p>{message}</p>
        </div>
    );
}