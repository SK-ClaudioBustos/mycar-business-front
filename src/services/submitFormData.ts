import { CarFormValues } from "@components/Content/ModalContent/schema/car.schema";
import { Car, CarItem } from "@type/car";
import { AlertData, ModalAction, ModalType } from "@type/types";
import { Dispatch, SetStateAction } from "react";

interface Props {
    data: CarFormValues;
    action: ModalAction | undefined;
    handleAddRow: (newRow: CarItem) => void;
    setShowModal: (modalData: ModalType) => void;
    setLoading: Dispatch<SetStateAction<boolean>>;
    setShowAlert: (alert: AlertData) => void;
}

export const submitFormData = ({ data, action, handleAddRow, setLoading, setShowModal, setShowAlert }: Props) => {
    setLoading(true);
    const carData = {
        companyName: data.companyName,
        modelName: data.modelName,
        km: data.km ? Number(data.km) : 0
    };
    const endpointURL = action === "create" ? "api/cars" : "";
    const url = `${import.meta.env.VITE_BACKEND_URL}:${import.meta.env.VITE_BACKEND_PORT}/${endpointURL}`;
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
            message: action === "create" ? "Car added" : "Car edited"
        });
    }).catch((error: Error) => {
        setShowAlert({
            isVisible: true,
            type: "error",
            message: `${error.message}`
        });
    }).finally(() => {
        setLoading(false);
        setShowModal({
            showModal: false,
        });
    });
}