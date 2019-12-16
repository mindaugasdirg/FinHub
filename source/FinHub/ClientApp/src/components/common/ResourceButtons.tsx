import Grid from "@material-ui/core/Grid";
import React from "react";
import { useResourceActionsStyles } from "../../theme/resourceActionsStyles";

interface Props {
    main: React.ReactNode;
    children: React.ReactNode;
}

export const ResourceButtons = (props: Props) => {
    const classes = useResourceActionsStyles();

    return (
        <Grid container className={classes.container}>
            <Grid item className={classes.expanded}>
                {props.main}
            </Grid>
            <Grid item>
                {props.children}
            </Grid>
        </Grid>
    );
};
