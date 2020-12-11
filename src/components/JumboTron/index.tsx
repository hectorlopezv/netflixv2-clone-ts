import React from 'react';

//imports styles components
import { Inner, Container, Image, Title, SubTitle, Pane, Item} from './styles/JumboTron';

export interface JumboTronProps {
    direction: string;
}
 
const JumboTron: React.FC<JumboTronProps> = ({direction = 'row', children, ...props}) => {
    return ( 
            <Item >
                <Inner direction={direction}>
                     {children}
                </Inner>
            </Item>
     );
}
 
export default JumboTron;



export interface JumboContainerProps {
}


export const Jumbo_Container: React.FC<JumboContainerProps> = ({children, ...props}) => {
    return (  
        <Container {...props}>{children}</Container>
    );
}

export interface JumbOTitleProps {
    
}
 

export const Jumbo_Title: React.FC<JumbOTitleProps> = ({children, ...props}) => {
    return (  
        <Title {...props}>{children}</Title>
      
    );
}
 
export interface JumboSubTitleProps {
    
}
 
export const Jumbo_SubTitle: React.FC<JumboSubTitleProps> = ({children, ...props}) => {
    return ( 

        <SubTitle {...props}>{children}</SubTitle>
    
     );
}

export interface JumboImageProps {
    src: string;
    alt: string;
    
}
 
export const Jumbo_Image: React.FC<JumboImageProps> = ({...props}) => {
    return (

        <Image {...props}/>
    
      );
}
 
export interface JumboTron_PaneProps {
    
}
 
export const JumboTron_Pane: React.FC<JumboTron_PaneProps> = ({children, ...props}) => {
    return (  

        <Pane {...props}>{children}</Pane>
    );
}
 

 
