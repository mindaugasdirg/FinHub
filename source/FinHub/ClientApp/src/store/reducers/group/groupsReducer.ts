import { ActionUnion } from "../../../common/types";
import { GroupsActions, GroupsActionTypes } from "./GroupsActions";
import { GroupsState } from "./GroupsState";

const initialState: GroupsState = {
    groups: [],
};

export function groupsReducer(state = initialState, action: ActionUnion<typeof GroupsActions>): GroupsState {
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
