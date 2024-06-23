import { useState } from 'react';
import './App.css';
import Input from './components/Input';

function App() {
    const [formData, setFormData] = useState<Record<string, string | null>>({
        firstName: '',
        lastName: '',
        email: '',
        query: '',
        message: '',
        consent: 'false',
    });

    function handleFormChange(id: string, value: string | null) {
        setFormData({...formData, id: value});
    }

    function validateNotEmpty(id: string, value: string | null) {
        console.log(value, !value);
        if(!value)
            return 'The field is required';

        return '';
    }

    return (
    <div>
        <Input 
            id="firstName" 
            onBlur={handleFormChange}
            validationFn={validateNotEmpty}
        >
            <Input.Label text="First Name *"></Input.Label>
            <Input.Field/>
            <Input.Error />
        </Input>
        <Input id="lastName" onBlur={handleFormChange}>
            <Input.Label text="Last Name *"></Input.Label>
        </Input>
        <Input id="email" onBlur={handleFormChange}>
            <Input.Label text="Email Address *"></Input.Label>
        </Input>
        <Input id="query" onBlur={handleFormChange}>
            <Input.Label text="Query Type *"></Input.Label>
        </Input>
        <Input id="message" onBlur={handleFormChange}>
            <Input.Label text="Message *"></Input.Label>
        </Input>
    </div>
    )
}

export default App
