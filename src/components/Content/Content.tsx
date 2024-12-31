import { TableProvider } from "@context/table.provider";
import { useFetchToken } from "@services/authService";
import { Error } from "@utils/Error";
import { Loading } from "@utils/Loading";
import { lazy, Suspense } from "react";
import { ButtonsContainer } from "./ButtonsContainer/ButtonsContainer";
import { Form } from "./ModalContent/Form/Form";
import { ModalContent } from "./ModalContent/ModalContent";
import "./styles/Content.css";
import { Table } from "./Table/Table";

const Modal = lazy(() => import("@utils/Modal"));

export default function Content() {
    const { error } = useFetchToken(import.meta.env.VITE_EMAIL, import.meta.env.VITE_PASSWORD);

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
                            <Form />
                        </ModalContent>
                    </Modal>
                </Suspense>
            </TableProvider>
        </section>
    );
}