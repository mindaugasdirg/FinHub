import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SettingsIcon from "@material-ui/icons/Settings";
import React from "react";
import { ResourceButtons } from "../common/ResourceButtons";

interface Props {
    name: string;
    isAdmin: boolean;
}

export const GroupButtons = (props: Props) => (
    <ResourceButtons main={<Typography variant="h3">{props.name}</Typography>} >
        {props.isAdmin &&
            <IconButton>
                <SettingsIcon />
            </IconButton>
        }
    </ResourceButtons>
);
