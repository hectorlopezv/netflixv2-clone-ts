/* eslint-disable react/jsx-pascal-case */
import React, {useState, useEffect} from 'react';
import SelectProfileContainer from '../Profiles/Profile';
import {useSelector} from 'react-redux';
import Loading_, {Loading_ReleaseBody} from '../../components/Loading';
import Header, {Header_Text, Header_Feature, Header_FeatureCallOut,
    Header_Frame, Header_Logo, Header_TextLink, Header_Group
    ,Header_Profile,Header_Picture, Header_Dropdown, Header_Search,
    Header_PlayButton, Header_GroupPlay
} from '../../components/Header';

import {PlayIcon} from '../../components/Header/styles/Header';

import logo from '../Header/logo.svg'


import * as ROUTES from '../../Routes';
export interface BrowseContainerProps {
    slides: any;
}
 
const BrowseContainer: React.FC<BrowseContainerProps> = ({slides}) => {
    //handle rows authetication profiles, authentication
    const [Loading, setLoading] = useState(true);
    const [profile, setprofile] = useState<any>({});
    //searching functionality with pusher.js
    //change rows depending on search
    const [searchTerm, setsearchTerm] = useState('');//input element

    const firebase = useSelector((stateCurrent: any) => stateCurrent.App.firebase);
    const user = firebase?.auth()?.currentUser || {};
    const displayName = profile.displayName;

    useEffect(() => {//navigate to diferrent page
        //if displayNAME ? homepage

        setTimeout(() => {
            setLoading(false)
        }, 3000);
    }, [displayName]);//execute when depency changes

    //if there is a profile clicked 
    return profile.displayName ? (
        <>
            {Loading ? < Loading_ src={user.photoURL}/> : <Loading_ReleaseBody />}
            <Header src="joker1" dontShowSmallVp={true}>

            <Header_Frame>
                <Header_Group>
                    <Header_Logo to={ROUTES.HOME} alt="Netflix" src={logo} />
                    <Header_TextLink>Series</Header_TextLink>
                    <Header_TextLink>Films</Header_TextLink> 
                </Header_Group>

                <Header_Group>
                    <Header_Search searchTerm={searchTerm} setsearchTerm={setsearchTerm} />
                    <Header_Profile>
                        <Header_Picture src={user.photoURL} />
                        <Header_Dropdown>

                            <Header_Group>
                                <Header_Picture  src={user.photoURL}/>
                                <Header_TextLink>{user.displayName}</Header_TextLink>
                            </Header_Group>

                            <Header_Group>
                                <Header_TextLink onClick={() => firebase.auth().signOut()}>Sign Out</Header_TextLink>
                            </Header_Group>

                        </Header_Dropdown>


                    </Header_Profile>
                </Header_Group>


            </Header_Frame>

                <Header_Feature>
                    <Header_FeatureCallOut>
                        Watch Joker Now
                    </Header_FeatureCallOut>
                    <Header_Text>
                        Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
                        City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
                        futile attempt to feel like he's part of the world around him.
                    </Header_Text>
                   
                    <Header_Group>
                        <Header_PlayButton><PlayIcon /> Play</Header_PlayButton>
                    </Header_Group>
       
                    
                </Header_Feature>
            </Header>
        </>
        ): (
            <SelectProfileContainer user={user} setProfile={setprofile}/>
        );
        
}
 
export default BrowseContainer;