import { CarItem } from "src/types/car";
import { TableRowProps } from "src/types/types";

export const CarTableRows = ({ item }: TableRowProps) => {
    const { companyName, modelName, km } = item as CarItem;
    return (
        <>
            <span>
                {companyName}
            </span>
            <span>
                {modelName}
            </span>
            <span>
                {km}
            </span>
        </>
    );
}