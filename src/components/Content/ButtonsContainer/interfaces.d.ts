export interface ButtonProps {
    children: ReactNode
    height: string;
    width: string;
    id?: string | null;
    className?: string;
    borderRadius?: string;
    dropShadow?: boolean;
    onClick?: () => void;
}

export interface ActionButtonProps extends ButtonProps {
    id: string;
    tooltipLabel: string;
}