import { ButtonsContainer } from "@components/Content/ButtonsContainer/ButtonsContainer";
import { Table } from "@components/Content/Table/Table";
import { AppRoutes } from "@type/types";

export default function IssuesTable() {
    return (
        <>
            <ButtonsContainer />
            <Table section={AppRoutes.ISSUES} />
        </>
    );
}