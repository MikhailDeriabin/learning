import { useState } from 'react';
import './App.css'
import ControlledForm from './components/ControlledForm';
import UncontrolledFlow, { StepProps } from './components/UncontrolledFlow';
import UncontrolledForm from './components/UncontrolledForm'
import ControlledFlow from './components/ControlledFlow';

function App() {

  //Function for uncontrolled flow
  const onDone = (data: Record<string, any>) => {
    console.log(data);
    alert('The end');
  }

  //Functions for controlled flow
  const lastStep = 3;
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [data, setData] = useState<Record<string, any>>({}); 
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

      if(nextStep === lastStep)
          return onDone(updatedData);

      setCurrentStep(currentStep+1);
  }

  return (
    <>
      <div>
        <h2>UncontrolledForm</h2>
        <UncontrolledForm/>
      </div>
      <p>#################################################</p>

      <div>
        <h2>ControlledForm</h2>
        <ControlledForm/>
      </div>
      <p>#################################################</p>

      <div>
        <h2>UncontrolledFlow</h2>
        <UncontrolledFlow onDone={onDone}>
          <Step1 />
          <Step2 />
          <Step3 />
        </UncontrolledFlow>
      </div>
      <p>#################################################</p>

      <div>
        <h2>ControlledFlow</h2>
        <ControlledFlow previousStep={previousStep} nextStep={nextStep} currentStep={currentStep}>
          <Step1 />
          <Step2 />
          <Step3 />
        </ControlledFlow>
      </div>
      <p>#################################################</p>
    </>
  );
}


function Step1({ previousStep, nextStep }: StepProps) {
  return (
    <>
      <p>I am step number 1</p>
      <button onClick={() => nextStep && nextStep('step1', 'Perkele')}>Next</button>
    </>
  );
}
function Step2({ previousStep, nextStep }: StepProps) {
  return (
    <>
      <button onClick={previousStep}>Previous</button>
      <p>I am step number 2</p>
      <button onClick={() => nextStep && nextStep('step2', 'Lol')}>Next</button>
    </>
  );
}
function Step3({ previousStep, nextStep }: StepProps) {
  return (
    <>
      <button onClick={previousStep}>Previous</button>
      <p>I am step number 3</p>
      <button onClick={() => nextStep && nextStep('step3', 'Last step')}>Finish</button>
    </>
  );
}

export default App;
