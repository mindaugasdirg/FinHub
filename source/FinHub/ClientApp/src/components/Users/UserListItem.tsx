import React from 'react';
import { User } from '../../types';

interface Props {
    user: User;
};

const UserListItem = (props: Props) => {
  return (
    <div>
      <span>Username: {props.user.username}</span>
    </div>
  );
};

export default UserListItem;
