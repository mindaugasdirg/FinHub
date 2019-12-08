import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware, RouterState } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import { userReducer } from './reducers/user/userReducer';
import { UserState } from './reducers/user/userTypes';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href') || undefined;
const history = createBrowserHistory({ basename: baseUrl });

export interface RootState {
    router: RouterState;
    user: UserState;
}

const rootReducer = combineReducers<RootState>({
    router: routerReducer,
    user: userReducer,
});


const middleware = [
    thunk,
    routerMiddleware(history),
];

export const store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
);

export type Dispatch = typeof store.dispatch;