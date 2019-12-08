export function createActionWithPayload<T extends string, P extends object>(type: T, payload: P) {
    return { type, payload };
}

export function createAction<T extends string>(type: T) {
    return { type };
}

export function normalizeMaybe<T extends any>(x: T | null) {
    return x === null ? undefined : x;
}
