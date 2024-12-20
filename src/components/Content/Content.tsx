import { ButtonsContainer } from "./ButtonsContainer/ButtonsContainer";
import "./styles/Content.css";
import { Table } from "./Table";

export const Content = () => {
    return (
        <section className="content">
            <ButtonsContainer />
            <Table />
        </section>
    );
}