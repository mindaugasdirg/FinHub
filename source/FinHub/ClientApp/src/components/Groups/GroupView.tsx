import React from 'react';
import { Group } from '../../types';

interface Props {
    group: Group;
};

const GroupView = (props: Props) => {
  return (
    <div>
      <span>Name: {props.group.name}</span>
      <span>Balance: {props.group.balance}</span>
      <span>Code: {props.group.groupCode}</span>
      <span>Admin: {props.group.admin.username}</span>
    </div>
  );
};

export default GroupView;
