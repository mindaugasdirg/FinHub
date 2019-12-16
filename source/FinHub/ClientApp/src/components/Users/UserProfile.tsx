import { DialogContent } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import { compose } from "lodash/fp";
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { UsersApi } from "../../apis/UsersApi";
import { useFormField } from "../../common/utils";
import { RootState } from "../../store/reducers/reducer";
import { useProfileStyles } from "../../theme/userStyles";
import { UserButtons } from "./UserButtons";
import { UserView } from "./UserView";
import { AlertsReducerActions } from "../../store/reducers/alerts/AlertsReducerActions";
import { AlertTypes } from "../../common/types";

const mapStateToProps = (state: RootState) => ({
    user: state.user.user!,
    token: state.user.token!,
});

const mapDispatchToProps = {
    addAlert: AlertsReducerActions.addAlert,
};

const UserProfile = (props: ConnectedProps<typeof connectedProps>) => {
    const [open, setOpen] = React.useState(false);
    const [email, setEmail] = useFormField(props.user.email);
    const [userName, setUserName] = useFormField(props.user.userName);
    const classes = useProfileStyles();

    const onSubmit = () => {
        if (!(email && userName)) return;
        UsersApi.update(props.token, props.user.id, { ...props.user, email, userName }).then(result => {
            if (typeof result === "string") {
                props.addAlert(AlertTypes.Error, result);
                return;
            }
            props.addAlert(AlertTypes.Success, "User updated");
        });
    };

    const setModalState = (state: boolean) => () => setOpen(state);

    return (
        <>
            <UserButtons openModal={setModalState(true)}/>
            <Paper className={classes.content}>
                <UserView user={props.user} />
            </Paper>
            <Dialog fullWidth className={classes.modal} open={open} onClose={setModalState(false)} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Edit profile</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="normal"
                        label="Email"
                        fullWidth
                        value={email}
                        onChange={setEmail}
                    />
                    <TextField
                        margin="normal"
                        label="Username"
                        fullWidth
                        value={userName}
                        onChange={setUserName}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={setModalState(false)}>Cancel</Button>
                    <Button onClick={compose(onSubmit, setModalState(false))}>Save</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

const connectedProps = connect(mapStateToProps, mapDispatchToProps);
export const ConnectedUserProfile = connectedProps(UserProfile);
