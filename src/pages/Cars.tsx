import CarModal from "@components/CarSection/CarModal";
import CarTable from "@components/CarSection/CarTable";
import { TableProvider } from "@context/table.provider";
import { fetchCarsRows } from "@services/car/fetchCarsRows";


export const Cars = () => {
    return (
        <section style={{ margin: "100px 0 0" }}>
            <TableProvider fetchRows={fetchCarsRows}>
                <CarTable />
                <CarModal />
            </TableProvider>
        </section>
    );
};