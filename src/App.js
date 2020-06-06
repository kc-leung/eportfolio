import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './reduxStore/configureStore';

import Main from './components/Main/Main';

import './App.scss';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Main />
      </div>
    </Provider>
  );
}

export default App;
