import { FC, InputHTMLAttributes } from "react";
import { FormInputLabel, Group, Input } from "./form-input.styles";

type FormInputProps = {
    label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({ label, ...inputProps }) => {
    return (
        <Group>
            <Input {...inputProps} />
            {label && (
                <FormInputLabel
                    shrink={Boolean(
                        inputProps.value &&
                            typeof inputProps.value === "string" &&
                            inputProps.value.length
                    )}
                >
                    {label}
                </FormInputLabel>
            )}
        </Group>
    );
};

export default FormInput;
