import { routerReducer } from "react-router-redux";
import { combineReducers } from "redux";
import { groupsReducer } from "./group/groupsReducer";
import { userReducer } from "./user/userReducer";

export const rootReducer = combineReducers({
    groups: groupsReducer,
    router: routerReducer,
    user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
