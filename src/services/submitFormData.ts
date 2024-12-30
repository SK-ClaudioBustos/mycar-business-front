import { CarFormValues } from "@components/Content/ModalContent/schema/car.schema";
import { Car, CarItem } from "@type/car";
import { AlertData } from "@type/types";
import { Dispatch, SetStateAction } from "react";

interface Props {
    data: CarFormValues;
    handleAddRow: (newRow: CarItem) => void;
    setShowModal: (showModalState: boolean) => void;
    setLoading: Dispatch<SetStateAction<boolean>>;
    setShowAlert: (alert: AlertData) => void;
}

export const submitFormData = ({ data, handleAddRow, setLoading, setShowModal, setShowAlert }: Props) => {
    setLoading(true);
    const carData = {
        companyName: data.companyName,
        modelName: data.modelName,
        km: data.km ? Number(data.km) : 0
    };
    const url = `${import.meta.env.VITE_BACKEND_URL}:${import.meta.env.VITE_BACKEND_PORT}/api/cars`;
    const fetchParams: RequestInit = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify({ ...carData })
    };
    fetch(url, fetchParams).then((response) => {
        if (!response.ok) {
            console.log("error", response);
            throw new Error(`Error ${response.status}`)
        }
        return response.json();
    }).then((response: Car) => {
        handleAddRow(response);
        setShowAlert({
            isVisible: true,
            type: "success",
            message: "Car added"
        });
    }).catch((error: Error) => {
        setShowAlert({
            isVisible: true,
            type: "error",
            message: `${error.message}`
        });
    }).finally(() => {
        setLoading(false);
        setShowModal(false);
    });
}