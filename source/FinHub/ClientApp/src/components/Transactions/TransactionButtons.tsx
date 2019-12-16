import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import React from "react";
import { Link } from "react-router-dom";
import { ResourceButtons } from "../common/ResourceButtons";

export const TransactionsButtons = () => (
    <ResourceButtons main={<Typography variant="h3">Transactions</Typography>}>
        <IconButton component={Link} to="/transactions/create">
            <AddIcon />
        </IconButton>
    </ResourceButtons>
);
