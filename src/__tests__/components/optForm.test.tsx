/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import { render, fireEvent, getByTestId, getByAltText } from '@testing-library/react';


import OptForm, {OptForm_Input, OptForm_Button, OptForm_Text, OptForm_Break} from '../../components/optForm';


describe('<OptFrom />', () => {

    it('its render component <OptForm /> with populated data', () => {
        const {container, getByText, getByPlaceholderText} = render(
            <OptForm>
                <OptForm_Input placeholder="Email Address"/>
                <OptForm_Button>Try it now</OptForm_Button>
                <OptForm_Break/> 
                <OptForm_Text>
                    Ready to watch? enter your email 
                    to create or restart your membership
                </OptForm_Text>
            </OptForm>
        );
        //asertions --> dummy component

        expect(getByText('Try it now')).toBeTruthy();
        expect(getByText('Ready to watch? enter your email to create or restart your membership')).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();
    });
});