import { Button } from "@utils/Button";
import { CustomTooltip } from "@utils/CustomTooltip";
import { IconSVG } from "@utils/IconSVG";
import { FunctionComponent, SVGProps } from "react";
import "./styles/ActionButton.css";

interface ActionButton {
    id: string;
    tooltipLabel: string;
    Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
    className?: string;
    IconSize?: number;
    height?: string;
    width?: string;
    borderRadius?: string;
    dropShadow?: boolean;
}

export const ActionButton = ({ id, Icon, tooltipLabel, className = "inherit", IconSize = 30, height = "60", width = "60", borderRadius = "0%", dropShadow = false }: ActionButton) => {
    return (
        <CustomTooltip elementId={id} content={tooltipLabel}>
            <Button id={id} height={height} width={width} className={className} borderRadius={borderRadius} dropShadow={dropShadow}>
                <div className="action-button-content">
                    <IconSVG Icon={Icon} size={IconSize} />
                </div>
            </Button>
        </CustomTooltip>
    );
}