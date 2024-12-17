import { ErrorData } from "@type/types";
import { useEffect, useState } from "react";

interface FetchData {
    loading: boolean
    error: ErrorData
}

export const useFetchToken = (email: string, password: string): FetchData => {
    const [error, setError] = useState<ErrorData>(null);
    const [loading, setLoading] = useState(false);

    const fetchToken = async () => {
        setLoading(true);
        const LOGIN_URL = `${import.meta.env.VITE_BACKEND_URL}:${import.meta.env.VITE_BACKEND_PORT}/api/auth/login`;
        try {
            const requestParams: RequestInit = {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password })
            }

            const response = await fetch(LOGIN_URL, requestParams);
            if (!response.ok) {
                throw new Error(`Error ${response.status}: Failed to fetch token`);
            }

        } catch (error) {
            setError(error as Error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchToken();
    }, []);

    return {
        error,
        loading
    };
};
