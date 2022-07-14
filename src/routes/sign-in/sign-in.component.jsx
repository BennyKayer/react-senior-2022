import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logGoogleUserPopup = async () => {
        const response = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(response.user);
    };

    return (
        <div>
            <h1>Sign in Page</h1>
            <button onClick={logGoogleUserPopup}>
                Sign In with Google Popup
            </button>
            <SignUpForm />
        </div>
    );
};

export default SignIn;
