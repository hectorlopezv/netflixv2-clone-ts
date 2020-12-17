import React from 'react';
import { render, fireEvent, getByTestId, getByAltText } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import HomePage from '../../pages/HomePage';

describe('Homepage page Test', () => {
    it('<HomePage /> page container ', () => {
        const {container, getByTestId, getByText, getAllByText} = render(
            <Router>
                <HomePage />
            </Router>
            
        );
        //assertions
        expect(getByText('Unlimited films, Tv Programmes and more.')).toBeTruthy();
        expect(getByText('Watch anywhere. Cancel at any time')).toBeTruthy();
        //emeial address
        //try it now.
    });
});