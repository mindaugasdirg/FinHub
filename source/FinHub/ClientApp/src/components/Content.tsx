import React from 'react';

interface Props {
    children: React.ReactNode;
}

const Content = (props: Props) => (
    <div>
        <span>Content</span>
        {props.children}
    </div>
);

export default Content;
