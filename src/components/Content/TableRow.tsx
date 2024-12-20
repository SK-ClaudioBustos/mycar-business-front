import EyeIcon from "@icons/eye.svg?react";
import PencilIcon from "@icons/pencil.svg?react";
import TrashIcon from "@icons/trash.svg?react";
import { ButtonData, Car } from "@type/types";
import { ActionButton } from "./ButtonsContainer/ActionButton";
import "./styles/TableRow.css";

interface Props {
    car: Car
}

const BUTTONS: ButtonData[] = [
    {
        id: "edit-button",
        tooltipLabel: "Edit",
        Icon: PencilIcon
    },
    {
        id: "delete",
        tooltipLabel: "Delete",
        Icon: TrashIcon
    },
    {
        id: "details",
        tooltipLabel: "Show Details",
        Icon: EyeIcon
    }
];

export const TableRow = ({ car }: Props) => {
    const { id, company, model, KM } = car;
    return (
        <div className="table-row">
            <span>
                {company}
            </span>
            <span>
                {model}
            </span>
            <span>
                {KM}
            </span>
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
                                    height="50" width="50"
                                    borderRadius="50%"
                                    Icon={button.Icon}
                                    IconSize={24}
                                />
                            )
                        );
                    })
                }
            </div>
        </div>
    );
}