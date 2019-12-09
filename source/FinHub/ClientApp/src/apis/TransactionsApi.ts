import { Transaction } from "../common/types";
import { NetworkApi } from "./NetworkApi";

export namespace TransactionsApi {
    const parent = "groups";
    const resource = "transactions";

    export const getOne = NetworkApi.getOneChild<Transaction>(resource, parent);
    export const getList = NetworkApi.getChildren<Transaction[]>(resource, parent);
    export const create = NetworkApi.createChild<Transaction>(resource, parent);
    export const update = NetworkApi.updateChild<Transaction>(resource, parent);
    export const del = NetworkApi.removeChild<Transaction>(resource, parent);
}
