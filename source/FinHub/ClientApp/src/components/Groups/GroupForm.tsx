import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { compose } from "lodash/fp";
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { GroupsApi } from "../../apis/GroupsApi";
import { preventDefault, useFormField } from "../../common/utils";
import { RootState } from "../../store/reducers/reducer";
import { useFormStyle } from "../../theme/formStyles";
import { load } from "../../actions/GroupsActions";
import { AlertsReducerActions } from "../../store/reducers/alerts/AlertsReducerActions";
import { AlertTypes } from "../../common/types";

const mapStateToProps = (state: RootState) => ({
    token: state.user.token!,
});

const mapDispatchToProps = {
    load,
    addAlert: AlertsReducerActions.addAlert,
};

const GroupForm = (props: ConnectedProps<typeof connectedProps>) => {
    const [name, setName] = useFormField("");
    const classes = useFormStyle();

    const onSubmit = () => {
        if (!name) return;
        GroupsApi.create(props.token, { name }).then(result => {
            if(typeof result === "string") {
                props.addAlert(AlertTypes.Error, result);
                return;
            }
            props.addAlert(AlertTypes.Success, "Group was created");
            props.load();
        });
    };

    return (
        <>
            <Typography variant="h3">
                Create group
            </Typography>
            <form className={classes.form} onSubmit={compose(onSubmit, preventDefault)}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    name="name"
                    label="Name"
                    required
                    type="text"
                    value={name}
                    onChange={setName}
                />
                <Button fullWidth type="submit" color="primary" variant="contained" className={classes.submit}>Create</Button>
            </form>
        </>
    );
};

const connectedProps = connect(mapStateToProps, mapDispatchToProps);
export const ConnectedGroupForm = connectedProps(GroupForm);
