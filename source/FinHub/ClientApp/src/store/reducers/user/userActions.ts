import { UserActionTypes } from "./userTypes";

export namespace UserActions {
    export const login = (username: string, email: string, token: string) => ({
        type: UserActionTypes.LOGIN,
        payload: { username, email, token },
    });

    export const logout = () => ({
        type: UserActionTypes.LOGOUT
    });
}