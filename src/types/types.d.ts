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
    message: string | null;
    isVisible?: boolean;
    type?: TypeAlert | null;
    duration?: number;
}

export type ModalAction = "create" | "edit" | "showDetails" | null;

export interface ModalData {
    showModal: boolean;
    action?: ModalAction,
    title?: string | null;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data?: Record<string, any> | null
}

export type ModalType = ModalData;

export interface TableRowProps {
    item: CarItem
}

