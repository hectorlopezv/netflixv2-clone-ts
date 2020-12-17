/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import { render, fireEvent, getByTestId, getByAltText } from '@testing-library/react';
import Feature, {Feature_Title, Feature_SubTitle} from '../../components/Feature';

describe('<Feature />', () => {
    it('renders <Feature with populated data>', () => {
        const {container, getByText} = render(
        <Feature>
            <Feature_Title>Unlimited films, Tv Programmes and more.</Feature_Title>
            <Feature_SubTitle>Watch anywhere. Cancel at any time</Feature_SubTitle>
        </Feature>
        );

        expect(getByText('Unlimited films, Tv Programmes and more.')).toBeTruthy();
        expect(getByText('Watch anywhere. Cancel at any time')).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();
    });


    it('renders <Feature with just the title', () => {
        const {container, getByText, queryByText} = render(
        <Feature>
            <Feature_Title>Unlimited films, Tv Programmes and more.</Feature_Title>
        </Feature>
        );

        expect(getByText('Unlimited films, Tv Programmes and more.')).toBeTruthy();
        expect(queryByText('Watch anywhere. Cancel at any time')).toBeFalsy();
        expect(container.firstChild).toMatchSnapshot();
    });
});
