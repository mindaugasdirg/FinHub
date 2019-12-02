import React from 'react';
import { ReactRef } from '../../types';

interface Props {
    label: string;
    type: string;
    name: string;
    id: string;
    required?: boolean
}

const InputField = React.forwardRef((props: Props, ref: ReactRef<HTMLInputElement>) => (
    <>
        <label>{props.label}</label>
        <input type={props.type} name={props.name} id={props.id} ref={ref} required={props.required} />
    </>
));

export default InputField;
