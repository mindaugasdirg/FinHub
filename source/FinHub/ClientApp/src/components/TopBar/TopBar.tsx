import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import GuestButtons from './GuestButtons';
import UserButtons from './UserButtons';
import Navigation from './Navigation';

export default function TopBar() {
    const [loggedIn, setLoggedIn] = React.useState(false);

    const setAccount = (state: boolean) => () => setLoggedIn(state);
    const openProfile = () => console.log("Opening profile");
    const openLink = (destination: string) => () => console.log(`opening ${destination}`);

    return (
        <AppBar position="sticky">
            <Toolbar>
                <Typography variant="h5">
                    FinHub
                </Typography>
                {loggedIn ?
                    <>
                        <Navigation openMembers={openLink("members")} openOverview={openLink("overview")} openTransactions={openLink("transactions")} />
                        <UserButtons onProfileOpen={openProfile} onLogout={setAccount(false)} />
                    </> :
                    <GuestButtons onLogin={setAccount(true)} onSignUp={setAccount(true)} />
                }
            </Toolbar>
        </AppBar>
    );
}