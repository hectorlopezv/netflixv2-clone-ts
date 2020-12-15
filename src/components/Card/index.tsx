import React, { useState, useContext, createContext } from 'react';
import { Container, Group, Title, SubTitle, Text } from './styles/Card';


export const FeatureContext = createContext<{[prop:string]:any}>({});

export interface CardProps {

}

const Card: React.FC<CardProps> = ({ children, ...props }) => {
    //when we click card we need a state to show or not Feautures
    ///we want to show only one feaute in one group

    const [showFeature, setshowFeature] = useState(false);
    const [itemFeature, setitemFeature] = useState({});
    return (  
        <FeatureContext.Provider value={{showFeature, setshowFeature, itemFeature, setitemFeature}} >
            <Container {...props}>{children}</Container>
        </FeatureContext.Provider>

    );
}
export default Card;


export interface Card_GroupProps {
    
}
 
export const Card_Group: React.FC<Card_GroupProps> = ({ children, ...props }) => {
    return (  
        <Group {...props}>{children}</Group>
    );
}
 

export interface Card_TitleProps {
    
}
 
export const Card_Title: React.FC<Card_TitleProps> = ({ children, ...props }) => {
    return (  <Title {...props}>{children}</Title>);
}
 
export interface Card_SubTitleProps {
    
}
 
export const Card_SubTitle: React.FC<Card_SubTitleProps> = ({ children, ...props }) => {
    return ( <SubTitle {...props}>{children}</SubTitle> );
}
 
export interface Card_TextProps {
    
}
 
export const Card_Text: React.FC<Card_TextProps> = ({ children, ...props }) => {
    return ( <Text {...props}>{children}</Text> );
}
 

export interface Card_MetaProps {
    
}
 
const Card_Meta: React.FC<Card_MetaProps> = () => {
    return (  );
}
 
export interface Card_ItemProps {
    
}
 
const Card_Item: React.FC<Card_ItemProps> = () => {
    return (  );
}
 
