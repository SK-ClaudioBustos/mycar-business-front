import { Input } from "@utils/inputs-components/Input";
import { Select } from "@utils/inputs-components/Select";
import { useWatch } from "react-hook-form";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function IssueTypeSelector({ control, errors }: { control: any; errors: any }) {
    // Observar el valor del campo "typeId" usando useWatch
    const selectedType = useWatch({
        control,
        name: "typeId", // Nombre del campo del Select
        defaultValue: "disabled", // Valor predeterminado si no hay selección
    });

    return (
        <>
            <Select
                label="Type"
                placeholder="Select a issue type"
                name="typeId"
                options={[
                    { value: "1", option: "Measured with distance" },
                    { value: "2", option: "Measured with date" },
                ]}
                control={control}
                errors={errors.typeId}
            />

            {/* Mostrar el input "Notification Distance" si el tipo es "1" */}
            {selectedType === "1" && (
                <Input
                    label="Notification Distance"
                    name="notificationDistance"
                    type="number"
                    control={control}
                    errors={errors.notificationDistance}
                />
            )}

            {/* Mostrar el input "Notification Days" si el tipo es "2" */}
            {selectedType === "2" && (
                <Input
                    label="Notification Days"
                    name="notificationDays"
                    type="number"
                    control={control}
                    errors={errors.notificationDays}
                />
            )}
        </>
    );
}