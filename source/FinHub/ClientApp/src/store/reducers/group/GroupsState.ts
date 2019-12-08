import { Group } from "../../../common/types";

export interface GroupsState {
    groups: Group[];
    activeGroup?: Group;
}
