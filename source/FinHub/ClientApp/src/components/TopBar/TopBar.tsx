import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { compose } from "lodash/fp";
import React from "react";
import { connect } from "react-redux";
import { AnyAction } from "react-redux/node_modules/redux";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../../store/reducers/reducer";
import { UserReducerActions } from "../../store/reducers/user/UserReducerActions";
import GuestButtons from "./GuestButtons";
import Navigation from "./Navigation";
import UserButtons from "./UserButtons";

const mapStateToProps = (state: RootState) => ({
    user: state.user.user,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => ({
    logout: compose(dispatch, UserReducerActions.logout),
});

function TopBar(props: ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>) {
    // tslint:disable-next-line: no-console
    const openProfile = () => console.log("Opening profile");
    // tslint:disable-next-line: no-console
    const openLink = (destination: string) => () => console.log(`opening ${destination}`);

    return (
        <AppBar position="sticky">
            <Toolbar>
                <Typography variant="h5">
                    FinHub
                </Typography>
                {props.user ?
                    <>
                        <Navigation openMembers={openLink("members")} openOverview={openLink("overview")}
                            openTransactions={openLink("transactions")} />
                        <UserButtons onProfileOpen={openProfile} onLogout={props.logout} />
                    </> :
                    <GuestButtons />
                }
            </Toolbar>
        </AppBar>
    );
}

const ConnectedTopBar = connect(mapStateToProps, mapDispatchToProps)(TopBar);

export default ConnectedTopBar;
