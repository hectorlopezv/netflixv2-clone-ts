/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import { render, fireEvent, getByTestId, getByAltText } from '@testing-library/react';

import Profiles, {Profiles_Title, Profiles_List,Profiles_User, Profiles_Picture, Profiles_Name } from '../../components/Profiles';

describe('Profile component', () => {
    it('it renders <Profiles /> Component with populated', () => {
        const {container, getByText} = render(       
            <Profiles>
                <Profiles_Title>Who is Watching</Profiles_Title>
                <Profiles_List>
                    <Profiles_User onClick={() => setProfile({
                            displayName: user.displayName,
                            photoURL: user.photoURL
                        })}>
                        <Profiles_Picture src={user?.photoURL} />
                        <Profiles_Name>{user?.displayName}</Profiles_Name>
                    </Profiles_User>
                </Profiles_List>
            </Profiles>
        );
        //assertions
        
    });
});