import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { compose } from "lodash/fp";
import React from "react";
import { connect } from "react-redux";
import { AnyAction } from "react-redux/node_modules/redux";
import { ThunkDispatch } from "redux-thunk";
import { load } from "../../actions/GroupsActions";
import { GroupsApi } from "../../apis/GroupsApi";
import { useFormField } from "../../common/utils";
import { RootState } from "../../store/reducers/reducer";

const mapStateToProps = (state: RootState) => ({
    token: state.user.token!,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => ({
    load: compose(dispatch, load),
});

const JoinGroup = (props: ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>) => {
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

const ConnectedJoinGroup = connect(mapStateToProps, mapDispatchToProps)(JoinGroup);

export default ConnectedJoinGroup;
