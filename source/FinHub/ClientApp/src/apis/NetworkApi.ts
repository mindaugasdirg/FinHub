import { Either, RequestMethods } from "../common/types";

export namespace NetworkApi {
    export const getOne = <T>(url: string) => (token: string, id: string) =>
        authenticatedRequest("GET", url, token, id).then(parse<T>());

    export const getList = <T>(url: string) => (token: string) =>
        authenticatedRequest("GET", url, token).then(parse<T>());

    export const create = <T>(url: string) => (token: string, body: T) =>
        authenticatedRequest("POST", url, token, undefined, body).then(parse<T>());

    export const update = <T>(url: string) => (token: string, id: string, body: T) =>
        authenticatedRequest("PUT", url, token, id, body).then(parse<T>());

    export const remove = <T>(url: string) => (token: string, id: string, body: T) =>
        authenticatedRequest("DELETE", url, token, id, body).then(response => response.status === 204);

    export const getOneChild = <T>(url: string, parent: string) => (token: string, parentId: number, id: string) =>
        authenticatedRequest("GET", `${url}/${parent}/${parentId}`, token, id).then(parse<T>());

    export const getChildren = <T>(url: string, parent: string) => (token: string, parentId: number) =>
        authenticatedRequest("GET", `${url}/${parent}/${parentId}`, token).then(parse<T>());

    export const createChild = <T>(url: string, parent: string) => (token: string, parentId: number, body: T) =>
        authenticatedRequest("POST", `${url}/${parent}/${parentId}`, token, undefined, body).then(parse<T>());

    export const updateChild = <T>(url: string, parent: string) => (token: string, parentId: number, id: string, body: T) =>
        authenticatedRequest("PUT", `${url}/${parent}/${parentId}`, token, id, body).then(parse<T>());

    export const removeChild = <T>(url: string, parent: string) => (token: string, parentId: number, id: string, body: T) =>
        authenticatedRequest("DELETE", `${url}/${parent}/${parentId}`, token, id, body).then(response => response.status === 204);

    const authenticatedRequest = <T>(method: string, url: string, token: string, id?: string, body?: T) =>
        fetch(`api/${url}/${id}`, {
            body: body ? JSON.stringify(body) : undefined,
            headers: { "Content-Type": "application/json", "Authorization": token },
            method,
        });

    export const request = <T>(url: string, method: RequestMethods) => (body?: T) =>
        fetch(`${url}`, {
            body: body ? JSON.stringify(body) : undefined,
            headers: { "Content-Type": "application/json" },
            method,
        }).then(parse<T>());

    const parse = <T>() => (response: Response): Promise<Either<T>> =>
        response.ok ? response.json() as Promise<T> : response.text();
}
