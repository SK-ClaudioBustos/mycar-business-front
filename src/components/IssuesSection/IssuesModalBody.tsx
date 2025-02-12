import { useModalStorage } from "@store/modal.store";
import { AppRoutes, ModalAction } from "@type/types";
import { lazy, ReactNode } from "react";
import { getIssuesFormProps } from "./getIssuesFormProps";
const Form = lazy(() => import("@components/Content/ModalContent/Form/Form"));
const ItemDetails = lazy(() => import("@components/Content/ModalContent/ItemDetails/ItemDetails"));
const ConfirmDelete = lazy(() => import("@components/Content/ModalContent/ConfirmDelete"));

export const IssuesModalBody = () => {
    const action = useModalStorage((state) => state.modalData.action);
    const data = useModalStorage((state) => state.modalData.data);
    const CONTENT_MAP: Record<ModalAction, ReactNode> = {
        "showDetails": <ItemDetails section={AppRoutes.ISSUES} data={data} />,
        "create": <Form {...getIssuesFormProps("POST", data)} />,
        "edit": <Form {...getIssuesFormProps("PUT", data)} />,
        "delete": <ConfirmDelete data={data} />
    };
    return (
        <>
            {
                CONTENT_MAP[action as ModalAction]
            }
        </>
    );
}