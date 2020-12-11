import React, {useState, useContext, createContext} from 'react'
import {Container, Title, Frame, Item, Header, Body} from './styles/Accordion';


const ToogleContext = createContext<{ToogleShow:any, setToogleShow:any}>({ToogleShow: false, setToogleShow: () => {}});
export interface AccordionProps {
    
}
 
const Accordion: React.FC<AccordionProps> = ({children, ...props}) => {
    return ( 
        <Container {...props}>
            {children}
        </Container>
     );
}
 
export default Accordion;

export interface Accordion_TitleProps {
    
}
 
export const Accordion_Title: React.FC<Accordion_TitleProps> = ({children, ...props}) => {
    return (  
        <Title {...props}>{children}</Title>
    );
}

export interface Accordion_ItemProps {
    
}


export interface ItemProps {//primary Container
    
}
 
export const Accordion_Item: React.FC<ItemProps> = ({children, ...props}) => {
    
    const [ToogleShow, setToogleShow] = useState(false);
 
    return (  
        <ToogleContext.Provider value={{ToogleShow, setToogleShow}}>
            <Item {...props}>{children}</Item>
        </ToogleContext.Provider>
    );
}


export const Accordion_Frame: React.FC<Accordion_ItemProps> = ({children, ...props}) => {
    return ( 
        <Frame {...props}>{children}</Frame>
     );
}

export interface Accordion_HeaderProps {
    
}
 
export const Accordion_Header: React.FC<Accordion_HeaderProps> = ({children, ...props}) => {
    const {setToogleShow} = useContext<{ToogleShow:any, setToogleShow: any}>(ToogleContext);
    
    return (  
        <Header onClick={() => setToogleShow((latest: boolean) => !latest)} {...props}>{children}</Header>
    );
}

export interface Accordion_BodyProps {
    
}
 
export const Accordion_Body: React.FC<Accordion_BodyProps> = ({children, ...props}) => {
    
    const {ToogleShow} = useContext<{ToogleShow:any, setToogleShow: any}>(ToogleContext);

    return ToogleShow? <Body {...props}>{children}</Body> : null;

}
 

 


 


 

