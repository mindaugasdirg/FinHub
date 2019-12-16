import Typography from "@material-ui/core/Typography";
import React from "react";
import { ResourceButtons } from "../common/ResourceButtons";
import { ConnectedJoinGroup } from "./JoinGroup";

export const GroupsButtons = () => (
    <ResourceButtons main={<Typography variant="h3">My Groups</Typography>}>
        <ConnectedJoinGroup />
    </ResourceButtons>
);
