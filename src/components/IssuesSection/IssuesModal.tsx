import { ModalContent } from "@components/Content/ModalContent/ModalContent";
import { lazy, Suspense } from "react";
import { IssuesModalBody } from "./IssuesModalBody";
const Modal = lazy(() => import("@utils/Modal"));

export default function IssuesModal() {
    return (
        <Suspense>
            <Modal>
                <ModalContent>
                    <IssuesModalBody />
                </ModalContent>
            </Modal>
        </Suspense>
    );
} 