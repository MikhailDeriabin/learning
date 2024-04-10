
type Props = {
    title: string;
    message: string;
    onConfirm: () => void;
}

export default function ErrorCard({ title, message, onConfirm }: Props) {
    return (
        <div className="error">
            <h2>{title}</h2>
            <p>{message}</p>
            {onConfirm && (
                <div id="confirmation-actions">
                    <button onClick={onConfirm} className="button">
                        Retry
                    </button>
                </div>
            )}
        </div>
    );
}