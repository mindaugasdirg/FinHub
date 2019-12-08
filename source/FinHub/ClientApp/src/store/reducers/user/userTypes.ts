export interface UserState {
    username?: string;
    email?: string;
    token?: string;
}

export enum UserActionTypes {
    LOGIN = "LOGIN",
    LOGOUT = "LOGOUT",
};

export interface UserAction {
    type: UserActionTypes;
    payload?: UserState;
}