import React from 'react';
import {Container, Title, SubTitle } from './styles/Feature';

export interface FeatureProps {
    
}
 
const Feature: React.FC<FeatureProps> = ({children, ...props}) => {
    return (  
        <Container {...props}>{children}</Container>
    );
}
 
export default Feature;

export interface Feature_TitleProps {
    
}
 
export const Feature_Title: React.FC<Feature_TitleProps> = ({children, ...props}) => {
    return ( <Title {...props}>{children}</Title>  );
}


export interface Feature_SubTitleProps {
    
}
 
export const Feature_SubTitle: React.FC<Feature_SubTitleProps> = ({children, ...props}) => {
    return (  
        <SubTitle {...props}>{children}</SubTitle>
    );
}
 
