/* eslint-disable @typescript-eslint/no-explicit-any */
import { CarItem } from "@type/car";
import { AlertData, ModalType } from "@type/types";
import { Dispatch, SetStateAction } from "react";
import { HTMLFormMethod } from "react-router";

interface Props {
    method: HTMLFormMethod;
    endpoint: string;
    itemData: any;
    fetchRows: () => Promise<void>;
    handleAddRow: (newRow: CarItem) => void;
    setShowModal: (modalData: ModalType) => void;
    setLoading: Dispatch<SetStateAction<boolean>>;
    setShowAlert: (alert: AlertData) => void;
}

export const handleUpsert = ({ method, endpoint, itemData, fetchRows, handleAddRow, setLoading, setShowModal, setShowAlert }: Props) => {
    setLoading(true);
    const url = `${import.meta.env.VITE_BACKEND_URL}:${import.meta.env.VITE_BACKEND_PORT}/${endpoint}`;
    const fetchParams: RequestInit = {
        method,
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify({ ...itemData })
    };
    fetch(url, fetchParams).then((response) => {
        if (!response.ok) {
            throw new Error(`Error ${response.status}`)
        }
        return response.json();
    }).then((response) => {
        if (method === "POST") {
            handleAddRow(response);
        } else {
            fetchRows();
        }
        setShowAlert({
            isVisible: true,
            type: "success",
            message: method === "POST" ? "Item created" : "Item edited"
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