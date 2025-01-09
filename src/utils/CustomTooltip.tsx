import { ReactNode } from "react";
import { PlacesType, Tooltip, VariantType } from "react-tooltip";
import "./styles/CustomTooltip.css";

interface Props {
    elementId: string;
    content: string;
    children: ReactNode;
    variant?: VariantType;
    place?: PlacesType | undefined;
}

export const CustomTooltip = ({ elementId, content, children, variant="light", place = "bottom" }: Props) => {
    return (
        <>
            {children}
            <Tooltip
                className="tooltip"
                anchorSelect={`#${elementId}`}
                place={place}
                content={content}
                variant={variant}
            />
        </>
    );
}