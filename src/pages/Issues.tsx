import IssuesModal from "@components/IssuesSection/IssuesModal";
import IssuesTable from "@components/IssuesSection/IssuesTable";
import { TableProvider } from "@context/table.provider";
import { fetchIssuesRows } from "@services/issues/fetchIssuesRows";

export const Issues = () => {
    return (
        <section style={{ margin: "100px 0 0" }}>
            <TableProvider fetchRows={fetchIssuesRows}>
                <IssuesTable />
                <IssuesModal />
            </TableProvider>
        </section>
    );
}