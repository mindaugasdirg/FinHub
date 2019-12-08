import { User } from "../../../common/types";
import { createAction, createActionWithPayload } from "../../../common/utils";

export enum UserActionTypes {
    LOGIN = "LOGIN",
    LOGOUT = "LOGOUT",
}

export const UserActions = {
    login: (user: User, token: string) => createActionWithPayload(UserActionTypes.LOGIN, { user, token }),
    logout: () => createAction(UserActionTypes.LOGOUT),
};
