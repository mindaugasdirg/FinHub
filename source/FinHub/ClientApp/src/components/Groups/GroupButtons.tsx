import Button from "@material-ui/core/Button";
import React from "react";
import ConnectedJoinGroup from "./JoinGroup";

const GroupButtons = () => (
        <>
            <Button variant="contained" color="primary">Create Group</Button>
            <ConnectedJoinGroup />
        </>
    );

export default GroupButtons;
