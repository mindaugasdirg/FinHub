import React from "react";

export const createActionWithPayload = <T extends string, P extends object>(type: T, payload: P) => ({ type, payload });

export const createAction = <T extends string>(type: T) => ({ type });

export const normalizeMaybe = <T extends any>(x: T | null) => x === null ? undefined : x;

export function useFormField(): [string, (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void] {
    const [field, setField] = React.useState("");
    const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setField(event.target.value);
    return [field, onChange];
}

export function preventDefault(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
}

export const allowAnonymous = (token?: string) => token !== undefined;
export const allowUser = (token?: string) => token === undefined;
