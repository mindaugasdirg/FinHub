import { Category, CategoryFields } from "../common/types";
import { NetworkApi } from "./NetworkApi";

const parent = "groups";
const resource = "categories";

export const CategoriesApi = {
    create: NetworkApi.createChild<CategoryFields, Category>(resource, parent),
    del: NetworkApi.removeChild<Category>(resource, parent),
    getList: NetworkApi.getChildren<Category[]>(resource, parent),
    getOne: NetworkApi.getOneChild<Category>(resource, parent),
    update: NetworkApi.updateChild<CategoryFields, Category>(resource, parent),
};
