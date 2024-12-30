import "./styles/Table.css";
import { TableBody } from "./TableBody";

export const Table = () => {
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
            <TableBody />
        </div>
    );
}