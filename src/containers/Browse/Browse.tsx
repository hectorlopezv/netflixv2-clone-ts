/* eslint-disable react/jsx-pascal-case */
import React, {useState, useEffect} from 'react';
import SelectProfileContainer from '../Profiles/Profile';
import {useSelector} from 'react-redux';
import Loading_ from '../../components/Loading';

export interface BrowseContainerProps {
    slides: any;
}
 
const BrowseContainer: React.FC<BrowseContainerProps> = ({slides}) => {
    //handle rows authetication profiles, authentication
    const [Loading, setLoading] = useState(true);
    const [profile, setprofile] = useState<any>({});

    const firebase = useSelector((stateCurrent: any) => stateCurrent.App.firebase);
    const user = firebase?.auth()?.currentUser || {};
    
    useEffect(() => {//navigate to diferrent page
        //if displayNAME ? homepage
        console.log('profile', profile);
        setTimeout(() => {
            setLoading(false)
        }, 3000);
    }, [profile.displayName]);//execute when depency changes

    //if there is a profile clicked 
    return ( 
        profile.displayName ? (Loading ? < Loading_ src={user.photoURL}/>: null):
        <SelectProfileContainer user={user} setProfile={setprofile}/>
    );
}
 
export default BrowseContainer;