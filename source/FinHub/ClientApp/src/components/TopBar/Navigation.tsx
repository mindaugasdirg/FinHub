import Button from "@material-ui/core/Button";
import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => (
    <>
        <Button component={Link} to="/overview">Overview</Button>
        <Button component={Link} to="/transactions">Transactions</Button>
        <Button component={Link} to="/members">Members</Button>
    </>
);
