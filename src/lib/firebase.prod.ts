import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
//import { seedDatabase } from './seed';

//Setting upp fireStore and authetnication with google

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyC1UEM6oGu6q650XR2FGE0TlhX3n6CHDN0",
  authDomain: "netflix-clone-ts.firebaseapp.com",
  projectId: "netflix-clone-ts",
  storageBucket: "netflix-clone-ts.appspot.com",
  messagingSenderId: "564102893825",
  appId: "1:564102893825:web:fdc573e15ae4627a35cb00"
};

//we need the authentication
const firebase = Firebase.initializeApp(firebaseConfig);

// console.log('entro1')
// seedDatabase(firebase);

//provider for gmail.com
export { firebase };
