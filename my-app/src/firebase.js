import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier } from 'firebase/auth';

const  firebaseConfig = {
    apiKey: "AIzaSyBemPbWzO8wAqQrrrcsgX1Bdtp0Fll1C88",
    authDomain: "howathon-4fb1a.firebaseapp.com",
    projectId: "howathon-4fb1a",
    storageBucket: "howathon-4fb1a.appspot.com",
    messagingSenderId: "84471883886",
    appId: "1:84471883886:web:6e63396b700a8e7c4ade7f"
} 


const appAuth =  initializeApp(firebaseConfig);
export const auth = getAuth(appAuth); 
auth.languageCode = 'us';

export default appAuth; 
