import { createBrowserHistory } from "history";
import { routerMiddleware } from "react-router-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { normalizeMaybe } from "../common/utils";
import { rootReducer } from "./reducers/reducer";

const baseUrl = normalizeMaybe(document.getElementsByTagName("base")[0].getAttribute("href"));
const history = createBrowserHistory({ basename: baseUrl });

const middleware = [
    thunk,
    routerMiddleware(history),
];

export const store = createStore(
    rootReducer,
    applyMiddleware(...middleware),
);

export type Dispatcher = typeof store.dispatch;
