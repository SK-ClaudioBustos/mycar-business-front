import { Control, Controller, FieldError, FieldValues, Path, useController } from "react-hook-form";
import "./styles/TextArea.css";

interface InputProps<T extends FieldValues> {
    label: string;
    name: Path<T>;
    errors: FieldError | undefined;
    control: Control<T>;
}

export function TextArea<T extends FieldValues>({ label, name, control, errors }: InputProps<T>) {
    const {
        field,
    } = useController({
        name: name,
        control,
    });
    const id = `${field.name}_id`;
    return (
        <div className={`textarea-container ${errors ? "invalid-field" : "valid-field"}`}>
            <label htmlFor={id}>{label}</label>
            <Controller name={field.name} control={control} render={
                ({ field }) =>
                    <textarea id={id} {...field} className="textarea-control" onChange={(e) => {
                        const value = e.target.value;
                        field.onChange(value);
                    }}></textarea>
            } />
            {errors && <p>{errors.message}</p>}
        </div>
    );
}