import { Car, CarItem } from "@type/car";
import { DataSchema } from "@type/fetch";
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
        const result: CarItem[] = await fetch(API_URL, requestParams)
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
            .catch((error) => { setError(error) }) ?? [];

        const carsPaged: DataSchema = {
            content: result,
            empty: false,
            first: false,
            last: false,
            number: 0,
            pageable: {
                offset: 0,
                paged: false,
                pageNumber: 0,
                pageSize: 0,
                sort: {
                    empty: false,
                    sorted: false,
                    unsorted: false
                },
                unpaged: false
            },
            numberOfElements: result.length,
            size: 0,
            sort: {
                empty: false,
                sorted: false,
                unsorted: false
            },
            totalElements: 0,
            totalPages: 0
        }

        return carsPaged;
    } catch (error) {
        setError(error as Error);
    } finally {
        setLoading(false);
    }
}