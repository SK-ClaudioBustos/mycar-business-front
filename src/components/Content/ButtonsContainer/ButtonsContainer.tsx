import PlusIcon from "@icons/plus.svg?react";
import RefreshIcon from "@icons/refresh.svg?react";
import { ActionButton } from "./ActionButton";
import "./styles/ButtonsContainer.css";

export const ButtonsContainer = () => {
    return (
        <div className="button-container">
            <ActionButton className="background-white" tooltipLabel="Refresh" id="refresh-button" Icon={RefreshIcon} dropShadow />
            <ActionButton className="background-white" tooltipLabel="Add" id="add-button" Icon={PlusIcon} dropShadow />
        </div>
    );
}