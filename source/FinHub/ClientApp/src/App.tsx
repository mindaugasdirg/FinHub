import React from 'react';
import { Route, Router } from 'react-router';
import Home from './routes/Home';
import { createBrowserHistory } from 'history';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Content from './components/Content';

const history = createBrowserHistory();

const App = () => (
    <>
        <NavigationBar />
        <Content>
            <Router history={history}>
                <Route exact path='/' component={Home} />
            </Router>
        </Content>
        <Footer />
    </>
);

export default App;
