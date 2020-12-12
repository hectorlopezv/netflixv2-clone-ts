/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import Header, {Header_Frame, Header_Logo, Header_ButtonLink } from '../../components/Header';
import *  as ROUTES from '../../Routes';
import logo from './logo.svg';
export interface HeaderContainerProps {
    
}
 
const HeaderContainer: React.FC<HeaderContainerProps> = ({children}) => {
    return ( 
        <Header bg = {true}>
            <Header_Frame>
                <Header_Logo to={ROUTES.HOME} alt="Netflix" src={logo} />
                <Header_ButtonLink to={ROUTES.HOME}> Sign In</Header_ButtonLink>
            </Header_Frame>
            {children}
        </Header>
     );
}
 
export default HeaderContainer;