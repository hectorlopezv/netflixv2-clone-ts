import React from 'react';
import {Container, Input, Button, Text, Break} from './styles/OptFrom';

//react components

export interface OptFormProps {
    
}
 
const OptForm: React.FC<OptFormProps> = ({children, ...props}) => {
    return ( <Container {...props}>{children}</Container> );
}
 
export default OptForm;


export interface OptForm_InputProps {
    placeholder: string;
}
 
export const OptForm_Input: React.FC<OptForm_InputProps> = ({...props}) => {
    return (  <Input {...props} /> );
}


export interface OptForm_ButtonProps {
    
}
 
export const OptForm_Button: React.FC<OptForm_ButtonProps> = ({children, ...props}) => {
    return (  
        <Button {...props}>
            {children}
            <img src="/images/icons/chevron-right.png" alt="Try Now" />
        </Button>
    );
}


export interface OptForm_TextProps {
    
}
 
export const OptForm_Text: React.FC<OptForm_TextProps> = ({children, ...props}) => {
    return ( 
        <Text {...props}>{children}</Text>
     );
}
 

export interface OptForm_BreakProps {
    
}
 
export const OptForm_Break: React.FC<OptForm_BreakProps> = ({...props}) => {
    return (  <Break {...props} /> );
}
 
 

