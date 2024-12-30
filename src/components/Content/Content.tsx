import { TableProvider } from "@context/table.provider";
import { useFetchToken } from "@services/authService";
import { Error } from "@utils/Error";
import { Loading } from "@utils/Loading";
import { lazy } from "react";
import { ButtonsContainer } from "./ButtonsContainer/ButtonsContainer";
import { Form } from "./ModalContent/Form";
import { ModalContent } from "./ModalContent/ModalContent";
import "./styles/Content.css";
import { Table } from "./Table/Table";

const Modal = lazy(() => import("@utils/Modal"));

export default function Content() {
    const { loading, error } = useFetchToken(import.meta.env.VITE_EMAIL, import.meta.env.VITE_PASSWORD);

    if (loading) {
        return <Loading label="Loading Content" />;
    }
    if (error) {
        return <Error label="Error on authentication" error={error} />;
    }

    return (
        <section className="content">
            <TableProvider>
                <ButtonsContainer />
                <Table />
                <Modal>
                    <ModalContent title="Add Car">
                        <Form />
                    </ModalContent>
                </Modal>
            </TableProvider>
        </section>
    );
}