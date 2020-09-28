
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

export const createUserProfileDocument = async (userAuth, additionalData) =>{
    // Storing SnapShot of users if it does not exists to store them in DBase:

if(!userAuth) return // Check if user actually exists or not

// Grab the userRefrence:

const userRef = firestore.doc(`users/${userAuth.uid}`);

const snapShot = await userRef.get();       // get SnapShot

// If no snapshot exist we wanna create one:

if(!snapShot.exists){
    const {displayName, email} = userAuth;

    const createdAt = new Date();

    try{        // Storing in the DBase 

        await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
        })
    }

    catch(e){
        console.log('Error occured while creating user', e.message);

    }

}
    return userRef;
}


firebase.initializeApp(config)

export const auth = firebase.auth(); 
export const firestore = firebase.firestore(); 

const provider = new firebase.auth.GoogleAuthProvider();


provider.setCustomParameters({prompt: 'select_account' });

export const signInWithGoogle = () =>(
    auth.signInWithPopup(provider)
)


export default firebase;
