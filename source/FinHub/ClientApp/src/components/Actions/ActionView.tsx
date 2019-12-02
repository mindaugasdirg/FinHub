import React from 'react';
import { Action } from '../../types';

interface Props {
    action: Action;
};

const ActionView = (props: Props) => (
    <div>
        <span>Description: {props.action.description}</span>
        <span>Type: {props.action.actionType}</span>
        <span>User: {props.action.user.username}</span>
    </div>
);

export default ActionView;
