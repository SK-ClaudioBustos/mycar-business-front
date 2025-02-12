import { useModalStorage } from "@store/modal.store";
import { AppRoutes, ModalAction } from "@type/types";
import { lazy, useMemo } from "react";
import { getCarsFormProps } from "./getCarsFormProps";
const Form = lazy(() => import("@components/Content/ModalContent/Form/Form"));
const ItemDetails = lazy(() => import("@components/Content/ModalContent/ItemDetails/ItemDetails"));
const ConfirmDelete = lazy(() => import("@components/Content/ModalContent/ConfirmDelete"));

export const CarsModalBody = () => {
    const action = useModalStorage((state) => state.modalData.action);
    const data = useModalStorage((state) => state.modalData.data);
    const CONTENT_MAP = useMemo(() => ({
        "showDetails": <ItemDetails section={AppRoutes.CARS} data={data} />,
        "create": <Form {...getCarsFormProps("POST", data)} />,
        "edit": <Form {...getCarsFormProps("PUT", data)} />,
        "delete": <ConfirmDelete data={data} />
    }), [action, data]);
    return (
        <>
            {CONTENT_MAP[action as ModalAction]}
        </>
    );
}