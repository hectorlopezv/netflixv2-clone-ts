import React from 'react'
import {Container, Row, Column, Link, Text, Title, Break} from './styles/Footer';

export interface FooterProps {
    
}
 
const Footer: React.FC<FooterProps> = ({children, ...props}) => {
    return (  
        <Container {...props}>
            {children}
        </Container>
    );
}

export default Footer;


export interface Footer_RowProps {
    
}
 
export const Footer_Row: React.FC<Footer_RowProps> = ({children, ...props}) => {
    return (

        <Row {...props}>
            {children}
        </Row>
      );
}
 

export interface Footer_ColProps {
    
}
 
export const Footer_Col: React.FC<Footer_ColProps> = ({children, ...props}) => {
    return (  
        <Column {...props}>
            {children}
        </Column>
    );
}



export interface Footer_LinkProps {
    href: string;
}
 
export const Footer_Link: React.FC<Footer_LinkProps> = ({children, ...props}) => {
    return (  

        <Link {...props}>
            {children}
        </Link>
    );
}
 
export interface Footer_TitleProps {
    
}
 
export const Footer_Title: React.FC<Footer_TitleProps> = ({children, ...props}) => {
    return (  
        <Title {...props}>
            {children}
        </Title>
    );
}


export interface Footer_TextProps {
    
}
 
export const Footer_Text: React.FC<Footer_TextProps> = ({children, ...props}) => {
    return (  
        <Text {...props}>
            {children}
        </Text>
    );
}


export interface Footer_BreakProps {
    
}
 
export const Footer_Break: React.FC<Footer_BreakProps> = ({children, ...props}) => {
    return ( 
        <Break {...props}>
            {children}
        </Break>
     );
}
 
