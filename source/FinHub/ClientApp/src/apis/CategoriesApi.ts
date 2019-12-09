import { Category } from "../common/types";
import { NetworkApi } from "./NetworkApi";

const parent = "groups";
const resource = "categories";

export const CategoriesApi = {
    create: NetworkApi.createChild<Category>(resource, parent),
    del: NetworkApi.removeChild<Category>(resource, parent),
    getList: NetworkApi.getChildren<Category[]>(resource, parent),
    getOne: NetworkApi.getOneChild<Category>(resource, parent),
    update: NetworkApi.updateChild<Category>(resource, parent),
};
