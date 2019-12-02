import React from 'react';
import { Category } from '../../types';

interface Props {
    category: Category;
};

const CategoryView = (props: Props) => {
  return (
    <div>
      <span>Name: {props.category.name}</span>
      <span>Description: {props.category.description}</span>
    </div>
  );
};

export default CategoryView;
