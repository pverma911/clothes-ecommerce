
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';






// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
    apiKey: "AIzaSyDN_5le0UtgBNXq2AV8leA0od6iwMNFlTA",
    authDomain: "clothes-db-cef59.firebaseapp.com",
    databaseURL: "https://clothes-db-cef59.firebaseio.com",
    projectId: "clothes-db-cef59",
    storageBucket: "clothes-db-cef59.appspot.com",
    messagingSenderId: "596092213462",
    appId: "1:596092213462:web:497ea8329c73e1c3575177",
    measurementId: "G-CY1L28BTXR"
};


firebase.initializeApp(config)

export const auth = firebase.auth(); 
export const firestore = firebase.firestore(); 

const provider = new firebase.auth.GoogleAuthProvider();


provider.setCustomParameters({prompt: 'select_account' });

export const signInWithGoogle = () =>(
    auth.signInWithPopup(provider)
)


export default firebase;
