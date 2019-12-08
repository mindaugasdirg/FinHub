import { Group } from "../../../common/types";
import { createActionWithPayload } from "../../../common/utils";

export enum GroupsActionTypes {
    SET_GROUPS = "SET_GROUPS",
    SET_ACTIVE_GROUP = "SET_ACTIVE_GROUP",
    ADD_GROUP = "ADD_GROUP",
}

export const GroupsActions = {
    addGroups: (group: Group) => createActionWithPayload(GroupsActionTypes.ADD_GROUP, { group }),
    setActiveGroup: (group: Group) => createActionWithPayload(GroupsActionTypes.SET_ACTIVE_GROUP, { group }),
    setGroups: (groups: Group[]) => createActionWithPayload(GroupsActionTypes.SET_GROUPS, { groups }),
};
