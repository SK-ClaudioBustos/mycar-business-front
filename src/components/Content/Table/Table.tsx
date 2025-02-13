import { CarsHeaders } from "./cars/CarsHeaders";
import "./styles/Table.css";
import { TableBody } from "./TableBody";
import { IssuesHeaders } from "./issues/IssuesHeaders";
import { AppRoutes, SectionMap } from "src/types/types";

export const Table = ({ section }: { section: AppRoutes }) => {
    const HEADERS: SectionMap = {
        "/cars": <CarsHeaders />,
        "/issues": <IssuesHeaders />
    }
    return (
        <div className="table box-shadow">
            {
                HEADERS[section]
            }
            <TableBody />
        </div>
    );
}