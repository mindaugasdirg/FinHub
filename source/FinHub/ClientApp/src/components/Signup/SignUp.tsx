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
import { signup } from "../../actions/UserActions";
import { preventDefault, useFormField } from "../../common/utils";
import { useFormStyle } from "../../theme/formStyles";

const mapDispatchToProps = {
    signUp: signup,
};

function SignUp(props: ConnectedProps<typeof connectedProps>) {
    const [username, setUsername] = useFormField("");
    const [email, setEmail] = useFormField("");
    const [password, setPassword] = useFormField("");
    const [passwordRepeat, setPasswordRepeat] = useFormField("");
    const classes = useFormStyle();

    const onSubmit = () => {
        if (!username || !email || !password || !passwordRepeat || password !== passwordRepeat) return;
        props.signUp(username, email, password);
    };

    return (
        <>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography variant="h1">
                Sign up
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
                    name="email"
                    label="Email"
                    required
                    type="email"
                    value={email}
                    onChange={setEmail}
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
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    name="password"
                    label="Repeat password"
                    required
                    type="password"
                    value={passwordRepeat}
                    onChange={setPasswordRepeat}
                />
                <Button fullWidth type="submit" color="primary" variant="contained">Sign up</Button>
                <Grid container direction="row" justify="flex-end" className={classes.link}>
                    <Grid item >
                        <Link component={RouterLink} to="/login">
                            Already a member? Login
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </>
    );
}

const connectedProps = connect(null, mapDispatchToProps);
export const ConnectedSignUp = connectedProps(SignUp);
