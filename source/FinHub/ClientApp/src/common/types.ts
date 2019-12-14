export type Callable = (...args: any[]) => any;

export type Maybe<T> = T | undefined;

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

// form types

export interface RegistrationFields {
    userName: string;
    email: string;
    password: string;
}

export interface LoginFields {
    username: string;
    password: string;
}

export interface CategoryFields {
    name: string;
    description: string;
}

export interface GroupFields {
    name: string;
}

export interface TransactionFields {
    amount: number;
    description: string;
    categoryId: number;
}

// view types

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
    username?: string;
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
