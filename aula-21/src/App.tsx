import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import View from './Components/View';
import { Increase } from './Components/Increase';
import { Decrease } from './Components/Decrease';
import { ShoppingList } from './types/ShoppingList';

const globalState : ShoppingList = {
  amount: 420
}

function reducer(state = globalState, action: any) {
  switch(action.type) {
    case 'INCREASE_AMOUNT':
      return {
        amount: state.amount + 1
      }
    case 'DECREASE_AMOUNT':
      return {
        amount: state.amount > 0 ? state.amount -1 : state.amount
      }
    default:
      return state
  }
}

const store = createStore(reducer)

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Increase />
        <View />
        <Decrease />
      </Provider>
    </div>
  );
}

export default App;
