import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import React from "react";
import { useFormField } from "../../common/utils";

const SignUp = () => {
    const [username, setUsername] = useFormField();
    const [email, setEmail] = useFormField();
    const [password, setPassword] = useFormField();
    const [passwordRepeat, setPasswordRepeat] = useFormField();

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!username || !email || !password || !passwordRepeat || password !== passwordRepeat) return;
        // tslint:disable-next-line: no-console
        console.log(username);
        // tslint:disable-next-line: no-console
        console.log(password);
    };

    return (
        <Paper>
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
};

export default SignUp;
