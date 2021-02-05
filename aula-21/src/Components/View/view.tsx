import React from 'react';
import { useSelector } from 'react-redux';
import { ShoppingList } from '../../types/ShoppingList';

const View = () => {

  const view = useSelector((state: ShoppingList) => state.amount)

  return (
    <h1>{view}</h1>
  );
}

export default View;