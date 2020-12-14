/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import {} from 'react-router-dom';
import * as ROUTES from '../../Routes';
import logo from '../Header/logo.svg';
import Header, {Header_Frame, Header_Logo } from '../../components/Header';
import Profiles, {Profiles_Title, Profiles_List,Profiles_User, Profiles_Picture, Profiles_Name } from '../../components/Profiles';

export interface SelectProfileContainerProps {
    user?: any;
    setProfile?: any;
}
 
const SelectProfileContainer: React.FC<SelectProfileContainerProps> = ({user, setProfile}) => {
    //ACCOUNT CAN HAVE MULTIPLE USER!
    //1 STEP
    return (
        <>
        <Header bg = {false}>
            <Header_Frame>
                <Header_Logo to={ROUTES.HOME} alt="Netflix" src={logo} />
            </Header_Frame>
        </Header>

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
        </>
       
    );
}
 
export default SelectProfileContainer;