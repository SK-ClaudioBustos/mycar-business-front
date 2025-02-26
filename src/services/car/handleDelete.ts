import { AlertData, ModalType } from "@type/types";
import { Dispatch, SetStateAction } from "react";

interface Props {
    id: string
    setShowModal: (modalData: ModalType) => void
    handleDeleteRow: (idRow: number) => void
    setAlert: (alert: AlertData) => void
    setLoading: Dispatch<SetStateAction<boolean>>
}

export const handleDeleteCar = ({ id, setShowModal, handleDeleteRow, setAlert, setLoading }: Props) => {
    setLoading(true);
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
                throw new Error(`An error has ocurred: ${response}`);
            }
            return response.json();
        })
        .then((response) => {
            handleDeleteRow(response.id);
            setAlert({
                isVisible: true,
                message: "The car was deleted successfully"
            });
            setShowModal({ showModal: false });
        })
        .catch((error) => {
            setAlert({
                isVisible: true,
                type: "error",
                message: `Error ${error.status}`
            });
        })
        .finally(() => setLoading(false));
}