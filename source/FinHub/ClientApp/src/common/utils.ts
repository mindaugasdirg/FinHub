import { replace } from "lodash/fp";
import React from "react";

export const createActionWithPayload = <T extends string, P extends object>(type: T, payload: P) => ({ type, payload });

export const createAction = <T extends string>(type: T) => ({ type });

export const normalizeMaybe = <T extends any>(x: T | null) => x === null ? undefined : x;

export function useFormField(defaultValue: string): [string, (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void] {
    const [field, setField] = React.useState<string>(defaultValue);
    const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setField(event.target.value);
    return [field, onChange];
}

export function useNumberFormField(defaultValue: number): [number, (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void] {
    const [field, setField] = React.useState<number>(defaultValue);
    const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setField(Number(event.target.value));
    return [field, onChange];
}

export function preventDefault(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
}

export const allowAnonymous = (token?: string) => token !== undefined;
export const allowUser = (token?: string) => token === undefined;

export const generateValues = (values: string[]) => {
    const generator = (function*() {
        for (const value of values) {
        yield value;
        }
    })();

    return () => generator.next().value || "";
};

export const prepareUrl = (template: string) => (values: string[]) => replace("?", generateValues(values), template);
