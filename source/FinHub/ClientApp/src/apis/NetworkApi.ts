
const authenticatedRequest = <T>(method: string, url: string, token: string, id?: string, body?: T) =>
    fetch(`api/${url}${id ? `/${id}` : ""}`, {
        body: body ? (typeof body === "string" ? `"${body}"` : JSON.stringify(body)) : undefined,
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
        method,
    });

const parse = <T>() => (response: Response): Promise<T | string> => response.ok ? response.json() as Promise<T> : response.text();

export const NetworkApi = {
    create: <T, R>(url: string) => (token: string, body: T) => authenticatedRequest("POST", url, token, undefined, body).then(parse<R>()),
    createChild: <T, R>(url: string, parent: string) => (token: string, parentId: number, body: T) =>
        authenticatedRequest("POST", `${parent}/${parentId}/${url}`, token, undefined, body).then(parse<R>()),
    getChildren: <T>(url: string, parent: string) => (token: string, parentId: number) =>
        authenticatedRequest("GET", `${parent}/${parentId}/${url}`, token).then(parse<T>()),
    getFetchOptions: <B>(method: string, body?: B) => ({
        body: body ? JSON.stringify(body) : undefined,
        headers: { "Content-Type": "application/json" },
        method,
    }),
    getList: <R>(url: string) => (token: string) => authenticatedRequest("GET", url, token).then(parse<R>()),
    getOne: <R>(url: string) => (token: string, id: string) => authenticatedRequest("GET", url, token, id).then(parse<R>()),
    getOneChild: <R>(url: string, parent: string) => (token: string, parentId: number, id: string) =>
        authenticatedRequest("GET", `${parent}/${parentId}/${url}`, token, id).then(parse<R>()),
    parse,
    remove: <T>(url: string) => (token: string, id: string, body: T) =>
        authenticatedRequest("DELETE", url, token, id, body).then(response => response.status === 204),
    removeChild: <T>(url: string, parent: string) => (token: string, parentId: number, id: string, body: T) =>
        authenticatedRequest("DELETE", `${parent}/${parentId}/${url}`, token, id, body).then(response => response.status === 204),
    update: <T, R>(url: string) => (token: string, id: string, body: T) => authenticatedRequest("PUT", url, token, id, body).then(parse<R>()),
    updateChild: <T, R>(url: string, parent: string) => (token: string, parentId: number, id: string, body: T) =>
        authenticatedRequest("PUT", `${parent}/${parentId}/${url}`, token, id, body).then(parse<R>()),
};
