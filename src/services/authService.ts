import { ErrorData } from "@type/types";
import { useEffect, useState } from "react";

interface FetchData {
    error: ErrorData
}

export const useFetchToken = (email: string, password: string): FetchData => {
    const [error, setError] = useState<ErrorData>(null);

    const fetchToken = async () => {
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
                throw new Error(`Error ${response.status}: failed to fetch token`);
            }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            setError(error);
        }
    }

    useEffect(() => {
        fetchToken();
    }, []);
    return {
        error,
    };
};
