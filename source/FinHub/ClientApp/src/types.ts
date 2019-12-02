import { RefObject } from "react";

export type ReactRef<T> = string | ((instance: T | null) => void) | RefObject<T> | null | undefined;

export interface User {
    id: string;
    username: string;
    email: string;
}

export interface Transaction {
    id: string;
    amount: number;
    description: string;
    category: Category;
    groupId: number;
    userId: string;
}

export interface Action {
    id: number;
    group: Group;
    user: User;
    actionType: string;
    description: string;
}

export interface Category {
    id: number;
    name: string;
    description: string;
    group: Group;
}

export interface Group {
    id: number;
    name: string;
    balance: number;
    groupCode: string;
    admin: User;
}
