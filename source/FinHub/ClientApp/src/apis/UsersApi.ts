import { RegistrationFields, User, UserUpdateFields } from "../common/types";
import { NetworkApi } from "./NetworkApi";

const apiPath = "users";

export const UsersApi = {
    create: (user: RegistrationFields) => fetch("api/users", NetworkApi.getFetchOptions("POST", user)).then(NetworkApi.parse<User>()),
    del: NetworkApi.remove<User>(apiPath),
    get: NetworkApi.getOne<User>(apiPath),
    getGroupUser: NetworkApi.getChildren<User>(apiPath, "groups"),
    getGroupUsers: NetworkApi.getChildren<User[]>(apiPath, "groups"),
    update: NetworkApi.update<UserUpdateFields, User>(apiPath),
};
