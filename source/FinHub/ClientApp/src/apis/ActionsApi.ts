import { UserAction } from "../common/types";
import { NetworkApi } from "./NetworkApi";

export namespace UserActionsApi {
    const parent = "groups";
    const resource = "actions";

    export const getOne = NetworkApi.getOneChild<UserAction>(resource, parent);
    export const getList = NetworkApi.getChildren<UserAction[]>(resource, parent);
}
