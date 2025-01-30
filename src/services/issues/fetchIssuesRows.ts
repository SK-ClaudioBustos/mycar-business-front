import { Parameters } from "@type/types";


export const fetchIssuesRows = async ({ setError, setLoading }: Parameters) => {
    try {
        setLoading(true);
        const API_URL = `${import.meta.env.VITE_BACKEND_URL}:${import.meta.env.VITE_BACKEND_PORT}/api/issues?page=0&size=5&sort=-createdAt`;
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
                    throw new Error("Fetch Issues Data Failed");
                }
                return response.json();
            })
            .then((response) => {
                console.log(response);
                return [];
            })
            .catch((error) => { setError(error) });

        return result;
    } catch (error) {
        setError(error as Error);
    } finally {
        setLoading(false);
    }
}