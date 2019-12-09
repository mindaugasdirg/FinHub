import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createBrowserHistory } from "history";
import React from "react";
import { Router } from "react-router";
import Footer from "./components/Footer";
import ConnectedGroupList from "./components/Groups/GroupList";
import Index from "./components/Index/Index";
import Login from "./components/Login/Login";
import ProtectedRoute from "./components/Routes/ProtectedRoute";
import SignUp from "./components/Signup/SignUp";
import TopBar from "./components/TopBar/TopBar";
import { RootState } from "./store/reducers/reducer";
import { connect } from "react-redux";

const history = createBrowserHistory();

const mapStateToProps = (state: RootState) => ({
    token: state.user.token,
});

const App = (props: ReturnType<typeof mapStateToProps>) => (
    <>
        <CssBaseline />
        <Router history={history}>
            <>
                <TopBar />
                <Container>
                <ProtectedRoute locked={props.token === undefined} redirect="/groups" exact path="/" component={Index} />
                <ProtectedRoute locked={props.token !== undefined} redirect="/login" exact path="/groups" component={ConnectedGroupList} />
                <ProtectedRoute locked={props.token === undefined} redirect="/groups" exact path="/login" component={Login} />
                <ProtectedRoute locked={props.token === undefined} redirect="/groups" exact path="/signup" component={SignUp} />
                </Container>
                <Footer />
            </>
        </Router>
    </>
);

const ConnectedApp = connect(mapStateToProps)(App);

export default ConnectedApp;
