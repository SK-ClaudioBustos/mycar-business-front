import { ErrorData, SelectOption } from "@type/types";
import { Control, Controller, FieldError, FieldValues, Path, useController } from "react-hook-form";

interface InputProps<T extends FieldValues> {
    label: string;
    placeholder: string;
    name: Path<T>;
    errors: FieldError | undefined;
    control: Control<T>;
    options: SelectOption[];
    error?: ErrorData;
    loading?: boolean;
}

export function Select<T extends FieldValues>({ label, placeholder, name, control, errors, options, loading = false, error = null }: InputProps<T>) {
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
                disabled={loading}
                control={control}
                render={({ field }) => (
                    <select
                        id={id}
                        {...field}
                        className="form-control"
                    >
                        <option disabled value="disabled">
                            {options.length === 0 ? "No options available" : placeholder}
                        </option>
                        {options.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.option}
                            </option>
                        ))}
                    </select>
                )}
            />
            {errors && <p>{errors.message}</p>}
            {error && <p>{error.message}</p>}
        </div>
    );
}