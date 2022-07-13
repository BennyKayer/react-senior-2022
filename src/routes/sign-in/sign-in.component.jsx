import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInWithGoogleRedirect,
    auth,
} from "../../utils/firebase/firebase.utils";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

const SignIn = () => {
    const logGoogleUserPopup = async () => {
        const response = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(response.user);
    };

    useEffect(() => {
        const get = async () => {
            const response = await getRedirectResult(auth);
            if (response) {
                const userDocRef = await createUserDocumentFromAuth(
                    response.user
                );
            }
        };
        get();
    }, []);

    return (
        <div>
            <h1>Sign in Page</h1>
            <button onClick={logGoogleUserPopup}>
                Sign In with Google Popup
            </button>
            <button onClick={signInWithGoogleRedirect}>
                Sign In with Google Redirect
            </button>
        </div>
    );
};

export default SignIn;
