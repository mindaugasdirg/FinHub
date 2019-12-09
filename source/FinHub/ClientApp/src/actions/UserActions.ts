import { NetworkApi } from "../apis/NetworkApi";
import { UsersApi } from "../apis/UsersApi";
import { mapEitherBoth } from "../common/utils";
import { UserReducerActions } from "../store/reducers/user/UserReducerActions";
import { Dispatcher } from "../store/store";

const extractUserId = (token: string) => {
    const base64Url = token.split(".")[1];
    return JSON.parse(atob(base64Url)).sub as string;
};

export const login = (userName: string, password: string) => async (dispatch: Dispatcher) => {
    const result = await fetch("/authenticate", NetworkApi.getFetchOptions("POST", { userName, password }));
    if (!result.ok) return;
    const token = await result.text();
    const id = extractUserId(token);
    dispatch(UserReducerActions.login(token));
    const maybeUser = await UsersApi.get(token, id);
    mapEitherBoth(
        // tslint:disable-next-line: no-console
        user => { console.log("setting user"); dispatch(UserReducerActions.setUser(user)); },
        // tslint:disable-next-line: no-console
        error => { console.log(error); },
        maybeUser,
    );
};
