import React from 'react';

interface Props {
    children: React.ReactNode;
    onSubmit: () => void;
    label: string;
}

const Form = (props: Props) => {
    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        props.onSubmit();
    };

    return (
        <form onSubmit={onSubmit}>
            {props.children}
            <input type="submit" value={props.label} />
        </form>
    );
};

export default Form;
