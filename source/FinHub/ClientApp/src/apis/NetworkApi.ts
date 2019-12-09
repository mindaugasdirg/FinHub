import { Either } from "../common/types";

const authenticatedRequest = <T>(method: string, url: string, token: string, id?: string, body?: T) =>
    fetch(`api/${url}/${id}`, {
        body: body ? JSON.stringify(body) : undefined,
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
        method,
    });

const parse = <T>() => (response: Response): Promise<Either<T>> => response.ok ? response.json() as Promise<T> : response.text();

export const NetworkApi = {
    create: <T>(url: string) => (token: string, body: T) => authenticatedRequest("POST", url, token, undefined, body).then(parse<T>()),
    createChild: <T>(url: string, parent: string) => (token: string, parentId: number, body: T) =>
        authenticatedRequest("POST", `${url}/${parent}/${parentId}`, token, undefined, body).then(parse<T>()),
    getChildren: <T>(url: string, parent: string) => (token: string, parentId: number) =>
        authenticatedRequest("GET", `${url}/${parent}/${parentId}`, token).then(parse<T>()),
    getFetchOptions: <B>(method: string, body?: B) => ({
        body: body ? JSON.stringify(body) : undefined,
        headers: { "Content-Type": "application/json" },
        method,
    }),
    getList: <T>(url: string) => (token: string) => authenticatedRequest("GET", url, token).then(parse<T>()),
    getOne: <T>(url: string) => (token: string, id: string) => authenticatedRequest("GET", url, token, id).then(parse<T>()),
    getOneChild: <T>(url: string, parent: string) => (token: string, parentId: number, id: string) =>
        authenticatedRequest("GET", `${url}/${parent}/${parentId}`, token, id).then(parse<T>()),
    remove: <T>(url: string) => (token: string, id: string, body: T) =>
        authenticatedRequest("DELETE", url, token, id, body).then(response => response.status === 204),
    removeChild: <T>(url: string, parent: string) => (token: string, parentId: number, id: string, body: T) =>
        authenticatedRequest("DELETE", `${url}/${parent}/${parentId}`, token, id, body).then(response => response.status === 204),
    update: <T>(url: string) => (token: string, id: string, body: T) => authenticatedRequest("PUT", url, token, id, body).then(parse<T>()),
    updateChild: <T>(url: string, parent: string) => (token: string, parentId: number, id: string, body: T) =>
        authenticatedRequest("PUT", `${url}/${parent}/${parentId}`, token, id, body).then(parse<T>()),
};
