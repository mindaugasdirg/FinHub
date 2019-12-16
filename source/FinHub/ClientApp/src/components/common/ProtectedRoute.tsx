import React from "react";
import { Redirect, Route, RouteProps } from "react-router";

interface Props extends RouteProps {
    locked: boolean;
    redirect: string;
}

export const ProtectedRoute = (props: Props) => (props.locked ?
    <Route {...props} component={() => <Redirect to={{ pathname: props.redirect }} />} render={undefined} /> :
    <Route {...props} />
);
