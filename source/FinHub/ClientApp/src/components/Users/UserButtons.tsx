import IconButton from "@material-ui/core/IconButton";
import SettingsIcon from "@material-ui/icons/Settings";
import React from "react";
import { ResourceButtons } from "../common/ResourceButtons";
import { Typography } from "@material-ui/core";

interface Props {
    openModal: () => void;
}

export const UserButtons = (props: Props) => (
    <ResourceButtons main={<Typography variant="h3">Profile</Typography>} >
        <IconButton onClick={props.openModal}>
            <SettingsIcon />
        </IconButton>
    </ResourceButtons>
);
