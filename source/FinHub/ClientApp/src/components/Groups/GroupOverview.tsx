import Grid from "@material-ui/core/Grid";
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { setActiveGroup } from "../../actions/GroupsActions";
import { RootState } from "../../store/reducers/reducer";
import { GroupButtons } from "./GroupButtons";
import { GroupGeneralCard } from "./GroupGeneralCard";
import { useGroupOverViewStyles } from "../../theme/groupsStyles";

const mapStateToProps = (state: RootState) => ({
    activeGroup: state.groups.activeGroup,
    groups: state.groups.groups,
});

const mapDispatchToProps = {
    setActiveGroup,
};

const GroupOverview = (props: ConnectedProps<typeof connectedProps>) => {
    const classes = useGroupOverViewStyles();
    return (
        <>
            <GroupButtons name={props.activeGroup!.name} isAdmin={true}/>
            <Grid className={classes.grid} container xs={12} sm={12} md={12} lg={6} xl={6} spacing={3}>
                <Grid item>
                    <GroupGeneralCard group={props.activeGroup!}/>
                </Grid>
            </Grid>
        </>
    );
};

const connectedProps = connect(mapStateToProps, mapDispatchToProps);
export const ConnectedGroupOverview = connectedProps(GroupOverview);
