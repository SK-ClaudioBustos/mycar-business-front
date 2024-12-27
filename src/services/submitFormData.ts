import { CarFormValues } from "@components/Content/ModalContent/schema/car.schema";
import { Dispatch, SetStateAction } from "react";

interface Props {
    data: CarFormValues;
    setShowModal: (showModalState: boolean) => void
    setLoading: Dispatch<SetStateAction<boolean>>
}

export const submitFormData = ({ data, setLoading, setShowModal }: Props) => {
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
            throw new Error(`Error ${response.status}: ${response.body}`)
        }
        return response.json();
    }).then((response) => {
        console.log(response);
        // TODO guardar respuesta para poder agregar mas filas en la tabla
    }).catch((error) => {
        console.log(error);
        // TODO controlar errores con una alerta global
    }).finally(() => {
        setLoading(false);
        setShowModal(false);
    });
}