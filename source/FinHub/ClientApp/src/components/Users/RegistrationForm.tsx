import React from 'react';
import InputField from '../UI/InputField';
import Form from '../UI/Form';

const RegistrationForm = () => {
    const username = React.useRef<HTMLInputElement>(null);
    const password = React.useRef<HTMLInputElement>(null);
    const passwordRepeat = React.useRef<HTMLInputElement>(null);
    const email = React.useRef<HTMLInputElement>(null);

    const onSubmit = () => {
        if(!username.current || !password.current || !passwordRepeat.current || !email.current) return;
        if(password.current.value !== passwordRepeat.current.value) return;

        console.log(username.current.value);
        console.log(password.current.value);
        console.log(email.current.value);
    };

    return (
        <Form onSubmit={onSubmit} label="Register" >
            <InputField type="email" id="email" name="email" label="Email" ref={email} required/>
            <InputField type="text" id="username" name="username" label="Username" ref={username} required/>
            <InputField type="password" id="password" name="password" label="Password" ref={password} required/>
            <InputField type="password" id="password" name="password" label="Repeat password" ref={passwordRepeat} required/>
        </Form>
    );
};

export default RegistrationForm;
