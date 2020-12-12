import React from 'react';
import {Container, Header_ButtonLink as HeaderLink, Frame, Logo, Background} from './styles/Header';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export interface HeaderProps {
    bg: boolean;
    children: any;

}
 
const Header: React.FC<HeaderProps> = ({bg =  true, children, ...props}) => {
    return (bg? <Background {...props}  >{children}</Background> : children);
}
 
export default Header;

export interface Header_FrameProps {
    
}
 
export const Header_Frame: React.FC<Header_FrameProps> = ({children, ...props}) => {
    return ( 
        <Container {...props}>{children}</Container>
     );
}
 
export interface Header_LogoProps {
    to?: string;
    alt: string;
    src: string;
}
 
export const Header_Logo: React.FC<Header_LogoProps> = ({to= '/', ...props}) => {
    return ( 
        <Link to={to} >
            <Logo {...props} />
        </Link>
        
     );
}
 
export interface Header_ButtonProps {
    to: string;
}
 
export const Header_ButtonLink: React.FC<Header_ButtonProps> = ({to='/', children, ...props}) => {
    return (  
        <Link to={to} style={{ textDecoration: 'none' }} >
            <HeaderLink {...props}>
                {children}
            </HeaderLink>
        </Link>
        
    );
}
 
