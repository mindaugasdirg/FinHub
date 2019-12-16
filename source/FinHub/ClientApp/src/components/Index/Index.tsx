import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { useIndexStyles } from "../../theme/indexStyles";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

export const Index = () => {
    const classes = useIndexStyles();

    return (
        <Card className={classes.container}>
            <CardMedia className={classes.image} image="https://localhost:5001/mainPhoto.jpg" />
            <CardContent>
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h1">FinHub</Typography>
                        <Typography variant="h4">Track Group expenses easily!</Typography>
                    </Grid>
                    <Grid item xs={12} md={6} spacing={1} container justify="flex-end" alignItems="flex-end">
                        <Grid item>
                            <Button variant="contained" color="primary" component={Link} to="/login">Login</Button>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6">or</Typography>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="primary" component={Link} to="/signup">Join now</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};
