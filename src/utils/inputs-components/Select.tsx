import { Control, Controller, FieldError, FieldValues, Path, useController } from "react-hook-form";
import "./styles/Select.css";

interface CarOption {
    id: number;
    name: string
}

interface InputProps<T extends FieldValues> {
    label: string;
    name: Path<T>;
    errors: FieldError | undefined;
    control: Control<T>;
    options: CarOption[];
}

export function Select<T extends FieldValues>({ label, name, control, errors, options }: InputProps<T>) {
    const {
        field,
    } = useController({
        name: name,
        control,
    });
    const id = `${field.name}_id`;
    return (
        <div className={`select-container ${errors ? "invalid-field" : "valid-field"}`}>
            <label htmlFor={id}>{label}</label>
            <Controller name={field.name} control={control} render={
                ({ field }) =>
                    <select id={id} {...field} className="form-control" onChange={(e) => {
                        const value = e.target.value;
                        field.onChange(value);
                    }}>
                        {
                            options.map(option =>
                                <option value={option?.id}>{option?.name}</option>
                            )
                        }
                    </select>
            } />
            {errors && <p>{errors.message}</p>}
        </div>
    );
}