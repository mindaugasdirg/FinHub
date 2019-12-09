import { GroupsApi } from "../apis/GroupsApi";
import { mapEitherBoth } from "../common/utils";
import { GroupsReducerActions } from "../store/reducers/group/GroupsReducerActions";
import { RootState } from "../store/reducers/reducer";
import { Dispatcher } from "../store/store";

export const load = () => async (dispatch: Dispatcher, getState: () => RootState) => {
    const token = getState().user.token;
    if (!token) return;
    const maybeGroups = await GroupsApi.getList(token);
    mapEitherBoth(
        groups => { dispatch(GroupsReducerActions.setGroups(groups)); },
        // tslint:disable-next-line: no-console
        error => { console.log(error); },
        maybeGroups,
    );
};
