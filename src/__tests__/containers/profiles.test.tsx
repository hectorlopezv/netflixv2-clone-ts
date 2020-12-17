import React from 'react';
import { render, fireEvent, getByTestId, getByAltText } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import SelectProfileContainer from '../../containers/Profiles/Profile';


describe('<Profiles /> container testing', () => {
    it('renders the <Profiles /> component', () => {
        const user ={ displayName: 'hector', photoURL: '/images/karl.png'};
        const setProfiles = jest.fn();//Mock function as a mock oh hook

        const {container, getByTestId, getByText} = render(
            <Router>
                <>
                    <SelectProfileContainer user={user} setProfile={setProfiles}/>
                </>            
            </Router>
        );

        //assertions
        fireEvent.click(getByTestId('user-profile'));
        
        //check if mocked fundtion hast been called.
        expect(setProfiles).toHaveBeenCalled();
    });
});