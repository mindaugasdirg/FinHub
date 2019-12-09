import { Group } from "../common/types";
import { NetworkApi } from "./NetworkApi";

const apiPath = "groups";

export const GroupsApi = {
    create: NetworkApi.create<Group>(apiPath),
    del: NetworkApi.remove<Group>(apiPath),
    getList: NetworkApi.getList<Group[]>(apiPath),
    getOne: NetworkApi.getOne<Group>(apiPath),
    join: NetworkApi.createChild<any>("users", apiPath),
    update: NetworkApi.update<Group>(apiPath),
};
