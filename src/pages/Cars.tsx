import { ButtonsContainer } from "@components/Content/ButtonsContainer/ButtonsContainer";
import { ItemDetails } from "@components/Content/ItemDetails";
import { Form } from "@components/Content/ModalContent/Form/Form";
import { ModalContent } from "@components/Content/ModalContent/ModalContent";
import { Table } from "@components/Content/Table/Table";
import { TableProvider } from "@context/table.provider";
import { useModalStorage } from "@store/modal.store";
import { Loading } from "@utils/Loading";
import { lazy, Suspense } from "react";

const Modal = lazy(() => import("@utils/Modal"));

export default function Cars() {
    const action = useModalStorage((state) => state.modalData.action);
    const data = useModalStorage((state) => state.modalData.data);
    const setShowModal = useModalStorage((state) => state.setShowModal);

    return (
        <section style={{ margin: "100px 0 0"}}>
            <TableProvider>
                <ButtonsContainer />
                <Table />
                <Suspense fallback={<Loading label="Loading Modal" />}>
                    <Modal>
                        <ModalContent>
                            {
                                action === "showDetails"
                                    ? <ItemDetails data={data} setShowModal={setShowModal} />
                                    : <Form action={action} data={data} setShowModal={setShowModal} />
                            }
                        </ModalContent>
                    </Modal>
                </Suspense>
            </TableProvider>
        </section>
    );
}