import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import React from "react";
import { Transaction } from "../../common/types";

interface Props {
    transaction: Transaction;
    openModal: () => void;
}

export const TransactionsListItem = (props: Props) => {
    return (
        <TableRow onClick={props.openModal}>
            <TableCell>{props.transaction.amount}</TableCell>
            <TableCell>{props.transaction.category.name}</TableCell>
            <TableCell>{props.transaction.username}</TableCell>
        </TableRow>
    );
};
