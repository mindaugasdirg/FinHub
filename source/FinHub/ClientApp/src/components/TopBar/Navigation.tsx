import React from 'react';
import Button from '@material-ui/core/Button';

interface Props {
    openOverview: () => void;
    openTransactions: () => void;
    openMembers: () => void;
}

const Navigation = (props: Props) => (
    <>
        <Button onClick={props.openOverview}>Overview</Button>
        <Button onClick={props.openTransactions}>Transactions</Button>
        <Button onClick={props.openMembers}>Members</Button>
    </>
);

export default Navigation;
