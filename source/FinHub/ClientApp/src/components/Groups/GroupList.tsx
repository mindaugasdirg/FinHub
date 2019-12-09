import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { compose } from "lodash/fp";
import React from "react";
import { connect } from "react-redux";
import { AnyAction } from "react-redux/node_modules/redux";
import { ThunkDispatch } from "redux-thunk";
import { GroupsReducerActions } from "../../store/reducers/group/GroupsReducerActions";
import { RootState } from "../../store/reducers/reducer";
import GroupButtons from "./GroupButtons";
import GroupListItem from "./GroupListItem";

const mapStateToProps = (state: RootState) => ({
    activeGroup: state.groups.activeGroup,
    groups: state.groups.groups,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => ({
    setActiveGroup: compose(dispatch, GroupsReducerActions.setActiveGroup),
});

const GroupList = (props: ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>) => {
    return (
        <>
            <GroupButtons />
            <Paper>
                {props.groups.length ?
                    <List>
                        {props.groups.map(group =>
                            <GroupListItem
                                key={group.id}
                                group={group}
                                selected={props.activeGroup && group.id === props.activeGroup.id}
                                onClick={() => props.setActiveGroup(group)}
                            />)}
                    </List> :
                    <Typography variant="h4">No groups</Typography>
                }
            </Paper>
        </>
    );
};

const ConnectedGroupList = connect(mapStateToProps, mapDispatchToProps)(GroupList);

export default ConnectedGroupList;
