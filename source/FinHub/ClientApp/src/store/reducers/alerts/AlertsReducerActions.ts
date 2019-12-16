import { AlertTypes } from "../../../common/types";
import { createAction, createActionWithPayload } from "../../../common/utils";

export enum AlertsActionTypes {
    ADD_ALERT = "ADD_ALERT",
    DISMISS_ALERT = "DISMISS_ALERT",
}

export const AlertsReducerActions = {
    addAlert: (type: AlertTypes, message: string) => createActionWithPayload(AlertsActionTypes.ADD_ALERT, { message, type }),
    dismissAlert: () => createAction(AlertsActionTypes.DISMISS_ALERT),
};
