import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { compose } from "lodash/fp";
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { Link } from "react-router-dom";
import { GroupsReducerActions } from "../../store/reducers/group/GroupsReducerActions";
import { RootState } from "../../store/reducers/reducer";
import { UserReducerActions } from "../../store/reducers/user/UserReducerActions";
import { GuestButtons } from "./GuestButtons";
import { Navigation } from "./Navigation";
import { UserButtons } from "./UserButtons";

const mapStateToProps = (state: RootState) => ({
    activeGroup: state.groups.activeGroup,
    user: state.user.user,
});

const mapDispatchToProps = {
    logout: UserReducerActions.logout,
    setActiveGroup: GroupsReducerActions.setActiveGroup,
    setGroups: GroupsReducerActions.setGroups,
};

function TopBar(props: ConnectedProps<typeof connectedProps>) {
    // tslint:disable-next-line: no-console
    const openProfile = () => console.log("Opening profile");

    return (
        <AppBar position="sticky">
            <Toolbar>
                <Button component={Link} to="/">
                    <Typography variant="h5">
                        FinHub
                    </Typography>
                </Button>
                {props.activeGroup && <Navigation />}
                {props.user ?
                    <UserButtons onProfileOpen={openProfile} onLogout={compose(props.logout, props.setGroups, () => props.setActiveGroup())} /> :
                    <GuestButtons />
                }
            </Toolbar>
        </AppBar>
    );
}

const connectedProps = connect(mapStateToProps, mapDispatchToProps);
export const ConnectedTopBar = connectedProps(TopBar);
