import { useState } from 'react';
import './App.css';
import Input from './components/Input';
import InputForm from './components/InputForm';
import InputSubmit from './components/InputSubmit';

function App() {
    const [formData, setFormData] = useState<Record<string, string | null | undefined>>({
        firstName: '',
        lastName: '',
        email: '',
        query: '',
        message: '',
        consent: 'false',
    }); 

    let error = '';
    function handleSubmit(areErrors: boolean, values: Record<string, string | null | undefined>) {
        if(areErrors)
            alert(`Check the input form ${values}`);

        setFormData(values);
    }

    function validateNotEmpty(id: string, value?: string) {
        if(!value)
            return 'The field is required';

        return '';
    }

    return (
    <div>
        <InputForm onSubmit={handleSubmit}>
            <Input id="firstName" validationFn={validateNotEmpty}>
                <Input.Label text="First Name *" />
                <Input.Field />
                <Input.Error />    
            </Input>

            <Input id="lastName" validationFn={validateNotEmpty}>
                <Input.Label text="Last Name *"/>
                <Input.Field />
                <Input.Error /> 
            </Input>

            <Input id="email" validationFn={validateNotEmpty}>
                <Input.Label text="Email Address *"/>
                <Input.Field />
                <Input.Error /> 
            </Input>

            <Input id="query" validationFn={validateNotEmpty}>
                <Input.Label text="Query Type *"/>
                <Input.Field />
                <Input.Error /> 
            </Input>

            <Input id="message" validationFn={validateNotEmpty}>
                <Input.Label text="Message *"/>
                <Input.Field />
                <Input.Error /> 
            </Input>
            <InputSubmit/>
        </InputForm>
    </div>
    )
}

export default App
