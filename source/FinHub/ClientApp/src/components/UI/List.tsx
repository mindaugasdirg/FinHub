import React from 'react';
import "../../styles/list.css";

interface Props {
    children: React.ReactNode;
}

const List = (props: Props) => {

    return (
        <div className="list-container">
            {props.children}
        </div>
    );
};

export default List;
