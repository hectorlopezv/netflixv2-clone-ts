import {useSelector} from 'react-redux';    
import {useState, useEffect} from 'react';

export interface UseAuthListenerProps {
    
}

const useAuthListener = () => {
    //if user State changes we sign out
   
    const firebase = useSelector((stateCurrent: any) => stateCurrent.App.firebase);
    const [user, setuser] = useState<string>(JSON.stringify(localStorage.getItem('authUser') ?? '' )  )

    useEffect(() => {
        //fire listener and execute when state changes
        const listener = firebase.auth().onAuthStateChanged((authUser: any) => {
            if( authUser){
                localStorage.setItem('authUser', JSON.stringify(authUser.providerData));
                setuser(authUser.providerData);
            }else{
                localStorage.removeItem('authUser');
                setuser('');
            }
        });

        return () => listener();//execute when

    }, [firebase, user]);
    return [user];
}
 
export default useAuthListener;