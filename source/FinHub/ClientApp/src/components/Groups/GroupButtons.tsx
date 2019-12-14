import Button from "@material-ui/core/Button";
import React from "react";
import { ConnectedJoinGroup } from "./JoinGroup";

export const GroupButtons = () => (
    <>
        <Button variant="contained" color="primary">Create Group</Button>
        <ConnectedJoinGroup />
    </>
);
