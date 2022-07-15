import { useState } from "react";
import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-up-form.styles.scss";

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("passwords do not match");
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(
                email,
                password
            );

            // TODO: Firebase listener problematic with display name
            await createUserDocumentFromAuth(user, { displayName });
            setFormFields(defaultFormFields);
        } catch (err) {
            if (err.code === "auth/email-already-in-use") {
                alert("Cannot create user, email already in use");
                return;
            }
            if (err.code === "auth/weak-password") {
                alert("Password to weak! At least 6 chars");
                return;
            }
            console.error(err);
        }
    };

    return (
        <div className={"sign-up-container"}>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label={"Display Name"}
                    required
                    type="text"
                    onChange={handleChange}
                    name="displayName"
                    value={displayName}
                />

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

                <FormInput
                    label={"Confirm Password"}
                    required
                    type="password"
                    onChange={handleChange}
                    name="confirmPassword"
                    value={confirmPassword}
                />

                <Button buttonType="default" type="submit">
                    Sign Up
                </Button>
            </form>
        </div>
    );
};

export default SignUpForm;
