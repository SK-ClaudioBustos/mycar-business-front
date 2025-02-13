import { TableRowProps } from "@type/types";
import { isCarItem } from "@functions/isCarItem";
import { CarTableRows } from "./cars/CarTableRows";
import { IssuesTableRows } from "./issues/IssuesTableRows";
import { TableRowActions } from "./TableRowActions";

export const TableRow = ({ item }: TableRowProps) => {
    return (
        <div className="table-row">
            {
                isCarItem(item)
                    ? <CarTableRows item={item} />
                    : <IssuesTableRows item={item} />
            }
            <TableRowActions item={item} />
        </div>
    );
}