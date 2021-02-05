import React from 'react';
import { useDispatch } from 'react-redux';

const Decrease = () => {
  const dispatch = useDispatch()

  return (
    <button onClick={() => dispatch({ type: 'DECREASE_AMOUNT'})}>-</button>
  );
}

export default Decrease;