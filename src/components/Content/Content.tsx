import { TableProvider } from "@context/table.provider";
import { useFetchToken } from "@services/authService";
import { useModalStorage } from "@store/modal.store";
import { Error } from "@utils/Error";
import { Loading } from "@utils/Loading";
import { lazy, Suspense } from "react";
import { ButtonsContainer } from "./ButtonsContainer/ButtonsContainer";
import { ItemDetails } from "./ItemDetails";
import { Form } from "./ModalContent/Form/Form";
import { ModalContent } from "./ModalContent/ModalContent";
import "./styles/Content.css";
import { Table } from "./Table/Table";

const Modal = lazy(() => import("@utils/Modal"));

export default function Content() {
    const { error } = useFetchToken(import.meta.env.VITE_EMAIL, import.meta.env.VITE_PASSWORD);
    const action = useModalStorage((state) => state.modalData.action);
    const data = useModalStorage((state) => state.modalData.data);
    const setShowModal = useModalStorage((state) => state.setShowModal);

    if (error) {
        return <Error label="Error on authentication" error={error} />;
    }

    return (
        <section className="content">
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