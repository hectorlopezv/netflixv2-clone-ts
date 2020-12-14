import React from 'react';
import {Container, Title, Picture, Name, User, List} from './styles/Profilex';



export interface ProfilesProps {
    
}
 
const Profiles: React.FC<ProfilesProps> = ({children, ...props}) => {
    return ( 
        <Container {...props}>{children}</Container>
     );
}
 
export default Profiles;

export interface Profiles_TitleProps {
    
}


export const Profiles_Title: React.FC<Profiles_TitleProps> = ({children, ...props}) => {
    return ( 
        <Title {...props}>{children}</Title>
     );
}
 

export interface Profiles_PictureProps {
    src: string;
}
 

export const Profiles_Picture: React.FC<Profiles_PictureProps> = ({src, ...props}) => {
    return ( 
        <Picture {...props} src={src ? `/images/users/${src}.png` :`/images/misc/loading`} />
     );
}
 

export interface Profiles_NameProps {
    
}
 

export const Profiles_Name: React.FC<Profiles_NameProps> = ({children, ...props}) => {
    return ( 
        <Name {...props}>{children}</Name>
     );
}
 

export interface Profiles_UserProps {
    
}
 

export const Profiles_User: React.FC<Profiles_UserProps> = ({children, ...props}) => {
    return ( 
        <User {...props}>{children}</User>
     );
}


export interface Profiles_ListProps {
    
}
 
export const Profiles_List: React.FC<Profiles_ListProps> = ({children, ...props}) => {
    return ( 
        <List {...props}>{children}</List>
     );
}
 
