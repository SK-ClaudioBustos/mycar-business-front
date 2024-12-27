import { HTMLInputTypeAttribute } from "react";
import { Control, Controller, FieldError, FieldValues, Path, useController } from "react-hook-form";
import "./styles/Input.css";

interface InputProps<T extends FieldValues> {
    label: string;
    name: Path<T>;
    errors: FieldError | undefined;
    control: Control<T>;
    type?: HTMLInputTypeAttribute | undefined;
}

export function Input<T extends FieldValues>({ label, name, control, errors, type = "text" }: InputProps<T>) {
    const {
        field,
    } = useController({
        name: name,
        control,
    });
    const id = `${field.name}_id`;
    return (
        <div className={`input-container ${errors ? "invalid-field" : "valid-field"}`}>
            <label htmlFor={name}>{label}</label>
            <Controller name={field.name} control={control} render={
                ({ field }) =>
                    <input id={id} type={type} autoComplete="off" {...field} className="form-control" />
            } />
            {errors && <p>{errors.message}</p>}
        </div>
    );
}