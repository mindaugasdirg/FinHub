import { ActionUnion } from "../../../common/types";
import { UserActionTypes, UserReducerActions } from "./UserReducerActions";
import { UserState } from "./UserState";

const initialState: UserState = {
};

export function userReducer(state = initialState, action: ActionUnion<typeof UserReducerActions>): UserState {
    switch (action.type) {
        case UserActionTypes.LOGIN:
            return { ...state, ...action.payload };
        case UserActionTypes.LOGOUT:
            return { ...state, user: undefined, token: undefined };
        case UserActionTypes.SET_USER:
            return { ...state, user: action.payload.user };
        default:
            return state;
    }
}
