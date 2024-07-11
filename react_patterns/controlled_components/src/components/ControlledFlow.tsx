import { Children, cloneElement, ComponentType, createRef, FormEvent, isValidElement, ReactElement, ReactNode, useState } from "react";

type StepProps = {
    previousStep?: () => void,
    nextStep?: (stepName: string, stepData: any) => void
}

//Flow is something that have multiple steps, like form etc.
//More flexible, some steps can be skipped etc. in parent, because the step is in the parent
type Props = {
    children: ReactNode,
    currentStep: number,
    nextStep: (stepName: string, stepData: any) => void,
    previousStep?: () => void,
}
export default function ControlledFlow({ children, currentStep, nextStep, previousStep }: Props) {

    const currentChild = Children.toArray(children)[currentStep];

    if(!isValidElement(currentChild))
        return currentChild;

    const Step = cloneElement(currentChild as ReactElement<StepProps>, { previousStep, nextStep });

    return(
        <>
            {Step}
        </>
    );
}