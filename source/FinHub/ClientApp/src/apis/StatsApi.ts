import { AmountStat, CategoryStat, UserAmountStat } from "../common/types";
import { NetworkApi } from "./NetworkApi";

const parent = "groups";

export const StatsAKpi = {
    averageSpending: NetworkApi.getOneChild<AmountStat>("stats/average", parent),
    biggestDonator: NetworkApi.getOneChild<UserAmountStat>("stats/biggestdonator", parent),
    biggestSpender: NetworkApi.getOneChild<UserAmountStat>("stats/biggestspender", parent),
    smallestDonator: NetworkApi.getOneChild<UserAmountStat>("stats/smallestdonator", parent),
    smallestSpender: NetworkApi.getOneChild<UserAmountStat>("stats/smallestspender", parent),
    spendingByCategory: NetworkApi.getOneChild<CategoryStat[]>("stats/categories", parent),
    spendingByUsers: NetworkApi.getOneChild<UserAmountStat[]>("stats/users", parent),
};
