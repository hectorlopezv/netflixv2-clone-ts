import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, combineReducers } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import 'normalize.css';
import GlobalStyles from './globalStyles';

const sagaMiddleware = createSagaMiddleware();

export const rootReducer = combineReducers({

});


const composeEnchancers = composeWithDevTools({
  trace: true,
  traceLimit: 25
});

const store = createStore(() => { }, composeEnchancers(
  applyMiddleware(sagaMiddleware),
));
//run saga listeners
//sagaMiddleware.run();
render(

  <Provider store={store}>

    <React.StrictMode>
      <GlobalStyles />
      <App />
    </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);


