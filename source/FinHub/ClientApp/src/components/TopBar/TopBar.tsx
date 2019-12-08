import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";
import GuestButtons from "./GuestButtons";
import Navigation from "./Navigation";
import UserButtons from "./UserButtons";

export default function TopBar() {
    const [loggedIn, setLoggedIn] = React.useState(false);

    const setAccount = (state: boolean) => () => setLoggedIn(state);
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
                {loggedIn ?
                    <>
                        <Navigation openMembers={openLink("members")} openOverview={openLink("overview")}
                            openTransactions={openLink("transactions")} />
                        <UserButtons onProfileOpen={openProfile} onLogout={setAccount(false)} />
                    </> :
                    <GuestButtons onLogin={setAccount(true)} onSignUp={setAccount(true)} />
                }
            </Toolbar>
        </AppBar>
    );
}
