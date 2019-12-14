import { TableBody } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import { map } from "lodash/fp";
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { TransactionsApi } from "../../apis/TransactionsApi";
import { UsersApi } from "../../apis/UsersApi";
import { Transaction } from "../../common/types";
import { RootState } from "../../store/reducers/reducer";
import { TransactionsListItem } from "./TransactionsListItem";

const mapStateToProps = (state: RootState) => ({
    activeGroup: state.groups.activeGroup,
    groups: state.groups.groups,
    token: state.user.token!,
});

const TransactionsList = (props: ConnectedProps<typeof connectedProps>) => {
    const [transactions, setTransactions] = React.useState<Transaction[]>([]);

    React.useEffect(() => {
        TransactionsApi.getList(props.token, props.activeGroup!.id).then(async loaded => {
            if (typeof loaded === "string") {
                // tslint:disable-next-line: no-console
                console.log(loaded);
                return;
            }

            Promise.all(map(item =>
                UsersApi.get(props.token, item.userId).then(loadedUser =>
                    ({ ...item, username: typeof loadedUser !== "string" ? loadedUser.userName : loadedUser })), loaded)).then(setTransactions);
        });
    }, [props.activeGroup, props.token]);

    return (
        <Paper>
            {props.groups.length ?
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Amount</TableCell>
                            <TableCell>Category</TableCell>
                            <TableCell>Member</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {transactions.map(transaction =>
                            <TransactionsListItem
                                key={transaction.id}
                                transaction={transaction}
                            />)}
                    </TableBody>
                </Table> :
                <Typography variant="h4">No Transactions</Typography>
            }
        </Paper>
    );
};

const connectedProps = connect(mapStateToProps);
export const ConnectedTransactionsList = connectedProps(TransactionsList);
