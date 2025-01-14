import { Input } from "@utils/Input";
import { Control, FieldErrors } from "react-hook-form";

interface Props {
    control: Control<{
        email: string;
        password: string;
    }>
    errors: FieldErrors<{
        email: string;
        password: string;
    }>
}

export const LoginFormContent = ({ control, errors }: Props) => {
    return (
        <div className="form-body">
            <Input label="Email" name="email" control={control} errors={errors.email} />
            <Input label="Password" name="password" control={control} errors={errors.password} />
        </div>
    );
}