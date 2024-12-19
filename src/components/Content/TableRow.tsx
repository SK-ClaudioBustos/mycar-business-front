import EyeIcon from "@icons/eye.svg?react";
import PencilIcon from "@icons/pencil.svg?react";
import TrashIcon from "@icons/trash.svg?react";
import { Car } from "@type/types";
import { Button } from "@utils/Button";
import { CustomTooltip } from "@utils/CustomTooltip";
import { IconSVG } from "@utils/IconSVG";
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
                                <CustomTooltip elementId={idButton} content={button.content}>
                                    <Button
                                        id={idButton}
                                        height="50" width="50" borderRadius="50%">
                                        <IconSVG Icon={button.Icon} size={24} />
                                    </Button>
                                </CustomTooltip>
                            )
                        );
                    })
                }
            </div>
        </div>
    );
}