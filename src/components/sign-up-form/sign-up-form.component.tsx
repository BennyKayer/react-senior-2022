import { ChangeEvent, useState } from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-up-form.styles.scss";
import { useDispatch } from "react-redux";
import { signUpStart } from "../../store/user/user.action";
import { FormEvent } from "react";
import { AuthError, AuthErrorCodes } from "firebase/auth";

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    const dispatch = useDispatch();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("passwords do not match");
            return;
        }

        try {
            dispatch(signUpStart(email, password, displayName));
            setFormFields(defaultFormFields);
        } catch (err) {
            if ((err as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
                alert("Cannot create user, email already in use");
                return;
            }
            if ((err as AuthError).code === AuthErrorCodes.WEAK_PASSWORD) {
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

                <Button buttonType={BUTTON_TYPE_CLASSES.base} type="submit">
                    Sign Up
                </Button>
            </form>
        </div>
    );
};

export default SignUpForm;
