import Button from "@material-ui/core/Button";
import React from "react";
import { Link } from "react-router-dom";
import { useTopBarStyles } from "../../theme/topBarStyles";

export const GuestButtons = () => {
    const classes = useTopBarStyles();
    return (
        <>
            <Button className={classes.white} component={Link} to="/login">Login</Button>
            <Button className={classes.white} component={Link} to="/signup">Sign Up</Button>
        </>
    );
};
