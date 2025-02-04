import { ModalContent } from "@components/Content/ModalContent/ModalContent";
import { useModalStorage } from "@store/modal.store";
import { AppRoutes, ModalAction } from "@type/types";
import { lazy, ReactNode, Suspense } from "react";
import { getIssuesFormProps } from "./getIssuesFormProps";

const Modal = lazy(() => import("@utils/Modal"));
const Form = lazy(() => import("@components/Content/ModalContent/Form/Form"));
const ItemDetails = lazy(() => import("@components/Content/ModalContent/ItemDetails/ItemDetails"));
const ConfirmDelete = lazy(() => import("@components/Content/ModalContent/ConfirmDelete"));

export default function IssuesModal() {
    const action = useModalStorage((state) => state.modalData.action);
    const data = useModalStorage((state) => state.modalData.data);
    const CONTENT_MAP: Record<ModalAction, ReactNode> = {
        "showDetails": <ItemDetails section={AppRoutes.ISSUES} data={data} />,
        "create": <Form {...getIssuesFormProps("POST", data)} />,
        "edit": <Form {...getIssuesFormProps("PUT", data)} />,
        "delete": <ConfirmDelete data={data} />
    };
    return (
        <Suspense>
            <Modal>
                <ModalContent>
                    {
                        CONTENT_MAP[action as ModalAction]
                    }
                </ModalContent>
            </Modal>
        </Suspense>
    );
} 