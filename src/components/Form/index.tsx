import React from 'react';
import {
    Container,
    Base, 
    Error, 
    Title, 
    Text, 
    SmallText, 
    Link, 
    Input, 
    Submit
} from './styles/Form';


export interface FormProps {

}

const Form: React.FC<FormProps> = ({ children, ...props }) => {
    return (<Container {...props}>{children}</Container>);
}

export default Form;

export interface BaseProps {
    onSubmit?: (event: any) => void;
    method?: string;

}
 
export const Form_Base: React.FC<BaseProps> = ({children, ...props}) => {
    return (<Base {...props}>{children}</Base>);
}
 

export interface Form_ErrorProps {
    
}
 
export const Form_Error: React.FC<Form_ErrorProps> = ({children, ...props}) => {
    return (<Error {...props}>{children}</Error>);
}


export interface Form_TitleProps {
    
}
 
export const Form_Title: React.FC<Form_TitleProps> = ({children, ...props}) => {
    return (  <Title {...props}>{children}</Title>);
}
 

export interface Form_TextProps {
    
}
 
export const Form_Text: React.FC<Form_TextProps> = ({children, ...props}) => {
    return (<Text {...props}>{children}</Text>  );
}
 
export interface Form_SmallTextProps {
    
}
 
export const Form_SmallText: React.FC<Form_SmallTextProps> = ({children, ...props}) => {
    return ( <SmallText {...props}>{children}</SmallText> );
}

export interface Form_LinkProps {
    to: string;
}
 
export const Form_Link: React.FC<Form_LinkProps> = ({children, ...props}) => {
    return ( <Link {...props}>{children}</Link> );
}
 
export interface Form_InputProps {
    placeholder: string;
    value?: string;
    onChange: ({ target: any }: { target: any; }) => void;
    type?: string;
    autoComplete?: string;
}
 
export const Form_Input: React.FC<Form_InputProps> = ({children, ...props}) => {
    return ( <Input {...props}>{children}</Input> );
}
 
export interface Form_SubmitProps {
    disabled: any;
    type: any;
    
}
 
export const Form_Submit: React.FC<Form_SubmitProps> = ({children, ...props}) => {
    return (  <Submit {...props}>{children}</Submit>);
}
 

 



 
