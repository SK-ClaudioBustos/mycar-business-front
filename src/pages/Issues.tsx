import { ButtonsContainer } from "@components/Content/ButtonsContainer/ButtonsContainer";
import { ConfirmDelete } from "@components/Content/ModalContent/ConfirmDelete";
import { Form } from "@components/Content/ModalContent/Form/Form";
import { ItemDetails } from "@components/Content/ModalContent/ItemDetails/ItemDetails";
import { ModalContent } from "@components/Content/ModalContent/ModalContent";
import { issueFormDefaultValues, issueSchema } from "@components/Content/ModalContent/schema/issues.schema";
import { Table } from "@components/Content/Table/Table";
import { TableProvider } from "@context/table.provider";
import { useModalStorage } from "@store/modal.store";
import { AppRoutes, ModalAction } from "@type/types";
import { lazy, ReactNode, Suspense } from "react";

const Modal = lazy(() => import("@utils/Modal"));

export const Issues = () => {
    const action = useModalStorage((state) => state.modalData.action);
    const data = useModalStorage((state) => state.modalData.data);
    const CONTENT_MAP: Record<ModalAction, ReactNode> = {
        "showDetails": <ItemDetails section={AppRoutes.ISSUES} data={data} />,
        "create": <Form section={AppRoutes.ISSUES} schema={issueSchema} defaultValues={issueFormDefaultValues} action={"POST"} data={data} />,
        "edit": <Form section={AppRoutes.ISSUES} schema={issueSchema} defaultValues={{}} action={"PUT"} data={data} />,
        "delete": <ConfirmDelete data={data} />
    };
    return (
        <section style={{ margin: "100px 0 0" }}>
            <TableProvider section={AppRoutes.ISSUES}>
                <ButtonsContainer />
                <Table section={AppRoutes.ISSUES} />
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