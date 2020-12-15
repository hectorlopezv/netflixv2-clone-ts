/* eslint-disable react/jsx-pascal-case */
import React, {useState} from 'react';
import {Container, 
    Header_ButtonLink as HeaderLink, 
    Frame, 
    Logo, 
    Background,
    Feature,
    Text,
    Profile,
    Dropdown,
    GroupPlayButton,
    Picture,
    FeatureCallOut,
    Group,
    Search,
    PlayButton,
    SearchIcon,
    SearchInput,
    Link as Link_,
} from './styles/Header';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export interface HeaderProps {
    bg?: boolean;
    children: any;
    src?: string;
    dontShowSmallVp?: any;
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


export interface Group_ {
    
}

export const Header_Group: React.FC<Group_> = ({children, ...props}) => {
    return ( 
        <Group {...props}>{children}</Group>
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
            <HeaderLink {...props} to={to} style={{ textDecoration: 'none' }}>
                {children}
            </HeaderLink> 
    );
}
 
export interface Header_FeatureProps {
    
}
 
export const Header_Feature: React.FC<Header_FeatureProps> = ({children, ...props}) => {
    return (  
        <Feature {...props}>{children}</Feature>
    );
}
 
export interface Header_TextProps {
    
}
 
export const Header_Text: React.FC<Header_TextProps> = ({children, ...props}) => {
    return (  <Text {...props}>{children}</Text>);
};
 
export interface Header_FeatureCallOutProps {
    
}
 
export const Header_FeatureCallOut: React.FC<Header_FeatureCallOutProps> = ({children, ...props}) => {
    return (  <FeatureCallOut {...props}>{children}</FeatureCallOut>);
}
 
export interface Header_TextLinkProps {
    onClick?: any;
}
 
export const Header_TextLink: React.FC<Header_TextLinkProps> = ({children, ...props}) => {
    return (  <Link_ {...props}>{children}</Link_> );
}
 
export interface Header_ProfileProps {
    
}
 
export const Header_Profile: React.FC<Header_ProfileProps> = ({children, ...props}) => {
    return ( <Profile {...props}>{children}</Profile> );
}
 

export interface Header_PictureProps {
    src: string;
}
 
export const Header_Picture: React.FC<Header_PictureProps> = ({src, children, ...props}) => {
    return ( <Picture src={`/images/users/${src}.png`} {...props}>{children}</Picture> );
}
 

export interface Header_DropdownProps {
    
}
 
export const Header_Dropdown: React.FC<Header_DropdownProps> = ({children, ...props}) => {
    return ( <Dropdown {...props}>{children}</Dropdown> );
}


export interface Header_SearchProps {
    searchTerm: any
    setsearchTerm: any
}
 
export const Header_Search: React.FC<Header_SearchProps> = ({searchTerm, setsearchTerm, ...props}) => {
    //esta activo o no el searching functionality de pusher para hacer algo
    //if ifa active put a image like netflix
    const [searchActive, setsearchActive] = useState(false);

    return (
        <Search {...props}>
            <SearchIcon onClick={() => setsearchActive((prevState) => !prevState)}>
                <img src="/images/icons/search.png" alt="Search" />
            </SearchIcon>
            <SearchInput value={searchTerm} 
                placeholder="Search films and series"
                active={searchActive}
                onChange={(event: any) => setsearchTerm(event.target.value)}/>
        </Search>
    );
}
 
export interface Header_PlayButtonProps {
    
}
 
export const Header_PlayButton: React.FC<Header_PlayButtonProps> = ({children, ...props}) => {
    return (<PlayButton {...props}>{children}</PlayButton>  );
}
 
export interface Header_GroupPlayProps {
    
}
 
export const Header_GroupPlay: React.FC<Header_GroupPlayProps> = ({children, ...props}) => {
    return ( <GroupPlayButton {...props}>{children}</GroupPlayButton> );
}
 
