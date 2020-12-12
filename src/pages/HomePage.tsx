import React from "react";
import Faqs from "../containers/Faq";
import FooterContainer from "../containers/Footer";
import Home from "../containers/Home";
import HeaderContainer from '../containers/Header/HeaderContainer';

export interface HomePageProps {
    
}
 
const HomePage: React.FC<HomePageProps> = () => {
    return ( 
        <>
            <HeaderContainer />
            <Home/>
            <FooterContainer/>
            <Faqs/>
        </>
     );
}
 
export default HomePage;