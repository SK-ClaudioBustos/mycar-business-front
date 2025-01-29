import { FunctionComponent, ReactNode, SVGProps } from "react";
import { IssueItem } from "./issue";
import { CarItem } from "./car";

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

export type ModalAction = "create" | "edit" | "delete" | "showDetails";

export interface ModalData {
    showModal: boolean;
    action?: ModalAction,
    title?: string | null;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data?: Record<string, any> | null,
    width?: string,
}

export type ModalType = ModalData;

export interface TableRowProps {
    item: CarItem | IssueItem
}

export enum AppRoutes {
    CARS = "/cars",
    ISSUES = "/issues"
};

export type SectionMap = Record<AppRoutes, ReactNode>;
