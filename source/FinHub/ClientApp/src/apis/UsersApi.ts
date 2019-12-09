import { User } from "../common/types";
import { NetworkApi } from "./NetworkApi";

export namespace UsersApi {
    const apiPath = "users";

    export const get = NetworkApi.getOne<User>(apiPath);
    export const create = NetworkApi.create<User>(apiPath);
    export const update = NetworkApi.update<User>(apiPath);
    export const del = NetworkApi.remove<User>(apiPath);

    export const getGroupUsers = NetworkApi.getChildren<User[]>(apiPath, "groups");
    export const getGroupUser = NetworkApi.getChildren<User>(apiPath, "groups");
}
