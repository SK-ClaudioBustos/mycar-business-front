/* eslint-disable @typescript-eslint/no-explicit-any */
import { ModalContent } from "@components/Content/ModalContent/ModalContent";
import { carFormDefaultValues, carSchema } from "@components/Content/ModalContent/schema/car.schema";
import { AppRoutes, ModalAction } from "@type/types";
import { lazy, Suspense, useMemo } from "react";
const Modal = lazy(() => import("@utils/Modal"));
const Form = lazy(() => import("@components/Content/ModalContent/Form/Form"));
const ItemDetails = lazy(() => import("@components/Content/ModalContent/ItemDetails/ItemDetails"));
const ConfirmDelete = lazy(() => import("@components/Content/ModalContent/ConfirmDelete"));

const getFormProps = (action: "POST" | "PUT", data: any) => ({
    action,
    defaultValues: action === "POST" ? carFormDefaultValues : { companyName: data?.companyName, modelName: data?.modelName, km: data?.km },
    schema: carSchema,
    section: AppRoutes.CARS,
    data
});

export default function CarModal({ action, data }: { action: ModalAction | undefined; data: any }) {
    const CONTENT_MAP = useMemo(() => ({
        "showDetails": <ItemDetails section={AppRoutes.CARS} data={data} />,
        "create": <Form {...getFormProps("POST", data)} />,
        "edit": <Form {...getFormProps("PUT", data)} />,
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