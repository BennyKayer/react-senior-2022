import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const Authentication = () => {
    return (
        <div>
            <h1>Sign in Page</h1>
            <SignInForm />
            <SignUpForm />
        </div>
    );
};

export default Authentication;
