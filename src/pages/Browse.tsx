import React from 'react';
import useContent from '../hooks/user_content';
import selectionFilter from '../utils/add_title';
import BrowseContainer from '../containers/Browse/Browse';
export interface BrowseProps {
    
}
 
const Browse: React.FC<BrowseProps> = () => {
    //fetch data and display from firebase OR FROM API
    //series
    //films
    //SLIDES OR CARDS CARROUSEL
    //missing player of trailers

    const {series} = useContent('series');
    const {films} = useContent('films');
    const filtered_items = selectionFilter({series, films});
    //use seesion sotrage or local storage
    //console.log(filtered_items);
    return (  
        <BrowseContainer slides={filtered_items}/>
    );
}
 
export default Browse;