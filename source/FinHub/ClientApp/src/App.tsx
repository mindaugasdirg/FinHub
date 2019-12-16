import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { createBrowserHistory } from "history";
import React from "react";
import { connect } from "react-redux";
import { Router } from "react-router";
import { allowAnonymous, allowUser } from "./common/utils";
import { ConnectedAlert } from "./components/Alerts/Alert";
import { ProtectedRoute } from "./components/common/ProtectedRoute";
import { Footer } from "./components/Footer";
import { ConnectedGroupList } from "./components/Groups/GroupList";
import { ConnectedGroupOverview } from "./components/Groups/GroupOverview";
import { Index } from "./components/Index/Index";
import { StandAloneLogin } from "./components/Login/StandAloneLogin";
import { StandAloneSignUp } from "./components/Signup/StandAloneSignUp";
import { TopBar } from "./components/TopBar/TopBar";
import { StandAloneTransactionForm } from "./components/Transactions/StandAloneTransactionForm";
import { ConnectedTransactionsList } from "./components/Transactions/TransactionsList";
import { ConnectedMembersList } from "./components/Users/MembersList";
import { ConnectedUserProfile } from "./components/Users/UserProfile";
import { RootState } from "./store/reducers/reducer";
import theme from "./theme/theme";
import { StandAloneGroupForm } from "./components/Groups/StandAloneGroupForm";

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
                <TopBar />
                <Container>
                    <ProtectedRoute locked={allowAnonymous(props.token)} redirect="/groups" exact path="/" component={Index} />
                    <ProtectedRoute locked={allowUser(props.token)} redirect="/login" exact path="/overview" component={ConnectedGroupOverview} />
                    <ProtectedRoute
                        locked={allowUser(props.token)} redirect="/groups" exact path="/transactions" component={ConnectedTransactionsList} />
                    <ProtectedRoute locked={allowUser(props.token)} redirect="/login" exact path="/members" component={ConnectedMembersList} />
                    <ProtectedRoute locked={allowUser(props.token)} redirect="/login" exact path="/groups" component={ConnectedGroupList} />
                    <ProtectedRoute locked={allowUser(props.token)} redirect="/login" exact path="/profile" component={ConnectedUserProfile} />
                    <ProtectedRoute
                        locked={allowUser(props.token)} redirect="/login" exact path="/transactions/create" component={StandAloneTransactionForm} />
                    <ProtectedRoute
                        locked={allowUser(props.token)} redirect="/login" exact path="/groups/create" component={StandAloneGroupForm} />
                    <ProtectedRoute locked={allowAnonymous(props.token)} redirect="/groups" exact path="/login" component={StandAloneLogin} />
                    <ProtectedRoute locked={allowAnonymous(props.token)} redirect="/groups" exact path="/signup" component={StandAloneSignUp} />
                </Container>
                <Footer />
                <ConnectedAlert/>
            </ThemeProvider>
        </Router>
    </>
);

const ConnectedApp = connect(mapStateToProps)(App);

export default ConnectedApp;
