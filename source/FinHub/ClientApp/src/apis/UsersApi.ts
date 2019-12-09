import { User } from "../common/types";
import { NetworkApi } from "./NetworkApi";

const apiPath = "users";

export const UsersApi = {
    create: NetworkApi.create<User>(apiPath),
    del: NetworkApi.remove<User>(apiPath),
    get: NetworkApi.getOne<User>(apiPath),
    getGroupUser: NetworkApi.getChildren<User>(apiPath, "groups"),
    getGroupUsers: NetworkApi.getChildren<User[]>(apiPath, "groups"),
    update: NetworkApi.update<User>(apiPath),
};
