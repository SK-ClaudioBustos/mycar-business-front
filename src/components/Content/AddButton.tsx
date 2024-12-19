import PlusIcon from "@icons/plus.svg?react";
import { Button } from "@utils/Button";
import { IconSVG } from "@utils/IconSVG";
import "./styles/AddButton.css";

export const AddButton = ({ label }: { label: string }) => {
    return (
        <div className="button-container">
            <Button height="60" width="120" className="background-white" isDropShadow>
                <div className="add-button-content">
                    <span>
                        {label}
                    </span>
                    <IconSVG Icon={PlusIcon} size={30} />
                </div>
            </Button>
        </div>
    );
}