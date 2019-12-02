import React from 'react';
import { Category } from '../../types';

interface Props {
    category: Category;
};

const CategoryListItem = (props: Props) => {
  return (
    <div>
      <span>Name: {props.category.name}</span>
    </div>
  );
};

export default CategoryListItem;
