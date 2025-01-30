import { Car, CarItem } from "@type/car";
import { Parameters } from "@type/types";

export const fetchCarsRows = async ({ setError, setLoading }: Parameters) => {
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
        const result = await fetch(API_URL, requestParams)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Fetch Cars Data Failed");
                }
                return response.json();
            })
            .then((response: Car[]) => {
                const rows: CarItem[] = response.map((car) => ({
                    id: car.id,
                    companyName: car.companyName,
                    km: car.km,
                    modelName: car.modelName
                }));
                return rows;
            })
            .catch((error) => { setError(error) });

        return result;
    } catch (error) {
        setError(error as Error);
    } finally {
        setLoading(false);
    }
}