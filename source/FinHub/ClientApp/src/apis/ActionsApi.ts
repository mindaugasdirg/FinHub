import { UserAction } from "../common/types";
import { NetworkApi } from "./NetworkApi";

const parent = "groups";
const resource = "actions";

export const UserActionsApi = {
    getList: NetworkApi.getChildren<UserAction[]>(resource, parent),
    getOne: NetworkApi.getOneChild<UserAction>(resource, parent),
};
