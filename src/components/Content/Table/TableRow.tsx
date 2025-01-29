import { TableRowProps } from "@type/types";
import { useLocation } from "react-router";
import { CarTableRows } from "./CarTableRows";
import { IssuesTableRows } from "./IssuesTableRows";
import { TableRowActions } from "./TableRowActions";

export const TableRow = ({ item }: TableRowProps) => {
    const pathname = useLocation().pathname;
    return (
        <div className="table-row">
            {
                pathname === "/cars"
                    ? <CarTableRows item={item} />
                    : <IssuesTableRows item={item} />
            }
            <TableRowActions item={item} />
        </div>
    );
}