import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, combineReducers } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import GlobalStyles from './globalStyles';
//import {firebase} from './lib/firebase.prod';
//import {seedDatabase} from './lib/seed';
import AppReducer from './store/reducers/App';


const sagaMiddleware = createSagaMiddleware();

export const rootReducer = combineReducers({
  App: AppReducer
});


const composeEnchancers = composeWithDevTools({
  trace: true,
  traceLimit: 25
});

const store = createStore(rootReducer, composeEnchancers(
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


