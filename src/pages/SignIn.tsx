import React, {useState} from 'react';
import Base from './Base';
import SignForm from '../containers/SignInForm';
import HeaderContainer from '../containers/Header/HeaderContainer';
import FooterContainer from '../containers/Footer';

export interface SignInProps {
    
}
 
const SignIn: React.FC<SignInProps> = () => {

    return ( 
        <>
            <HeaderContainer>
                <SignForm />  
            </HeaderContainer>
            <FooterContainer />            
        </>
    );
}
 
export default SignIn;