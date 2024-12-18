import { ReactNode } from "react";
import "./styles/Button.css";

interface Props {
    children: ReactNode
    height: string;
    width: string;
    className?: string;
    borderRadius?: string
    isDropShadow?: boolean
}

export const Button = ({ children, width, height, className = "inherit", borderRadius = "5px", isDropShadow = false }: Props) => {
    return (
        <button
            style={{ "--borderRadius": borderRadius, "--w": `${width}px`, "--h": `${height}px` } as React.CSSProperties}
            className={isDropShadow ? `button box-shadow ${className}` : `button ${className}`}
        >
            {children}
        </button>
    );
}