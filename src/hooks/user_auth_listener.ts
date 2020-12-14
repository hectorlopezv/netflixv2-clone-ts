import {useSelector} from 'react-redux';    
import {useState, useEffect} from 'react';

export interface UseAuthListenerProps {
    
}
 
const useAuthListener = () => {
    //if user State changes we sign out
    const firebase = useSelector((stateCurrent: any) => stateCurrent.App.firebase);
    const [user, setuser] = useState<string | null>( JSON.stringify(localStorage.getItem('authUser')) ?? null);

    useEffect(() => {
        //fire listener and execute when state changes
        const listener = firebase.auth().onAuthStateChanged((authUser: any) => {
            if( authUser){
                localStorage.setItem('authUser', JSON.stringify(authUser.providerData));
                setuser(authUser.providerData);
            }else{
                localStorage.removeItem('authUser');
                setuser(null);
            }
        });

        return () => listener();//execute when

    }, [firebase, user]);

    return [user];
}
 
export default useAuthListener;