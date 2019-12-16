import React from "react";
import Hidden from "@material-ui/core/Hidden";
import { ConnectedDesktopTopBar } from "./DesktopTopBar";
import { ConnectedMobileTopBar } from "./MobileTopBar";

export const TopBar = () => (
    <>
        <Hidden smDown>
            <ConnectedDesktopTopBar/>
        </Hidden>
        <Hidden mdUp>
            <ConnectedMobileTopBar/>
        </Hidden>
    </>
);
