import Button from "@material-ui/core/Button";
import React from "react";
import { Link } from "react-router-dom";

export const GuestButtons = () => (
    <>
        <Button component={Link} to="/login">Login</Button>
        <Button component={Link} to="/signup">Sign Up</Button>
    </>
);
