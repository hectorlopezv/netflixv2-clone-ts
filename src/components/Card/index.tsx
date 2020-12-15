/* eslint-disable react/jsx-pascal-case */
import React, { useState, useContext, createContext } from 'react';
import { 
    Container,
    Title, 
    Group ,
    SubTitle ,
    Text ,
    Feature,
    Feature_Title ,
    Feature_Text ,
    Feature_Close ,  
    maturity as Maturity,
    Content,
    Meta,
    Item ,
    Image, 
    Entities,
    } from './styles/Card';


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
 
export const Card_Meta: React.FC<Card_MetaProps> =  ({ children, ...props }) => {
    //description of the series
    //holder div for the info
    return ( <Meta {...props}>{children}</Meta> );
}
 
export interface Card_ItemProps {
    item: any;
}
 
export const Card_Item: React.FC<Card_ItemProps> =  ({ item, children, ...props }) => {
    //we we use the shared state
    const {setshowFeature, setitemFeature} = useContext(FeatureContext);
    return ( <Item onClick={() => {
        setitemFeature(item);
        setshowFeature(true);
    }}
        {...props}>{children}</Item> );
}
 
export interface Card_ImageProps {
    src: string;
}
 
export const Card_Image: React.FC<Card_ImageProps> = ({...props}) => {
    return ( <Image {...props} /> );
}


export interface Card_EntitiesProps {
    
}
 
export const Card_Entities: React.FC<Card_EntitiesProps> = ({children, ...props}) => {
    return ( <Entities {...props}>{children}</Entities> );
}
 

export interface Card_FeatureProps {
    category: any;
}

//the modal with react PORTAL
export const Card_Feature: React.FC<Card_FeatureProps> = ({category, children, ...props}) => {
    const {showFeature, setshowFeature, itemFeature, setitemFeature} = useContext(FeatureContext);
    return showFeature ? (
        <Feature 
            src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`} 
            {...props}
        >
            <Content>
                <Feature_Title>{itemFeature.title}</Feature_Title>
                <Feature_Text>{itemFeature.description}</Feature_Text>
                
                <Feature_Close onClick={() => setshowFeature(false)}>
                    <img src={"/images/icons/close.png"} alt="Close"/>
                </Feature_Close>
                {children}
            </Content>

            <Group margin="30px 0" flexDireciton="row" alignItems="center">
                <Maturity rating={itemFeature.maturity}>
                    {itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}
                </Maturity>
                <Feature_Text fontWeight="bold">
                    {itemFeature.genre.charAt(0).toUpperCase() + itemFeature.genre.slice(1)}
                </Feature_Text>
            </Group>
        </Feature> 
    ): null;
}
 
