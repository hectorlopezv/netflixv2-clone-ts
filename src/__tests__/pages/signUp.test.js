import React from 'react';
import { render, fireEvent, screen, getByTestId, getByAltText } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import SignUp from '../../pages/SignUp';
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
      createUserWithEmailAndPassword: jest.fn(() =>
        Promise.resolve({ user: { updateProfile: jest.fn(() => Promise.resolve('I am signed up!')) } })
      ),
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

function createTestStore() {
    const store = createStore(
      combineReducers({
        App: AppReducer
      })
    );  
    return store;
}




const store = createTestStore();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({}),
  }));
  

  
  describe('<SignUp />', () => {
    it('renders the sign up page with a form submission', async () => {
      const { getByTestId, getByPlaceholderText, queryByTestId } = render(
        <Router>
            <Provider value={{ firebase }}>
            <SignUp />
          </Provider>
        </Router>
      );
  
      await act(async () => {
        await fireEvent.change(getByPlaceholderText('First name'), { target: { value: 'Karl' } });
        await fireEvent.change(getByPlaceholderText('Email address'), { target: { value: 'karl@gmail.com' } });
        await fireEvent.change(getByPlaceholderText('Password'), { target: { value: 'password' } });
        fireEvent.click(getByTestId('sign-up'));
  
        expect(getByPlaceholderText('Email address').value).toBe('karl@gmail.com');
        expect(getByPlaceholderText('Password').value).toBe('password');
        expect(queryByTestId('error')).toBeFalsy();
      });
    });
  });