import React from "react";
import { Either } from "./types";

export const createActionWithPayload = <T extends string, P extends object>(type: T, payload: P) => ({ type, payload });

export const createAction = <T extends string>(type: T) => ({ type });

export const normalizeMaybe = <T extends any>(x: T | null) => x === null ? undefined : x;

export const mapEitherBoth = <T, R>(fr: (r: T) => R, fl: (l: string) => R, x: Either<T>) => typeof x === "string" ? fl(x) : fr(x);

export function useFormField(): [string, (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void] {
    const [field, setField] = React.useState("");
    const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setField(event.target.value);
    return [field, onChange];
}
