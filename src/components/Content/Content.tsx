import { AddButton } from "./AddButton";
import "./styles/Content.css";
import { Table } from "./Table";

export const Content = () => {
    return (
        <section className="content">
            <AddButton label="Add Car" />
            <Table />
        </section>
    );
}