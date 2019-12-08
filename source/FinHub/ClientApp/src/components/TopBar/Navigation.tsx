import Button from "@material-ui/core/Button";
import React from "react";

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
