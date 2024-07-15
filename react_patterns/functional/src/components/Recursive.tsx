
//The recursive component can help to display some nested object data, if we need to
//Data here can be an object of any kind with deep nesting
type Props = {
    data: any
}
export default function Recursive({ data }: Props) {

    //End condition for recursion
    if(!isObject(data))
        return <li>{data}</li>;

    const keyValuePairs = Object.entries(data);

    //Here we are calling the Recursive component (=function) again and going one layer of an data-object deeper
    return (
        <>
            {keyValuePairs.map(([key, value]) => {
                return <li key={key}>
                        {key}: <ul>
                            <Recursive data={value}/>
                        </ul>
                    </li>
            })}
        </>
    );
}

function isObject(data: any) {
    return typeof data === 'object' && data !== null;
}