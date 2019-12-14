import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import React from "react";

export const Index = () => (
    <Grid container spacing={3}>
        <Grid item md={6} xs={12}>
            <Paper>
                <Typography variant="h1">FinHub</Typography>
                <Typography variant="h4">Track Group expenses easily!</Typography>
            </Paper>
        </Grid>
        <Grid item md={6} xs={12}>
            <Paper>
                <Button variant="contained" color="primary">Create your group</Button>
                <Button variant="contained" color="primary">Join group</Button>
                <Typography variant="h6">Already a member?</Typography>
                <Button variant="contained">Login</Button>
            </Paper>
        </Grid>
    </Grid>
);
