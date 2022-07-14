import { useState } from "react";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.scss";

import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
    email: "",
    password: "",
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await signInAuthUserWithEmailAndPassword(
                email,
                password
            );
            setFormFields(defaultFormFields);
            console.log(response);
        } catch (err) {
            console.error(err);
        }
    };

    const signInWithGoogle = async () => {
        const response = await signInWithGooglePopup();
        await createUserDocumentFromAuth(response.user);
    };

    return (
        <div className={"sign-in-container"}>
            <h2>Already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label={"Email"}
                    required
                    type="email"
                    onChange={handleChange}
                    name="email"
                    value={email}
                />

                <FormInput
                    label={"Password"}
                    required
                    type="password"
                    onChange={handleChange}
                    name="password"
                    value={password}
                />

                <div className={"buttons-container"}>
                    <Button buttonType="default" type="submit">
                        Sign In
                    </Button>
                    <Button onClick={signInWithGoogle} buttonType="google">
                        Google sign in
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;
