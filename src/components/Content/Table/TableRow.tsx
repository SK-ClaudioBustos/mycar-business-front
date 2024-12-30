import { CarItem } from "@type/car";
import { TableRowActions } from "./TableRowActions";

interface Props {
    item: CarItem
}

export const TableRow = ({ item }: Props) => {
    const { id, companyName, modelName, km } = item;

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
            <TableRowActions id={id} />
        </div>
    );
}