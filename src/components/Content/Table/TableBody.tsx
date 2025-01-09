import { useTableContext } from "@context/table.context";
import { Error } from "@utils/Error";
import { Loading } from "@utils/Loading";
import { TableRow } from "./TableRow";
import "./styles/TableBody.css";

export const TableBody = () => {
    const { tableRows, loadingTableRows, errorTableRows } = useTableContext();

    if (loadingTableRows) {
        return <Loading label="Loading Rows" />;
    }

    if (errorTableRows) {
        return (
            <div className="table-body flex-center">
                <Error label="An error has occurred" error={errorTableRows} />
            </div>
        );
    }

    if (tableRows.length === 0) {
        return (
            <div className="table-body flex-center text-blue size-100">
                <h3>No data to show</h3>
            </div>
        );
    }

    return (
        <div className="table-body">
            {tableRows.map((car) => (
                <TableRow key={car.id} item={car} />
            ))}
        </div>
    );
};
