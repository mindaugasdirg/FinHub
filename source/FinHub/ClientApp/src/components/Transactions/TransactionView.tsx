import React from 'react';
import { Transaction } from '../../types';

interface Props {
    transaction: Transaction;
};

const TransactionView = (props: Props) => {
  return (
    <div>
      <span>Amount: {props.transaction.amount}</span>
      <span>Category: {props.transaction.category.name}</span>
      <span>Description: {props.transaction.description}</span>
    </div>
  );
};

export default TransactionView;
