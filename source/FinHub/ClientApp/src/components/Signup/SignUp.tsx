import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { signup } from "../../actions/UserActions";
import { useFormField } from "../../common/utils";

const mapDispatchToProps = {
    signUp: signup,
};

function SignUp(props: ConnectedProps<typeof connectedProps>) {
    const [username, setUsername] = useFormField();
    const [email, setEmail] = useFormField();
    const [password, setPassword] = useFormField();
    const [passwordRepeat, setPasswordRepeat] = useFormField();

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!username || !email || !password || !passwordRepeat || password !== passwordRepeat) return;
        props.signUp(username, email, password);
    };

    return (
        <Paper>
            <Avatar>
                <LockOutlinedIcon />
            </Avatar>
            <Typography variant="h1">
                Sign up
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
            </form>
        </Paper>
    );
}

const connectedProps = connect(null, mapDispatchToProps);
export const ConnectedSignUp = connectedProps(SignUp);
