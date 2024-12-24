import { useTableContext } from "@context/table.context";
import { Error } from "@utils/Error";
import { Loading } from "@utils/Loading";
import "./styles/Table.css";
import { TableRow } from "./TableRow";

export const Table = () => {
    const { tableRows, loadingTableRows, errorTableRows } = useTableContext();

    return (
        <div className="table box-shadow">
            <div className="table-header-container">
                <div className="table-header">
                    <span>
                        Company
                    </span>
                    <span>
                        Model
                    </span>
                    <span>
                        KM
                    </span>
                    <div className="actions-header"></div>
                </div>
            </div>
            <div className="table-body">
                {
                    loadingTableRows && (
                        <div className="flex-center">
                            <Loading label="Loading Cars" />
                        </div>
                    )
                }
                {
                    errorTableRows && (
                        <div className="flex-center">
                            <Error label="An error has ocurred" error={errorTableRows} />
                        </div>
                    )
                }
                {
                    tableRows.length > 0 && tableRows.map((car) => (
                            <TableRow key={car.id} car={car} />
                        ))
                }
                {
                    !loadingTableRows && !errorTableRows && tableRows.length === 0 && (<div className="flex-center text-blue"><h3>No data for show</h3></div>)
                }
            </div>
        </div>
    );
}