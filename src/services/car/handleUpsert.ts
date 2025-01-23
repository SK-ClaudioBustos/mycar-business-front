import { CarFormValues } from "@components/Content/ModalContent/schema/car.schema";
import { Car, CarItem } from "@type/car";
import { AlertData, ModalAction, ModalType } from "@type/types";
import { Dispatch, SetStateAction } from "react";

interface Props {
    data: CarFormValues;
    action: ModalAction | undefined;
    id?: string;
    fetchRows: () => Promise<void>;
    handleAddRow: (newRow: CarItem) => void;
    setShowModal: (modalData: ModalType) => void;
    setLoading: Dispatch<SetStateAction<boolean>>;
    setShowAlert: (alert: AlertData) => void;
}

export const handleUpsert = ({ data, action, id, fetchRows, handleAddRow, setLoading, setShowModal, setShowAlert }: Props) => {
    setLoading(true);
    const carData = {
        companyName: data.companyName,
        modelName: data.modelName,
        km: data.km ? Number(data.km) : 0
    };
    const method = action === "create" ? "POST" : "PUT";
    const endpoint = action === "create" ? "api/cars" : `api/cars/${id}`;
    const url = `${import.meta.env.VITE_BACKEND_URL}:${import.meta.env.VITE_BACKEND_PORT}/${endpoint}`;
    const fetchParams: RequestInit = {
        method,
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify({ ...carData })
    };
    fetch(url, fetchParams).then((response) => {
        if (!response.ok) {
            throw new Error(`Error ${response.status}`)
        }
        return response.json();
    }).then((response: Car) => {
        if (action === "create") {
            handleAddRow(response);
        } else {
            fetchRows();
        }
        setShowAlert({
            isVisible: true,
            type: "success",
            message: action === "create" ? "Car added successfully" : "Car edited successfully"
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