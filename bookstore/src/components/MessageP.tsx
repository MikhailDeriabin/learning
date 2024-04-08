type MessagePProps = {
    message: string;
}
export function MessageP(props: MessagePProps) {
    return (
        <p>
            {props.message.length<=10 ? props.message : 'Too long'}
        </p>
    );
}