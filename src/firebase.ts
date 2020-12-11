import firebase from 'firebase';
//Setting upp fireStore and authetnication with google

 // Your web app's Firebase configuration
 export const  firebaseConfig = {
     apiKey: "AIzaSyAcTISQe4SHebN4qwFVmQXV9zYwn7O4gi4",
     authDomain: "netflix-clone-e4bd0.firebaseapp.com",
     projectId: "netflix-clone-e4bd0",
     storageBucket: "netflix-clone-e4bd0.appspot.com",
     messagingSenderId: "937355082334",
     appId: "1:937355082334:web:795fd2d08aac89a21892cf"
   };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db =  firebaseApp.firestore();
const auth = firebaseApp.auth();
//providers
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;