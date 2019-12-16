import { NetworkApi } from "../apis/NetworkApi";
import { UsersApi } from "../apis/UsersApi";
import { RootState } from "../store/reducers/reducer";
import { UserReducerActions } from "../store/reducers/user/UserReducerActions";
import { Dispatcher, history } from "../store/store";
import { load } from "./GroupsActions";
import { AlertsReducerActions } from "../store/reducers/alerts/AlertsReducerActions";
import { AlertTypes } from "../common/types";

const extractUserId = (token: string) => {
    const base64Url = token.split(".")[1];
    return JSON.parse(atob(base64Url)).sub as string;
};

export const login = (userName: string, password: string) => async (dispatch: Dispatcher, getState: () => RootState) => {
    const result = await fetch("/authenticate", NetworkApi.getFetchOptions("POST", { userName, password }));
    if (!result.ok) return;
    const token = await result.text();
    const id = extractUserId(token);
    dispatch(UserReducerActions.login(token));
    const maybeUser = await UsersApi.get(token, id);
    if (typeof maybeUser === "string") {
        dispatch(AlertsReducerActions.addAlert(AlertTypes.Error, "Wrong username or password"));
        return;
    }
    dispatch(UserReducerActions.setUser(maybeUser));
    load()(dispatch, getState).then(() => history.push("/groups"));
};

export const signup = (username: string, email: string, password: string) => async (dispatch: Dispatcher, getState: () => RootState) => {
    const result = await UsersApi.create({ userName: username, email, password });
    if (typeof result === "string") {
        dispatch(AlertsReducerActions.addAlert(AlertTypes.Error, result));
        return;
    }
    login(result.userName, password)(dispatch, getState);
};
