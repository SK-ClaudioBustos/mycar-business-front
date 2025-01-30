import { ButtonsContainer } from "@components/Content/ButtonsContainer/ButtonsContainer";
import { ConfirmDelete } from "@components/Content/ModalContent/ConfirmDelete";
import { Form } from "@components/Content/ModalContent/Form/Form";
import { ItemDetails } from "@components/Content/ModalContent/ItemDetails/ItemDetails";
import { ModalContent } from "@components/Content/ModalContent/ModalContent";
import { carFormDefaultValues, carSchema } from "@components/Content/ModalContent/schema/car.schema";
import { Table } from "@components/Content/Table/Table";
import { TableProvider } from "@context/table.provider";
import { fetchCarsRows } from "@services/car/fetchCarsRows";
import { useModalStorage } from "@store/modal.store";
import { AppRoutes, ModalAction } from "@type/types";
import { lazy, ReactNode, Suspense } from "react";

const Modal = lazy(() => import("@utils/Modal"));

export const Cars = () => {
    const action = useModalStorage((state) => state.modalData.action);
    const data = useModalStorage((state) => state.modalData.data);
    const CONTENT_MAP: Record<ModalAction, ReactNode> = {
        "showDetails": <ItemDetails section={AppRoutes.CARS} data={data} />,
        "create": <Form
            action={"POST"}
            defaultValues={carFormDefaultValues}
            schema={carSchema}
            section={AppRoutes.CARS}
            data={data}
        />,
        "edit": <Form
            action={"PUT"}
            defaultValues={{ companyName: data?.companyName, modelName: data?.modelName, km: data?.km }}
            schema={carSchema}
            section={AppRoutes.CARS}
            data={data}
        />,
        "delete": <ConfirmDelete data={data} />
    };
    return (
        <section style={{ margin: "100px 0 0" }}>
            <TableProvider fetchRows={fetchCarsRows}>
                <ButtonsContainer />
                <Table section={AppRoutes.CARS} />
                <Suspense>
                    <Modal>
                        <ModalContent>
                            {
                                CONTENT_MAP[action as ModalAction]
                            }
                        </ModalContent>
                    </Modal>
                </Suspense>
            </TableProvider>
        </section>
    );
}