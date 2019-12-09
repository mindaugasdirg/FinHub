import Button from "@material-ui/core/Button";
import React from "react";
import { Link } from "react-router-dom";

interface Props {
    openOverview: () => void;
    openTransactions: () => void;
    openMembers: () => void;
    isGroupSelected: boolean;
}

const Navigation = (props: Props) => (
    <>
        <Button component={Link} to="/groups">Groups</Button>
        {props.isGroupSelected &&
            <>
                <Button onClick={props.openOverview}>Overview</Button>
                <Button onClick={props.openTransactions}>Transactions</Button>
                <Button onClick={props.openMembers}>Members</Button>
            </>
        }
    </>
);

export default Navigation;
