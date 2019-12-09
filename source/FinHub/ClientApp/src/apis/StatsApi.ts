import { AmountStat, CategoryStat, UserAmountStat } from "../common/types";
import { NetworkApi } from "./NetworkApi";

export namespace StatsApi {
    const parent = "groups";

    export const biggestSpender = NetworkApi.getOneChild<UserAmountStat>("stats/biggestspender", parent);
    export const biggestDonator = NetworkApi.getOneChild<UserAmountStat>("stats/biggestdonator", parent);
    export const smallestSpender = NetworkApi.getOneChild<UserAmountStat>("stats/smallestspender", parent);
    export const smallestDonator = NetworkApi.getOneChild<UserAmountStat>("stats/smallestdonator", parent);
    export const spendingByUsers = NetworkApi.getOneChild<UserAmountStat[]>("stats/users", parent);
    export const spendingByCategory = NetworkApi.getOneChild<CategoryStat[]>("stats/categories", parent);
    export const averageSpending = NetworkApi.getOneChild<AmountStat>("stats/average", parent);
}
