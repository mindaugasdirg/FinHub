import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { compose } from "lodash/fp";
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { login } from "../../actions/UserActions";
import { preventDefault, useFormField } from "../../common/utils";
import { AlertsReducerActions } from "../../store/reducers/alerts/AlertsReducerActions";
import { useFormStyle } from "../../theme/formStyles";

const mapDispatchToProps = {
    onLogin: login,
    addAlert: AlertsReducerActions.addAlert,
};

const Login = (props: ConnectedProps<typeof connectedProps>) => {
    const [username, setUsername] = useFormField("");
    const [password, setPassword] = useFormField("");
    const classes = useFormStyle();

    const onSubmit = () => {
        if (!username || !password) return;
        props.onLogin(username, password);
    };

    return (
        <>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography variant="h1">
                Log in
            </Typography>
            <form className={classes.form} onSubmit={compose(onSubmit, preventDefault)}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    name="username"
                    label="Username"
                    required
                    type="text"
                    value={username}
                    onChange={setUsername}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    name="password"
                    label="Password"
                    required
                    type="password"
                    value={password}
                    onChange={setPassword}
                />
                <Button fullWidth type="submit" color="primary" variant="contained" className={classes.submit}>Login</Button>
                <Grid container direction="row" justify="flex-end" className={classes.link}>
                    <Grid item >
                        <Link component={RouterLink} to="/signup">
                            New member? Sign up
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </>
    );
};

const connectedProps = connect(null, mapDispatchToProps);
export const ConnectedLogin = connectedProps(Login);
