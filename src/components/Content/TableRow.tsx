import EyeIcon from "@icons/eye.svg?react";
import PencilIcon from "@icons/pencil.svg?react";
import TrashIcon from "@icons/trash.svg?react";
import { Car } from "@type/types";
import { ActionButton } from "./ButtonsContainer/ActionButton";
import "./styles/TableRow.css";

interface Props {
    car: Car
}

const BUTTONS = [
    {
        idPrefix: "edit-button",
        content: "Edit",
        Icon: PencilIcon
    },
    {
        idPrefix: "delete",
        content: "Delete",
        Icon: TrashIcon
    },
    {
        idPrefix: "details",
        content: "Show Details",
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
                        const idButton = `${button.idPrefix}-${id}`;
                        return (
                            (
                                <ActionButton
                                    key={idButton}
                                    id={idButton}
                                    tooltipLabel={button.content}
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