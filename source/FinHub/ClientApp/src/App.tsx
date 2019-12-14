import { ThemeProvider } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createBrowserHistory } from "history";
import React from "react";
import { connect } from "react-redux";
import { Router } from "react-router";
import { allowAnonymous, allowUser } from "./common/utils";
import { Footer } from "./components/Footer";
import { ConnectedGroupList } from "./components/Groups/GroupList";
import { ConnectedGroupOverview } from "./components/Groups/GroupOverview";
import { Index } from "./components/Index/Index";
import { ConnectedLogin } from "./components/Login/Login";
import { ProtectedRoute } from "./components/Routes/ProtectedRoute";
import { ConnectedSignUp } from "./components/Signup/SignUp";
import { ConnectedTopBar } from "./components/TopBar/TopBar";
import { ConnectedTransactionsList } from "./components/Transactions/TransactionsList";
import { RootState } from "./store/reducers/reducer";
import theme from "./theme/theme";

const history = createBrowserHistory();

const mapStateToProps = (state: RootState) => ({
    token: state.user.token,
});

// const allowAdmin = (token?: string, admin?: string) => token && admin && token === admin;

const App = (props: ReturnType<typeof mapStateToProps>) => (
    <>
        <CssBaseline />
        <Router history={history}>
            <ThemeProvider theme={theme}>
                <ConnectedTopBar />
                <Container>
                    <ProtectedRoute locked={allowAnonymous(props.token)} redirect="/groups" exact path="/" component={Index} />
                    <ProtectedRoute locked={allowUser(props.token)} redirect="/login" exact path="/overview" component={ConnectedGroupOverview} />
                    <ProtectedRoute
                        locked={allowUser(props.token)} redirect="/groups" exact path="/transactions" component={ConnectedTransactionsList} />
                    <ProtectedRoute locked={allowUser(props.token)} redirect="/login" exact path="/members" component={Index} />
                    <ProtectedRoute locked={allowUser(props.token)} redirect="/login" exact path="/groups" component={ConnectedGroupList} />
                    <ProtectedRoute locked={allowAnonymous(props.token)} redirect="/groups" exact path="/login" component={ConnectedLogin} />
                    <ProtectedRoute locked={allowAnonymous(props.token)} redirect="/groups" exact path="/signup" component={ConnectedSignUp} />
                </Container>
                <Footer />
            </ThemeProvider>
        </Router>
    </>
);

const ConnectedApp = connect(mapStateToProps)(App);

export default ConnectedApp;
