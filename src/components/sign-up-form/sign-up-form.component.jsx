import { useState } from "react";
import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

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
            const userCredential = await createAuthUserWithEmailAndPassword(
                email,
                password
            );
            const { user } = userCredential;
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
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="displayName">Display Name</label>
                <input
                    required
                    type="text"
                    onChange={handleChange}
                    name="displayName"
                    value={displayName}
                />

                <label htmlFor="email">Email</label>
                <input
                    required
                    type="email"
                    onChange={handleChange}
                    name="email"
                    value={email}
                />

                <label htmlFor="password">Password</label>
                <input
                    required
                    type="password"
                    onChange={handleChange}
                    name="password"
                    value={password}
                />

                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                    required
                    type="password"
                    onChange={handleChange}
                    name="confirmPassword"
                    value={confirmPassword}
                />

                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUpForm;
