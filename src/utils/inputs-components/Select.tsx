import { Control, Controller, FieldError, FieldValues, Path, useController } from "react-hook-form";

interface SelectOption {
    value: string;
    option: string;
}

interface InputProps<T extends FieldValues> {
    label: string;
    placeholder: string;
    name: Path<T>;
    errors: FieldError | undefined;
    control: Control<T>;
    options: SelectOption[];
}

export function Select<T extends FieldValues>({ label, placeholder, name, control, errors, options }: InputProps<T>) {
    const {
        field,
    } = useController({
        name,
        control,
    });

    const id = `${field.name}_id`;

    return (
        <div className={`form-input-container ${errors ? "invalid-field" : "valid-field"}`}>
            <label htmlFor={id}>{label}</label>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <select
                        id={id}
                        {...field}
                        className="form-control"
                    >
                        <option disabled selected value="disabled">{placeholder}</option>
                        {options.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.option}
                            </option>
                        ))}
                    </select>
                )}
            />
            {errors && <p>{errors.message}</p>}
        </div>
    );
}