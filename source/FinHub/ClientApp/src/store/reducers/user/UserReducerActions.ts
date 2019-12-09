import { User } from "../../../common/types";
import { createAction, createActionWithPayload } from "../../../common/utils";

export enum UserActionTypes {
    LOGIN = "LOGIN",
    LOGOUT = "LOGOUT",
    SET_USER = "SET_USER",
}

export const UserReducerActions = {
    login: (token: string) => createActionWithPayload(UserActionTypes.LOGIN, { token }),
    logout: () => createAction(UserActionTypes.LOGOUT),
    setUser: (user: User) => createActionWithPayload(UserActionTypes.SET_USER, { user }),
};
