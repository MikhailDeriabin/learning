import { useState } from 'react';
import './App.css';
import Input from './components/Input';
import InputForm from './components/InputForm';
import InputSubmit from './components/InputSubmit';

function App() {
    /* const [formData, setFormData] = useState<Record<string, string | null | undefined>>({
        firstName: '',
        lastName: '',
        email: '',
        query: '',
        message: '',
        consent: 'false',
    }); */

    function handleFormChange(isError:boolean, id: string, value: string | null) {
       // setFormData({...formData, id: value});
    }

    let error = '';
    function handleSubmit(areErrors: boolean, values: Record<string, string | null | undefined>) {
        console.log(areErrors, values);
        if(!areErrors)
            //setFormData(values);
            error = 'Got values successfully';

        error = 'Some errors occurred, please check the form';
    }

    function validateNotEmpty(id: string, value?: string) {
        if(!value)
            return 'The field is required';

        return '';
    }

    return (
    <div>
        {error}
        <InputForm onSubmit={handleSubmit}>
            <Input 
                id="firstName" 
                onBlur={handleFormChange}
                validationFn={validateNotEmpty}
            >
                <Input.Label text="First Name *" />
                <Input.Field />
                <Input.Error />    
            </Input>
            <Input 
                id="lastName" 
                onBlur={handleFormChange}
                validationFn={validateNotEmpty}
            >
                <Input.Label text="Last Name *"/>
                <Input.Field />
            </Input>

            {/* <Input id="email" onBlur={handleFormChange}>
                <Input.Label text="Email Address *"/>
            </Input>
            <Input id="query" onBlur={handleFormChange}>
                <Input.Label text="Query Type *"/>
            </Input>
            <Input id="message" onBlur={handleFormChange}>
                <Input.Label text="Message *"/>
            </Input> */}
            <InputSubmit/>
        </InputForm>
    </div>
    )
}

export default App
