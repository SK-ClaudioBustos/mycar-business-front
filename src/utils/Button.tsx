import { ReactNode } from "react";
import "./styles/Button.css";

interface Props {
    children: ReactNode
    height: string;
    width: string;
    id?: string | null;
    className?: string;
    borderRadius?: string
    dropShadow?: boolean
}

export const Button = ({ children, width, height, id = null, className = "inherit", borderRadius = "5px", dropShadow = false }: Props) => {
    return (
        <button
            id={id ?? undefined}
            style={{ "--borderRadius": borderRadius, "--w": `${width}px`, "--h": `${height}px` } as React.CSSProperties}
            className={dropShadow ? `button box-shadow ${className}` : `button ${className}`}
        >
            {children}
        </button>
    );
}