import { ReactNode } from "react";
import "./styles/Button.css";

interface Props {
    children: ReactNode
    borderRadius?: string
    isDropShadow?: boolean
}

export const Button = ({ children, borderRadius = "5px", isDropShadow = false }: Props) => {
    return (
        <button
            style={{ "--borderRadius": borderRadius } as React.CSSProperties}
            className={isDropShadow ? "button shadow" : "button"}
        >
            {children}
        </button>
    );
}