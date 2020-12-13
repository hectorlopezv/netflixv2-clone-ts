import React from 'react';
import FooterContainer from '../containers/Footer';
import HeaderContainer from '../containers/Header/HeaderContainer';
import SignUpForm from '../containers/SignUpForm';

export interface SignUpProps {
    
}
 
const SignUp: React.FC<SignUpProps> = () => {
    return (  
        <> 
            <HeaderContainer>
                <SignUpForm/> 
            </HeaderContainer>
            <FooterContainer /> 
        </>
    );
}
 
export default SignUp;