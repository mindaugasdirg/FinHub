import { Group, GroupFields } from "../common/types";
import { NetworkApi } from "./NetworkApi";

const apiPath = "groups";

export const GroupsApi = {
    create: NetworkApi.create<GroupFields, Group>(apiPath),
    del: NetworkApi.remove<Group>(apiPath),
    getList: NetworkApi.getList<Group[]>(apiPath),
    getOne: NetworkApi.getOne<Group>(apiPath),
    join: NetworkApi.createChild<string, Group>("users", apiPath),
    update: NetworkApi.update<GroupFields, Group>(apiPath),
};
