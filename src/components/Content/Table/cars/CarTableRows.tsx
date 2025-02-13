import { CarItem } from "src/types/car";

export const CarTableRows = ({ item }: { item: CarItem }) => {
    const { companyName, modelName, km } = item;
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