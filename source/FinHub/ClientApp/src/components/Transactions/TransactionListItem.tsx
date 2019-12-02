import React from 'react';
import { Transaction } from '../../types';

interface Props {
    transaction: Transaction;
};

const TransactionListItem = (props: Props) => {
  return (
    <div>
      <span>Username: {props.transaction.amount}</span>
    </div>
  );
};

export default TransactionListItem;
