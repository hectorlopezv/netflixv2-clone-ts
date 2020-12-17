/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import { render, fireEvent, getByTestId, getByAltText } from '@testing-library/react';


import Loading_, {Loading_ReleaseBody} from '../../components/Loading';


describe('Loading componen', () => {
    it('Renders Loading Compoennt <Loading />', () => {
        const {container, getByText, getByTestId} = render(
         < Loading_ src={"/images/karl.png"} data-testid="loading"/>
        );

        expect(getByTestId('loading')).toBeTruthy();
        expect(getByTestId('loading-picture')).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();
    });


    it('Renders the Loading <Loading_ReleaseBody />', () => {
        const {container, getByText, getByTestId} = render(
         < Loading_ReleaseBody/>
        );

        expect(container.firstChild).toMatchSnapshot();
    });

});