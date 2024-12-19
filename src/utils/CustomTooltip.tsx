import { ReactNode } from "react";
import { PlacesType, Tooltip } from "react-tooltip";
import "./styles/CustomTooltip.css";

interface Props {
    elementId: string;
    content: string;
    children: ReactNode
    place?: PlacesType | undefined;
}

export const CustomTooltip = ({ elementId, content, children, place = "bottom" }: Props) => {
    return (
        <>
            {children}
            <Tooltip
                className="tooltip"
                anchorSelect={`#${elementId}`}
                place={place}
                content={content}
                variant="light"
            />
        </>
    );
}