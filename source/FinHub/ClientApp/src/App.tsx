import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createBrowserHistory } from "history";
import React from "react";
import { Route, Router } from "react-router";
import Footer from "./components/Footer";
import Login from "./components/Login/Login";
import SignUp from "./components/Signup/SignUp";
import TopBar from "./components/TopBar/TopBar";
import Home from "./routes/Home";

const history = createBrowserHistory();

const App = () => (
    <>
        <CssBaseline />
        <Router history={history}>
            <>
                <TopBar />
                <Container>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={SignUp} />
                </Container>
                <Footer />
            </>
        </Router>
    </>
);

export default App;
