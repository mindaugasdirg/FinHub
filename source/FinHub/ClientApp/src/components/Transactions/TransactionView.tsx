import { DialogContent, DialogTitle, List, ListItem, ListItemText } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import React from "react";
import { Transaction } from "../../common/types";

interface Props {
    transaction: Transaction;
    open: boolean;
    onClose: () => void;
}

export const TransactionView = (props: Props) => {
    return (
        <Dialog fullWidth maxWidth="sm" open={props.open} onClose={props.onClose}>
            <DialogTitle>Transaction</DialogTitle>
            <DialogContent>
                <List>
                    <ListItem>
                        <ListItemText>User: {props.transaction.username}</ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>Description: {props.transaction.description}</ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>Amount: {props.transaction.amount}</ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>Category: {props.transaction.category.name}</ListItemText>
                    </ListItem>
                </List>
            </DialogContent>
        </Dialog>
    );
};
