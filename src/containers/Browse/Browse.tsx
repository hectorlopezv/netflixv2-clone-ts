import React from 'react';
import SelectProfileContainer from '../Profiles/Profile';


export interface BrowseContainerProps {
    slides: any;
}
 
const BrowseContainer: React.FC<BrowseContainerProps> = ({slides}) => {
    //handle rows authetication profiles, authentication
    return ( 
        <SelectProfileContainer/>
    );
}
 
export default BrowseContainer;