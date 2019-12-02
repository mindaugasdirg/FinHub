import React from 'react';
import InputField from '../UI/InputField';
import Form from '../UI/Form';

const CategoryForm = () => {
    const name = React.useRef<HTMLInputElement>(null);
    const description = React.useRef<HTMLInputElement>(null);

    const onSubmit = () => {
        if(!name.current || !description.current) return;

        console.log(name.current.value);
        console.log(description.current.value);
    };

    return (
        <Form onSubmit={onSubmit} label="Register" >
            <InputField type="text" id="name" name="name" label="Name" ref={name} required/>
            <InputField type="text" id="description" name="description" label="Description" ref={description} required/>
        </Form>
    );
};

export default CategoryForm;
