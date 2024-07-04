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
        console.log(values);
        if(areErrors)
            return;

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
            <Input id="firstName">
                <Input.Label text="First Name *" />
                <Input.Field />
                <Input.Error />    
            </Input>

            <Input id="lastName">
                <Input.Label text="Last Name *" />
                <Input.Field />
                <Input.Error /> 
            </Input>

            <Input id="email">
                <Input.Label text="Email Address *" />
                <Input.Field />
                <Input.Error /> 
            </Input>

            <Input id="query" validationFn={validateNotEmpty}>
                <Input.Label text="Query Type *" />
                <Input.ToggleGroup maxSelected={1}>
                    <Input.Toggle value='general' label='General Query' />
                    <Input.Toggle value='support' label='Support Request' />
                    <Input.Toggle value='notification' label='Notification' />
                    <Input.Toggle value='error' label='Error Request' />
                </Input.ToggleGroup>
                <Input.Error /> 
            </Input>

            <Input id="message" >
                <Input.Label text="Message *" />
                <Input.Textarea />
                <Input.Error /> 
            </Input>
            <InputSubmit />
        </InputForm>
    </div>
    )
}

export default App
