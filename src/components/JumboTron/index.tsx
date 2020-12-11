import React from 'react';

//imports styles components
import { Inner, Container} from './styles/JumboTron';

export interface JumboTronProps {
    direction: string;
}
 
const JumboTron: React.FC<JumboTronProps> = ({direction = 'row', children, ...props}) => {
    return ( 
            <Inner direction={direction}>
                {children}
            </Inner>
     );
}
 
export default JumboTron;


export interface JumboContainerProps {
}


export const JumboContainer: React.FC<JumboContainerProps> = ({children, ...props}) => {
    return (  
        <Container {...props}>{children}</Container>
    );
}
 
