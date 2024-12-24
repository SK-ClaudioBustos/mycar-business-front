import { ButtonProps } from "@components/Content/ButtonsContainer/interfaces";
import "./styles/Button.css";

export const Button = (props: ButtonProps) => {
    const {
        children,
        width,
        height,
        id = null,
        className = "inherit",
        borderRadius = "5px",
        dropShadow = false,
        onClick = undefined
    } = props;
    return (
        <button
            id={id ?? undefined}
            style={{ "--borderRadius": borderRadius, "--w": `${width}px`, "--h": `${height}px` } as React.CSSProperties}
            className={dropShadow ? `button box-shadow ${className}` : `button ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}