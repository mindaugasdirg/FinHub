import { Group } from "../common/types";
import { NetworkApi } from "./NetworkApi";

export namespace GroupsApi {
    const apiPath = "groups";

    export const getOne = NetworkApi.getOne<Group>(apiPath);
    export const getList = NetworkApi.getList<Group[]>(apiPath);
    export const create = NetworkApi.create<Group>(apiPath);
    export const update = NetworkApi.update<Group>(apiPath);
    export const del = NetworkApi.remove<Group>(apiPath);
    export const join = NetworkApi.createChild<any>("users", apiPath);
}
