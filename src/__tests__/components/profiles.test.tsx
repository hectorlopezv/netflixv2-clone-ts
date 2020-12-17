/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import { render, fireEvent, getByTestId, getByAltText } from '@testing-library/react';

import Profiles, {Profiles_Title, Profiles_List,Profiles_User, Profiles_Picture, Profiles_Name } from '../../components/Profiles';

describe('Profile component', () => {
    it('it renders <Profiles /> Component with populated', () => {
        const {container, getByText, getByTestId} = render(       
            <Profiles>
                <Profiles_Title>Who is Watching</Profiles_Title>
                <Profiles_List>
                    <Profiles_User onClick={() => {}}>
                        <Profiles_Picture src={"/images/karl.png"} data-testid="profile-picture" />
                        <Profiles_Name>Karl Hadwen</Profiles_Name>
                    </Profiles_User>
                </Profiles_List>
            </Profiles>
        );
        //assertions
        expect(getByText('Who is Watching')).toBeTruthy();
        expect(getByTestId('profile-picture')).toBeTruthy();
        expect(getByText("Karl Hadwen")).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();
    });
});