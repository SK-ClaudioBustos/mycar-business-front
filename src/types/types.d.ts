export type ErrorData = Error | null;

export interface NavItemData {
    section: string,
    label: string
}

export interface ButtonData {
    id: string;
    tooltipLabel: string;
    labelArea: string;
    Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
    function?: () => void;
}

export type TypeAlert = "success" | "error" | "none";

export interface AlertData {
    isVisible: boolean;
    message: string | null;
    type?: TypeAlert | null;
    duration?: number;
}

