import { ButtonsContainer } from "@components/Content/ButtonsContainer/ButtonsContainer";
import { ItemDetails } from "@components/Content/ModalContent/ItemDetails";
import { Form } from "@components/Content/ModalContent/Form/Form";
import { ModalContent } from "@components/Content/ModalContent/ModalContent";
import { Table } from "@components/Content/Table/Table";
import { TableProvider } from "@context/table.provider";
import { useModalStorage } from "@store/modal.store";
import { Loading } from "@utils/Loading";
import { lazy, ReactNode, Suspense } from "react";
import { ModalAction } from "@type/types";
import { ConfirmDelete } from "@components/Content/ModalContent/ConfirmDelete";

const Modal = lazy(() => import("@utils/Modal"));

export const Cars = () => {
    const action = useModalStorage((state) => state.modalData.action);
    const data = useModalStorage((state) => state.modalData.data);
    const setShowModal = useModalStorage((state) => state.setShowModal);
    const CONTENT_MAP: Record<ModalAction, ReactNode> = {
        "showDetails": <ItemDetails data={data} setShowModal={setShowModal} />,
        "create": <Form action={action} data={data} setShowModal={setShowModal} />,
        "edit": <Form action={action} data={data} setShowModal={setShowModal} />,
        "delete": <ConfirmDelete data={data}/>
    };
    return (
        <section style={{ margin: "100px 0 0" }}>
            <TableProvider>
                <ButtonsContainer />
                <Table />
                <Suspense fallback={<Loading label="Loading Modal" />}>
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