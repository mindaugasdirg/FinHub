import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { GroupsReducerActions } from "../../store/reducers/group/GroupsReducerActions";
import { RootState } from "../../store/reducers/reducer";
import { GroupButtons } from "./GroupButtons";
import { GroupListItem } from "./GroupListItem";

const mapStateToProps = (state: RootState) => ({
    activeGroup: state.groups.activeGroup,
    groups: state.groups.groups,
});

const mapDispatchToProps = {
    setActiveGroup: GroupsReducerActions.setActiveGroup,
};

const GroupOverview = (props: ConnectedProps<typeof connectedProps>) => {
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

const connectedProps = connect(mapStateToProps, mapDispatchToProps);
export const ConnectedGroupOverview = connectedProps(GroupOverview);
