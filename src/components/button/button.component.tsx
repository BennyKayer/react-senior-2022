import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";
import {
    BaseButton,
    GoogleSignInButton,
    InvertedButton,
    ButtonSpinner,
} from "./button.styles";

export enum BUTTON_TYPE_CLASSES {
    google = "google-sign-in",
    inverted = "inverted",
    base = "base",
}

// const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
//     ({
//         [BUTTON_TYPE_CLASSES.base]: BaseButton,
//         [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
//         [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
// }[buttonType]);

// This is equivalent to
const getButton = (
    buttonType = BUTTON_TYPE_CLASSES.base
): typeof BaseButton => {
    const ButtonTypes = {
        [BUTTON_TYPE_CLASSES.base]: BaseButton,
        [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
        [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
    };

    return ButtonTypes[buttonType];
};

export type ButtonProps = {
    buttonType?: BUTTON_TYPE_CLASSES;
    isLoading?: boolean;
} & PropsWithChildren &
    ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
    children,
    buttonType,
    isLoading,
    ...otherProps
}) => {
    const CustomButton = getButton(buttonType);

    return (
        <CustomButton disabled={isLoading} {...otherProps}>
            {isLoading ? <ButtonSpinner /> : children}
        </CustomButton>
    );
};

export default Button;
