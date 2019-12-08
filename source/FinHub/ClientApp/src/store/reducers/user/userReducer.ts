import { ActionUnion } from "../../../common/types";
import { UserActions, UserActionTypes } from "./UserActions";
import { UserState } from "./UserState";

const initialState: UserState = {
};

export function userReducer(state = initialState, action: ActionUnion<typeof UserActions>): UserState {
    switch (action.type) {
        case UserActionTypes.LOGIN:
            return { ...state, ...action.payload };
        case UserActionTypes.LOGOUT:
            return { ...state, user: undefined, token: undefined };
        default:
            return state;
    }
}
