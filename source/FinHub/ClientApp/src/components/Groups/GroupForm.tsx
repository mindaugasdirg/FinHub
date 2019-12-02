import React from 'react';
import InputField from '../UI/InputField';
import Form from '../UI/Form';

const GroupForm = () => {
    const name = React.useRef<HTMLInputElement>(null);

    const onSubmit = () => {
        if(!name.current) return;

        console.log(name.current.value);
    };

    return (
        <Form onSubmit={onSubmit} label="Register" >
            <InputField type="text" id="name" name="name" label="Name" ref={name} required/>
        </Form>
    );
};

export default GroupForm;
