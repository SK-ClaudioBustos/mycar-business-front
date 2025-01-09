import { VariantType } from "react-tooltip";

export interface ButtonProps {
    children: ReactNode
    height: string;
    width: string;
    ariaLabel: string;
    id?: string | null;
    tooltipVariant?: VariantType;
    className?: string;
    type?: "button" | "reset" | "submit" | undefined;
    borderRadius?: string;
    dropShadow?: boolean;
    onClick?: () => void;
}

export interface ActionButtonProps extends ButtonProps {
    id: string;
    tooltipLabel: string;
}