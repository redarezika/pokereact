import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import PokeReducer from './src/redux/Reducer';
import InitScreen from './src/screens/main/InitScreen';

const store = createStore(PokeReducer);

export default function App() {
  return (
    <Provider store={store}>
      <InitScreen />
    </Provider>
  );
}
