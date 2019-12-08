import React from 'react';
import { Route, Router } from 'react-router';
import Home from './routes/Home';
import { createBrowserHistory } from 'history';
import CssBaseline from '@material-ui/core/CssBaseline';
import TopBar from './components/TopBar/TopBar';
import Footer from './components/Footer';
import Container from '@material-ui/core/Container';

const history = createBrowserHistory();

const App = () => (
    <>
        <CssBaseline />
        <TopBar />
        <Container>
            <Router history={history}>
                <Route exact path='/' component={Home} />
            </Router>
        </Container>
        <Footer />
    </>
);

export default App;
