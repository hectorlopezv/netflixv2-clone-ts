import React from 'react';
import {Spinner, LockBody , Picture, ReleaseBody} from './styles/Loading';


export interface LoadingProps {
    src: string;
}


//loading spinner
const Loading: React.FC<LoadingProps> = ({src, ...props}) => {
    return (  
        <Spinner>
            
            <Picture src={`/images/users/${src}.png`}/>
        </Spinner>
    );
}
 
export default Loading;

export interface Loading_ReleaseBodyProps {
    
}
 
export const Loading_ReleaseBody: React.FC<Loading_ReleaseBodyProps> = () => {
    return (  
        <ReleaseBody />
    );
}
 
