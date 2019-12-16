import { AlertTypes } from "../../../common/types";

export interface AlertsState {
    message: string;
    type: AlertTypes;
    open: boolean;
}