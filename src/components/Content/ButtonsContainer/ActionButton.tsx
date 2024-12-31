import { Button } from "@utils/Button";
import { CustomTooltip } from "@utils/CustomTooltip";
import { ActionButtonProps } from "./interfaces";
import "./styles/ActionButton.css";

export const ActionButton = (props: ActionButtonProps) => {
    const {
        id,
        onClick,
        children,
        tooltipLabel,
        ariaLabel,
        height = "60px",
        width = "60px",
        className = "inherit",
        borderRadius = "0%",
        dropShadow = false,
    } = props;
    return (
        <CustomTooltip elementId={id} content={tooltipLabel}>
            <Button
                id={id}
                ariaLabel={ariaLabel}
                height={height}
                width={width}
                className={className}
                borderRadius={borderRadius}
                dropShadow={dropShadow}
                onClick={onClick}
            >
                <div className="action-button-content">
                    {children}
                </div>
            </Button>
        </CustomTooltip>
    );
}