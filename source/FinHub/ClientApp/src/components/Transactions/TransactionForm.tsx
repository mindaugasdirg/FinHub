import React from 'react';
import InputField from '../UI/InputField';
import Form from '../UI/Form';

const TransactionForm = () => {
    const amount = React.useRef<HTMLInputElement>(null);
    const description = React.useRef<HTMLInputElement>(null);
    const categoryId = React.useRef<HTMLInputElement>(null);

    const onSubmit = () => {
        if(!amount.current || !description.current || !categoryId.current) return;

        console.log(amount.current.value);
        console.log(description.current.value);
        console.log(categoryId.current.value);
    };

    return (
        <Form onSubmit={onSubmit} label="Register" >
            <InputField type="number" id="amount" name="amount" label="Amount" ref={amount} required/>
            <InputField type="text" id="description" name="description" label="Description" ref={description} required/>
            <InputField type="text" id="categoryId" name="categoryId" label="Category" ref={categoryId} required/>
        </Form>
    );
};

export default TransactionForm;
