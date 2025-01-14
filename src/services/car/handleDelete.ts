import { AlertData } from "@type/types";

interface Props {
    id: string
    handleDeleteRow: (idRow: number) => void
    setAlert: (alert: AlertData) => void
}

export const handleDeleteCar = ({ id, handleDeleteRow, setAlert }: Props) => {
    try {
        const url = `${import.meta.env.VITE_BACKEND_URL}:${import.meta.env.VITE_BACKEND_PORT}/api/cars/${id}`;
        const fetchParams: RequestInit = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include"
        };
        fetch(url, fetchParams)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Ocurrio un erro extraño ${response}`);
                }
                return response.json();
            })
            .then((response) => {
                handleDeleteRow(response.id);
                setAlert({
                    isVisible: true,
                    message: "The car was deleted successfully"
                });
            })
            .catch((error) => {
                setAlert({
                    isVisible: true,
                    type: "error",
                    message: `Error ${error.status}`
                });
            });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        setAlert({
            isVisible: true,
            type: "error",
            message: `Error ${error?.status}`
        });
    }
}