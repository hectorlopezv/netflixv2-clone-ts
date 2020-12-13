import React from 'react';
import HeaderContainer from '../containers/Header/HeaderContainer';
import FooterContainer from '../containers/Footer/Footer';

export interface BaseProps {
    
}
 
const Base: React.FC<BaseProps> = ({children, ...props}) => {
    return (  
        <>
            <HeaderContainer>Hello From the Sing in</HeaderContainer>
                {children}
            <FooterContainer />
        </>
    );
}
 
export default Base;