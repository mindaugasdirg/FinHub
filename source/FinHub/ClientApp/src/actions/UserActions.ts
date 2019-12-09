import { User } from "../common/types";
import { UserReducerActions } from "../store/reducers/user/UserReducerActions";
import { Dispatcher } from "../store/store";
import { NetworkApi } from "../apis/NetworkApi";
import { RootState } from "../store/reducers/reducer";

export namespace UserActions {
    const apiPath = "/api/users";

    export const login = (userName: string, password: string) => async (dispatch: Dispatcher) => {
        const result = await NetworkApi.post("/authenticate", { userName, password });
        if (!result.ok) return;
        const token = await result.text();
        const id = extractUserId(token);
        const user = await load(token, id);
        if (!user) return;
        dispatch(UserReducerActions.login(user, token));
    };

    export const get = (id: string) => async (_dispatch: Dispatcher, getState: () => RootState) => {
        const token = getState().user.token!;
        return NetworkApi.authenticatedRequest()
    };

    const extractUserId = (token: string) => {
        const base64Url = token.split(".")[1];
        return JSON.parse(atob(base64Url)).sub as string;
    };
}
