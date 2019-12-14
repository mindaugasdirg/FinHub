import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { load } from "../../actions/GroupsActions";
import { GroupsApi } from "../../apis/GroupsApi";
import { useFormField } from "../../common/utils";
import { RootState } from "../../store/reducers/reducer";

const mapStateToProps = (state: RootState) => ({
    token: state.user.token!,
});

const mapDispatchToProps = {
    load,
};

const JoinGroup = (props: ConnectedProps<typeof connectedProps>) => {
    const [groupCode, setGroupCode] = useFormField();

    const onSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (!groupCode) return;
        await GroupsApi.join(props.token, 0, groupCode).then(() => props.load());
    };

    return (
        <form onSubmit={onSubmit}>
            <TextField
                margin="normal"
                name="group-code"
                label="Group code"
                required
                type="text"
                value={groupCode}
                onChange={setGroupCode}
            />
            <Button variant="contained" color="primary" type="submit">Join Group</Button>
        </form>
    );
};

const connectedProps = connect(mapStateToProps, mapDispatchToProps);
export const ConnectedJoinGroup = connectedProps(JoinGroup);
