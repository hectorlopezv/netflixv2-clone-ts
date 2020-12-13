/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Faqs from "../containers/Faq";
import FooterContainer from "../containers/Footer";
import Home from "../containers/Home";
import HeaderContainer from '../containers/Header/HeaderContainer';
import Form from '../containers/Form';
import Feature, {Feature_Title, Feature_SubTitle} from '../components/Feature';

export interface HomePageProps {
    
}
 
const HomePage: React.FC<HomePageProps> = () => {
    return ( 
        <>
            <HeaderContainer>
                <Feature>
                    <Feature_Title>Unlimited films, Tv Programmes and more.</Feature_Title>
                    <Feature_SubTitle>Watch anywhere. Cancel at any time</Feature_SubTitle>
                    <Form />
                </Feature>

                
            </HeaderContainer>
            
            <Home/>
            <FooterContainer/>
            <Faqs/>
        </>
     );
}
 
export default HomePage;