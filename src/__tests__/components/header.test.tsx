/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import { render, fireEvent, getByTestId, getByAltText } from '@testing-library/react';
import Header, {Header_Text, Header_Feature, Header_FeatureCallOut,
    Header_Frame, Header_Logo, Header_TextLink, Header_Group
    ,Header_Profile,Header_Picture, Header_Dropdown, Header_Search,
    Header_PlayButton, Header_ButtonLink
} from '../../components/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import *  as ROUTES from '../../Routes';


//user-event recommended over fireEvent!

jest.doMock('react-router-dom');


describe('Header Components', () => {

    it('Renders Header Component <Header />', () => {
        const {container, getByText, getByTestId} = render(
            <Router>
                <Header bg = {true} >
                    <Header_Frame>
                        <Header_Logo to={ROUTES.HOME} alt="Netflix" src={"./logo.svg"} />
                        
                            <Header_ButtonLink to={ROUTES.SIGN_IN}> Sign In</Header_ButtonLink>
                    </Header_Frame>
                </Header>
            </Router>

        );

        expect(getByText('Sign In')).toBeTruthy();
        expect(getByTestId('header-bg')).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();
    });

    it('renders full <HEADER /> component', () => {

        const {container, getByText, getByTestId} = render(
            <Router>
            <Header src="joker1" dontShowSmallVp={true}>

            <Header_Frame>
                <Header_Group>
                    <Header_Logo to={ROUTES.HOME} alt="Netflix" src={"./logo.svg"} />
                    <Header_TextLink >Series</Header_TextLink>
                    <Header_TextLink >Films</Header_TextLink> 
                </Header_Group>

                <Header_Group>
                    <Header_Search searchTerm={"Joker"} setsearchTerm={() => {}} />
                    <Header_Profile>
                        <Header_Picture src={"/images/karl.png"} />
                        <Header_Dropdown>

                            <Header_Group>
                                <Header_Picture  src={"/images/karl.png"} />
                                <Header_TextLink>karln dawn</Header_TextLink>
                            </Header_Group>

                            <Header_Group>
                                <Header_TextLink onClick={() => {}}>Sign Out</Header_TextLink>
                            </Header_Group>

                        </Header_Dropdown>


                    </Header_Profile>
                </Header_Group>


            </Header_Frame>

                <Header_Feature>
                    <Header_FeatureCallOut>
                        Watch Joker Now
                    </Header_FeatureCallOut>
                    <Header_Text>
                        Forever alone in a crowd.
                    </Header_Text>
                
                    <Header_Group>
                        <Header_PlayButton>Play</Header_PlayButton>
                    </Header_Group>

                </Header_Feature>
            </Header>

            </Router>

        );

        
        expect(getByTestId('seach-input')).toBeTruthy();
        expect(getByTestId('seach-input').value).toBe('Joker');

        fireEvent.change(getByTestId('seach-input'), {target: {value: 'Simpsons'},
        });
        fireEvent.click(getByTestId('seach-click'));

        expect(getByText('Series')).toBeTruthy();
        expect(getByText('Films')).toBeTruthy();
        expect(getByText('karln dawn')).toBeTruthy();
        expect(getByText('Watch Joker Now')).toBeTruthy();
        expect(getByText('Forever alone in a crowd.')).toBeTruthy();
        expect(getByText('Play')).toBeTruthy();

        expect(container.firstChild).toMatchSnapshot();
    });

});