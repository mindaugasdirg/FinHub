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
import { setActiveGroup } from "../../actions/GroupsActions";
import { useTopBarStyles } from "../../theme/topBarStyles";
import { IconButton, Drawer, ListItemIcon, ListItemText, List, ListItem, Divider } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const mapStateToProps = (state: RootState) => ({
    activeGroup: state.groups.activeGroup,
    user: state.user.user,
});

const mapDispatchToProps = {
    logout: UserReducerActions.logout,
    setActiveGroup,
    setGroups: GroupsReducerActions.setGroups,
};

function MobileTopBar(props: ConnectedProps<typeof connectedProps>) {
    const [drawer, setDrawer] = React.useState(false);
    const classes = useTopBarStyles();

    const setDrawerState = (state: boolean) => () => setDrawer(state);

    return (
        <>
            <Drawer open={drawer} onClose={setDrawerState(false)}>
                <List>
                    <ListItem onClick={setDrawerState(false)}>
                        <ListItemIcon><ArrowBackIcon /></ListItemIcon>
                    </ListItem>
                    {props.activeGroup &&
                    <>
                        <ListItem component={Link} to="/overview">
                            <ListItemText>Overview</ListItemText>
                        </ListItem>
                        <ListItem component={Link} to="/transactions">
                            <ListItemText>Transactions</ListItemText>
                        </ListItem>
                        <ListItem component={Link} to="/members">
                            <ListItemText>Members</ListItemText>
                        </ListItem>
                        <Divider />
                    </>
                    }
                    {props.user &&
                        <>
                            <ListItem component={Link} to="/profile">
                                <ListItemText>Profile</ListItemText>
                            </ListItem>
                            <ListItem onClick={compose(props.logout, props.setGroups, () => props.setActiveGroup())}>
                                <ListItemText>Logout</ListItemText>
                            </ListItem>
                        </>
                    }
                </List>
            </Drawer>
            <AppBar position="sticky">
                <Toolbar>
                    <IconButton className={classes.white} onClick={setDrawerState(true)}>
                        <MenuIcon />
                    </IconButton>
                    <Button component={Link} to="/">
                        <Typography className={classes.white} variant="h5">
                            FinHub
                        </Typography>
                    </Button>
                </Toolbar>
            </AppBar>
        </>
    );
}

const connectedProps = connect(mapStateToProps, mapDispatchToProps);
export const ConnectedMobileTopBar = connectedProps(MobileTopBar);
