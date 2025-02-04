import CarModal from "@components/CarSection/CarModal";
import CarTable from "@components/CarSection/CarTable";
import { TableProvider } from "@context/table.provider";
import { fetchCarsRows } from "@services/car/fetchCarsRows";
import { useModalStorage } from "@store/modal.store";


export const Cars = () => {
    const action = useModalStorage((state) => state.modalData.action);
    const data = useModalStorage((state) => state.modalData.data);

    return (
        <section style={{ margin: "100px 0 0" }}>
            <TableProvider fetchRows={fetchCarsRows}>
                <CarTable />
                <CarModal action={action} data={data} />
            </TableProvider>
        </section>
    );
};