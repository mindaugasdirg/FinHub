import React from 'react';
import { User } from '../../types';

interface Props {
    user: User;
};

const UserView = (props: Props) => {
  return (
    <div>
      <span>Username: {props.user.username}</span>
      <span>Email: {props.user.email}</span>
    </div>
  );
};

export default UserView;
