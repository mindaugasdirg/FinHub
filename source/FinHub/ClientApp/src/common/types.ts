export type Callable = (...args: any[]) => any;

export type Maybe<T> = T | undefined;

export type Either<T> = T | string;

export interface Action<T extends string> {
    type: T;
}

export interface ActionWithPayload<T extends string, P> extends Action<T> {
    payload: P;
}

export interface ActionCreator {
    [actionName: string]: Callable;
}

export type ActionUnion<T extends ActionCreator> = ReturnType<T[keyof T]>;

export interface RegistrationUser {
    userName: string;
    email: string;
    password: string;
}

export interface User {
    id: string;
    userName: string;
    email: string;
}

export interface Group {
    id: number;
    name: string;
    balance: number;
    groupCode: string;
    admin: User;
}

export interface Category {
    id: number;
    name: string;
    description: string;
    group: Group;
}

export interface Transaction {
    id: number;
    amount: number;
    description: string;
    category: Category;
    groupId: number;
    userId: string;
}

export interface UserAction {
    id: number;
    group: Group;
    user: User;
    actionType: string;
    description: string;
}

export interface AmountStat {
    id: number;
    amount: number;
}

export interface CategoryStat {
    id: number;
    category: Category;
}

export interface UserAmountStat {
    id: number;
    user: User;
    amount: number;
}
