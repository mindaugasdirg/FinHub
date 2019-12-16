import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { load } from "../../actions/GroupsActions";
import { GroupsApi } from "../../apis/GroupsApi";
import { useFormField } from "../../common/utils";
import { RootState } from "../../store/reducers/reducer";
import { Link } from "react-router-dom";

const mapStateToProps = (state: RootState) => ({
    token: state.user.token!,
});

const mapDispatchToProps = {
    load,
};

const JoinGroup = (props: ConnectedProps<typeof connectedProps>) => {
    const [groupCode, setGroupCode] = useFormField("");

    const onSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (!groupCode) return;
        await GroupsApi.join(props.token, 0, groupCode).then(() => props.load());
    };

    return (
        <form onSubmit={onSubmit}>
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <TextField
                        margin="dense"
                        name="group-code"
                        label="Group code"
                        required
                        type="text"
                        value={groupCode}
                        onChange={setGroupCode}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained" color="primary" type="submit">Join Group</Button>
                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained" color="primary" component={Link} to="/groups/create">Create Group</Button>
                </Grid>
            </Grid>
        </form>
    );
};

const connectedProps = connect(mapStateToProps, mapDispatchToProps);
export const ConnectedJoinGroup = connectedProps(JoinGroup);
