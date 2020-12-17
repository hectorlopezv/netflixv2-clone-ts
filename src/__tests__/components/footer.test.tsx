/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Footer, {    Footer_Row, 
    Footer_Break, 
    Footer_Col, 
    Footer_Link, 
    Footer_Text,
    Footer_Title} from '../../components/Footer';


describe('<Footer />', () => {
    it('renders the <Footer /> with populated data', () => {
        //render components
        const {container, getByText} =  render(
            <Footer>
            <Footer_Title>Questions? Contact us.</Footer_Title>
            <Footer_Break />
            <Footer_Row>
                <Footer_Col>
                    <Footer_Link href="#">FAQ</Footer_Link>
                    <Footer_Link  href="#">Investor Relations</Footer_Link>
                    <Footer_Link  href="#">Ways to Watch</Footer_Link>
                    <Footer_Link  href="#">Corporate Information</Footer_Link>
                    <Footer_Link  href="#">Netflix Originals</Footer_Link>
                </Footer_Col>

                <Footer_Col>
                    <Footer_Link href="#">Help Center</Footer_Link>
                    <Footer_Link  href="#">Jobs</Footer_Link>
                    <Footer_Link  href="#">Terms of Use</Footer_Link>
                    <Footer_Link  href="#">Contact Us</Footer_Link>
                </Footer_Col>

                <Footer_Col>
                    <Footer_Link href="#">Account</Footer_Link>
                    <Footer_Link  href="#">Redeem Gift Cards</Footer_Link>
                    <Footer_Link  href="#">Privacy</Footer_Link>
                    <Footer_Link  href="#">Speed Test</Footer_Link>
                </Footer_Col>

                <Footer_Col>
                    <Footer_Link href="#">Media Centre</Footer_Link>
                    <Footer_Link  href="#">buy Gift Cards</Footer_Link>
                    <Footer_Link  href="#">Cookie Preferences</Footer_Link>
                    <Footer_Link  href="#">Legal Notices</Footer_Link>
                </Footer_Col>
                <Footer_Break />
            </Footer_Row>

            <Footer_Text>Netflix Colombia</Footer_Text>

        </Footer>
        );

        //assertions.... Integrations test its better ....end to end
        expect(getByText('Questions? Contact us.')).toBeTruthy();
        expect(getByText('FAQ')).toBeTruthy();
        expect(getByText('Investor Relations')).toBeTruthy();
        expect(getByText('Ways to Watch')).toBeTruthy();
        expect(getByText('Corporate Information')).toBeTruthy();
        expect(getByText('Netflix Originals')).toBeTruthy();

        
    }); 
});
