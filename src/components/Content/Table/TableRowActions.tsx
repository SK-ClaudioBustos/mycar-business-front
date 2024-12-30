import { useTableContext } from "@context/table.context";
import EyeIcon from "@icons/eye.svg?react";
import PencilIcon from "@icons/pencil.svg?react";
import TrashIcon from "@icons/trash.svg?react";
import { useAlertStorage } from "@store/alert.store";
import { ButtonData } from "@type/types";
import { IconSVG } from "@utils/IconSVG";
import { ActionButton } from "../ButtonsContainer/ActionButton";

export const TableRowActions = ({ id }: { id: number }) => {
    const { handleDeleteRow } = useTableContext();
    const setAlert = useAlertStorage((state) => state.setAlert);

    const handleDelete = () => {
        try {
            const url = `${import.meta.env.VITE_BACKEND_URL}:${import.meta.env.VITE_BACKEND_PORT}/api/cars/${id}`;
            const fetchParams: RequestInit = {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include"
            };
            fetch(url, fetchParams)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`Ocurrio un erro extraño ${response}`);
                    }
                    return response.json();
                })
                .then((response) => {
                    handleDeleteRow(response.id);
                    setAlert({
                        isVisible: true,
                        message: "The car was deleted successfully"
                    });
                })
                .catch((error) => {
                    // TODO informar de que hubo un error al eliminar la fila
                    console.log(error);
                });
        } catch (error) {
            // TODO informar de que hubo un error al eliminar la fila
            console.log(error);
        }
    }

    const BUTTONS: ButtonData[] = [
        {
            id: "edit-button",
            tooltipLabel: "Edit",
            Icon: PencilIcon,
        },
        {
            id: "delete",
            tooltipLabel: "Delete",
            Icon: TrashIcon,
            function: handleDelete
        },
        {
            id: "details",
            tooltipLabel: "Show Details",
            Icon: EyeIcon,
        }
    ];
    return (
        <div className="actions">
            {
                BUTTONS.map((button) => {
                    const idButton = `${button.id}-${id}`;
                    return (
                        (
                            <ActionButton
                                key={idButton}
                                id={idButton}
                                tooltipLabel={button.tooltipLabel}
                                height="40px" width="40px"
                                borderRadius="50%"
                                onClick={button?.function || undefined}
                            >
                                <IconSVG Icon={button.Icon} size={24} />
                            </ActionButton>
                        )
                    );
                })
            }
        </div>
    );
}