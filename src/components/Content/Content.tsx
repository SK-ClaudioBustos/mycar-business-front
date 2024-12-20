import { useFetchToken } from "@services/authService";
import { Loading } from "@utils/Loading";
import { ButtonsContainer } from "./ButtonsContainer/ButtonsContainer";
import "./styles/Content.css";
import { Table } from "./Table";
import { Error } from "@utils/Error";

export default function Content() {
    const { loading, error } = useFetchToken(import.meta.env.VITE_EMAIL, import.meta.env.VITE_PASSWORD);

    if (loading) {
        return <Loading label="Loading Content" />;
    }
    if (error) {
        return <Error label="Error on authentication" />;
    }

    return (
        <section className="content">
            <ButtonsContainer />
            <Table />
        </section>
    );
}