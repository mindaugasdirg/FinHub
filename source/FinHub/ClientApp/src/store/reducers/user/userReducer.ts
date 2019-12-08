import { UserState, UserAction, UserActionTypes } from "./userTypes";

const initialState: UserState = {
};

export function userReducer(state = initialState, action: UserAction): UserState {
    switch(action.type) {
        case UserActionTypes.LOGIN:
            return { ...state, ...action.payload };
        case UserActionTypes.LOGOUT:
            return { ...state, username: undefined, email: undefined, token: undefined };
        default:
            return state;
    }
}