export type ErrorData = Error | null;

export interface NavItemData {
    section: string,
    label: string
}

export interface Car {
    id: string;
    company: string;
    model: string;
    KM: number;
} 

export interface ButtonData {
    id: string;
    tooltipLabel: string;
    Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
}