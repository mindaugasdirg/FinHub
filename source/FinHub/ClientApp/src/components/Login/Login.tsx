import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { compose } from "lodash/fp";
import React from "react";
import { connect } from "react-redux";
import { AnyAction } from "react-redux/node_modules/redux";
import { ThunkDispatch } from "redux-thunk";
import { login } from "../../actions/UserActions";
import { useFormField } from "../../common/utils";

interface Props {
    onSignUp: () => void;
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => ({
    onLogin: compose(dispatch, login),
});

const Login = (props: Props & ReturnType<typeof mapDispatchToProps>) => {
    const [username, setUsername] = useFormField();
    const [password, setPassword] = useFormField();

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
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
            <form onSubmit={onSubmit}>
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

const ConnectedLogin = connect(null, mapDispatchToProps)(Login);

export default ConnectedLogin;
