import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import  Browse  from '../../pages/Browse';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
//mock asynchornous calls
import { act } from 'react-dom/test-utils';
import { applyMiddleware, combineReducers } from '@reduxjs/toolkit';
//mocking firebase object.......

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({}),
}));

//mocks selection fileters FUNCTIONs
//when its imported automatically calls this mock function
jest.mock('../../utils', () => ({
  selectionFilter: () => ({
    series: [
      {
        title: 'Documentaries',
        data: [
          {
            id: 'series-1x',
            title: 'Tiger King',
            description:
              'An exploration of big cat breeding and its bizarre underworld, populated by eccentric characters.',
            genre: 'documentaries',
            maturity: '18',
            slug: 'tiger-king',
          },
        ],
      },
    ],
    films: [
      {
        title: 'Suspense',
        data: [
          {
            id: 'film-1x',
            title: 'Amanda Knox',
            description: 'Amanda Marie Knox is an American woman who spent almost four years in an Italian prison.',
            genre: 'documentaries',
            maturity: '12',
            slug: 'amanda-knox',
          },
        ],
      },
    ],
  }),
}));
const firebase = {
  auth: jest.fn(() => ({
    currentUser: { displayName: 'Karl', photoURL: 1, email: 'karlhadwen@gmail.com' },
    signOut: jest.fn(() => Promise.resolve('I am signed out!')),
  })),
  firestore: jest.fn(() => ({
    collection: jest.fn(() => ({
      get: jest.fn(() => Promise.resolve('I get content!')),
      add: jest.fn(() => Promise.resolve('I add content!')),
    })),
  })),
};

const initialState = {
  firebase: firebase
}

const AppReducer = (state = initialState, action) => {
   if(action.type === 'SET_CHANNEL'){
       return {
           ...state,
          channelId: action.payload.channelId,
          channelName: action.payload.channelName
       }
   }

  return  state;
}


const store = createStore(
    combineReducers({
      App: AppReducer
    })
  );  







describe('<Browse />', () => {
  it('renders the browse page with <SelectProfileContainer />', async () => {
    const { getByTestId, getByPlaceholderText, queryByTestId, debug } = render(
      <Router>
        <Provider store={ store }>
          <Browse />
        </Provider>
      </Router>
    );
  });
});