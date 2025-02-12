import { ModalContent } from "@components/Content/ModalContent/ModalContent";
import { lazy, Suspense } from "react";
import { CarsModalBody } from "./CarsModalBody";
const Modal = lazy(() => import("@utils/Modal"));

export default function CarModal() {


    return (
        <Suspense fallback={<div>Cargando...</div>}>
            <Modal>
                <ModalContent>
                    <CarsModalBody />
                </ModalContent>
            </Modal>
        </Suspense>
    );
};