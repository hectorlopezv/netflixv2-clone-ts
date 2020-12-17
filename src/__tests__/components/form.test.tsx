/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import { render, fireEvent, getByTestId, getByAltText } from '@testing-library/react';


import Form, {
    Form_Link,
    Form_Input,
    Form_Base,
    Form_Error,
    Form_Title,
    Form_Submit,
    Form_SmallText,
    Form_Text,
} from '../../components/Form';

//mocking Example on libraries or services!
jest.mock('react-router-dom');


describe('<Form />', () => {
    it('renders the <Form /> with populated data', () => {
        const { container, getByText, getByPlaceholderText } = render(
          <Form>
            <Form_Title>Sign In Now</Form_Title>
    
            <Form_Base>
              <Form_Input placeholder="Email address" onChange={() => {}} />
              <Form_Input type="password" placeholder="Password" onChange={() => {}} />

            </Form_Base>


            <Form_SmallText>
              This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
            </Form_SmallText>
          </Form>
        );
    
        expect(
          getByText("This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.")
        ).toBeTruthy();
        expect(getByPlaceholderText('Email address')).toBeTruthy();
        expect(getByPlaceholderText('Password')).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();
      });
});