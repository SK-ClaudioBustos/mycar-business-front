import { useTableContext } from "@context/table.context";
import { handleDeleteCar } from "@services/car/handleDelete";
import { useAlertStorage } from "@store/alert.store";
import { useModalStorage } from "@store/modal.store";
import { Button } from "@utils/Button";
import { Loading } from "@utils/Loading";
import { useState } from "react";
import "./styles/ConfirmDelete.css";

interface Props {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: Record<string, any> | null | undefined;
}

export const ConfirmDelete = ({ data }: Props) => {
    const { handleDeleteRow } = useTableContext();
    const setAlert = useAlertStorage((state) => state.setAlert);
    const setShowModal = useModalStorage((state) => state.setShowModal);
    const [loading, setLoading] = useState(false);

    const handleConfirm = () => {
        handleDeleteCar({ id: data?.id, setShowModal, handleDeleteRow, setAlert, setLoading });
    }

    if (loading) {
        <Loading label="Deleting..." />
    }

    return (
        <div className="confirmation-content">
            <p>Are you sure?</p>
            <div className="confirmation-buttons">
                <Button className="bg-blue" onClick={handleConfirm} ariaLabel="Agree delete confirmation" height="40px" width="100%" >Delete</Button>
                <Button className="bg-gray" onClick={() => setShowModal({ showModal: false })} ariaLabel="Disagree delete confirmation" height="40px" width="100%" >Cancel</Button>
            </div>
        </div>
    );
}