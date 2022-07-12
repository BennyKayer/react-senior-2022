// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA199OecomGsl5PiKhGPKHE3E97M5aNPfE",
    authDomain: "react-senior-2022-db.firebaseapp.com",
    projectId: "react-senior-2022-db",
    storageBucket: "react-senior-2022-db.appspot.com",
    messagingSenderId: "81490482114",
    appId: "1:81490482114:web:5c9bcfbbb736f085f2fc5b",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    // This stuff will get the reference, even if we don't have a users collection
    // it will create a pointer bcs it's a unique space and I will hold it for future actions
    const userDocRef = doc(db, "users", userAuth.uid);
    console.log(userDocRef);

    // This will transform the ref into snapshot
    // it is now possible to determine whether document actually exists
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, { displayName, email, createdAt });
        } catch (error) {
            console.log("error creating the user", error.message);
        }
    }
    return userDocRef;
};
