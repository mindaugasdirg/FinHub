import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { compose } from "lodash/fp";
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { login } from "../../actions/UserActions";
import { preventDefault, useFormField } from "../../common/utils";

interface Props {
    onSignUp: () => void;
}

const mapDispatchToProps = {
    onLogin: login,
};

const Login = (props: Props & ConnectedProps<typeof connectedProps>) => {
    const [username, setUsername] = useFormField();
    const [password, setPassword] = useFormField();

    const onSubmit = () => {
        if (!username || !password) return;
        props.onLogin(username, password);
    };

    return (
        <Paper>
            <Avatar>
                <LockOutlinedIcon />
            </Avatar>
            <Typography variant="h1">
                Log in
            </Typography>
            <form onSubmit={compose(onSubmit, preventDefault)}>
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
                <Button fullWidth type="submit" color="primary" variant="contained">Login</Button>
                <Button onClick={props.onSignUp}>Sign up</Button>
            </form>
        </Paper>
    );
};

const connectedProps = connect(null, mapDispatchToProps);
export const ConnectedLogin = connectedProps(Login);
