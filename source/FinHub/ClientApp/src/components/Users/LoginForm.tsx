import React from 'react';
import InputField from '../UI/InputField';
import Form from '../UI/Form';

const LoginForm = () => {
    const username = React.useRef<HTMLInputElement>(null);
    const password = React.useRef<HTMLInputElement>(null);

    const onSubmit = () => {
        if(!username.current || !password.current) return;

        console.log(username.current.value);
        console.log(password.current.value);
    };

    return (
        <Form onSubmit={onSubmit} label="Register" >
            <InputField type="text" id="username" name="username" label="Username" ref={username} required/>
            <InputField type="password" id="password" name="password" label="Password" ref={password} required/>
        </Form>
    );
};

export default LoginForm;
