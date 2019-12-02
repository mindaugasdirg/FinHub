import React from 'react';
import { Group } from '../../types';

interface Props {
    group: Group;
};

const GroupListItem = (props: Props) => {
  return (
    <div>
      <span>Name: {props.group.name}</span>
    </div>
  );
};

export default GroupListItem;
