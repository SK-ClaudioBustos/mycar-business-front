/* eslint-disable @typescript-eslint/no-explicit-any */
import { ModalContent } from "@components/Content/ModalContent/ModalContent";
import { AppRoutes, ModalAction } from "@type/types";
import { lazy, Suspense, useMemo } from "react";
import { getCarsFormProps } from "./getCarsFormProps";
import { useModalStorage } from "@store/modal.store";
const Modal = lazy(() => import("@utils/Modal"));
const Form = lazy(() => import("@components/Content/ModalContent/Form/Form"));
const ItemDetails = lazy(() => import("@components/Content/ModalContent/ItemDetails/ItemDetails"));
const ConfirmDelete = lazy(() => import("@components/Content/ModalContent/ConfirmDelete"));

export default function CarModal() {
    const action = useModalStorage((state) => state.modalData.action);
    const data = useModalStorage((state) => state.modalData.data);
    const CONTENT_MAP = useMemo(() => ({
        "showDetails": <ItemDetails section={AppRoutes.CARS} data={data} />,
        "create": <Form {...getCarsFormProps("POST", data)} />,
        "edit": <Form {...getCarsFormProps("PUT", data)} />,
        "delete": <ConfirmDelete data={data} />
    }), [action, data]);

    return (
        <Suspense fallback={<div>Cargando...</div>}>
            <Modal>
                <ModalContent>
                    {CONTENT_MAP[action as ModalAction]}
                </ModalContent>
            </Modal>
        </Suspense>
    );
};