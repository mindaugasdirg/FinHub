import { Category } from "../common/types";
import { NetworkApi } from "./NetworkApi";

export namespace CategoriesApi {
    const parent = "groups";
    const resource = "categories";

    export const getOne = NetworkApi.getOneChild<Category>(resource, parent);
    export const getList = NetworkApi.getChildren<Category[]>(resource, parent);
    export const create = NetworkApi.createChild<Category>(resource, parent);
    export const update = NetworkApi.updateChild<Category>(resource, parent);
    export const del = NetworkApi.removeChild<Category>(resource, parent);
}
