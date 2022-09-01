import { FormInputLabel, Group, Input } from "./form-input.styles.jsx";

const FormInput = ({ label, ...inputProps }) => {
    return (
        <Group>
            <Input {...inputProps} />
            {label && (
                <FormInputLabel shrink={inputProps.value.length}>
                    {label}
                </FormInputLabel>
            )}
        </Group>
    );
};

export default FormInput;
