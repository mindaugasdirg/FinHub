import { ActionUnion } from "../../../common/types";
import { GroupsActionTypes, GroupsReducerActions } from "./GroupsReducerActions";
import { GroupsState } from "./GroupsState";

const initialState: GroupsState = {
    groups: [],
};

export function groupsReducer(state = initialState, action: ActionUnion<typeof GroupsReducerActions>): GroupsState {
    switch (action.type) {
        case GroupsActionTypes.ADD_GROUP:
            return { ...state, groups: [...state.groups, action.payload.group] };
        case GroupsActionTypes.SET_GROUPS:
            return { ...state, ...action.payload };
        case GroupsActionTypes.SET_ACTIVE_GROUP:
            return { ...state, activeGroup: action.payload.group };
        default:
            return state;
    }
}
