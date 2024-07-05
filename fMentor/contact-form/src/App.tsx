import { useState } from 'react';
import './App.css';
import Input from './components/Input';
import InputForm from './components/InputForm';
import InputSubmit from './components/InputSubmit';

function App() {
    const [formData, setFormData] = useState<Record<string, string | string[] | null | undefined>>({
        firstName: '',
        lastName: '',
        email: '',
        query: [],
        message: '',
        consent: 'false',
    }); 

    function handleSubmit(areErrors: boolean, values: Record<string, string | string[] | null | undefined>) {
        console.log(values);
        if(areErrors)
            return;

        setFormData(values);
    }

    function validateNotEmpty(id: string, value?: string | string[]) {
        if(value && value.length !== 0)
            return '';

        switch(id){
            case 'query':
                return 'Please select a query type';
            case 'consent':
                return 'To submit this form, please consent to being contacted';
            default:
                return 'This field is required';
        }
    }

    function isEmail(id: string, value?: string) {
        if(!value || value.length === 0)
            return 'This field is required';

        if(!value.match(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/i))
            return 'Please enter a valid email address'

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
                    <Input.Label text="Last Name *" />
                    <Input.Field />
                    <Input.Error /> 
                </Input>

                <Input id="email" validationFn={isEmail}>
                    <Input.Label text="Email Address *" />
                    <Input.Field />
                    <Input.Error /> 
                </Input>

                <Input id="query" validationFn={validateNotEmpty}>
                    <Input.Label text="Query Type *" />
                    <Input.ToggleGroup maxSelected={1}>
                        <Input.Toggle value='general' label='General Query' type='radio'/>
                        <Input.Toggle value='support' label='Support Request' type='radio'/>
                    </Input.ToggleGroup>
                    <Input.Error /> 
                </Input>

                <Input id="message" validationFn={validateNotEmpty}>
                    <Input.Label text="Message *" />
                    <Input.Textarea />
                    <Input.Error /> 
                </Input>

                <Input id="consent" validationFn={validateNotEmpty}>
                    <Input.Toggle value='consent' label='I consent to being contacted by the team *'/>
                    <Input.Error />
                </Input>
                <InputSubmit />
            </InputForm>
        </div>
    )
}

export default App
