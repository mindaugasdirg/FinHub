import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createBrowserHistory } from "history";
import React from "react";
import { Route, Router } from "react-router";
import Footer from "./components/Footer";
import TopBar from "./components/TopBar/TopBar";
import Home from "./routes/Home";

const history = createBrowserHistory();

const App = () => (
    <>
        <CssBaseline />
        <TopBar />
        <Container>
            <Router history={history}>
                <Route exact path="/" component={Home} />
            </Router>
        </Container>
        <Footer />
    </>
);

export default App;
