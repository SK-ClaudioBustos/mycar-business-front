import { useTableContext } from "@context/table.context";
import EyeIcon from "@icons/eye.svg?react";
import PencilIcon from "@icons/pencil.svg?react";
import TrashIcon from "@icons/trash.svg?react";
import { handleDeleteCar } from "@services/car/handleDelete";
import { useAlertStorage } from "@store/alert.store";
import { useModalStorage } from "@store/modal.store";
import { ButtonData, TableRowProps } from "@type/types";
import { IconSVG } from "@utils/IconSVG";
import { ActionButton } from "../ButtonsContainer/ActionButton";

export const TableRowActions = ({ item }: TableRowProps) => {
    const { id } = item;
    const { handleDeleteRow } = useTableContext();
    const setShowModal = useModalStorage((state) => state.setShowModal);
    const setAlert = useAlertStorage((state) => state.setAlert);

    const handleDelete = () => {
        handleDeleteCar({ id, handleDeleteRow, setAlert });
    }

    const handleEdit = () => {
        setShowModal({
            showModal: true,
            action: "edit",
            title: "Edit Car",
            data: item
        });
    }

    const handleShowDetails = () => {
        setShowModal({
            showModal: true,
            action: "showDetails",
            title: "Show Details",
            data: item
        });
    }

    const BUTTONS: ButtonData[] = [
        {
            id: "edit-button",
            tooltipLabel: "Edit",
            Icon: PencilIcon,
            labelArea: `Edit item with id ${id}`,
            function: handleEdit
        },
        {
            id: "delete",
            tooltipLabel: "Delete",
            Icon: TrashIcon,
            labelArea: `Delete item with id ${id}`,
            function: handleDelete
        },
        {
            id: "details",
            tooltipLabel: "Show Details",
            Icon: EyeIcon,
            labelArea: `Show details from item with id ${id}`,
            function: handleShowDetails
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
                                tooltipVariant="info"
                                height="40px"
                                width="40px"
                                ariaLabel={button.labelArea}
                                tooltipLabel={button.tooltipLabel}
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