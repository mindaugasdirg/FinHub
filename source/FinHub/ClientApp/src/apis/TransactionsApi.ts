import { Transaction, TransactionFields } from "../common/types";
import { NetworkApi } from "./NetworkApi";

const parent = "groups";
const resource = "transactions";

export const TransactionsApi = {
    create: NetworkApi.createChild<TransactionFields, Transaction>(resource, parent),
    del: NetworkApi.removeChild<Transaction>(resource, parent),
    getList: NetworkApi.getChildren<Transaction[]>(resource, parent),
    getOne: NetworkApi.getOneChild<Transaction>(resource, parent),
    update: NetworkApi.updateChild<TransactionFields, Transaction>(resource, parent),
};
