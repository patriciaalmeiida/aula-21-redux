import React from 'react';
import { useDispatch } from 'react-redux'

const Increase = () => {

  const dispatch = useDispatch()

  return (
    <button onClick={() => dispatch({ type: 'INCREASE_AMOUNT'})}>+</button>
  );
}

export default Increase;