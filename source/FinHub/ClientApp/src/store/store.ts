import { createBrowserHistory } from "history";
import { routerMiddleware } from "react-router-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { normalizeMaybe } from "../common/utils";
import { rootReducer } from "./reducers/reducer";

const baseUrl = normalizeMaybe(document.getElementsByTagName("base")[0].getAttribute("href"));
export const history = createBrowserHistory({ basename: baseUrl });

const middleware = [
    thunk,
    routerMiddleware(history),
];

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware)),
);

export type Dispatcher = typeof store.dispatch;
