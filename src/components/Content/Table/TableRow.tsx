import { TableRowProps } from "@type/types";
import { TableRowActions } from "./TableRowActions";

export const TableRow = ({ item }: TableRowProps) => {
    const { companyName, modelName, km } = item;

    return (
        <div className="table-row">
            <span>
                {companyName}
            </span>
            <span>
                {modelName}
            </span>
            <span>
                {km}
            </span>
            <TableRowActions item={item} />
        </div>
    );
}