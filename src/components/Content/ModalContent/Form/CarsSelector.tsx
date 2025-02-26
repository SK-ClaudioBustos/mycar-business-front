import { fetchCarsOptions } from "@services/car/fetchCarsOptions";
import { ErrorData, SelectOption } from "@type/types";
import { Select } from "@utils/inputs-components/Select";
import { useEffect, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function CarsSelector({ control, errors }: { control: any; errors: any }) {
    const [options, setOptions] = useState<SelectOption[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<ErrorData>(null);

    useEffect(() => {
        fetchCarsOptions({ setOptions, setLoading, setError });
    }, []);

    return (
        <Select
            label="Car"
            placeholder="Select a car"
            name="carId"
            options={options}
            control={control}
            errors={errors.carId}
            loading={loading}
            error={error}
        />
    );
}