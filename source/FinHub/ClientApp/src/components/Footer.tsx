import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { useFooterStyles } from "../theme/footerStyles";

export const Footer = () => {
    const classes = useFooterStyles();
    
    return (
        <Container className={classes.container}>
            <Typography align="center" variant="subtitle2">
                Mindaugas Dirginčius, IFF-6/8
            </Typography>
        </Container>
    );
};
