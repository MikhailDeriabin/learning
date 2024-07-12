import { ComponentType } from "react";

//HOCs are usually start with lower-case.
//Just log props
export default function logProps (Component: ComponentType<any>) {

    //Forwarding props
    return (props: any) => {
        console.log(props);
        return <Component {...props} />;
    };
};
