import { GroupsApi } from "../apis/GroupsApi";
import { Group } from "../common/types";
import { GroupsReducerActions } from "../store/reducers/group/GroupsReducerActions";
import { RootState } from "../store/reducers/reducer";
import { Dispatcher, history } from "../store/store";

export const load = () => async (dispatch: Dispatcher, getState: () => RootState) => {
    const token = getState().user.token;
    if (!token) return;
    const maybeGroups = await GroupsApi.getList(token);
    if (typeof maybeGroups === "string") {
        // tslint:disable-next-line: no-console
        console.log(maybeGroups);
        return;
    }
    dispatch(GroupsReducerActions.setGroups(maybeGroups));
};

export const setActiveGroup = (group?: Group) => async (dispatch: Dispatcher) => {
    dispatch(GroupsReducerActions.setActiveGroup(group));
    history.push("/overview");
};
