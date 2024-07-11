import { Children, cloneElement, isValidElement, ReactElement, ReactNode, useState } from "react";

export type StepProps = {
    previousStep?: () => void;
    nextStep?: (stepName: string, stepData: any) => void;
}

//Flow is something that have multiple steps, like form etc.
//It is not controlled, so we can not easily for ex. hide some step i we want to, user have to click next button til the end
type Props = {
    children: ReactNode,
    onDone: (data: Record<string, any>) => any
}
export default function UncontrolledFlow({ children, onDone }: Props) {
    const [data, setData] = useState<Record<string, any>>({}); 
    const [currentStep, setCurrentStep] = useState<number>(0);

    const childrenNodes = Children.toArray(children);

    //Pass these functions to steps children, so that the can decide where to display previous, next buttons etc.
    function previousStep() {
        setCurrentStep(currentStep-1);
    }
    function nextStep(stepName: string, stepData: any) {
        const nextStep = currentStep+1;

        const updatedData = {
            ...data,
            [stepName]: stepData
        };
        setData(updatedData);

        if(nextStep === childrenNodes.length)
            return onDone(updatedData);

        setCurrentStep(currentStep+1);
    }

    const currentChild = childrenNodes[currentStep];

    if(!isValidElement(currentChild))
        return currentChild;

    const Step = cloneElement(currentChild as ReactElement<StepProps>, { previousStep, nextStep });

    return(
        <>
            {Step}
        </>
    );
}