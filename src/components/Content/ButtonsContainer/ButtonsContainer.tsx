import PlusIcon from "@icons/plus.svg?react";
import RefreshIcon from "@icons/refresh.svg?react";
import { useModalStorage } from "@store/modal.store";
import { ButtonData } from "@type/types";
import { IconSVG } from "@utils/IconSVG";
import { ActionButton } from "./ActionButton";
import "./styles/ButtonsContainer.css";
import { useTableContext } from "@context/table.context";
import { useLocation } from "react-router";

export const ButtonsContainer = () => {
    const { fetchRows } = useTableContext();
    const setShowModal = useModalStorage((state) => state.setShowModal);
    const pathname = useLocation().pathname;
    const handleRefresh = () => {
        fetchRows();
    }

    const handleAdd = () => {
        setShowModal({
            showModal: true,
            action: "create",
            title: "Add Item",
            data: null,
            width: pathname === "/cars" ? "450px" : "900px" 
        });
    }

    const BUTTONS: ButtonData[] = [
        {
            id: "refresh",
            tooltipLabel: "Refresh",
            Icon: RefreshIcon,
            labelArea: "Refresh rows on table",
            function: handleRefresh
        },
        {
            id: "Add",
            tooltipLabel: "Add",
            Icon: PlusIcon,
            labelArea: "Add a new item into the table",
            function: handleAdd
        }
    ];

    return (
        <div className="button-container">
            {
                BUTTONS.map((button) => (
                    <ActionButton
                        key={button.id}
                        id={button.id}
                        tooltipVariant="light"
                        height="60px"
                        width="60px"
                        ariaLabel={button.labelArea}
                        onClick={button.function}
                        className="bg-white"
                        borderRadius="10%"
                        tooltipLabel={button.tooltipLabel}
                        dropShadow
                    >
                        <IconSVG Icon={button.Icon} size={30} />
                    </ActionButton>
                ))
            }
        </div>
    );
}