import Button from "@material-ui/core/Button";
import React from "react";
import { Link } from "react-router-dom";
import { useTopBarStyles } from "../../theme/topBarStyles";

export const Navigation = () => {
    const classes = useTopBarStyles();
    return (
        <div className={classes.expanded}>
            <Button className={classes.white} component={Link} to="/overview">Overview</Button>
            <Button className={classes.white} component={Link} to="/transactions">Transactions</Button>
            <Button className={classes.white} component={Link} to="/members">Members</Button>
        </div>
    );
};
