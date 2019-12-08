import React from 'react';
import Button from '@material-ui/core/Button';

interface Props {
    onLogin: () => void;
    onSignUp: () => void;
}

const GuestButtons = (props: Props) => (
    <>
        <Button onClick={props.onLogin}>Login</Button>
        <Button onClick={props.onSignUp}>Sign Up</Button>
    </>
);

export default GuestButtons;
