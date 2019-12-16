import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import React from "react";
import { useStandaloneFormStyle } from "../../theme/formStyles";

interface Props {
    children: React.ReactNode;
}

export const StandaloneForm = (props: Props) => {
    const classes = useStandaloneFormStyle();
    return (
        <Grid container justify="center">
            <Grid item lg={4} xs={12} sm={8} md={4}>
                <Paper className={classes.paper}>
                    {props.children}
                </Paper>
            </Grid>
        </Grid>
    );
};
