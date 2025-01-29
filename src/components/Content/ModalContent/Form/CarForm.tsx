import { Input } from "@utils/inputs-components/Input";
import { Control, FieldErrors } from "react-hook-form";

export interface CarFormControlProps {
    control: Control<{
        companyName: string;
        modelName: string;
        km?: number;
    }>;
    errors: FieldErrors<{
        companyName: string;
        modelName: string;
        km?: number;
    }>;
}

export const CarForm = ({ control, errors }: CarFormControlProps) => {
    return (
        <div className="form-body">
            <Input label="Company Name" name="companyName" control={control} errors={errors.companyName} />
            <Input label="Model" name="modelName" control={control} errors={errors.modelName} />
            <Input label="Kilometers Traveled" name="km" type="number" control={control} errors={errors.km} />
        </div>
    );
};