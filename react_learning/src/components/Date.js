function Date(props) {
    const date = props.date;
    const separator = props.separator;

    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    return (
        <div className="date">
            <span>{day}</span>{separator}<span>{month}</span>{separator}<span>{year}</span>
        </div>
    );
}

export default Date;