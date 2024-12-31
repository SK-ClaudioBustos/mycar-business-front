import { ButtonProps } from "@components/Content/ButtonsContainer/interfaces";
import "./styles/Button.css";

export const Button = (props: ButtonProps) => {
    const {
        children,
        width,
        height,
        ariaLabel,
        id = null,
        className = "inherit",
        type = "button",
        borderRadius = "5px",
        dropShadow = false,
        onClick = undefined
    } = props;
    return (
        <button
            id={id ?? undefined}
            style={{ "--borderRadius": borderRadius, "--w": `${width}`, "--h": `${height}` } as React.CSSProperties}
            className={dropShadow ? `button box-shadow ${className}` : `button ${className}`}
            onClick={onClick}
            type={type}
            aria-label={ariaLabel}
        >
            {children}
        </button>
    );
}