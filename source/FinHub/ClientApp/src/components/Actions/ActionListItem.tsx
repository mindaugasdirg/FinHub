import React from 'react';
import { Action } from '../../types';

interface Props {
    action: Action;
};

const ActionListItem = (props: Props) => (
    <div>
        <span>Type: {props.action.actionType}</span>
        <span>User: {props.action.user.username}</span>
    </div>
);

export default ActionListItem;
