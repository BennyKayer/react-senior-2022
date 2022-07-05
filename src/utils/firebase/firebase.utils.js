// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
