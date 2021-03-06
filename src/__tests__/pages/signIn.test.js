import React from 'react';
import { render, fireEvent, screen, getByTestId, getByAltText } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import SignIn from '../../pages/SignIn';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
//mock asynchornous calls
import { act } from 'react-dom/test-utils';
import { applyMiddleware, combineReducers } from '@reduxjs/toolkit';
//mock the useHistory
//spread actual functions
jest.mock('react-router-dom', () => ({

    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({}),
}));

//mocking firebase object.......
const firebase = {
    auth: jest.fn(() => ({
        signInWithEmailAndPassword: jest.fn((emailAddress, password) => Promise.resolve({hello:'I am signed in!'}))
    }))
}

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

function createTestStore() {
    const store = createStore(
      combineReducers({
        App: AppReducer
      })
    );  
    return store;
}




const store = createTestStore();

describe('<SignIn />', () => {
    it('renders the sign in page with a form submission', async () => {
      const { getByTestId, getByPlaceholderText, queryByTestId } = render(
        <Router>
          <Provider store={store}>
            <SignIn />
          </Provider>
        </Router>
      );
  
      await act(async () => {
        await fireEvent.change(getByPlaceholderText('Email address'), { target: { value: 'karl@gmail.com' } });
        await fireEvent.change(getByPlaceholderText('Password'), { target: { value: 'password' } });
        fireEvent.click(getByTestId('sign-in'));
  
        expect(getByPlaceholderText('Email address').value).toBe('karl@gmail.com');
        expect(getByPlaceholderText('Password').value).toBe('password');
        expect(queryByTestId('error')).toBeFalsy();
      });
    });
  });