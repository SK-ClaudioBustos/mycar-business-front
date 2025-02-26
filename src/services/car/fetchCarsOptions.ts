import { Car } from "@type/car";
import { Parameters, SelectOption } from "@type/types";
import { Dispatch, SetStateAction } from "react";

interface Params extends Parameters {
    setOptions: Dispatch<SetStateAction<SelectOption[]>>
}

export const fetchCarsOptions = async ({ setOptions, setError, setLoading }: Params) => {
    try {
        setLoading(true);
        const API_URL = `${import.meta.env.VITE_BACKEND_URL}:${import.meta.env.VITE_BACKEND_PORT}/api/cars`;
        const requestParams: RequestInit = {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            }
        }
        await fetch(API_URL, requestParams)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("error on getting the cars");
                }
                return response.json();
            })
            .then((response: Car[]) => {
                const rows: SelectOption[] = response.map((car) => ({
                    value: `${car.id}`,
                    option: `${car.companyName} ${car.modelName}`
                }));
                setOptions(rows);
            })
            .catch((error) => { setError(error) });
    } catch (error) {
        setError(error as Error);
    } finally {
        setLoading(false);
    }
}