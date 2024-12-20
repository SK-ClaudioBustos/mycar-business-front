import PlusIcon from "@icons/plus.svg?react";
import RefreshIcon from "@icons/refresh.svg?react";
import { ActionButton } from "./ActionButton";
import "./styles/ButtonsContainer.css";
import { ButtonData } from "@type/types";

const BUTTONS: ButtonData[] = [
    {
        id: "edit-button",
        tooltipLabel: "Edit",
        Icon: RefreshIcon
    },
    {
        id: "delete",
        tooltipLabel: "Delete",
        Icon: PlusIcon
    }
];

export const ButtonsContainer = () => {
    return (
        <div className="button-container">
            {
                BUTTONS.map((button) => (
                    <ActionButton key={button.id} className="background-white" borderRadius="10%" tooltipLabel={button.tooltipLabel} id={button.id} Icon={button.Icon} dropShadow />
                ))
            }
        </div>
    );
}