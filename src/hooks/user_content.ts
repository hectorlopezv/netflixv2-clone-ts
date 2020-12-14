import {useEffect, useState} from 'react';
import { useSelector} from 'react-redux';

export interface useContentProps {
    
}
 
const useContent = (target: string) => {
    //split hooks on diferent fetching situations.
    const [content, setcontent] = useState([]);
    const firebase = useSelector((stateCurrent: any) => stateCurrent.App.firebase)

    useEffect(() => {
        firebase.firestore()
        .collection(target)
        .get()
        .then((snapshot: any) => {
            const allContent =  snapshot.docs.map((contentObj: any) => {
                return {...contentObj.data(), docId: contentObj.id}
            });
            setcontent(allContent);
        })
        .catch((error: any) => {
            console.log(error.message);
        })
    }, [firebase, target]);
    return { [target]: content};
}
 
export default useContent;