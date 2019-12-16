import { ActionUnion, AlertTypes } from "../../../common/types";
import { AlertsActionTypes, AlertsReducerActions } from "./AlertsReducerActions";
import { AlertsState } from "./AlertsState";

const initialState: AlertsState = {
    message: "",
    type: AlertTypes.Info,
    open: false,
};

export function alertsReducer(state = initialState, action: ActionUnion<typeof AlertsReducerActions>): AlertsState {
    switch (action.type) {
        case AlertsActionTypes.ADD_ALERT:
            return { ...state, ...action.payload, open: true };
        case AlertsActionTypes.DISMISS_ALERT:
            return { ...state, open: false };
        default:
            return state;
    }
}
